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

`runTestSuite.sh`を実行するとルートディレクトリに`results.xml`というxmlファイルが出力される。
このxmlファイルはJUnit形式xmlフォーマットという形式で、テスト結果のデファクトスタンダードとなっている。

```xml title="results.xml"
TODO
```

Jenkins等様々な方法でHTML形式で見ることができる。以下はjunit-viewerというツールによってHTMLファイルを生成する方法
(node.jsが必要)

```bash
npm install -g junit-viewer
junit-viewer --results=results.xml --save=results.html
```

## カバレッジ

```bash
bash runTestSuite.sh --coverage
```

カバレッジ表示ツール`lcov`によって`Coverage`配下にカバレッジがhtmlで出力される。

TODO