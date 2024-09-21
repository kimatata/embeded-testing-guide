---
sidebar_position: 3
---

# Replacing with Compile Switches

This method involves branching in the product code with compile switches to call functions appropriate for each environment, depending on microcontroller or hardware dependencies. However, this approach modifies the product code specifically for testing, which can make the code more complex.

It is recommended to avoid this method as it pollutes the product code.

```c title="Product Code led.c"
#include ledCtrl.h

void turnOnRedLED(void) {
#if REAL_BOARD
    LedCtrl_LedON(3);
#else
    VirtualLedCtrl_LedON(3);
#endif
}
```

```c title="ledCtrl.c for Product Code "
static uint8_t led_value;

// Set value in register
void LedCtrl_LedON(uint8_t ledNo) {
    led_value = led_value | (1 << n);
    LED_RESISTER = led_value;
}
```

```c title="ledCtrl.c for Test Code"
static uint8_t led_value;

void VirtualLedCtrl_LedON(uint8_t ledNo) {
    led_value = led_value | (1 << n);
}

// Allow test code to call led_value and verify the results
uint8_t void VirtualLedCtrl_GetLedValue(void) {
    return led_value;
}
```
