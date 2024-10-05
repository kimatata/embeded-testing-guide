---
sidebar_position: 1
---

# Google Testのインストール

Google TestをLinux上で動かす方法を紹介します。もしWindowsにLinuxを導入する方法がわからない場合は[WSL2を導入する方法](./wsl.md)で説明していますのでそれを参考にしてください。

事前に必要なパッケージをインストールします。

|パッケージ名|用途|
|-|-|
|`build-essential`|c, c++のビルド|
|`cmake`|プロジェクトのビルドに使用|
|`lcov`|テストカバレッジ表示ツール|

Ubuntuでは以下のコマンドでインストールできます。使用するディストリビューションによって適宜コマンドは変更してください。

```bash title=""
sudo apt install build-essential
sudo apt install lcov
sudo apt install cmake
```

### googletestのインストール

:::info

googletest用のパッケージ`libgtest-dev`が存在しますが、古いバージョンだとgoogle mockが同梱されていないためソースコードをレポジトリから取得し、直接それをビルドして使用します。

:::


ソースコードをクローンします。

```bash
git clone https://github.com/google/googletest.git
cd googletest
```

ビルド用のディレクトリを作成します。

```bash
mkdir build
cd build
```

CMakeを使ってビルドを実行します。

```bash
cmake ..
make
```

ライブラリをシステムにインストールします。

```bash
sudo make install
```

これによりビルド成果物`libgmock.a`, `libgmock_main.a`, `libgtest.a`, `libgtest_main.a`が`/usr/local/lib`フォルダに配置され、googletest, googlemockが利用可能になりました。
