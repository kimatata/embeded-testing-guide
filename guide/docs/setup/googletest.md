---
sidebar_position: 1
---

# Installing Google Test

I will show you how to run Google Test on Linux. If you're not sure how to set up Linux on Windows, refer to the [WSL2 setup guide](./wsl.md).

First, install the necessary packages.

|package|use|
|-|-|
|`build-essential`|Used for building C and C++|
|`cmake`|Used for building projects|
|`lcov`|Tool for displaying test coverage|

On Ubuntu, you can install them with the following commands. Adjust the commands as needed depending on your Linux distribution.

```bash title=""
sudo apt install build-essential
sudo apt install lcov
sudo apt install cmake
```

### Installing GoogleTest

:::info

A package for GoogleTest, `libgtest-dev`, exists, but older versions do not include Google Mock. Therefore, it's recommended to clone the repository and build the source code directly.

:::

Clone the source code:

```bash
git clone https://github.com/google/googletest.git
cd googletest
```

Create a build directory:

```bash
mkdir build
cd build
```

Build using CMake:

```bash
cmake ..
make
```

Install the libraries into your system:

```bash
sudo make install
```

This will place the build binary `libgmock.a`, `libgmock_main.a`, `libgtest.a`, and `libgtest_main.a` in the /usr/local/lib folder, making GoogleTest and GoogleMock available for use.