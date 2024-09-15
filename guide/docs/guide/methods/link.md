---
sidebar_position: 4
---

# リンカによる置き換え

ビルド時にプロダクトコードの代わりにテスト用のコードをリンクさせる方法。プロダクトコードが汚れず、簡単なのでできるだけこの方法を採用するのが良い。

例：基板上でしか動作しない`LedCtrl_LedON()`が含まれたプロダクトコードをテストしたい場合

```c title="プロダクトコード"
#include "ledCtrl.h"

void turnOnRedLED(void) {
  LedCtrl_LedON(3);
}
```

```c title="プロダクトコード ledCtrl.c"
static uint8_t led_value;

// set registerレジスタに値をセット
void LedCtrl_LedON(uint8_t ledNo) {
  led_value = led_value | (1 << n);
  LED_RESISTER = led_value;
}
```

ビルドを通したいだけならダミーの実装が書かれたファイルをビルド時にリンクする。

```c title="テストダブル（ダミー）ledCtrl.c"
void LedCtrl_LedON(uint8_t ledNo) {
  // do nothing
}
```

ダミーではなくスパイを使うことで確かにLED3がONになったことをテストすることができる。

```c title="テストダブル（スパイ）ledCtrl.c"
static uint8_t led_value;

void LedCtrl_LedON(uint8_t ledNo) {
  led_value = led_value | (1 << n);
}

uint8_t LedCtrl_GetLedValue(){
  return led_value;
}
```
