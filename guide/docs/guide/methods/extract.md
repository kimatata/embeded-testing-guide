---
sidebar_position: 2
---

# Extracting Logic

Existing product code that hasn’t introduced tests is likely not designed with testing in mind, meaning output-based tests will be challenging. While it’s possible to write tests using mocks without modifying the product code, test code using mocks tends to become complex.

Instead of forcibly using mocks, consider refactoring the product code to enable output-based testing.

:::info

Testable code = loosely coupled, easy-to-understand code

:::

## Refactoring

Embedded software code is often composed of both logic and hardware commands. Ideally, logic and hardware commands are well-separated, but in situations where deadlines are tight and the software must "just work," the code is likely to have these aspects mixed together.

To make output-based testing possible, refactor this tightly coupled code and extract the logic. The extracted code won’t depend on hardware, making it easier to build and test.

### When Testing is Difficult

Let’s consider an embedded product that stores an array of `ST_LED_INFO` structures indicating the status of each LED in EEPROM.

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

There is a function that reads this data from EEPROM into RAM and retrieves the number of the brightest blue LED.

```c title="ledCtrl.c"
int8_t LedCtrl_GetBrightestBlueLedNo(ST_LED_INFO *pList) {
    // read data from ROM to RAM
    eepromReadBlock((void *)&ledInfoRecords[0], (const void *)eepromLedInfoRecords, LED_INFO_NUM * sizeof(ST_LED_INFO));

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

The `eepromReadBlock()` function is platform-specific and reads data from EEPROM. In other words, it works only on the embedded board. Because `eepromReadBlock()` is included, the `ledCtrl.c` file cannot be built in the test environment, and the tests cannot be executed.

### When Testing Becomes Possible

In the previous example, platform-specific functions prevented the code from being built and executed in the test environment. To address this, we can extract the part we want to test, especially the logic that is complex and prone to bugs, into a separate file.

```c title="ledCtrl.c"
int8_t LedCtrl_GetBrightestBlueLedNo(ST_LED_INFO *pList) {
    // read data from ROM to RAM
    eepromReadBlock((void *)&ledInfoRecords[0], (const void *)eepromLedInfoRecords, LED_INFO_NUM * sizeof(ST_LED_INFO));

    // find brightest blue led
    // highlight-next-line
    int8_t ret = LedImpl_GetBrightestBlueLedNo(ledInfoRecords, LED_INFO_NUM);

    return ret;
}
```

```c title="ledImpl.c"
int8_t LedImpl_GetBrightestBlueLedNo(ST_LED_INFO ledInfoRecords[], uint8_t size) {
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

Since there are no platform-specific functions or APIs in `ledImpl.c`, it can now run in the test environment. Below is the test code for `ledImpl.c`.

```c title="Test Code testLedImpl.cpp"
TEST(ledImpl, RetrievesTheLedNoOfTheBrightestBlueLed) {
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

TEST(ledImpl, ReturnsMinusIfNoBlueLed) {
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

Since bugs often arise from complex logic, this is a practical approach. While there are no tests for `ledCtrl.c`, it is relatively simple, and given that it is unlikely to change frequently, the return on writing test code for it may not be very high.
