---
sidebar_position: 4
---

import wsl2 from "./img/wsl2.png";

# (参考)WSL2を用いたLinux環境構築

ここではWindowsにWSL2を導入する方法を紹介します。

## WSL2

管理者権限でPowerShellにて以下のコマンドを実行します。しばらく待つとインストールが終わり再起動を促されます。

```bash
wsl --install
```

## Ubuntu

再起動するとwsl2のインストールが完了し、自動でUbuntuがインストールされます。Ubuntuの画面で適当にuser名とパスワードを設定します。

```bash
UNIX username: your-username
New Password: your-password
```

## 仮想環境

ここまでの操作で以下の図のようにWindowsマシンにLinux環境が作成されています。

<img src={wsl2} alt="wsl2" width="700" />[^1]

エクスプローラーで以下のパスを打ち込めば仮想環境のディレクトリを見ることができます。

```bash
\\wsl.localhost\Ubuntu\home\
```

## レポジトリクローン

Windows側にクローンしてしまうとLinuxが毎回ハイパーバイザを経由してソースコードにアクセスするため動作がとても遅くなってしまいます。それを回避するためLinux側にクローンしましょう。

以下ようなパスで適当な作業用フォルダを作成

```bash
\\wsl.localhost\Ubuntu\home\work\
```

```bash
git clone --recursive git@your-repo.git
```

[^1]: https://thecodeblogger.com/2020/08/22/understanding-differences-between-wsl-1-and-wsl-2/