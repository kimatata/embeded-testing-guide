---
sidebar_position: 2
---

# ロジックの抽出

テストが導入されていない既存のプロダクトコードはテストを念頭に作られていないため、ほとんど出力値ベーステストはできないと思われます。モックを使うことでプロダクトコードを変更せずにテストを書くことは可能ですが、モックを用いたテストコードは複雑になりがちです。

無理にモックを使うより出力値ベーステストできるようプロダクトコードをリファクタリングすることを検討してみてください。

:::info

テスト可能なコード　=　疎結合でわかりやすいコード

:::

## リファクタリング

組み込みソフトウェアのコードはロジックとハードウェアへの指令により構成されています。ロジックとハードウェア指令がうまく分離されていれば良いですが、納期に追われとりあえず動くソフトを作らなければならない状況で書かれたコードはおそらくロジックとハードウェアヘの指令が入り混じっていることでしょう。

出力値ベーステストを可能にするためこの密結合したコードをリファクタリングし、ロジック部分を抽出します。抽出したコードはハードウェアへの依存がないため簡単にビルド、テストすることができます。

### テストが難しい状態

各LEDの状態を示す構造体`ST_LED_INFO`の配列をROMに保存しているある組み込み製品があったとします。

```c
typedef struct {
    uint8_t isUsed : 1;
    uint8_t brightness : 7;
    uint8_t ledNo;
} ST_LED_INFO;
```

このデータをRAMに読み出し、ある条件でソートした結果を返却する関数があります。

```c title="ledData.c(プロダクトコード)"
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

`nvrReadData()`はROMからデータを読み出す関数であり、プラットフォーム固有のものです。つまり、組み込み基板上では動きますが、テスト環境ではビルド、実行できません。

### テストが可能な状態

先ほどの状態ではプラットフォーム固有な関数を含んでいるためテスト環境でビルド、実行できませんでした。
そこで、テストしたい部分、とくにロジックが複雑でバグが出やすいソート部分を別ファイルに抽出することにします。

```c title="ledData.c(ソート部分を他ファイルに分離)"
int8_t LedData_GetStoredInfoList(ST_LED_INFO* pList) {
    // read data from ROM to RAM
    nvrReadData(nvrReader, NVR_LED_INFO, 0, (LED_INFO_NUM * sizeof(ST_LED_INFO)), (void*)&ledInfoRecords[0]);

    // sort
    LedCtrlImpl_Sort(pList, count);

    return OK;
}
```

```c title="リファクタリング後のプロダクトコード(純粋関数) ledDataImpl.c"
/*
 * ST_LED_INFOの配列をソートする
 */
void LedCtrlImpl_Sort(ST_LED_INFO* pList, size_t num) {
    qsort(pList, num, sizeof(ST_LED_INFO), compare);
}

/*
 * ST_LED_INFOの配列をソートするときの比較関数
 *
 * brightnessで昇順にソート
 * brightnessが同じ要素に対してはledNoで昇順にソート
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

```c title="テストコード testLedDataImpl.cpp"
TEST(ledCtrlImpl, リスト取得時明るさで昇順でソートされる) {
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

ソート部分をテストすることができました。`ledData.c`は結局テストできていないままですが、バグの発生は複雑なロジックから発生することが多いため、ソート部分がテスト可能になることは十分価値があります。それに`ledData.c`は単純で変更もそれほど多くはないと思われるためテストコードを書いて得られるリターンはそれほど多くないでしょう。
