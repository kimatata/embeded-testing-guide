---
sidebar_position: 3
---

# コンパイルスイッチによる置き換え

プロダクトコードでマイコンやハードウェアに依存している箇所をコンパイルスイッチで分岐させ、それぞれの環境で使える関数を呼び出すようにする方法。
テストのためにプロダクトコードに変更を加えており、プロダクトコードが複雑になってしまっている。

プロダクトコードが汚れるためこの方法は避けたほうがよい。

```c title="プロダクトコード led.c"
#include ledCtrl.h

void turnOnRedLED(void) {
#if REAL_BOARD
  LedCtrl_LedON(3);
#else
  VirtualLedCtrl_LedON(3);
#endif
}
```

```c title="プロダクトコード用のledCtrl.c"
static uint8_t led_value;

// set registerレジスタに値をセット
void LedCtrl_LedON(uint8_t ledNo) {
  led_value = led_value | (1 << n);
  LED_RESISTER = led_value;
}
```

```c title="テストコード用の ledCtrl.c"
static uint8_t led_value;

void VirtualLedCtrl_LedON(uint8_t ledNo) {
  led_value = led_value | (1 << n);
}

// led_valueをテストコードから呼び出して結果を確認できるようにする
uint8_t void VirtualLedCtrl_GetLedValue(void) {
  return led_value;
}
```
