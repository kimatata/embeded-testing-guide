---
sidebar_position: 2
---

# Building Test Code

<!-- Build using CMake. Here is an example of a CMakeLists.txt for building the sample code in this repository. You will need to modify it according to the directory structure of your project. -->

Build using CMake. As an example, here is the CMakeLists.txt to build the sample code in this repository. You will need to modify it to suit your project directory structure.

- The product code is located under the `product` directory.
- The `test` directory contains both the `double` directory and the `test` directory.
  - The `test/double` directory contains double code, used to replace code that only runs on the microcontroller during test execution.
  - The `test/test` directory contains the test code.

## Directory Structure

```markdown title="Structure of sample code"
code
  ├─ product
  |   ├─ ..
  |   └─ ledCtrl
  |        ├─ led.c
  |        ├─ led.h
  |        ├─ ledCtrl.c
  |        ├─ ledCtrl.h
  |        └─ CMakeLists.txt
  └─ test
      ├─ double
      |    ├─ ..
      |    ├─ led.c
      |    ├─ led.h
      |    └─ CMakeLists.txt
      └─ test
           ├─ testLedCtrl.cpp
           ├─ ..
           ├─ testMain.cpp
           └─ CMakeLists.txt
```

### CMakeLists.txt for Double Library Generation

During test execution, it is necessary to replace the code that only runs on the microcontroller with doubles. `code/test/double/CMakeLists.txt` is needed to build the double code and generate the double library.

```cmake title="code/test/test/CMakeLists.txt"
# Create the double library
add_library(double SHARED
  board.c
  led.c
)

target_include_directories(double PUBLIC ${PROJECT_SOURCE_DIR}/test/double)
```

### CMakeLists.txt for Building the Product Code ledCtrl Library

The product code under test is built and turned into a library. By using `include_directories(../test/double)`, the double library is included to resolve dependencies.

```cmake title="code/product/ledCtrl/CMakeLists.txt"
# Define environment variables
add_definitions(-DTEST_ENV)

# Include double for resolving dependencies
include_directories(../test/double)

# Create the ledCtrl library
add_library(ledCtrl SHARED
  ledCtrl.c
  ledImpl.c
)

target_include_directories(ledCtrl PUBLIC ${PROJECT_SOURCE_DIR}/product/led)
target_link_libraries(ledCtrl double)
```

### CMakeLists.txt for Generating the Test Executable

`code/test/test/CMakeLists.txt` is used to build the test executable. Once the build is successful, the test executable is generated.

```cmake title="code/test/test/CMakeLists.txt"
cmake_minimum_required(VERSION 3.14)
project(embeded-testing-guide
    DESCRIPTION "google test for embeded code"
    HOMEPAGE_URL "https://github.com/kimatata/embeded-testing-guide"
)

# Coverage flags for GCC/Clang
set(CMAKE_CXX_FLAGS "${CMAKE_CXX_FLAGS} --coverage")
set(CMAKE_C_FLAGS "${CMAKE_C_FLAGS} --coverage")
set(CMAKE_EXE_LINKER_FLAGS "${CMAKE_EXE_LINKER_FLAGS} --coverage")

# Locate GTest (includes Google Mock as well)
find_package(GTest REQUIRED)

include_directories(${GTEST_INCLUDE_DIRS})

# Add the ledCtrl library directory
add_subdirectory(../double/ build/double)
add_subdirectory(../../product/armCtrl build/armCtrl)
add_subdirectory(../../product/counter build/counter)
add_subdirectory(../../product/fileManager build/fileManager)
add_subdirectory(../../product/ledCtrl build/ledCtrl)

# Link runTests with what we want to test and the GTest and pthread library
add_executable(runTests testMain.cpp)
target_link_libraries(runTests ${GTEST_LIBRARIES} gmock gmock_main pthread double armCtrl counter fileManager ledCtrl)
```
