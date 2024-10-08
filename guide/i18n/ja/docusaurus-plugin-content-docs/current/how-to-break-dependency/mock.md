---
sidebar_position: 5
---

# モックによる置き換え

モックもダブルの一種であり、DOCを置き換えるものです。ダミーやスパイのように自分で作る必要はなく、テスティングフレームワークによって用意されます。GoogleTestを使用するならGoogleMockが利用できます。

モックはただリンクを通すためのダミーとは違い、期待する動きを指定することができます。

以下は`armCtrl.c`というロボットのアームを制御するためのコードです。`armCtrl.c`内で使われる`rotate()`や`grab()`といった関数はコラボレーターです。実際にロボットを動かす処理であり、テスト環境のPC上では使うことができません。

```c title="プロダクトコード armCtrl.h"
#ifndef ARMCTRL_H
#define ARMCTRL_H

void rotate(int angle);
void grab();
void catchObject();

#endif // ARMCTRL_H
```

```c title="プロダクトコード armCtrl.c"
#include "armCtrl.h"
#include "move.h"

void catchObject() {
    rotate(90);
    grab();
}
```

`catchObject()`の中で`rotate()`という関数が引数90で一度コールされ、`grab()`という関数がコールされることをテストしたいとします。モックを使うことで関数の呼び出し、つまりコミュニケーションをテストすることができます。

```c title="testArmCtrl.c"
#include <gtest/gtest.h>
#include <gmock/gmock.h>
extern "C" {
    #include "armCtrl.h"
}

// モッククラスの定義
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

TEST(ArmControllerTest, アームが回転し物体をつかむ) {
    MockArmController mockController;
    armCtrl::rotate = mockRotate;
    armCtrl::grab = mockGrab;

    // catchObject()内でrotate(), grab()が呼び出されることを期待する
    EXPECT_CALL(mockController, rotate(90)).Times(1);
    EXPECT_CALL(mockController, grab()).Times(1);

    catchObject();
}
```

モックは強力ですが、多用するとテストコードが仕様やふるまいというより実装の詳細をテストしているようになります。
テストコードのメンテナンス性を損なう可能性があり、注意が必要です。
