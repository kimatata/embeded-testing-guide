
#include <gtest/gtest.h>

#include "./testLed.cpp"
#include "./testFileManager.cpp"

int main(int argc, char **argv)
{
    testing::InitGoogleTest(&argc, argv);
    return RUN_ALL_TESTS();
}