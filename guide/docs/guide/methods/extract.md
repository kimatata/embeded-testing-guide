---
sidebar_position: 2
---

# Extracting Logic

Existing product code that hasn’t introduced tests is likely not designed with testing in mind, meaning output-based tests will be challenging. While it’s possible to write tests using mocks without modifying the product code, test code using mocks tends to become complex.

Instead of forcibly using mocks, consider refactoring the product code to enable output-based testing.

:::info

Testable code = loosely coupled, easy-to-understand code

:::

## Refactoring

Embedded software code is often composed of both logic and hardware commands. Ideally, logic and hardware commands are well-separated, but in situations where deadlines are tight and the software must "just work," the code is likely to have these aspects mixed together.

To make output-based testing possible, refactor this tightly coupled code and extract the logic. The extracted code won’t depend on hardware, making it easier to build and test.

### When Testing is Difficult

Let’s consider an embedded product that stores an array of ST_LED_INFO structures indicating the status of each LED in ROM.

```c
typedef struct {
    uint8_t isUsed : 1;
    uint8_t brightness : 7;
    uint8_t ledNo;
} ST_LED_INFO;
```

There is a function that reads this data into RAM and returns the sorted result based on certain conditions.

```c title="ledData.c(Product Code)"
int8_t LedData_GetStoredInfoList(ST_LED_INFO* pList) {
    // read data from ROM to RAM
    nvrReadData(nvrReader, NVR_LED_INFO, 0, (LED_INFO_NUM * sizeof(ST_LED_INFO)), (void*)&ledInfoRecords[0]);

    // sort
    qsort(ledInfoRecords, num, sizeof(ST_LED_INFO), compare);

    return OK;
}

static int compare(const void* a, const void* b) {
    ST_LED_INFO* infoA = (ST_LED_INFO*)a;
    ST_LED_INFO* infoB = (ST_LED_INFO*)b;

    if (infoA->ledNo != infoB->ledNo) {
        return infoA->ledNo - infoB->ledNo;
    } else {
        return infoA->brightness - infoB->brightness;
    }
}
```

The `nvrReadData()` function is platform-specific, reading data from ROM. While this works on the embedded board, it cannot be built or run in the test environment.

### When Testing Becomes Possible

In the previous example, platform-specific functions prevented building and running the code in a test environment. To make the logic more testable, especially the sorting logic that is complex and prone to bugs, we can extract this part into a separate file.

```c title="ledData.c(separate sort part to other file)"
int8_t LedData_GetStoredInfoList(ST_LED_INFO* pList) {
    // read data from ROM to RAM
    nvrReadData(nvrReader, NVR_LED_INFO, 0, (LED_INFO_NUM * sizeof(ST_LED_INFO)), (void*)&ledInfoRecords[0]);

    // sort
    LedCtrlImpl_Sort(pList, count);

    return OK;
}
```

```c title="Refactored Product code(pure function) ledDataImpl.c"
/*
 * Sort an array of ST_LED_INFO
 */
void LedCtrlImpl_Sort(ST_LED_INFO* pList, size_t num) {
    qsort(pList, num, sizeof(ST_LED_INFO), compare);
}

/*
 * Comparison function for sorting an array of ST_LED_INFO
 *
 * Sort in ascending order by brightness.
 * If brightness is the same, sort in ascending order by ledNo.
 */
static int compare(const void* a, const void* b) {
    ST_LED_INFO* infoA = (ST_LED_INFO*)a;
    ST_LED_INFO* infoB = (ST_LED_INFO*)b;

    if (infoA->brightness != infoB->brightness) {
        return infoA->brightness - infoB->brightness;
    } else {
        return infoA->ledNo - infoB->ledNo;
    }
}
```

```c title="Test Code testLedDataImpl.cpp"
TEST(ledCtrlImpl, SortsListInAscendingOrderByBrightness) {
    ST_LED_INFO ledInfoRecords[3] = {0};
    ledInfoRecords[0].brightness = 20;
    ledInfoRecords[1].brightness = 110;
    ledInfoRecords[2].brightness = 60;
    LedDataImpl_Sort(ledInfoRecords, 3);

    EXPECT_EQ(20, ledInfoRecords[0].brightness);
    EXPECT_EQ(60, ledInfoRecords[1].brightness);
    EXPECT_EQ(110, ledInfoRecords[2].brightness);
}
```

Now, we are able to test the sorting logic. Although `ledData.c` itself is still not testable, bugs typically arise from complex logic. Therefore, enabling tests for the sorting logic is valuable. Additionally, `ledData.c` is relatively simple and not likely to change often, so the return on investment from writing test code for it may be limited.
