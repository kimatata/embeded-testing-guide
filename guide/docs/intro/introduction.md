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

I understand their point. Web development has standardized environments, such as browsers, and there are excellent open-source tools for automating browser operations, like [Selenium](https://www.selenium.dev/) and [Playwrite](https://playwright.dev/). On the other hand, developing software to emulate the countless different embedded devices used by various companies and projects doesn’t seem cost-effective (though in fields like medical or aerospace, where a single bug can lead to catastrophic damage, it may be necessary).

However, this only applies to E2E testing. It doesn't mean that unit testing or integration testing is equally difficult. After all, embedded software is a collection of logic, and unit tests should be able to catch many bugs. In fact, most of the bugs discovered during manual testing or in the market were due to logic errors, such as mistakes in handling branching conditions. These are not issues that should be caught by manual testing. They are bugs that should be caught early through unit testing. To me, It felt like "embedded" was being used as an excuse to prematurely conclude that automation was impossible, without making an effort to gain sufficient knowledge about software testing, and sticking stubbornly to the current methods.

## Types of Testing

In automated testing, there are unit tests, integration tests, and E2E tests, but what type of testing should be introduced first in an environment that currently relies only on manual testing?

Unit tests have the advantage of being faster to execute compared to integration and E2E tests, allowing developers to get feedback quickly. Additionally, because the scope of code tested in unit tests is small, writing test code is relatively easy. On the other hand, while integration and E2E tests can more accurately replicate the behavior of the entire system, they take longer to execute and, due to their larger scope, are more susceptible to risks such as breaking when something goes wrong.

Since it takes a certain amount of effort to introduce automated testing, it’s essential to consider how quickly the investment will pay off. From this perspective, I believe that unit tests should be introduced first. Unit tests provide quicker returns, helping to accelerate the development cycle. Even Google recommends that about 80% of testing should consist of unit tests, positioning unit tests as the most important foundation in the testing pyramid.[^ratio]

When I first suggested automated testing to my team, I noticed that many people were focused on automating manual testing. The team had only ever done manual testing, so the concept of unit testing was unfamiliar. Naturally, their first thought was to automate the manual tests they were already performing. For example, they imagined building a robot that could perform manual tests in place of a human. This is similar to how capture & replay tools are often considered in the web industry, usually by those unfamiliar with proper testing practices. Such tools only replace manual tests and do not lead to significant improvements in testing efficiency or quality.

<img src={pyramid} alt="Test Pyramid" width="300" />[^pyramid]

## 100% Manual Testing

As I mentioned, my workplace attempts to catch all bugs during the final stages of development through manual testing. This is an even worse situation than the “ice cream cone” anti-pattern known in test pyramids (since we don’t even have unit tests, there’s no cone). There’s no foundation to the pyramid.

<img src={anti} alt="Anti-pattern" width="300" />[^antipattern]

I aimed to introduce unit testing in embedded software development to reduce the workload of manual testing and improve quality by catching bugs earlier. In fact, by implementing unit tests and CI in the products I manage, bugs were detected earlier during the implementation phase, rather than the pre-release system test phase. Coverage reports made it easy to verify whether branching conditions were fully covered, allowing us to quantify the quality of our tests.

## Team's Reactions

When I shared the results of introducing unit tests with the team, the reactions were mixed. Some were interested in implementing it in their own products, while others remained indifferent:

- "This is great! I want to implement this in my product too."
- "It seems impressive, but I’m not sure how to put it into practice."
- "I’m too busy with the current project to learn something new."
- "I don’t really get the point of unit testing."

Thus, the effort to instill testing practices in the embedded software development team is still ongoing. I plan to continue demonstrating the benefits of test implementation and raising awareness of the importance of testing.

This guide is a slightly revised version of the materials I used to explain how to introduce unit testing to my team. I hope it will be useful for those who understand the importance of testing but are unsure how to implement unit testing in embedded software development.

[^ratio]: [Software Engineering at Google Chapter 16: Testing Overview Test Scope](https://abseil.io/resources/swe-book/html/ch11.html)
[^pyramid]: [Software Engineering at Google Chapter 16: Testing Overview Figure 11-3](https://abseil.io/resources/swe-book/html/ch11.html)
[^antipattern]: [Software Engineering at Google Chapter 16: Testing Overview Figure 11-4](https://abseil.io/resources/swe-book/html/ch11.html)
