#include "ledData.h"

static ST_LED_INFO ledInfoRecords[LED_INFO_NUM];
static ST_LED_INFO eepromLedInfoRecords[LED_INFO_NUM];

int8_t LedData_GetBrightestBlueLedNo(ST_LED_INFO* pList) {
    // read data from ROM to RAM
    eeprom_read_block((void *)&ledInfoRecords[0], (const void *)eepromLedInfoRecords, LED_INFO_NUM * sizeof(ST_LED_INFO));

    // find brightest blue led
    int8_t ret = LedDataImpl_GetBrightestBlueLedNo(ledInfoRecords, LED_INFO_NUM);

    return ret;
}
