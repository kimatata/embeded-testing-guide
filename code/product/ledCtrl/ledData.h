#ifndef LED_DATA_H
#define LED_DATA_H

#include <stdio.h>
#include <stdint.h>

#define LED_INFO_NUM 10
#define LED_COLOR_RED 0
#define LED_COLOR_GREEN 1
#define LED_COLOR_BLUE 2

typedef struct {
    uint8_t isUsed;
    uint8_t brightness;
    uint8_t color;
    uint8_t ledNo;
} ST_LED_INFO;

#endif /* LED_DATA_H */

