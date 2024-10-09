---
sidebar_position: 2
---

import breakEven from "./img/breakeven.jpg";
import shiftLeft from "./img/shift-left.png";
import gTest from "./img/gTest.png";

# Benefits of Introducing Unit Tests

This chapter explains the general benefits of introducing unit tests. If you are already familiar with unit tests, you don’t need to read this section. If you are eager to know how to introduce unit tests into embedded software development, please proceed to the next chapter.

## Benefits

### Reducing Workload

Some people may think that the workload increases because you have to write test code in addition to the product code. Certainly, in the early stages of development, progress may seem faster if tests are not written. However, once a project reaches a certain scale, introducing unit tests results in lower total costs.

<img src={breakEven} alt="Break-even Point" width="700" /> [^breakEven]

Unit tests, which have short execution times and provide immediate feedback, are less affected by specification changes compared to integration or manual (E2E) tests. Even for small projects, unit tests can be worthwhile. Unless you’re working with disposable scripts, the workload required for testing will pay off.

### Preventing Regressions

It is difficult to add a function taking into account all the numerous setting values, version combinations, etc., and it is costly to check the  software operation. Gradually, some behavior checks are skipped, to say, "This test case has nothing to do with this change, right?" In reality, however, no one can perfectly predict whether a change will really have no impact.

With automated tests, the execution cost is nearly zero. By running tests for every commit or every pull request, you can quickly verify that no regressions have been introduced.

### Pinpointing Bug Locations

When a unit test fails, the testing framework shows where it failed, what the expected value was, and what the actual value was. In contrast, with manual testing, it takes time to recreate a bug and then identify where the problem lies.

<img src={gTest} alt="gtest" width="700" />

### Developing with Confidence

If you add new code and existing tests fail, then there is likely an issue in the new code you’ve written. If all tests pass, you can proceed with confidence.

### Shift Left

With only manual tests, you can’t verify software behavior until the physical device is complete. If the hardware is delayed or devices are limited, development can stall. With unit tests, you can test component-level behavior on PC.

This allows you to shift development efforts to earlier stages in the process. Since the cost of fixing issues increases as development progresses, shifting left helps reduce overall costs.

<img src={shiftLeft} alt="Shift Left" width="700" /> [^shiftLeft]

### Living Documentation

Google Test’s `TEST` macro accepts arguments for the test case name, allowing you to describe the behavior of the code being tested. `TEST(TestSuiteName, TestCaseName)`.

```c
// highlight-next-line
TEST(Counter, CanCalculateElapsedTimeCorrectlyEvenWithOverflow) {
    uint32_t startValue = 0xffffffff;
    uint32_t currentValue = 0x9;
    EXPECT_EQ(10, Counter_GetElapsedCount(startValue, currentValue));
}
```

You can use a tool like [Doxygen](https://www.doxygen.nl/) to describe the function, but there is no guarantee that the implementation and the function description match.

```c
/**
 * @brief Calculate elapsed counts
 *
 * can calculate elapsed count even overflows
 *
 * @param startValue Start count
 * @param currentValue current count
 * @return elapsed counts
 */
uint32_t Counter_GetElapsedCount(startValue, currentValue) {
    return currentValue - startValue;
 }
```

 When there are many changes to a function’s specifications or modifications, there is always a chance that someone might forget to update the descriptions. If you have unit tests in place, and there are changes in the product code, even if you forget to update the test code, the tests will fail, alerting you to the issue.

### Testing Edge Cases

Unit tests allow you to verify behavior in scenarios that are difficult to test manually, such as overflows, leap years, or when an SD card is full.

## Concerns About Unit Testing

After introducing tests, you’ll need to manage both the product code and the test code. If there are changes to the specifications, you’ll need to update not just the product code but the test code as well.

Some might say, "See, unit testing is pointless and won’t stick around." But I don’t think that unit testing is ineffective. In fact, many software development books dedicate an entire chapter or more to unit testing, highlighting how essential it is in the field. To claim that unit testing is useless after seeing such emphasis might take a bit of boldness, wouldn’t you agree?

Rather, the reason unit testing doesn’t stick is often because we haven’t yet developed the skills needed to design and maintain both product and test code effectively. Creating software that is not only functional but also testable and resilient to specification changes requires a higher level of skill compared to simply getting it to work.

[^breakEven]: [https://egesoftware.blogspot.com/2013/03/mitos-de-los-tests-unitarios.html](https://egesoftware.blogspot.com/2013/03/mitos-de-los-tests-unitarios.html)
[^shiftLeft]: [https://devopedia.org/shift-left](https://devopedia.org/shift-left)