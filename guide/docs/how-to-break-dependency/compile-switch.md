---
sidebar_position: 3
---

# Replacing with Compile Switches

This method involves branching in the product code with compile switches to call functions appropriate for each environment, depending on microcontroller or hardware dependencies. This approach should be avoided because the product code is modified specifically for testing and the code becomes complex.

```c title="Product Code ledCtrl.c"
#include ledCtrl.h

static void turnOnRedLED(void) {
#if REAL_BOARD
    Led_ON(3);
#else
    Virtual_Led_ON(3);
#endif
}
```

```c title="led.c for Product Code "
static uint8_t led_value;
static volatile uint8_t *ledResisterAdr;

// Set value in register
void Led_ON(uint8_t ledNo) {
    led_value = led_value | (1 << ledNo);
    *ledResisterAdr = led_value;
}
```

```c title="led.c for Test Code"
void Virtual_Led_ON(uint8_t ledNo) {
    printf("virtual led%d turned ON\n", ledNo);
}
```
