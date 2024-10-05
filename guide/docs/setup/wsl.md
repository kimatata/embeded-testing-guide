---
sidebar_position: 4
---

import wsl2 from "./img/wsl2.png";

# (Reference) Setting Up a Linux Environment Using WSL2

This section introduces how to set up WSL2 on Windows.

## WSL2

Run the following command in PowerShell with administrator privileges. After a while, the installation will complete, and you will be prompted to restart your system.

```bash
wsl --install
```

Please check the [microsoft's official page](https://learn.microsoft.com/en-us/windows/wsl/install) for details.

## Ubuntu

After restarting, WSL2 will be installed, and Ubuntu will automatically be installed as well. Set your username and password in the Ubuntu setup screen.

```bash
UNIX username: your-username
New Password: your-password
```

## Virtual Environment

By completing the steps up to this point, a Linux environment will be created on your Windows machine as shown in the diagram below.

<img src={wsl2} alt="wsl2" width="700" />[^1]

You can view the directory of the virtual environment by entering the following path in File Explorer.

```bash
\\wsl.localhost\Ubuntu\home\
```

# Clone a Repository

If you clone the repository on the Windows side, Linux will need to access the source code through a hypervisor each time, which makes the process very slow. To avoid this, clone the repository on the Linux side.

Create a working folder in a path like the one below:

```bash
\\wsl.localhost\Ubuntu\home\work\
```

Then clone your repository:

```bash
git clone --recursive git@your-repo.git
```

[^1]: https://thecodeblogger.com/2020/08/22/understanding-differences-between-wsl-1-and-wsl-2/