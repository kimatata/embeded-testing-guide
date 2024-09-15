---
sidebar_position: 5
---

# 関数ポインタによる置き換え

単一のテストスイート実行ファイル内で、プロダクトコードとテストダブルをテストケースごとに使い分けたい時がある。
その場合は「関数ポインタによる置き換え」を使う必要がある。

:::caution

コードが読みづらくなるのでプロダクトコードとテストダブルを使い分ける必要ががないときは「リンカで置き換え」を使ったほうがよい。

:::

## 関数ポインタの切り替え方法

ファイルをUSBに書き込むキューを登録するための以下のような関数がある。

```c title="関数宣言(変更前)"
void FileManager_EnQueue(ST_QUEUE_ELEMENT* el)
```

プロダクトコード`FileManager_EnQueue_Real`とテストダブル`FileManager_EnQueue_Mock`を使い分けるために
関数宣言を関数ポインタの宣言に書き換える。

```c title="関数宣言(変更後)"
extern void (*FileManager_EnQueue)(ST_QUEUE_ELEMENT* el);
```

プロダクトコードの関数ポインタ`FileManager_EnQueue_Real`を`FileManager_EnQueue`に代入することで
`FileManager_EnQueue()`の呼び出しを`FileManager_EnQueue_Real()`の呼び出しにルーティングさせる。

```c title="プロダクトコード FileManager.c"
void FileManager_EnQueue_Real(ST_QUEUE_ELEMENT* el) {
    // 実際のマイコンで動作する処理
}
void (*FileManager_EnQueue)(ST_QUEUE_ELEMENT* el) = FileManager_EnQueue_Real;
```

テストダブル`FileManager_EnQueue_Mock`を使いたいテストケースでは
`FileManager_EnQueue`にテストダブルを参照する関数ポインタ`FileManager_EnQueue_Mock`を代入し,
テストケースの後処理で元の参照に戻しておくことでそのテストケースでだけ`FileManager_EnQueue_Mock`を使うことができる。

```c title="FileManager_EnQueueを使いたいテストケース"
void FileManager_EnQueue_Mock(ST_QUEUE_ELEMENT* el) {
    // テストダブルの処理
}


TEST_F(TestLogSave, FileManager_EnQueueをつかったテストケース) {

void (*FileManager_EnQueue_Saved)(ST_QUEUE_ELEMENT* el);
  // 前処理
  FileManager_EnQueue_Saved = FileManager_EnQueue;
  FileManager_EnQueue = FileManager_EnQueue_Mock;

  // FileManager_EnQueue_Mockを使った任意の期待値チェック
  // ..

  // 後処理
  FileManager_EnQueue = FileManager_EnQueue_Saved;
}
```

## GoogleTestでのTips

GoogleTestであるテストファイル内で`FileManager_EnQueue_Mock`を使いたい場合、以下のように`SetUp()`を定義しておくと
各テストケース毎にポインタの代入を行う必要がなくなり、テストが読みやすくなる。

```c title="テストコード テストクラス"
class TestLogSave: public ::testing::Test {
  protected:
    void (*FileManager_EnQueue_Saved)(ST_QUEUE_ELEMENT* el);

    void SetUp() override {
        // FileManager_EnQueueはモック(FileManager_EnQueue_Mock)を使用する
        FileManager_EnQueue_Saved = FileManager_EnQueue;
        FileManager_EnQueue = FileManager_EnQueue_Mock;
    }

    void TearDown() override {
        // FileManager_EnQueueをプロダクトコード(FileManager_EnQueue_Real)の参照に戻す
        FileManager_EnQueue = FileManager_EnQueue_Saved;
    }
};
```

```c title="テストコード テストケース"
TEST_F(TestLogSave, FileManager_EnQueueをつかったテストケース) {
  // 略
}
```
