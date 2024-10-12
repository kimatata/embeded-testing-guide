---
sidebar_position: 4
---

# リンカによる置き換え

ビルド時にプロダクトコードの代わりにテスト用のコードをリンクさせる方法。プロダクトコードが汚れず、簡単なのでできるだけこの方法を採用するのが良いです。

例：基板上でしか動作しない`Led_ON()`, `Led_OFF()`が含まれたプロダクトコードをテストしたい場合

```c title="プロダクトコード ledCtrl.c"
#include "ledCtrl.h"

static ST_LED_INFO ledInfoRecords[LED_INFO_NUM];

void LedCtrl_TurnOnRedLedsOnly(void) {
    // Turn off all LEDs
    for (uint8_t i = 0; i < LED_INFO_NUM; i++) {
        if (ledInfoRecords[i].isOn == 1) {
            Led_OFF(ledInfoRecords[i].ledNo);
            ledInfoRecords[i].isOn = 0;
        }
    }

    // Turn on red LEDs
    for (uint8_t i = 0; i < LED_INFO_NUM; i++) {
        if (ledInfoRecords[i].color == LED_COLOR_RED) {
            Led_ON(ledInfoRecords[i].ledNo);
            ledInfoRecords[i].isOn = 1;
        }
    }
}
```

```c title="プロダクトコード led.c"
static uint8_t led_value;
static volatile uint8_t *ledResisterAdr;

void Led_ON(uint8_t ledNo) {
    led_value = led_value | (1 << ledNo);
    *ledResisterAdr = led_value;
}

void Led_OFF(uint8_t ledNo) {
    led_value = led_value & ~(1 << ledNo);
    *ledResisterAdr = led_value;
}
```

ビルドを通したいだけならダミーの実装が書かれたファイルをビルド時にリンクします。

```c title="テストダブル（ダミー）led.c"
void Led_ON(uint8_t ledNo) {
    // dummy
}

void Led_OFF(uint8_t ledNo) {
    // dummy
}
```

ダミーではなくスパイを使うことでLEDの状態を確認する期待値チェックを書くこともできます。

```c title="テストダブル（スパイ）led.c"
static uint8_t led_value;

void Led_ON(uint8_t ledNo) {
    led_value = led_value | (1 << ledNo);
}

void Led_OFF(uint8_t ledNo) {
    led_value = led_value & ~(1 << ledNo);
}

uint8_t Led_IsOn(uint8_t ledNo) {
    if (led_value & (1 << ledNo)) {
        return 1; // ON
    } else {
        return 0; // OFF
    }
}
```
