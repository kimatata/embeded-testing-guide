---
sidebar_position: 5
---

# モックによる置き換え

モックもダブルの一種であり、コラボレータを置き換えるものです。ダミーやスパイのように自分で作る必要はなく、テスティングフレームワークによって用意されます。GoogleTestを使用するならGoogleMockが利用できます。

モックはただリンクを通すためのダミーとは違い、期待する動きを指定することができます。

以下は`armCtrl.c`というロボットのアームを制御するためのコードです。`armCtrl.c`内で使われる`rotate()`や`grab()`といった関数はコラボレーターです。実際にロボットを動かす処理であり、テスト環境のPC上では使うことができません。

```c title="プロダクトコード armCtrl.h"
#ifndef ARMCTRL_H
#define ARMCTRL_H

#include "robot.h"

void ArmCtrl_CatchObject(void);

#endif // ARMCTRL_H
```

```c title="プロダクトコード armCtrl.c"
#include "armCtrl.h"

void ArmCtrl_CatchObject(void) {
    rotate(90);
    grab();
}
```

`catchObject()`の中で`rotate()`という関数が引数90で一度コールされ、`grab()`という関数がコールされることをテストしたいとします。モックを使うことで関数の呼び出し、つまりコミュニケーションをテストすることができます。

```c title="testArmCtrl.c"
#include <gmock/gmock.h>
#include <gtest/gtest.h>

using namespace testing;

extern "C" {
#include "../../product/armCtrl/armCtrl.h"
}

// モッククラスの定義
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

    // catchObject()内でrotate(), grab()が呼び出されることを期待する
    EXPECT_CALL(mockArmCtrl, mockRotate(90)).Times(1);
    EXPECT_CALL(mockArmCtrl, mockGrab()).Times(1);
    ArmCtrl_CatchObject();
}

```

モックは強力ですが、多用するとテストコードが仕様やふるまいというより実装の詳細をテストしているようになります。
テストコードのメンテナンス性を損なう可能性があり、注意が必要です。
