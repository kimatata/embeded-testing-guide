
#include <gtest/gtest.h>

#include "./testFileManager.cpp"
#include "./testLedCtrl.cpp"
#include "./testLedImpl.cpp"

int main(int argc, char **argv) {
    testing::InitGoogleTest(&argc, argv);
    return RUN_ALL_TESTS();
}