"use strict";(self.webpackChunkguide=self.webpackChunkguide||[]).push([[958],{1185:e=>{e.exports=JSON.parse('{"version":{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"noIndex":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"tutorialSidebar":[{"type":"category","label":"Intro","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"State of Embedded Software Development I Encountered","href":"/embeded-testing-guide/docs/intro/introduction","docId":"intro/introduction","unlisted":false},{"type":"link","label":"Benefits of Introducing Unit Tests","href":"/embeded-testing-guide/docs/intro/benefits","docId":"intro/benefits","unlisted":false},{"type":"link","label":"Unit Testing Frameworks","href":"/embeded-testing-guide/docs/intro/tools","docId":"intro/tools","unlisted":false}]},{"type":"category","label":"Guide","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Unit Testing Methods","href":"/embeded-testing-guide/docs/guide/pattern","docId":"guide/pattern","unlisted":false},{"type":"link","label":"Dependencies","href":"/embeded-testing-guide/docs/guide/dependencies","docId":"guide/dependencies","unlisted":false}]},{"type":"category","label":"How to Break Dependency","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Dependency Separation","href":"/embeded-testing-guide/docs/how-to-break-dependency/methods","docId":"how-to-break-dependency/methods","unlisted":false},{"type":"link","label":"Extracting Logic","href":"/embeded-testing-guide/docs/how-to-break-dependency/extract","docId":"how-to-break-dependency/extract","unlisted":false},{"type":"link","label":"Replacing with Compile Switches","href":"/embeded-testing-guide/docs/how-to-break-dependency/compile-switch","docId":"how-to-break-dependency/compile-switch","unlisted":false},{"type":"link","label":"Replacing with the Linker","href":"/embeded-testing-guide/docs/how-to-break-dependency/link","docId":"how-to-break-dependency/link","unlisted":false},{"type":"link","label":"Replacing with Mocks","href":"/embeded-testing-guide/docs/how-to-break-dependency/mock","docId":"how-to-break-dependency/mock","unlisted":false},{"type":"link","label":"Replacing with Function Pointers","href":"/embeded-testing-guide/docs/how-to-break-dependency/functional-pointer","docId":"how-to-break-dependency/functional-pointer","unlisted":false}]},{"type":"category","label":"Setup","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Installing Google Test","href":"/embeded-testing-guide/docs/setup/googletest","docId":"setup/googletest","unlisted":false},{"type":"link","label":"Building Test Code","href":"/embeded-testing-guide/docs/setup/build","docId":"setup/build","unlisted":false},{"type":"link","label":"Test Execution Script","href":"/embeded-testing-guide/docs/setup/exec","docId":"setup/exec","unlisted":false},{"type":"link","label":"(Reference) Setting Up a Linux Environment Using WSL2","href":"/embeded-testing-guide/docs/setup/wsl","docId":"setup/wsl","unlisted":false}]},{"type":"link","label":"Best Practices","href":"/embeded-testing-guide/docs/best-practice/","docId":"best-practice/index","unlisted":false},{"type":"link","label":"References","href":"/embeded-testing-guide/docs/reference/","docId":"reference/index","unlisted":false}]},"docs":{"best-practice/index":{"id":"best-practice/index","title":"Best Practices","description":"How to Test Private Functions","sidebar":"tutorialSidebar"},"guide/dependencies":{"id":"guide/dependencies","title":"Dependencies","description":"When attempting to apply unit testing to embedded product code, you may find that the code under test depends on code that only runs on the microcontroller, causing the build to fail in the test environment. These dependencies on hardware or microcontroller operation are called collaborators. To enable testing, you need to isolate these collaborators or replace them with test doubles.","sidebar":"tutorialSidebar"},"guide/pattern":{"id":"guide/pattern","title":"Unit Testing Methods","description":"In general, test code checks expected values using the following three patterns:","sidebar":"tutorialSidebar"},"how-to-break-dependency/compile-switch":{"id":"how-to-break-dependency/compile-switch","title":"Replacing with Compile Switches","description":"This method involves branching in the product code with compile switches to call functions appropriate for each environment, depending on microcontroller or hardware dependencies. This approach should be avoided because the product code is modified specifically for testing and the code becomes complex.","sidebar":"tutorialSidebar"},"how-to-break-dependency/extract":{"id":"how-to-break-dependency/extract","title":"Extracting Logic","description":"Existing product code that hasn\u2019t introduced tests is likely not designed with testing in mind, meaning output-based tests will be challenging. While it\u2019s possible to write tests using mocks without modifying the product code, test code using mocks tends to become complex.","sidebar":"tutorialSidebar"},"how-to-break-dependency/functional-pointer":{"id":"how-to-break-dependency/functional-pointer","title":"Replacing with Function Pointers","description":"There are cases where you want to alternate between product code and test doubles on a per-test-case basis within a single test suite executable. In such cases, you can use \\"replacing with function pointers.\\"","sidebar":"tutorialSidebar"},"how-to-break-dependency/link":{"id":"how-to-break-dependency/link","title":"Replacing with the Linker","description":"This method involves linking test-specific code instead of the product code during the build process. Since the product code remains untouched and the process is simple, this approach is recommended whenever possible.","sidebar":"tutorialSidebar"},"how-to-break-dependency/methods":{"id":"how-to-break-dependency/methods","title":"Dependency Separation","description":"There are several patterns for breaking dependencies:","sidebar":"tutorialSidebar"},"how-to-break-dependency/mock":{"id":"how-to-break-dependency/mock","title":"Replacing with Mocks","description":"Mocks are a type of double that replaces DOC. Unlike dummies or spies, you don\'t need to create mocks yourself; they are provided by testing frameworks. If you\'re using GoogleTest, you can take advantage of GoogleMock.","sidebar":"tutorialSidebar"},"intro/benefits":{"id":"intro/benefits","title":"Benefits of Introducing Unit Tests","description":"This chapter explains the general benefits of introducing unit tests. If you are already familiar with unit tests, you don\u2019t need to read this section. If you are eager to know how to introduce unit tests into embedded software development, please proceed to the next chapter.","sidebar":"tutorialSidebar"},"intro/introduction":{"id":"intro/introduction","title":"State of Embedded Software Development I Encountered","description":"I work in embedded software development for a certain manufacturer. While I don\'t have a wealth of experience, the software development process of the projects I\'ve been involved in was significantly behind the times. There was no test code, all tests were done manually, regressions occurred frequently, and release delays had become routine.","sidebar":"tutorialSidebar"},"intro/tools":{"id":"intro/tools","title":"Unit Testing Frameworks","description":"For implementing unit tests in C used in embedded software, it is possible to write tests using self-made assertions, but it is better to use open-source tools. In addition to assertions, powerful features such as mocking and coverage measurement are available.","sidebar":"tutorialSidebar"},"reference/index":{"id":"reference/index","title":"References","description":"Test Driven Development for Embedded C","sidebar":"tutorialSidebar"},"setup/build":{"id":"setup/build","title":"Building Test Code","description":"Build using CMake. As an example, here is the CMakeLists.txt to build the sample code in this repository. You will need to modify it to suit your project directory structure.","sidebar":"tutorialSidebar"},"setup/exec":{"id":"setup/exec","title":"Test Execution Script","description":"For the sample code in this repository, runTests.sh allows you to easily build the test executable, run the tests, and generate coverage output.","sidebar":"tutorialSidebar"},"setup/googletest":{"id":"setup/googletest","title":"Installing Google Test","description":"I will show you how to run Google Test on Linux. If you\'re not sure how to set up Linux on Windows, refer to the WSL2 setup guide.","sidebar":"tutorialSidebar"},"setup/wsl":{"id":"setup/wsl","title":"(Reference) Setting Up a Linux Environment Using WSL2","description":"This section introduces how to set up WSL2 on Windows.","sidebar":"tutorialSidebar"}}}}')}}]);