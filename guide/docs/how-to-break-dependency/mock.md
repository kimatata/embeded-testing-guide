---
sidebar_position: 4
---

# Replacing with Mocks

Mocks are a type of double that replaces DOC. Unlike dummies or spies, you don't need to create mocks yourself; they are provided by testing frameworks. If you're using GoogleTest, you can take advantage of GoogleMock.

Mocks differ from dummies that are used just for linking. They allow you to specify the expected behavior.

Below is the code for controlling a robot arm in `armCtrl.c`. The functions `rotate()` and `grab()` used within `armCtrl.c` are collaborators. These functions handle actual robot operations and cannot be used on the PC during testing.

```c title="Product Code armCtrl.h"
#ifndef ARMCTRL_H
#define ARMCTRL_H

void rotate(int angle);
void grab();
void catchObject();

#endif // ARMCTRL_H
```

```c title="Product Code armCtrl.c"
#include "armCtrl.h"
#include "move.h"

void catchObject() {
    rotate(90);
    grab();
}
```

Suppose you want to test that within `catchObject()`, the `rotate()` function is called once with an argument of 90, and the `grab()` function is called. By using mocks, you can test the interaction between these functions.

```c title="testArmCtrl.c"
#include <gtest/gtest.h>
#include <gmock/gmock.h>
extern "C" {
    #include "armCtrl.h"
}

// Definition of the mock class
class MockArmController {
public:
    MOCK_METHOD(void, rotate, (int angle), ());
    MOCK_METHOD(void, grab, (), ());
};

void mockRotate(int angle) {
    MockArmController* mock = testing::Test::GetInstance()->GetMock<MockArmController>();
    mock->rotate(angle);
}

void mockGrab() {
    MockArmController* mock = testing::Test::GetInstance()->GetMock<MockArmController>();
    mock->grab();
}

TEST(ArmControllerTest, ArmRotatesAndGrabsObject) {
    MockArmController mockController;
    armCtrl::rotate = mockRotate;
    armCtrl::grab = mockGrab;

    // Expect that rotate() and grab() will be called within catchObject()
    EXPECT_CALL(mockController, rotate(90)).Times(1);
    EXPECT_CALL(mockController, grab()).Times(1);

    catchObject();
}
```

Mocks are powerful, but overuse can lead to test code that focuses on implementation details rather than the specifications or behavior. This can negatively affect the maintainability of the test code, so caution is needed.
