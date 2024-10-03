cmake_minimum_required(VERSION 3.14)
project(embeded-testing-guide
    DESCRIPTION "google test for embeded code"
    HOMEPAGE_URL "https://github.com/kimatata/embeded-testing-guide"
)

# Locate GTest (includes Google Mock as well)
find_package(GTest REQUIRED)

include_directories(${GTEST_INCLUDE_DIRS})

# Add the ledCtrl library directory
add_subdirectory(../double/ build/double)
add_subdirectory(../../product/fileManager build/fileManager)
add_subdirectory(../../product/ledCtrl build/ledCtrl)

# Link runTests with what we want to test and the GTest and pthread library
add_executable(runTests testMain.cpp)
target_link_libraries(runTests ${GTEST_LIBRARIES} gmock gmock_main pthread double fileManager ledCtrl)
