---
sidebar_position: 3
---

# Running Tests

For the sample code in this repository:

```bash
cd code
bash runTestSuite.sh
```

## Test Results

After running `runTestSuite.sh`, an XML file named `results.xml` will be generated in the root directory. This file follows the JUnit XML format, which is the de facto standard for test results. By using tools like Jenkins, you can view the results in HTML format.

```xml title="results.xml"
TODO
```

## Coverage

```bash
bash runTestSuite.sh --coverage
```

The coverage tool `lcov` will output coverage data in HTML format under the `Coverage` directory.

TODO