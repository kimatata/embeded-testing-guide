#include <gtest/gtest.h>

extern "C" {
#include "../../product/ledCtrl/ledDataImpl.h"
}

TEST(ledCtrlImpl, RetrievesTheLedNoOfTheBrightestBlueLed) {
    ST_LED_INFO ledInfoRecords[5] = {
        {1, 100, LED_COLOR_BLUE, 0}, {1, 120, LED_COLOR_RED, 1},
        {1, 90, LED_COLOR_BLUE, 2},  {0, 150, LED_COLOR_BLUE, 3},
        {1, 150, LED_COLOR_BLUE, 4},
    };

    int8_t ret = LedDataImpl_GetBrightestBlueLedNo(ledInfoRecords, 5);
    EXPECT_EQ(4, ret);
}

TEST(ledCtrlImpl, ReturnsMinusIfNoBlueLedsAreInUse) {
    ST_LED_INFO ledInfoRecords[4] = {
        {1, 100, LED_COLOR_GREEN, 0},
        {1, 120, LED_COLOR_RED, 1},
        {1, 90, LED_COLOR_GREEN, 2},
        {0, 150, LED_COLOR_BLUE, 3},
    };

    int8_t ret = LedDataImpl_GetBrightestBlueLedNo(ledInfoRecords, 4);
    EXPECT_EQ(-1, ret);
}