---
sidebar_position: 1
---

import pyramid from "./img/pyramid.png";
import anti from "./img/anti.png";

# State of Embedded Software Development I Encountered

I work in embedded software development for a certain manufacturer. While I don't have a wealth of experience, the software development process of the projects I've been involved in was significantly behind the times. There was no test code, all tests were done manually, regressions occurred frequently, and release delays had become routine.

When I asked my superiors and colleagues why we weren’t automating tests, I received the following responses:

- "With embedded systems, you can't know for sure unless you run it on the actual device."
- "Isn't test code something for web development?"
- "Embedded software runs on embedded devices, so emulating that is tough."
- "What exactly is test code?"

In short, they believed test automation was impossible, and that we had no choice but to stick to our current approach.

I understand their point. In web application development, we have standardized environments like browsers and excellent open-source tools like Selenium and Playwright. But creating software to emulate one of the countless unique embedded devices for each company or project might not be cost-effective (though in fields like medical or aerospace, where a single bug could cause catastrophic damage, it might be necessary).

However, this only applies to manual testing (E2E testing). It’s no excuse for why unit tests or integration tests would be difficult. It felt like "embedded" was being used as an excuse to prematurely conclude that automation was impossible, without making an effort to gain sufficient knowledge about software testing, and sticking stubbornly to the current methods.

## Types of Testing

In my workplace, there is no such thing as unit testing; the only testing that occurs is system testing. All tests are performed manually, and bugs are mostly discovered at the final stages of development. In such a situation, even if I suggest test automation, they naturally only think of automating system tests. For example, in the web industry, capture-and-replay tools are often considered (especially by people unfamiliar with testing), but these tools merely replace manual testing and don’t lead to fundamental improvements in efficiency or quality.

<img src={pyramid} alt="Test Pyramid" width="300" />[^1]

Since embedded software is essentially a collection of logic, many bugs should be easily caught through unit tests. In fact, most of the bugs caught during manual testing or those found in the market were caused by logic issues, such as mistakes in conditional branching. Clearly, these are not problems that should be found through manual testing.

In other words, my workplace was trying to catch all bugs through manual testing at the final stages of development. Naturally, this leads to delays in evaluation. When viewed in terms of the test pyramid, this approach goes beyond the well-known "ice cream cone" anti-pattern; it’s even worse—there wasn’t even a cone (since there were no unit tests).

<img src={anti} alt="Anti-pattern" width="300" />[^1]

To address this inefficient testing structure, reduce the workload of manual testing, and improve quality through early bug detection, I communicated to my team the need for introducing unit tests in embedded software development.

## Team's Response

The team’s responses were mixed:

- Some didn’t really understand the concept of testing.
- Some thought it seemed impressive but didn’t know how to implement it.
- Others felt too busy with current projects to learn something new.

However, some members became interested in unit testing and have started adopting it. In fact, by introducing unit tests and CI into the product I’m responsible for, we’ve managed to shift bug detection from the system testing phase before release to the implementation phase. With the help of coverage reports, verifying whether we’ve fully covered branching conditions has become easier, allowing us to quantify test quality. Introducing these results has also sparked interest from other members.

That said, the effort to establish testing practices within the embedded software development team is still ongoing. We plan to continue demonstrating the benefits of unit test adoption and raising awareness of the importance of testing.

This guide is an adapted version of the materials I used to explain the method of introducing unit tests to my team. I hope it serves as a helpful reference for those who understand the importance of testing but are unsure how to implement unit tests in embedded software development.

[^1]: [Software Engineering at Google Chapter 11: Testing Overview](https://abseil.io/resources/swe-book/html/ch11.html)
