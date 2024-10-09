---
sidebar_position: 3
---

# 単体テスティングフレームワーク

組み込みソフトウェアで使用されるC言語の単体テストを実装する際、自作のアサーション[^assertion]でテストを書くことも可能です。

```c title="自作のアサーション"
#define ASSERT_EQUAL(expected, actual) \
    if ((expected) != (actual)) { \
        printf("Assertion failed: expected %d, but got %d\n", (expected), (actual)); \
    } else { \
        printf("Assertion succeeded: %d == %d\n", (expected), (actual)); \
    }

int main() {
  int a = 5;
  int b = 5;

  ASSERT_EQUAL(a, b);
}
```

しかし、効率を考えると、オープンソースのツールを利用することを強くお勧めします。これらのツールはアサーションだけでなく、モックやカバレッジ計測など、より強力な機能を提供してくれます。

c言語のテスティングフレームワークは以下のものが有名です。

- [Unity](https://github.com/ThrowTheSwitch/Unity)
- [CppUTest](https://cpputest.github.io/)
- [Google Test](https://github.com/google/googletest)

:::tip[xUnit]

xUnitと呼ばれる各言語のテスティングフレームワークを総称する言葉があります。Javaの[JUnit](https://junit.org/)などが有名です。ではc言語はCUnitがいいのではないか?と思うかもしれません。
実際[CUnit](https://cunit.sourceforge.net/)というテスティングフレームワークはありますが、最近はあまりメンテナンスされていないようなので別のテスティングフレームワークを使うことをお勧めします。

:::

私のプロジェクトでは、特にモックのサポートが充実しているGoogle Testを採用しました。このガイドのテストコードもすべてGoogle testを使って書いています。Google Testのインストール方法についてもこちらで詳しく紹介していますので、興味のある方はぜひご参照ください。[GoogleTestのインストール方法](../setup/googletest.md)

ただし、このガイドは特定のテスティングフレームワークの使い方に焦点を当てたものではなく、組み込みソフトウェア開発に単体テストを導入するための方法を広く紹介しています。どのテスティングフレームワークを採用しても、一貫して適用できる原則を説明していますので、Google Test以外のフレームワークを使用する場合にも、参考にしていただける内容になっています。

[^assertion]: テスティングフレームワークで「アサーション」とは、期待される結果と実際の結果を比較し、その一致を検証するための文（ステートメント）のことです。もし一致しない場合、テストは失敗として報告されます。一般的なアサーションとしては、「値が等しいか確認する」「値がnullでないか確認する」などがあり、テストの成否を判断する重要な役割を担います。
