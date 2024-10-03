# Create the double library
add_library(double SHARED
  board.c
  led.c
  fileCtrl.c
)

target_include_directories(double PUBLIC ${PROJECT_SOURCE_DIR}/test/double)
