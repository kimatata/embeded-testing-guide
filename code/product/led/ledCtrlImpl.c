#include <stdio.h>
#include "ledCtrl.h"

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