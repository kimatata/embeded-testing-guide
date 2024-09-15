---
sidebar_position: 1
---

import wsl2 from "./img/wsl2.png";

# テスト環境構築

テスティングフレームワーク: GoogleTestを用いた環境構築方法

Linuxで実行するためwsl2, Ubuntuを用意する。

## WSL2

管理者権限でPowerShellにて以下のコマンドを実行

```bash
wsl --install
```

## Ubuntu

wsl2インストール時に自動でUbuntuがインストールされる。Ubuntuの画面で適当にuser名とパスワードを設定

```bash
UNIX username: your-username
New Password: your-password
```

## 仮想環境

ここまでの操作で以下の図のようにWindowsマシンにLinux環境が作成されている。

<img src={wsl2} alt="wsl2" width="700" />

エクスプローラーで以下のパスを打ち込めば仮想環境のディレクトリを見ることができる

```bash
\\wsl.localhost\Ubuntu\home\
```

## レポジトリクローン

Windows側にクローンしてしまうとLinuxが毎回ハイパーバイザを経由してソースコードにアクセスするため動作がとても遅くなるため、
Linux側にクローンしたほうがいいです。

以下ようなパスで適当な作業用フォルダを作成

```bash
\\wsl.localhost\Ubuntu\home\work\
```

```bash
git clone --recursive git@your-repo.git
```

## Googleテストのインストール

事前に必要なパッケージをインストール

- build-essential: c, c++のビルド
- lcov: テストカバレッジ表示ツール
- libgtest-dev: googletest(google mockも含まれる)
- cmake: プロジェクトのビルドに使用

```bash
sudo apt install build-essential
sudo apt install lcov
sudo apt install libgtest-dev
sudo apt install cmake
```

googleテストをcmakeでビルド

```bash
cd /usr/src/googletest
sudo cmake CMakeLists.txt
sudo make
```

ビルド結果(`gmock.a`, `gmock_main.a`, `gtest.a`, `gtest_main.a`)を`/usr/lib`フォルダに配置

```bash
cd lib/
sudo cp *.a /usr/lib
```

:::info

VirtualBox等wsl2以外の仮想環境を使っている場合は仮想環境が干渉する可能性があるため注意

:::
