---
sidebar_position: 5
---

# Replacing with Function Pointers

There are cases where you want to alternate between product code and test doubles on a per-test-case basis within a single test suite executable. In such cases, you can use "replacing with function pointers."

:::caution

Since this method can make the code harder to read, use "replacing with the linker" when you don't need to switch between product code and test doubles.

:::

## How to Switch with Function Pointers

Consider the following function for registering a file write queue to USB:

```c title="original function declaration"
void FileManager_EnQueue(ST_QUEUE_ELEMENT* el)
```

To alternate between the product code `FileManager_EnQueue_Real` and the test double `FileManager_EnQueue_Mock`, change the function declaration to a function pointer declaration.

```c title="function declaration using function pointer"
extern void (*FileManager_EnQueue)(ST_QUEUE_ELEMENT* el);
```

By assigning the function pointer `FileManager_EnQueue_Real` of the product code to `FileManager_EnQueue`, calls to `FileManager_EnQueue()` are routed to `FileManager_EnQueue_Real()`.

```c title="Product Code FileManager.c"
void FileManager_EnQueue_Real(ST_QUEUE_ELEMENT* el) {
    // Processing that runs on the actual microcontroller
}
void (*FileManager_EnQueue)(ST_QUEUE_ELEMENT* el) = FileManager_EnQueue_Real;
```

In test cases where you want to use the test double `FileManager_EnQueue_Mock`, assign the function pointer `FileManager_EnQueue_Mock` to `FileManager_EnQueue`. After the test case finishes, restore the original reference so that only that test case uses `FileManager_EnQueue_Mock`.

```c title="Test Code test case using real"
void FileManager_EnQueue_Mock(ST_QUEUE_ELEMENT* el) {
    // Test double processing
}

TEST_F(TestLogSave, TestCaseUsingFileManager_EnQueue) {

void (*FileManager_EnQueue_Saved)(ST_QUEUE_ELEMENT* el);
    // Pre-test setup
    FileManager_EnQueue_Saved = FileManager_EnQueue;
    FileManager_EnQueue = FileManager_EnQueue_Mock;

    // Perform assertions using FileManager_EnQueue_Mock
    // ..

    // Post-test cleanup
    FileManager_EnQueue = FileManager_EnQueue_Saved;
}
```

## Tips for GoogleTest

When you want to use `FileManager_EnQueue_Mock` throughout a test file in GoogleTest, defining `SetUp()` like below will eliminate the need to assign the pointer in each test case. This makes the tests easier to read.

```c title="Test Code tetst class"
class TestLogSave: public ::testing::Test {
  protected:
    void (*FileManager_EnQueue_Saved)(ST_QUEUE_ELEMENT* el);

    void SetUp() override {
        // Use mock (FileManager_EnQueue_Mock) for FileManager_EnQueue
        FileManager_EnQueue_Saved = FileManager_EnQueue;
        FileManager_EnQueue = FileManager_EnQueue_Mock;
    }

    void TearDown() override {
        // Restore FileManager_EnQueue to reference the product code (FileManager_EnQueue_Real)
        FileManager_EnQueue = FileManager_EnQueue_Saved;
    }
};
```

```c title="Test Code test case using mock"
TEST_F(TestLogSave, TestCaseUsingFileManager_EnQueue) {
  // ..
}
```
