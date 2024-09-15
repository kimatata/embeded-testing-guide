---
sidebar_position: 1
---

# 単体テストの手法

一般的にテストコードは以下の3つのパターンで期待値チェックを行います。

- 出力値ベーステスト
- 状態ベーステスト
- コミュニケーションテスト

## 出力値ベーステスト

テスト対象のコードが返す値が期待値と同じかどうか検証します。一番シンプルで書きやすいですが、テスト対象のコードが副作用がないことが前提です。


```c title="出力値ベーステスト"
TEST(calcElapsedFreeCount, オーバーフローしても正しく経過時間を計算できる) {
    uint32_t startCount = 0xffffffff;
    uint32_t currentCount = 0x9;
    EXPECT_EQ(10, TrpSensing_calcElapsedFreeCount(startCount, currentCount));
}
```

## 状態ベーステスト

テスト対象コードが実行された後の状態（メンバ変数）を確認します。出力値ベーステストにくらべ少し複雑です。c言語だと以下のような感じです。

```c title="プロダクトコード couter.h"
#ifndef COUNTER_H
#define COUNTER_H

typedef struct {
    int value;
} Counter;

void initCounter(Counter* counter);
void incrementCounter(Counter* counter);
int getCounterValue(Counter* counter);

#endif // COUNTER_H
```

```c title="プロダクトコード couter.c"
#include "counter.h"

void initCounter(Counter* counter) {
    counter->value = 0;
}

void incrementCounter(Counter* counter) {
    counter->value++;
}

int getCounterValue(Counter* counter) {
    return counter->value;
}
```

```c title="テストコード testCounter.c"
TEST(CounterTest, カウンターの初期値は0) {
    Counter counter;
    initCounter(&counter);
    EXPECT_EQ(getCounterValue(&counter), 0);
}

TEST(CounterTest, カウンター値が増える) {
    Counter counter;
    initCounter(&counter);
    incrementCounter(&counter);
    EXPECT_EQ(getCounterValue(&counter), 1);
}
```

オブジェクト指向のクラスのメンバ変数の値を確認する感じです。

## コミュニケーションテスト

テスト対象コードが別の関数やAPIを正しく呼び出すことを確認します。モックやスパイを使う必要があるため実装コストが高いです。
詳細は[後述](methods/mock.md)します。
