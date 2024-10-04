---
sidebar_position: 1
---

# 単体テストの手法

一般的にテストコードは以下の3つのパターンで期待値チェックを行います。

- 出力値ベーステスト
- 状態ベーステスト
- コミュニケーションベーステスト

## 出力値ベーステスト

テスト対象のコードが返す値が期待値と同じかどうか検証します。一番シンプルで書きやすいですが、テスト対象のコードが副作用がないことが前提です。

```c title="出力値ベーステスト"
TEST(Counter, オーバーフローしても正しく経過カウントを計算できる) {
    uint32_t startValue = 0xffffffff;
    uint32_t currentValue = 0x9;
    EXPECT_EQ(10, Counter_GetElapsedCount(startValue, currentValue));
}
```

## 状態ベーステスト

テスト対象コードが実行された後の状態（メンバ変数）を確認します。出力値ベーステストにくらべ少し複雑です。c言語だと以下のような感じです。

```c title="プロダクトコード couter.h"
#ifndef COUNTER_H
#define COUNTER_H

#include "../board/board.h"

typedef struct {
    uint32_t value;
    uint32_t overflowCount;
} Counter;

void Counter_Init(Counter *counter);
void Counter_Update(Counter *counter);
uint32_t Counter_GetValue(Counter *counter);
uint32_t Counter_GetOverflowCount(Counter *counter);
void Counter_Reset(Counter *counter);
uint32_t Counter_GetElapsedCount(uint32_t startValue, uint32_t currentValue);

#endif // COUNTER_H

```

```c title="プロダクトコード couter.c"
#include "counter.h"

void Counter_Init(Counter *counter) {
    counter->value = 0;
    counter->overflowCount = 0;
}

void Counter_Update(Counter *counter) {
    counter->value++;

    // オーバーフローしたとき
    if (counter->value == 0) {
        counter->overflowCount++;
    }
}

void Counter_Reset(Counter *counter) {
    counter->value = 0;
    counter->overflowCount = 0;
}

uint32_t Counter_GetValue(Counter *counter) {
    return counter->value;
}

uint32_t Counter_GetOverflowCount(Counter *counter) {
    return counter->overflowCount;
}

uint32_t Counter_GetElapsedCount(uint32_t startValue, uint32_t currentValue) {
    return currentValue - startValue;
}
```

```c title="テストコード testCounter.c"
TEST(Counter, カウンターが初期化されること) {
    Counter counter;
    Counter_Init(&counter);
    EXPECT_EQ(Counter_GetValue(&counter), 0);
    EXPECT_EQ(Counter_GetOverflowCount(&counter), 0);
}

TEST(Counter, カウンター値が増えること) {
    Counter counter;
    Counter_Init(&counter);
    Counter_Update(&counter);
    EXPECT_EQ(Counter_GetValue(&counter), 1);
}

TEST(Counter, オーバーフローカウントが増えること) {
    Counter counter;
    Counter_Init(&counter);

    counter.value = UINT32_MAX - 1;
    Counter_Update(&counter);
    EXPECT_EQ(Counter_GetValue(&counter), UINT32_MAX);
    EXPECT_EQ(Counter_GetOverflowCount(&counter), 0);

    // オーバーフローさせる
    Counter_Update(&counter);
    EXPECT_EQ(Counter_GetValue(&counter), 0);
    EXPECT_EQ(Counter_GetOverflowCount(&counter), 1); // オーバーフローカウントが1になる
}
```

オブジェクト指向でいうとクラスのメンバ変数の値を後から確認するイメージです。

## コミュニケーションベーステスト

テスト対象コードが別の関数やAPIを正しく呼び出すことを確認します。呼び出し先をモックやスパイに置き換えることで検証を行います。
実装は複雑になり、テストコードも長くなります。

![./img/communicationTest.svg](../../../../../docs/guide/img/communicationTest.svg)
