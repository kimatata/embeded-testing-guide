---
sidebar_position: 3
---

# Unit Testing Frameworks

For implementing unit tests in C used in embedded software, it is possible to write tests using self-made assertions, but it is better to use open-source tools. In addition to assertions, powerful features such as mocking and coverage measurement are available.

Unit testing frameworks for C are well-known for the following:

- [Unity](https://github.com/ThrowTheSwitch/Unity)
- [CppUTest](https://cpputest.github.io/)
- [Google Test](https://github.com/google/googletest)

:::tip[xUnit]

There’s a term called xUnit that refers to a family of testing frameworks for different programming languages, with examples like [JUnit](https://junit.org/) for Java being famous. You might think that for C language, CUnit would be a good choice.

In fact, [CUnit](https://cunit.sourceforge.net/) is a testing framework for C, but it hasn’t been well-maintained lately, so I recommend using another testing framework instead.

:::

In my project, I adopted Google Test, especially because it offers strong support for mocks. All the test code in this guide is written using Google Test. I’ve also included a guide on how to install Google Test, so if you’re interested in using it, please check it out: [How to Install Google Test](../setup/googletest.md).

However, this guide focuses more on the methodology of introducing unit tests into embedded software development rather than on how to use specific testing frameworks. The principles shared in this guide are consistent regardless of which testing framework is used, so I believe this will be useful even for projects that don’t use Google Test.
