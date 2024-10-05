---
sidebar_position: 3
---

import exec from "../../../../../docs/environment/img/exec.png";
import coverage from "../../../../../docs/environment/img/coverage.png";
import coverageDetail from "../../../../../docs/environment/img/coverageDetail.png";

# Test Execution Script

For the sample code in this repository, `runTests.sh` allows you to easily build the test executable, run the tests, and generate coverage output.

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

## Running the Tests

If you only want to run the tests, execute the script as shown below:

```bash
cd code
bash runTests.sh
```

The test results will be displayed in the terminal.

<img src={exec} alt="exec" width="700" />

## Generating Coverage Reports

If you want to generate a coverage report in addition to running the tests, execute the script with the `coverage` option as shown below:

```bash
cd code
bash runTests.sh --coverage
```

The coverage report will be output as an HTML file under code/coverage by the coverage tool lcov[^1].
You can check the coverage for each file.

<img src={coverage} alt="coverage" width="700" />

Clicking on the links for each file will show how many times each line has been executed.

<img src={coverageDetail} alt="coverageDetail" width="700" />

[^1]: https://github.com/linux-test-project/lcov
