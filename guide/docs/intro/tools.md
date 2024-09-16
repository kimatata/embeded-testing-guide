---
sidebar_position: 3
---

# 単体テストフレームワーク

組み込みソフトウェアで使用されるc言語の単体テストを実装するため自作のアサーションなどでテストを書くことも可能ですが、オープンソースのツールを利用したほうがよいでしょう。アサーション以外にもモックなど強力な機能もサポートしてくれます。

c言語のテスティングフレームワークは以下のものが有名です。

- [Unity](https://github.com/ThrowTheSwitch/Unity)
- [CppUTest](https://cpputest.github.io/)
- [Google Test](https://github.com/google/googletest)

:::tip

xUnitと呼ばれる各言語のテストフレームを総称する言葉があります。JavaのJUnitなどが有名です。ではc言語はCUnitがいいのではないか?と思うかもしれません。
実際[CUnit](https://cunit.sourceforge.net/)というテストフレームワークはありますが、最近はあまりメンテナンスされていないようなので別のテストフレームワークを使うことをお勧めします。

:::

Google testは特にモックのサポートが充実しているようだったので私のプロジェクトではGoogle testを採用しました。このガイドのテストコードもすべてGoogle testを使って書いています。Google testをインストールする方法も紹介していますのでGoogle testを使ってみたい方は参考にしてください。[GoogleTestのインストール方法](../environment/googletest.md)

ただし、このガイドはテストフレームワークの使い方ではなく組み込みソフト開発に単体テストを導入する手法に重きを置いています。どのテストフレームワークを採用しても一貫する考え方を紹介していますのでGoogle test以外のテストフレームワークを採用しているプロジェクトでも参考にしていただけると思います。
