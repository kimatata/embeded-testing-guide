---
sidebar_position: 2
---

# ロジックの抽出

既存のコードはテストを念頭に作られていないため、ほとんど出力値ベーステストはできないと思われる。
状態ベーステストやコミュニケーションテストは実装コストが高いため、無理にそれらのテストパターンを使うより
出力値ベーステストできるようリファクタリングするのが効果的。

:::info

テスト可能なコード　=　疎結合でわかりやすいコード

:::

## 依存がない部分の分離

ロジックとハードウェアへの指令が混じった密結合なコードからロジック部分を分離する。
抽出したコードは依存がないため簡単にビルド、テストができる。

### テストが難しい状態

各プロセスのデータ蓄積状態をROMに保存しているある組み込み製品があったとする。
3000Byteの領域にST_LED_INFOという型の配列`ST_LED_INFO* pList`のデータを保存している。

```c
typedef struct {
    uint8_t isUsed : 1;
    uint8_t color : 7;
    uint8_t ledNo;
} ST_LED_INFO;
```

このデータをRAMに読み出し、ある条件でソートした結果を返却する関数がある。

```c title="dataAcm.c(プロダクトコード)"
int8_t ledInfoRecords_GetStoredInfoList(ST_LED_INFO* pList) {
    // read data from ROM to RAM
    NvrReadData(nvrReader, NVR_LED_INFO, 0, (LED_INFO_NUM * sizeof(ST_LED_INFO)), (void*)&ledInfoRecords[0]);

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
        return infoA->color - infoB->color;
    }
}
```

詳細は省くが、NvrReadData()はROMからデータを読み出す関数であるり、プラットフォーム固有のものである。
つまり、このプロダクトコードはハードウェアに依存したコードとロジックが混じっている。

### テストが可能な状態

先ほどの状態ではプラットフォーム固有な関数を含んでいるためテスト環境でビルドすることができない[^1]。
そこで、テストしたい部分、とくにロジックが複雑でバグが出やすいソート部分を別ファイルに抽出する。

```c title="dataAcm.c(ソート部分を他ファイルに分離)"
int8_t ledInfoRecords_GetStoredInfoList(ST_LED_INFO* pList) {
    // read data from ROM to RAM
    NvrReadData(nvrReader, NVR_LED_INFO, 0, (LED_INFO_NUM * sizeof(ST_LED_INFO)), (void*)&ledInfoRecords[0]);

    // sort
    LedCtrlImpl_Sort(pList, count);

    return OK;
}
```

```c title="リファクタリング後のプロダクトコード(純粋関数) ledCtrlImpl.c"
/*
 * ST_LED_INFOの配列をソートする
 */
void LedCtrlImpl_Sort(ST_LED_INFO* pList, size_t num) {
    qsort(pList, num, sizeof(ST_LED_INFO), compare);
}

/*
 * ST_LED_INFOの配列をソートするときの比較関数
 *
 * ledNoで昇順にソート
 * ledNoが同じ要素に対してはcolorで昇順にソート
 */
static int compare(const void* a, const void* b) {
    ST_LED_INFO* infoA = (ST_LED_INFO*)a;
    ST_LED_INFO* infoB = (ST_LED_INFO*)b;

    if (infoA->ledNo != infoB->ledNo) {
        return infoA->ledNo - infoB->ledNo;
    } else {
        return infoA->color - infoB->color;
    }
}
```

```c title="テストコード testLedCtrlImpl.cpp"
TEST(ledCtrlImpl, リスト取得時ledNoで昇順でソートされる) {
    ST_LED_INFO ledInfoRecords[3] = {0};
    ledInfoRecords[0].ledNoLow = 100;
    ledInfoRecords[1].ledNoLow = 120;
    ledInfoRecords[2].ledNoLow = 110;
    DataAcmProcess_Sort(ledInfoRecords, 3);

    EXPECT_EQ(100, ledInfoRecords[0].ledNoLow);
    EXPECT_EQ(110, ledInfoRecords[1].ledNoLow);
    EXPECT_EQ(120, ledInfoRecords[2].ledNoLow);
}
```

`ledCtrlImpl.c`以外のカバレッジは0%だが, バグの発生は複雑なロジックから発生することがほとんどのため実践的な方法である。

[^1]: 次章以降で説明のダブルを使うことでテストすることもできる
