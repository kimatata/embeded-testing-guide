#include <gtest/gtest.h>

extern "C"
{
  #include "ledCtrlImpl.h"
}

TEST(ledCtrlImpl, リスト取得時ledNoで昇順でソートされる) {
    ST_LED_INFO ledInfoRecords[3] = {0};
    ledInfoRecords[0].ledNoLow = 100;
    ledInfoRecords[1].ledNoLow = 120;
    ledInfoRecords[2].ledNoLow = 110;
    LedImpl_Sort(ledInfoRecords, 3);

    EXPECT_EQ(100, ledInfoRecords[0].ledNoLow);
    EXPECT_EQ(110, ledInfoRecords[1].ledNoLow);
    EXPECT_EQ(120, ledInfoRecords[2].ledNoLow);
}