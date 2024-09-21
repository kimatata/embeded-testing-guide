---
sidebar_position: 2
---

# テストコードのビルド

CMakeによりビルドする

例として本レポジトリのサンプルコードをビルドする`CMakeLists.txt`を紹介する。プロジェクトのディレクトリ構造に従って修正が必要となる。

## ディレクトリ構造

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

### プロジェクト

サブディレクトリのCMakeLists.txtを登録

```CMakeLists.txt title="./CMakeLists.txt"
cmake_minimum_required(VERSION 3.13)
project(test_suite)

# サブディレクトリを登録
add_subdirectory(product)
add_subdirectory(test/test)
```

### テストコード

```CMakeLists.txt title="test/test/CMakeLists.txt"
# GTestの配置
find_package(GTest REQUIRED)
include_directories(${GTEST_INCLUDE_DIRS})

# 実行ファイル作成
add_executable(runTestSuite testled.cpp testFileManager.cpp)

# runTestSuiteをコンパイルする際に必要なライブラリをリンク
target_link_libraries(runTestSuite ${GTEST_LIBRARIES} pthread led fileManger doubles)
```

### ダブル

```CMakeLists.txt title="Test/double/CMakeLists.txt"
# doublesライブラリ作成
add_library(doubles SHARED
    ledCtrl.c
    fileCtrl.c
)

target_include_directories(doubles PUBLIC ${PROJECT_SOURCE_DIR}/test/double)
```

### テスト対象コード

テスト対象コードが増えるたびに各フォルダ配下に`CmakeLists.txt`を追加します。

```CMakeLists.txt title="led/CMakeLists.txt"
# 環境変数
add_definitions(-DTEST_ENV)

# 依存関係解消用のダブルを読み込み
include_directories(../Test/double)

# ledライブラリ作成
add_library(led SHARED
  src/led/ledCtrl.c
  src/led/ledImple.c
)

target_include_directories(led PUBLIC ${PROJECT_SOURCE_DIR}/led)
```

```CMakeLists.txt title="fileManager/CMakeLists.txt"
# 環境変数
add_definitions(-DTEST_ENV)

# 依存関係解消用のダブルを読み込み
include_directories(../Test/double)

# fileManagerライブラリ作成
add_library(fileManager SHARED
  src/fileManager/fileCtrl.c
)

target_include_directories(fileManager PUBLIC ${PROJECT_SOURCE_DIR}/fileManager)
```