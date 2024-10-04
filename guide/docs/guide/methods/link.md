---
sidebar_position: 4
---

# Replacing with the Linker

This method involves linking test-specific code instead of the product code during the build process. Since the product code remains untouched and the process is simple, this approach is recommended whenever possible.

Example: Testing product code that contains `Led_ON()`, `Led_OFF()`, which only works on the actual board.

```c title="Product Code ledCtrl.c"
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

```c title="Product Code led.c"
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

If you just want to build the code, link a file with a dummy implementation during the build process.

```c title="Test Double(dummy) led.c"
void Led_ON(uint8_t ledNo) {
    // dummy
}

void Led_OFF(uint8_t ledNo) {
    // dummy
}
```

By using a spy instead of a dummy, a you can write test to verify that a certain LED is indeed turned on.

```c title="test Double(spy) led.c"
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
