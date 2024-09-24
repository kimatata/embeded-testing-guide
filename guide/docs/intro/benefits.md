---
sidebar_position: 2
---

import breakEven from "./img/breakeven.jpg";
import shiftLeft from "./img/shiftLeft.png";
import gTest from "./img/gTest.jpg";

# Benefits of Introducing Unit Tests

This chapter explains the general benefits of introducing unit tests. If you are already familiar with unit tests, you don’t need to read this section. If you are eager to know how to introduce unit tests into embedded software development, please proceed to the next chapter.

## Benefits

### Reducing Workload

Some people may think that the workload increases because you have to write code for testing in addition to the product code. Certainly, in the early stages of development, progress may seem faster if tests are not written. However, once a project reaches a certain scale, introducing unit tests results in lower total costs.

<img src={breakEven} alt="Break-even Point" width="700" />

Unit tests, which have short execution times and provide immediate feedback, are less affected by specification changes compared to integration or manual (E2E) tests. Even for small projects, unit tests can be worthwhile. Unless you’re working with disposable scripts, the workload required for testing will pay off.

### Preventing Regressions

It is difficult to consider all the settings, device versions, and combinations when adding new features, making manual testing costly. Eventually, team might start skipping tests that don’t seem related to the latest changes.

With automated tests, the execution cost is nearly zero. By running tests for every commit or pull request, you can quickly verify that no regressions have been introduced.

### Pinpointing Bug Locations

When a unit test fails, the testing framework shows where it failed, what the expected value was, and what the actual value was. In contrast, with manual testing, it takes time to recreate a bug and then identify where the problem lies.

<img src={gTest} alt="gtest" width="700" />

### Developing with Confidence

If you add new code and existing tests fail, then there is likely an issue in the new code you’ve written. If all tests pass, you can proceed with confidence.

### Shift Left

With only manual tests, you can’t verify software behavior until the physical product is complete. If the hardware is delayed or devices are limited, development can stall. With unit tests, you can test component-level behavior using just a PC.

This allows you to shift development efforts to earlier stages in the process. Since the cost of fixing issues increases as development progresses, shifting left helps reduce overall costs.

<img src={shiftLeft} alt="Shift Left" width="700" />

### Living Documentation

Google Test’s `TEST` macro accepts arguments for the test case name, allowing you to describe the behavior of the code being tested. `TEST(TestSuiteName, TestCaseName)`.

```c
// highlight-next-line
TEST(freeCount, CanCalculateElapsedTimeCorrectlyEvenWithOverflow) {
  uint32_t startCount = 0xffffffff;
  uint32_t currentCount = 0x9;
  EXPECT_EQ(10, CalcElapsedFreeCount(startCount, currentCount));
}
```

Using Doxygen (the C language version of Javadoc) to describe functions is fine, but there is no guarantee that the descriptions will match the implementation. When there are many changes to a function’s specifications or modifications, there is always a chance that someone might forget to update the descriptions. If you have unit tests in place, and there are changes in the product code, even if you forget to update the test code, the tests will fail, alerting you to the issue.

### Testing Edge Cases

Unit tests allow you to verify behavior in scenarios that are difficult to test manually, such as overflows, leap years, or when an SD card is full.

## Caution

Once tests are introduced, you’ll need to manage both the product code and the test code. If there are changes to the specifications, you’ll need to update not just the product code but the test code as well.

Some might say, "See, unit testing is pointless and won’t stick" but I don’t believe that unit testing is ineffective. Rather, I think it's more about a lack of the necessary skills to make use of it. Creating software that is testable and less susceptible to specification changes requires skill.

