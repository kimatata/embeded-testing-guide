#include "fileManager.h"
#include "fileCtrl.h"

int8_t FileManager_CreateLogFile(void) {
    ST_QUEUE_ELEMENT el = {
        CREATE_LOG_FILE, // id
        NULL,            // src
        0,               // size
        0                // offset
    };
    FileCtrl_EnQueue(&el);

    return 0;
}

int8_t FileManager_WriteLogHeader(uint32_t *src, uint32_t size,
                                  uint32_t offset) {
    ST_QUEUE_ELEMENT el = {
        WRITE_LOG_HEADER, // id
        src,              // src
        size,             // size
        offset            // offset
    };
    FileCtrl_EnQueue(&el);

    return 0;
}

int8_t FileManager_WriteLogPayload(uint32_t *src, uint32_t size,
                                   uint32_t offset) {
    ST_QUEUE_ELEMENT el = {
        WRITE_LOG_PAYLOAD, // id
        src,               // src
        size,              // size
        offset             // offset
    };
    FileCtrl_EnQueue(&el);

    return 0;
}

int8_t FileManager_CloseLogFile(void) {
    ST_QUEUE_ELEMENT el = {
        CLOSE_LOG_FILE, // id
        NULL,           // src
        0,              // size
        0               // offset
    };
    FileCtrl_EnQueue(&el);

    return 0;
}
