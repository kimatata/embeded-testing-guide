# Create the myDouble library
add_library(myDouble SHARED
    fileCtrl.c
)

target_include_directories(myDouble PUBLIC ${PROJECT_SOURCE_DIR}/test/double)