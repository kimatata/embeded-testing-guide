---
sidebar_position: 2
---

# ロジックの抽出

テストが導入されていない既存のプロダクトコードはテストを念頭に作られていないため、ほとんど出力値ベーステストはできないと思われます。モックを使うことでプロダクトコードを変更せずにテストを書くことは可能ですが、モックを用いたテストコードは複雑になりがちです。

無理にモックを使うより出力値ベーステストできるようプロダクトコードをリファクタリングすることを検討してみてください。

:::info

テスト可能なコード　=　疎結合でわかりやすいコード

:::

## リファクタリング

組み込みソフトウェアのコードはロジックとハードウェアへの指令により構成されています。ロジックとハードウェア指令がうまく分離されていれば良いですが、納期に追われとりあえず動くソフトを作らなければならない状況で書かれたコードはおそらくロジックとハードウェアヘの指令が入り混じっていることでしょう。

出力値ベーステストを可能にするためこの密結合したコードをリファクタリングし、ロジック部分を抽出します。抽出したコードはハードウェアへの依存がないため簡単にビルド、テストすることができます。

### テストが難しい状態

各LEDの状態を示す構造体`ST_LED_INFO`の配列をEEPROMに保存しているある組み込み製品があったとします。

```c title="ledCtrl.h"
#ifndef LED_DATA_H
#define LED_DATA_H

#include "../board/board.h"

#define LED_INFO_NUM 10
#define LED_COLOR_RED 0
#define LED_COLOR_GREEN 1
#define LED_COLOR_BLUE 2

typedef struct {
    uint8_t ledNo;
    uint8_t isOn;       // 0: OFF, 1: ON
    uint8_t brightness; // 0 (dark) - 255 (bright)
    uint8_t color;      // red, green, blue
} ST_LED_INFO;

int8_t LedCtrl_GetBrightestBlueLedNo(ST_LED_INFO *pList);
void LedCtrl_TurnOnRedLedsOnly(void);
ST_LED_INFO *LedCtrl_GetCurrentLedState(void);
uint8_t LedCtrl_GetLedNum(void);

#endif /* LED_DATA_H */
```

このデータをEEPROMからRAMに読み出し、青色で最も明るいLEDの番号を取得する関数があります。

```c title="ledCtrl.c"
int8_t LedCtrl_GetBrightestBlueLedNo(ST_LED_INFO *pList) {
    // read data from ROM to RAM
    eepromReadBlock((void *)&ledInfoRecords[0],
                    (const void *)eepromLedInfoRecords,
                    LED_INFO_NUM * sizeof(ST_LED_INFO));

    // find brightest blue led
    int8_t brightestLedNo = -1;
    uint8_t maxBrightness = 0;
    for (uint8_t i = 0; i < LED_INFO_NUM; i++) {
        if (ledInfoRecords[i].color == LED_COLOR_BLUE) {
            if (ledInfoRecords[i].brightness > maxBrightness) {
                maxBrightness = ledInfoRecords[i].brightness;
                brightestLedNo = ledInfoRecords[i].ledNo;
            }
        }
    }

    return ret;
}
```

`eepromReadBlock()`はEEPROMからデータを読み出す関数であり、プラットフォーム固有のものです。つまり、組み込み基板上でのみ動作します。`eepromReadBlock()`が含まれているせいで`ledCtrl.c`に対してテスト環境ではビルドができず、テストが実行できません。

### テストが可能な状態

先ほどの状態ではプラットフォーム固有な関数を含んでいるためテスト環境でビルド、実行できませんでした。
そこで、テストしたい部分、とくに複雑でバグが出やすいロジック部分を別ファイルに抽出することにします。

```c title="ledCtrl.c"
int8_t LedCtrl_GetBrightestBlueLedNo(ST_LED_INFO *pList) {
    // read data from ROM to RAM
    eepromReadBlock((void *)&ledInfoRecords[0],
                    (const void *)eepromLedInfoRecords,
                    LED_INFO_NUM * sizeof(ST_LED_INFO));

    // find brightest blue led
    // highlight-next-line
    int8_t ret = LedImpl_GetBrightestBlueLedNo(ledInfoRecords, LED_INFO_NUM);

    return ret;
}
```

```c title="ledImpl.c"
int8_t LedImpl_GetBrightestBlueLedNo(ST_LED_INFO ledInfoRecords[],
                                     uint8_t size) {
    int8_t brightestLedNo = -1;
    uint8_t maxBrightness = 0;
    for (uint8_t i = 0; i < size; i++) {
        if (ledInfoRecords[i].color == LED_COLOR_BLUE) {
            if (ledInfoRecords[i].brightness > maxBrightness) {
                maxBrightness = ledInfoRecords[i].brightness;
                brightestLedNo = ledInfoRecords[i].ledNo;
            }
        }
    }

    return brightestLedNo;
}
```

`ledImpl.c`にはプラットフォーム固有の関数やAPIがないためテスト環境で動かすことができます。以下は`ledImpl.c`に対するテストコードです。

```c title="テストコード testLedImpl.cpp"
TEST(ledImpl, 最も明るい青色LEDのledNoを取得) {
    ST_LED_INFO ledInfoRecords[5] = {
        {1, 1, 100, LED_COLOR_BLUE}, // {ledNo, isOn, brightness, color}
        {2, 1, 170, LED_COLOR_RED},  // {ledNo, isOn, brightness, color}
        {3, 1, 90, LED_COLOR_BLUE},  // {ledNo, isOn, brightness, color}
        {4, 1, 150, LED_COLOR_BLUE}, // {ledNo, isOn, brightness, color}
        {5, 1, 130, LED_COLOR_BLUE}, // {ledNo, isOn, brightness, color}
    };

    int8_t ret = LedImpl_GetBrightestBlueLedNo(ledInfoRecords, 5);
    EXPECT_EQ(4, ret);
}

TEST(ledImpl, 青色LEDが一つもなければNoはマイナスになる) {
    ST_LED_INFO ledInfoRecords[4] = {
        {1, 1, 100, LED_COLOR_RED},   // {ledNo, isOn, brightness, color}
        {2, 1, 170, LED_COLOR_RED},   // {ledNo, isOn, brightness, color}
        {3, 1, 90, LED_COLOR_GREEN},  // {ledNo, isOn, brightness, color}
        {4, 1, 150, LED_COLOR_GREEN}, // {ledNo, isOn, brightness, color}
    };

    int8_t ret = LedImpl_GetBrightestBlueLedNo(ledInfoRecords, 4);
    EXPECT_EQ(-1, ret);
}
```

バグの発生は複雑なロジックから発生することが多いため、これは十分実践的な方法だと思います。`ledCtrl.c`に対するテストはありませんが、`ledCtrl.c`は単純で変更もそれほど多くはないと思われるためテストコードを書いて得られるリターンはそれほど多くないでしょう。
