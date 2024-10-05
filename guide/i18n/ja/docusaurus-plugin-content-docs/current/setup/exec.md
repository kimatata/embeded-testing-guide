---
sidebar_position: 3
---

import exec from "./img/exec.png";
import coverage from "./img/coverage.png";
import coverageDetail from "./img/coverageDetail.png";

# テスト実行用スクリプト

本レポジトリのサンプルコードの場合、`runTests.sh`によってテスト実行ファイルのビルド、テストの実行、カバレッジの出力を簡単に実行できるようになっています。

```bash title="code/runTests.sh"
#!/bin/bash

# check coverage flag
if [ "$1" == "--coverage" ]; then
    echo "Coverage mode enabled."
    COVERAGE_FLAGS="-DCMAKE_CXX_FLAGS=--coverage -DCMAKE_C_FLAGS=--coverage"
else
    echo "Running tests without coverage."
    COVERAGE_FLAGS=""
fi

# build
cd test/test
cmake $COVERAGE_FLAGS CMakeLists.txt
make

# run test suites
./runTests

# if coverage enabled, generate coverage report
if [ "$1" == "--coverage" ]; then
    echo "Generating coverage report..."
    # create coverage directory
    mkdir -p ../../coverage
    # colect coverage info
    lcov --capture --directory . --output-file coverage.info
    # remove test code, google test code, and other library code coverage from report
    lcov --remove coverage.info '/usr/*' '*/gtest/*' '*/gmock/*' '*/test/*' --output-file coverage_filtered.info
    # generate coverage report
    genhtml coverage_filtered.info --output-directory ../../coverage
    echo "Coverage report generated in root/coverage directory."
fi
```

## テストの実行

ただテストのみ実行したい場合は以下のようにスクリプトを実行してください。

```bash
cd code
bash runTests.sh
```

ターミナルにテスト結果が表示されます。

<img src={exec} alt="exec" width="700" />

## カバレッジレポート生成

テストの実行に加え、カバレッジレポートを生成したい場合は以下のように`coverage`オプションをつけてスクリプトを実行してください。

```bash
cd code
bash runTests.sh --coverage
```

カバレッジ表示ツールlcov[^1]によって`code/coverage`配下にカバレッジレポートが html で出力されます。
各ファイルごとのカバレッジを確認できます。

<img src={coverage} alt="coverage" width="700" />

各ファイルのリンクをクリックするとどの行を何回通過したかまで確認することができます。

<img src={coverageDetail} alt="coverageDetail" width="700" />

[^1]: https://github.com/linux-test-project/lcov
