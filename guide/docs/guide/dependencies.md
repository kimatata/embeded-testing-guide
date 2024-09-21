---
sidebar_position: 2
---

import colaborator from "./img/colaborator.png";

# Dependencies

When attempting to apply unit testing to embedded product code, you may find that the code under test depends on code that only runs on the microcontroller, causing the build to fail in the test environment. These dependencies on hardware or microcontroller operation are called collaborators. To enable testing, you need to isolate these collaborators or replace them with test doubles.

<img src={colaborator} alt="Collaborator" width="500" />

||Abbreviation|Description|
|-|-|-|
|CUT|Code Under Test|The code being tested|
|DOC|Depended on Components|The code that the CUT depends on|
|TDOC|Transitively DOC|The code that the CUT depends on indirectly|

The CUT is the logic you want to test. DOC includes code that is hardware-dependent. You want to test the logic of the CUT, but since the DOC depends on hardware, you cannot build the test code.

:::info[Reference: What are Test Doubles?]

Test doubles are a collective term for fakes, spies, dummies, mocks, etc.
- Dummy: Used only to allow linkage
- Stub: Returns fixed values
- Mock: Checks the function name, parameters, and the order in which other functions are called; provided by testing frameworks
- Spy: A mock created by the user

:::
