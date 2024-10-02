#include "ledDataImpl.h"

uint8_t LedDataImpl_GetBrightestBlueLedNo(ST_LED_INFO ledInfoRecords[], uint8_t size) {
    int8_t brightestLedNo = -1;
    uint8_t maxBrightness = 0;
    for (uint8_t i = 0; i < size; i++) {
        if (ledInfoRecords[i].isUsed == 1 && ledInfoRecords[i].color == LED_COLOR_BLUE) {
            if (ledInfoRecords[i].brightness > maxBrightness) {
                maxBrightness = ledInfoRecords[i].brightness;
                brightestLedNo = ledInfoRecords[i].ledNo;
            }
        }
    }

    return brightestLedNo
}
