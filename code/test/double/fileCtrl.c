#include "../../product/fileManager/fileCtrl.h"

static void non_pro(ST_QUEUE_ELEMENT *el) {
  // do nothing
}

// dummy
void (*FileCtrl_EnQueue)(ST_QUEUE_ELEMENT *el) = non_pro;
