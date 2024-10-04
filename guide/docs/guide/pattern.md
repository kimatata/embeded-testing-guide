---
sidebar_position: 1
---

# Unit Testing Methods

In general, test code checks expected values using the following three patterns:

- Output-based testing
- State-based testing
- Communication-based testing

## Output-based Testing

This method verifies whether the value returned by the code under test matches the expected value. It is the simplest and easiest to write but assumes that the code under test has no side effects.

```c title="Output-based Testing"
TEST(Counter, CanCalculateElapsedTimeCorrectlyEvenWithOverflow) {
    uint32_t startValue = 0xffffffff;
    uint32_t currentValue = 0x9;
    EXPECT_EQ(10, Counter_GetElapsedCount(startValue, currentValue));
}
```

## State-based Testing

This method checks the state (member variables) after the code under test is executed. It is slightly more complex compared to output-based testing. In C language, it looks like this:

```c title="production code couter.h"
#ifndef COUNTER_H
#define COUNTER_H

#include "../board/board.h"

typedef struct {
    uint32_t value;
    uint32_t overflowCount;
} Counter;

void Counter_Init(Counter *counter);
void Counter_Update(Counter *counter);
uint32_t Counter_GetValue(Counter *counter);
uint32_t Counter_GetOverflowCount(Counter *counter);
void Counter_Reset(Counter *counter);
uint32_t Counter_GetElapsedCount(uint32_t startValue, uint32_t currentValue);

#endif // COUNTER_H

```

```c title="production code couter.c"
#include "counter.h"

void Counter_Init(Counter *counter) {
    counter->value = 0;
    counter->overflowCount = 0;
}

void Counter_Update(Counter *counter) {
    counter->value++;

    // when overflows
    if (counter->value == 0) {
        counter->overflowCount++;
    }
}

void Counter_Reset(Counter *counter) {
    counter->value = 0;
    counter->overflowCount = 0;
}

uint32_t Counter_GetValue(Counter *counter) {
    return counter->value;
}

uint32_t Counter_GetOverflowCount(Counter *counter) {
    return counter->overflowCount;
}

uint32_t Counter_GetElapsedCount(uint32_t startValue, uint32_t currentValue) {
    return currentValue - startValue;
}
```

```c title="test code testCounter.c"
TEST(Counter, CounterInitialValueIsZero) {
    Counter counter;
    Counter_Init(&counter);
    EXPECT_EQ(Counter_GetValue(&counter), 0);
    EXPECT_EQ(Counter_GetOverflowCount(&counter), 0);
}

TEST(Counter, CounterValueIncrements) {
    Counter counter;
    Counter_Init(&counter);
    Counter_Update(&counter);
    EXPECT_EQ(Counter_GetValue(&counter), 1);
}

TEST(Counter, CounterOverflows) {
    Counter counter;
    Counter_Init(&counter);

    counter.value = UINT32_MAX - 1;
    Counter_Update(&counter);
    EXPECT_EQ(Counter_GetValue(&counter), UINT32_MAX);
    EXPECT_EQ(Counter_GetOverflowCount(&counter), 0);

    // trigger overflow
    Counter_Update(&counter);
    EXPECT_EQ(Counter_GetValue(&counter), 0);
    EXPECT_EQ(Counter_GetOverflowCount(&counter), 1); // overflow count will be 1
}
```

In object-oriented programming, this would be like checking the value of a class's member variables later.

## Communication-based Testing

This method verifies that the code under test correctly calls other functions or APIs. Verify the component being called by replacing it with a mock or spy. The implementation becomes more complex and the test code longer.

![./img/communicationTest.svg](./img/communicationTest.svg)