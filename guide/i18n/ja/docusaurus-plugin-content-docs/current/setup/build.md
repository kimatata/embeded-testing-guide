---
sidebar_position: 2
---

# テストコードのビルド

CMakeでビルドします。例として本レポジトリのサンプルコードのディレクトリ構成と`CMakeLists.txt`を紹介します。プロジェクトのディレクトリ構造に従って修正が必要です。

## ディレクトリ構造

```markdown title="サンプルコードの構成"
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

- `product`ディレクトリ配下にプロダクトコードを配置しています。
- `test`には`double`ディレクトリと`test`ディレクトリが含まれます。
  - `test/double`にはテスト実行時にマイコン上でのみ動作するコード置き換えるためのダブルのコードを配置しています。
  - `test/test`にはテストコードを配置しています。

### ダブルライブラリ生成用CMakeLists.txt

テストスイート実行時にマイコン上でのみ動作するコードをダブルで置き換える必要があります。
`code/test/double/CMakeLists.txt`はダブルのコードをビルドし、ダブルライブラリを生成するために必要です。

```cmake title="code/test/test/CMakeLists.txt"
# Create the double library
add_library(double SHARED
  board.c
  led.c
)

target_include_directories(double PUBLIC ${PROJECT_SOURCE_DIR}/test/double)
```

### プロダクトコードledCtrlライブラリ生成用CMakeLists.txt

テスト対象となるプロダクトコードをビルドし、ライブラリ化します。
`include_directories(../test/double)`によってダブルライブラリを読み込むことで依存関係を解消しています。

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

### テスト実行ファイル生成用CMakeLists.txt

`code/test/test/CMakeLists.txt`はテスト実行ファイルをビルドするためのファイルです。
ビルドが成功すると`runTests`という名前のテスト実行ファイルが生成されます。

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
