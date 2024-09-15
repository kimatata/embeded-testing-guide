#ifndef LED_H
#define LED_H

#include <stdint.h>

typedef struct {
    uint8_t isUsed : 1;
    uint8_t brightness : 7;
    uint8_t ledNo;
} ST_LED_INFO;

#endif