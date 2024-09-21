---
sidebar_position: 2
---

# Building Test Code

Build using CMake.

Here is an example of a CMakeLists.txt for building the sample code in this repository. You will need to modify it according to the directory structure of your project.

## Directory Structure

```markdown
`code`
├─ `product`
|    ├─ `led`
|    └─ `fileManger`
├─ `test`
|    ├─ `test`
|    |     ├─ `testled.cpp`
|    |     └─ `testFileManager.cpp`
|    └─ `double`
└─ `CMakeLists.txt`
```

## CMakeLists.txt

### Project

Register the `CMakeLists.txt` files in subdirectories.

```CMakeLists.txt title="./CMakeLists.txt"
cmake_minimum_required(VERSION 3.13)
project(test_suite)

# Register subdirectories
add_subdirectory(product)
add_subdirectory(test/test)
```

### Test Code

```CMakeLists.txt title="test/test/CMakeLists.txt"
# Include GTest
find_package(GTest REQUIRED)
include_directories(${GTEST_INCLUDE_DIRS})

# Create an executable
add_executable(runTestSuite testled.cpp testFileManager.cpp)

# Link necessary libraries when compiling runTestSuite
target_link_libraries(runTestSuite ${GTEST_LIBRARIES} pthread led fileManger doubles)
```

### Doubles

```CMakeLists.txt title="Test/double/CMakeLists.txt"
# Create the doubles library
add_library(doubles SHARED
    ledCtrl.c
    fileCtrl.c
)

target_include_directories(doubles PUBLIC ${PROJECT_SOURCE_DIR}/test/double)
```

### Production Code

As more production code is added, create additional `CMakeLists.txt` files in each folder.

```CMakeLists.txt title="led/CMakeLists.txt"
# Define environment variables
add_definitions(-DTEST_ENV)

# Include doubles for resolving dependencies
include_directories(../Test/double)

# Create the led library
add_library(led SHARED
  src/led/ledCtrl.c
  src/led/ledImple.c
)

target_include_directories(led PUBLIC ${PROJECT_SOURCE_DIR}/led)
```

```CMakeLists.txt title="fileManager/CMakeLists.txt"
# environment variables
add_definitions(-DTEST_ENV)

# Include doubles for resolving dependencies
include_directories(../Test/double)

# Create the fileManager library
add_library(fileManager SHARED
  src/fileManager/fileCtrl.c
)

target_include_directories(fileManager PUBLIC ${PROJECT_SOURCE_DIR}/fileManager)
```