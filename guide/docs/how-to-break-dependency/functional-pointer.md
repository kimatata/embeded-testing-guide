---
sidebar_position: 6
---

# Replacing with Function Pointers

There are cases where you want to alternate between product code and test doubles on a per-test-case basis within a single test suite executable. In such cases, you can use "replacing with function pointers."

:::caution

Since this method can make the code harder to read, use "replacing with the linker" when you don't need to switch between product code and test doubles.

:::

## How to Switch with Function Pointers

Consider the following function for registering a file write queue to USB drive:

```c title="original function declaration"
void FileCtrl_EnQueue(ST_QUEUE_ELEMENT* el)
```

To alternate between the product code `FileCtrl_EnQueue_Real` and the test double `FileCtrl_EnQueue_Mock`, change the function declaration to a function pointer declaration.

```c title="function declaration using function pointer"
extern void (*FileCtrl_EnQueue)(ST_QUEUE_ELEMENT* el);
```

By assigning the function pointer `FileCtrl_EnQueue_Real` of the product code to `FileCtrl_EnQueue`, calls to `FileCtrl_EnQueue()` are routed to `FileCtrl_EnQueue_Real()`.

```c title="Product Code FileManager.c"
void FileCtrl_EnQueue_Real(ST_QUEUE_ELEMENT* el) {
    // Processing that runs on the actual microcontroller
}
void (*FileCtrl_EnQueue)(ST_QUEUE_ELEMENT* el) = FileCtrl_EnQueue_Real;
```

In test cases where you want to use the test double `FileCtrl_EnQueue_Mock`, assign the function pointer `FileCtrl_EnQueue_Mock` to `FileCtrl_EnQueue`. After the test case finishes, restore the original reference so that only that test case uses `FileCtrl_EnQueue_Mock`.

```c title="Test Code test case using real"
void FileCtrl_EnQueue_Mock(ST_QUEUE_ELEMENT* el) {
    // Test double processing
}

TEST_F(TestLogSave, TestCaseUsingFileCtrl_EnQueue) {

void (*FileCtrl_EnQueue_Saved)(ST_QUEUE_ELEMENT* el);
    // Pre-test setup
    FileCtrl_EnQueue_Saved = FileCtrl_EnQueue;
    FileCtrl_EnQueue = FileCtrl_EnQueue_Mock;

    // Perform assertions using FileCtrl_EnQueue_Mock
    // ..

    // Post-test cleanup
    FileCtrl_EnQueue = FileCtrl_EnQueue_Saved;
}
```

:::info[Tips for GoogleTest]

When you want to use `FileCtrl_EnQueue_Mock` throughout a test file in GoogleTest, defining `SetUp()` like below will eliminate the need to assign the pointer in each test case. This makes the tests easier to read.

```c title="Test Code tetst class"
class TestLogSave: public ::testing::Test {
  protected:
    void (*FileCtrl_EnQueue_Saved)(ST_QUEUE_ELEMENT* el);

    void SetUp() override {
        // Use mock (FileCtrl_EnQueue_Mock) for FileCtrl_EnQueue
        FileCtrl_EnQueue_Saved = FileCtrl_EnQueue;
        FileCtrl_EnQueue = FileCtrl_EnQueue_Mock;
    }

    void TearDown() override {
        // Restore FileCtrl_EnQueue to reference the product code (FileCtrl_EnQueue_Real)
        FileCtrl_EnQueue = FileCtrl_EnQueue_Saved;
    }
};
```

```c title="Test Code test case using mock"
TEST_F(TestLogSave, TestCaseUsingFileCtrl_EnQueue) {
  // ..
}
```

:::
