---
sidebar_position: 4
---

# Best Practices

## How to Test Private Functions

Private functions (i.e., static functions in C) that cannot be called from other files do not need to be tested at all. Private functions are called within public functions that are accessible from other files. Therefore, if you write tests for public functions, the private functions will naturally be tested as well.

Changing a private function to public just for testing purposes is considered an anti-pattern. If you feel the need to call and test a private function directly, it’s likely that the structure is too opaque from the outside, so you should reconsider the design. Alternatively, you might be trying to test implementation details rather than behavior or specification.

## Is TDD Mandatory?

It’s not necessary to always follow TDD (Test-Driven Development), but I believe that starting with test code before implementation helps maintain a more testable interface, compared to implementing first and then writing test code.

## Test Coverage

There is no need to aim for 100% coverage. Coverage is just a metric that calculates how many lines of product code are executed during tests.

For example, the following test code only verifies one side of a conditional branch.

```c title="Test Code"
TEST(getAbsSuite, CanCalculateAbsoluteValue) {
    int x = 3;
    int y = -2;
    EXPECT_EQ(5, getAbs(x, y));
}
```

```c title="Product code"
int getAbs(int x, int y) {
    if (x >= y) {
      return (x - y);
    } else {
      // highlight-next-line
      return (y - x); // This branch is not being tested
    }
}
```

Simply changing the if statement in the product code to a ternary operator will increase the coverage. However, what is being tested is still the same as with the if statement.

```c title="Product code"
int getAbs(int x, int y) {
    return (x - y) >= 0 ? (x - y) : (y-x);
}
```

### Missing Expected Value Checks

If a team sets a coverage standard like 80%, some members might increase coverage without performing expected value checks.

In the following test code, no expected value checks (confirmation via `EXPECT_EQ`) are included, but since the product code is executed, it still counts toward coverage.

```c title="Test Code"
TEST(getAbsSuite, CanCalculateAbsoluteValue) {
    getAbs(3, -2);
    getAbs(1, 5);
}
```
