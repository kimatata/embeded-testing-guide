

#ifndef FILE_MANAGER_H
#define FILE_MANAGER_H

#include "../board/board.h"

#define CREATE_LOG_FILE 0
#define WRITE_LOG_HEADER 1
#define WRITE_LOG_PAYLOAD 2
#define CLOSE_LOG_FILE 3

typedef struct {
    uint8_t id;
    uint32_t *src;
    uint32_t size;
    uint32_t offset;
} ST_QUEUE_ELEMENT;

int8_t FileManager_CreateLogFile(void);
int8_t FileManager_WriteLogHeader(uint32_t *src, uint32_t size,
                                  uint32_t offset);
int8_t FileManager_WriteLogPayload(uint32_t *src, uint32_t size,
                                   uint32_t offset);
int8_t FileManager_CloseLogFile(void);

#endif /* FILE_MANAGER_H */
