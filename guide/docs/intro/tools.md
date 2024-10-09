---
sidebar_position: 3
---

# Unit Testing Frameworks



When implementing unit tests in C for embedded software, it is possible to write tests using custom assertions[^assertion].

```c title="Custom assertion"
#define ASSERT_EQUAL(expected, actual) \
    if ((expected) != (actual)) { \
        printf("Assertion failed: expected %d, but got %d\n", (expected), (actual)); \
    } else { \
        printf("Assertion succeeded: %d == %d\n", (expected), (actual)); \
    }

int main() {
  int a = 5;
  int b = 5;

  ASSERT_EQUAL(a, b);
}
```

However, it is highly recommended to use open-source tools instead. These tools not only provide assertions but also offer powerful features such as mocking and coverage measurement.

Unit testing frameworks for C are well-known for the following:

- [Unity](https://github.com/ThrowTheSwitch/Unity)
- [CppUTest](https://cpputest.github.io/)
- [Google Test](https://github.com/google/googletest)

:::tip[xUnit]

There’s a term called xUnit that refers to a family of testing frameworks for different programming languages, with examples like [JUnit](https://junit.org/) for Java being famous. You might think that for C language, CUnit would be a good choice.

In fact, [CUnit](https://cunit.sourceforge.net/) is a testing framework for C, but it hasn’t been well-maintained lately, so I recommend using another testing framework instead.

:::

In my project, I adopted Google Test, especially because it offers strong support for mocks. All the test code in this guide is written using Google Test. I’ve also included a guide on how to install Google Test, so if you’re interested in using it, please check it out: [How to Install Google Test](../setup/googletest.md).

That said, this guide does not focus on how to use a specific testing framework. Instead, it emphasizes the introduction of unit testing into embedded software development. The principles explained here are applicable regardless of which testing framework you adopt, so I believe the guide will still be helpful even if you're using something other than Google Test.

[^assertion]: In the context of a testing framework, an "assertion" is a statement that compares an expected result with the actual result to verify their equality. If they do not match, the test is marked as failed. Common assertions include checking if values are equal, ensuring a value is not null, and confirming certain conditions hold true. Assertions are a fundamental part of determining whether a test passes or fails.
