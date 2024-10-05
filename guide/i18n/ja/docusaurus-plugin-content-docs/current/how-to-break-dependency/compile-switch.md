---
sidebar_position: 3
---

# コンパイルスイッチによる置き換え

プロダクトコードでマイコンやハードウェアに依存している箇所をコンパイルスイッチで分岐させ、それぞれの環境で使える関数を呼び出すようにする方法です。
テストのためにプロダクトコードに変更を加えており、プロダクトコードが複雑になってしまうためこの方法は避けたほうが良いです。

```c title="プロダクトコード ledCtrl.c"
#include ledCtrl.h

static void turnOnRedLED(void) {
#if REAL_BOARD
    Led_ON(3);
#else
    Virtual_Led_ON(3);
#endif
}
```

```c title="プロダクトコード用のled.c"
static uint8_t led_value;
static volatile uint8_t *ledResisterAdr;

// レジスタに値をセット
void Led_ON(uint8_t ledNo) {
    led_value = led_value | (1 << ledNo);
    *ledResisterAdr = led_value;
}
```

```c title="テストコード用の led.c"
void Virtual_Led_ON(uint8_t ledNo) {
    printf("virtual led%d turned ON\n", ledNo);
}
```
