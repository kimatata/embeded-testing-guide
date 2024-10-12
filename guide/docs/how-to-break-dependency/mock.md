---
sidebar_position: 4
---

# Replacing with Mocks

Mocks are a type of double that replaces collaborator. Unlike dummies or spies, you don't need to create mocks yourself; they are provided by testing frameworks. If you're using GoogleTest, you can take advantage of GoogleMock.

Mocks differ from dummies that are used just for linking. They allow you to specify the expected behavior.

Below is the code for controlling a robot arm in `armCtrl.c`. The functions `rotate()` and `grab()` used within `armCtrl.c` are collaborators. These functions handle actual robot operations and cannot be used on the PC during testing.

```c title="Product Code armCtrl.h"
#ifndef ARMCTRL_H
#define ARMCTRL_H

#include "robot.h"

void ArmCtrl_CatchObject(void);

#endif // ARMCTRL_H
```

```c title="Product Code armCtrl.c"
#include "armCtrl.h"

void ArmCtrl_CatchObject(void) {
    rotate(90);
    grab();
}
```

Suppose you want to test that within `catchObject()`, the `rotate()` function is called once with an argument of 90, and the `grab()` function is called. By using mocks, you can test the interaction between these functions.

```c title="testArmCtrl.c"
#include <gmock/gmock.h>
#include <gtest/gtest.h>

using namespace testing;

extern "C" {
#include "../../product/armCtrl/armCtrl.h"
}

class MockArmCtrl {
  public:
    MOCK_METHOD(void, mockRotate, (int angle), ());
    MOCK_METHOD(void, mockGrab, (), ());
};

MockArmCtrl *g_mockArmCtrl = nullptr;

void rotate(int angle) {
    g_mockArmCtrl->mockRotate(angle);
}

void grab() {
    g_mockArmCtrl->mockGrab();
}

TEST(ArmControllerTest, armWillRotateThenCatchObject) {
    MockArmCtrl mockArmCtrl;
    g_mockArmCtrl = &mockArmCtrl;

    // Expect rotate(), grab() will be called in catchObject()
    EXPECT_CALL(mockArmCtrl, mockRotate(90)).Times(1);
    EXPECT_CALL(mockArmCtrl, mockGrab()).Times(1);
    ArmCtrl_CatchObject();
}
```

Mocks are powerful, but overuse can lead to test code that focuses on implementation details rather than the specifications or behavior. This can negatively affect the maintainability of the test code, so caution is needed.
