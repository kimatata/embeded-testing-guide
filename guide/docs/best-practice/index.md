---
sidebar_position: 4
---

# Best Practices

## How to Test Private Functions

You do not need to test private functions (in C, these would be static functions) that cannot be called from other files. It is an anti-pattern to change a private function to public or use any kind of workaround just to make it testable from the test code.

Private functions are called within public functions, so by writing tests for the public functions, the private functions will naturally be tested as well. If you feel the need to call a private function directly in your tests, it may indicate that your structure is too opaque and could benefit from reworking. Alternatively, you may be trying to test implementation details rather than behavior or specifications. Testing implementation details leads to brittle tests and can reduce the maintainability of the test code, so it’s best to avoid it.

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
