---
sidebar_position: 4
---

# Replacing with the Linker

This method involves linking test-specific code instead of the product code during the build process. Since the product code remains untouched and the process is simple, this approach is recommended whenever possible.

Example: Testing product code that contains `LedCtrl_LedON()`, which only works on the actual board.

```c title="Product Code ledCtrl.h"
#include "ledCtrl.h"

void turnOnRedLED(void) {
    LedCtrl_LedON(3);
}
```

```c title="Product Code ledCtrl.c"
static uint8_t led_value;

// Set value in register
void LedCtrl_LedON(uint8_t ledNo) {
    led_value = led_value | (1 << n);
    LED_RESISTER = led_value;
}
```

If you just want to build the code, link a file with a dummy implementation during the build process.

```c title="Test Double(dummy) ledCtrl.c"
void LedCtrl_LedON(uint8_t ledNo) {
    // do nothing
}
```

Instead of a dummy, you can use a spy to write a test that verifies if LED 3 is turned on.

```c title="est Double(spy) ledCtrl.c"
static uint8_t led_value;

void LedCtrl_LedON(uint8_t ledNo) {
    led_value = led_value | (1 << n);
}

uint8_t LedCtrl_GetLedValue(){
    return led_value;
}
```
