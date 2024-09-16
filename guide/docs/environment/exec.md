---
sidebar_position: 3
---

# テストの実行

本レポジトリのサンプルコードの場合

```bash
cd code
bash runTestSuite.sh
```

## テスト結果

`runTestSuite.sh`を実行するとルートディレクトリに`results.xml`というxmlファイルが出力されます。
このxmlファイルはJUnit形式xmlフォーマットという形式で、テスト結果のデファクトスタンダードとなっており、Jenkins等のツールを使えばHTML形式で見ることもできます。

```xml title="results.xml"
TODO
```

## カバレッジ

```bash
bash runTestSuite.sh --coverage
```

カバレッジ表示ツール`lcov`によって`Coverage`配下にカバレッジがhtmlで出力されます。

TODO