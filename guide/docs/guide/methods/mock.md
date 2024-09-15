---
sidebar_position: 6
---

# モックによる置き換え

モックもダブルの一種であり、DOCを置き換えるもの。ダミーやスパイのように自分で作る必要はなく、テスティングフレームワークによって用意される。GoogleTestを使用するならGoogle Mockライブラリによって提供される。

ただリンクを通すためのダミーではなく、期待する動きを指定することができる。

`EXPECT_CALL()`でモックの動作を指定する。

```c title="モッククラスのsub_func()が繰り返し0を返すよう指定する"
EXPECT_CALL(*testMock, sub_func(_)).WillRepeatedly(Return(0));
```
