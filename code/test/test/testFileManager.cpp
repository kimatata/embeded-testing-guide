#include <gmock/gmock.h>
#include <gtest/gtest.h>

extern "C" {
#include "../../product/fileManager/fileCtrl.h"
#include "../../product/fileManager/fileManager.h"
}

// ******************************************************************
// Mock class
// ******************************************************************
class MockFileManager {
  public:
    MOCK_METHOD(void, EnQueue, (ST_QUEUE_ELEMENT * el), ());
};

MockFileManager *g_mockFileManager;

void (*FileCtrl_EnQueue_Saved)(ST_QUEUE_ELEMENT *el);
void FileCtrl_EnQueue_Mock(ST_QUEUE_ELEMENT *el) {
    g_mockFileManager->EnQueue(el);
}

// ******************************************************************
// Test class
// ******************************************************************
class TestFileManager : public ::testing::Test {
  protected:
    void (*FileCtrl_EnQueue_Saved)(ST_QUEUE_ELEMENT *el);

    void SetUp() override {
        FileCtrl_EnQueue_Saved = FileCtrl_EnQueue;
        FileCtrl_EnQueue = FileCtrl_EnQueue_Mock;
    }

    void TearDown() override { FileCtrl_EnQueue = FileCtrl_EnQueue_Saved; }
};

// ******************************************************************
// Test
// ******************************************************************
TEST_F(TestFileManager, WriteLogHeader_CallsFileCtrlEnQueue) {
    uint32_t buffer[16];
    buffer[0] = 0x00;
    buffer[1] = 0x11;
    buffer[2] = 0x22;

    EXPECT_CALL(*g_mockFileManager, EnQueue(testing::_))
        .WillOnce(testing::Invoke([&](ST_QUEUE_ELEMENT *el) {
            EXPECT_EQ(el->id, 1);
            EXPECT_EQ(el->size, 16);
            EXPECT_EQ(el->offset, 0);
        }));

    FileManager_WriteLogHeader(buffer, 16, 0);
}
