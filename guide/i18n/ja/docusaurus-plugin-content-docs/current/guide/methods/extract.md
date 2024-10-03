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

```c title="ledData.h"
#define LED_COLOR_RED 0
#define LED_COLOR_GREEN 1
#define LED_COLOR_BLUE 2

typedef struct {
    uint8_t isUsed : 1;
    uint8_t brightness : 7;
    uint8_t color;
    uint8_t ledNo;
} ST_LED_INFO;
```

このデータをEEPROMからRAMに読み出し、青色で最も明るいLEDの番号を取得する関数があります。

```c title="ledData.c"
int8_t LedData_GetBrightestBlueLedNo(ST_LED_INFO* pList) {
    // read data from ROM to RAM
    eeprom_read_block((void *)&ledInfoRecords[0], (const void *)eepromLedInfoRecords, LED_INFO_NUM * sizeof(ST_LED_INFO));

    // find brightest blue led
    int8_t brightestLedNo = -1;
    uint8_t maxBrightness = 0;
    for (uint8_t i = 0; i < LED_INFO_NUM; i++) {
        if (ledInfoRecords[i].isUsed == 1 && ledInfoRecords[i].color == LED_COLOR_BLUE) {
            if (ledInfoRecords[i].brightness > maxBrightness) {
                maxBrightness = ledInfoRecords[i].brightness;
                brightestLedNo = ledInfoRecords[i].ledNo;
            }
        }
    }

    return brightestLedNo;
}
```

`eeprom_read_block()`はEEPROMからデータを読み出す関数であり、プラットフォーム固有のものです。つまり、組み込み基板上でのみ動作します。`eeprom_read_block()`が含まれているせいで`ledData.c`に対してテスト環境ではビルドができず、テストが実行できません。

### テストが可能な状態

先ほどの状態ではプラットフォーム固有な関数を含んでいるためテスト環境でビルド、実行できませんでした。
そこで、テストしたい部分、とくに複雑でバグが出やすいロジック部分を別ファイルに抽出することにします。

```c title="ledData.c"
int8_t LedData_GetBrightestBlueLedNo(ST_LED_INFO* pList) {
    // read data from ROM to RAM
    eeprom_read_block((void *)&ledInfoRecords[0], (const void *)eepromLedInfoRecords, LED_INFO_NUM * sizeof(ST_LED_INFO));

    // find brightest blue led
    // highlight-next-line
    int8_t ret = LedImpl_GetBrightestBlueLedNo(ledInfoRecords, LED_INFO_NUM);

    return ret;
}
```

```c title="ledDataImpl.c"
int8_t LedImpl_GetBrightestBlueLedNo(ST_LED_INFO ledInfoRecords[], uint8_t size) {
    int8_t brightestLedNo = -1;
    uint8_t maxBrightness = 0;
    for (uint8_t i = 0; i < size; i++) {
        if (ledInfoRecords[i].isUsed == 1 && ledInfoRecords[i].color == LED_COLOR_BLUE) {
            if (ledInfoRecords[i].brightness > maxBrightness) {
                maxBrightness = ledInfoRecords[i].brightness;
                brightestLedNo = ledInfoRecords[i].ledNo;
            }
        }
    }

    return brightestLedNo
}
```

`ledDataImpl.c`にはプラットフォーム固有の関数やAPIがないためテスト環境で動かすことができます。以下は`ledDataImpl.c`に対するテストコードです。

```c title="テストコード testLedDataImpl.cpp"
TEST(ledCtrlImpl, 最も明るい青色LEDのledNoを取得) {
    const ST_LED_INFO ledInfoRecords[5] = {
        {1, 100, LED_COLOR_BLUE, 0},
        {1, 120, LED_COLOR_RED, 1},
        {1, 90,  LED_COLOR_BLUE, 2},
        {0, 150, LED_COLOR_BLUE, 3},
        {1, 150, LED_COLOR_BLUE, 4}
    };

    int8_t ret = LedCtrlImpl_GetBrightestBlueLedNo(ledInfoRecords, 5);
    EXPECT_EQ(4, ret);
}

TEST(ledCtrlImpl, 使用している青色LEDが一つもなければNoはマイナスになる) {
    const ST_LED_INFO ledInfoRecords[4] = {
        {1, 100, LED_COLOR_GREEN, 0},
        {1, 120, LED_COLOR_RED, 1},
        {1, 90,  LED_COLOR_GREEN, 2},
        {0, 150, LED_COLOR_BLUE, 3},
    };

    int8_t ret = LedCtrlImpl_GetBrightestBlueLedNo(ledInfoRecords, 4);
    EXPECT_EQ(-1, ret);
}
```

バグの発生は複雑なロジックから発生することが多いため、これは十分実践的な方法だと思います。`ledData.c`に対するテストはありませんが、`ledData.c`は単純で変更もそれほど多くはないと思われるためテストコードを書いて得られるリターンはそれほど多くないでしょう。
