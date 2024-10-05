---
sidebar_position: 6
---

# 関数ポインタによる置き換え

単一のテストスイート実行ファイル内で、プロダクトコードとテストダブルをテストケースごとに使い分けたい時があります。その場合は「関数ポインタによる置き換え」を使います。

:::caution

コードが読みづらくなるのでプロダクトコードとテストダブルを使い分ける必要ががないときは「リンカで置き換え」を使いましょう

:::

## 関数ポインタの切り替え方法

ファイルをUSBドライブに書き込むキューを登録するための以下のような関数があります。

```c title="関数宣言(変更前)"
void FileCtrl_EnQueue(ST_QUEUE_ELEMENT* el)
```

プロダクトコード`FileCtrl_EnQueue_Real`とテストダブル`FileCtrl_EnQueue_Mock`を使い分けるために関数宣言を関数ポインタの宣言に書き換えます。

```c title="関数宣言(変更後)"
extern void (*FileCtrl_EnQueue)(ST_QUEUE_ELEMENT* el);
```

プロダクトコードの関数ポインタ`FileCtrl_EnQueue_Real`を`FileCtrl_EnQueue`に代入することで`FileCtrl_EnQueue()`の呼び出しを`FileCtrl_EnQueue_Real()`の呼び出しにルーティングさせます。

```c title="プロダクトコード FileManager.c"
void FileCtrl_EnQueue_Real(ST_QUEUE_ELEMENT* el) {
    // 実際のマイコンで動作する処理
}
void (*FileCtrl_EnQueue)(ST_QUEUE_ELEMENT* el) = FileCtrl_EnQueue_Real;
```

テストダブル`FileCtrl_EnQueue_Mock`を使いたいテストケースでは`FileCtrl_EnQueue`にテストダブルを参照する関数ポインタ`FileCtrl_EnQueue_Mock`を代入し、テストケースの後処理で元の参照に戻しておくことでそのテストケースでだけ`FileCtrl_EnQueue_Mock`を使うことができます。

```c title="FileCtrl_EnQueueを使いたいテストケース"
void FileCtrl_EnQueue_Mock(ST_QUEUE_ELEMENT* el) {
    // テストダブルの処理
}

TEST_F(TestLogSave, FileCtrl_EnQueueをつかったテストケース) {

void (*FileCtrl_EnQueue_Saved)(ST_QUEUE_ELEMENT* el);
    // 前処理
    FileCtrl_EnQueue_Saved = FileCtrl_EnQueue;
    FileCtrl_EnQueue = FileCtrl_EnQueue_Mock;

    // FileCtrl_EnQueue_Mockを使った任意の期待値チェック
    // ..

    // 後処理
    FileCtrl_EnQueue = FileCtrl_EnQueue_Saved;
}
```

:::info[GoogleTestでのTips]

GoogleTestであるテストファイル内で`FileCtrl_EnQueue_Mock`を使いたい場合、以下のように`SetUp()`を定義しておくと
各テストケース毎にポインタの代入を行う必要がなくなり、テストが読みやすくなるので便利です。

```c title="テストコード テストクラス"
class TestLogSave: public ::testing::Test {
  protected:
    void (*FileCtrl_EnQueue_Saved)(ST_QUEUE_ELEMENT* el);

    void SetUp() override {
        // FileCtrl_EnQueueはモック(FileCtrl_EnQueue_Mock)を使用する
        FileCtrl_EnQueue_Saved = FileCtrl_EnQueue;
        FileCtrl_EnQueue = FileCtrl_EnQueue_Mock;
    }

    void TearDown() override {
        // FileCtrl_EnQueueをプロダクトコード(FileCtrl_EnQueue_Real)の参照に戻す
        FileCtrl_EnQueue = FileCtrl_EnQueue_Saved;
    }
};

```c title="テストコード テストケース"
TEST_F(TestLogSave, FileCtrl_EnQueueをつかったテストケース) {
  // 略
}
```

:::
