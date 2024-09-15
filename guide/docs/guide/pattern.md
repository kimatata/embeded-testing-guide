---
sidebar_position: 1
---

# 単体テストの手法

一般にテストコードは以下の3つのパターンで期待値チェックを行う。

- 出力値ベーステスト
- 状態ベーステスト
- コミュニケーションテスト

## 出力値ベーステスト

テスト対象のコードが返す結果だけを検証する。テスト対象のコードが副作用がないことが前提。

```c title="出力値ベーステスト"
TEST(calcElapsedFreeCount, オーバーフローしても正しく経過時間を計算できる) {
  uint32_t startCount = 0xffffffff;
  uint32_t currentCount = 0x9;
  EXPECT_EQ(10, TrpSensing_calcElapsedFreeCount(startCount, currentCount));
}
```

## 状態ベーステスト

テスト対象コードが実行された後の状態（メンバ変数）を確認する。出力値ベーステストにくらべ複雑になる。

## コミュニケーションテスト

テスト対象コードが別の関数/APIをただしく呼び出すことを確認する。モックやスパイを使う必要があるため実装コストが高い。
