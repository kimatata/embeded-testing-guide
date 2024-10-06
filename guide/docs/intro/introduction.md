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

I understand their point. Web development has standardized environments, such as browsers, and there are excellent open-source tools for automating browser operations, like Selenium[^1] and Playwright[^2]. On the other hand, developing software to emulate the countless different embedded devices used by various companies and projects doesn’t seem cost-effective (though in fields like medical or aerospace, where a single bug can lead to catastrophic damage, it may be necessary).

However, this only applies to E2E testing. It doesn't mean that unit testing or integration testing is equally difficult. After all, embedded software is a collection of logic, and unit tests should be able to catch many bugs. In fact, most of the bugs discovered during manual testing or in the market were due to logic errors, such as mistakes in handling branching conditions. These are not issues that should be caught by manual testing. They are bugs that should be caught early through unit testing. To me, It felt like "embedded" was being used as an excuse to prematurely conclude that automation was impossible, without making an effort to gain sufficient knowledge about software testing, and sticking stubbornly to the current methods.

## Types of Testing

Implementing tests requires an initial investment, so it's important to assess how long it will take to see a return on that investment. E2E tests are generally slowe to finish, and it takes developers longer to receive feedback. Due to the larger scope of testing, they are also more prone to breaking when the specifications change. In contrast, unit tests are fast, providing developers with quick feedback, and have a smaller scope, making them less affected by changes in the specifications. Naturally, the test automation I want to introduce in embedded software development is unit testing, which brings quicker returns. Even at Google, it is recommended that about 80% of all tests should be unit tests3.

When I proposed automated testing to the team, I noticed that the conversation shifted to automating manual tests instead of unit tests. It’s no surprise, given that the team had only ever done manual testing, and the idea of unit testing didn’t exist in their minds. For example, they talked about developing a robot to perform manual tests instead of humans. This is similar to what sometimes happens in the web industry, where capture-and-replay tools are considered for automated testing by those unfamiliar with testing. However, these tools merely replace manual testing and do not lead to substantial improvements in efficiency or quality.

<img src={pyramid} alt="Test Pyramid" width="300" />[^3]

## 100% Manual Testing

As I mentioned, my workplace attempts to catch all bugs during the final stages of development through manual testing. This is an even worse situation than the “ice cream cone” anti-pattern known in test pyramids (since we don’t even have unit tests, there’s no cone). There’s no foundation to the pyramid.

<img src={anti} alt="Anti-pattern" width="300" />[^4]

I aimed to introduce unit testing in embedded software development to reduce the workload of manual testing and improve quality by catching bugs earlier. In fact, by implementing unit tests and CI in the products I manage, bugs were detected earlier during the implementation phase, rather than the pre-release system test phase. Coverage reports made it easy to verify whether branching conditions were fully covered, allowing us to quantify the quality of our tests.

## Team's Reactions

When I shared the results of introducing unit tests with the team, the reactions were mixed. Some were interested in implementing it in their own products, while others remained indifferent:

- "This is great! I want to implement this in my product too."
- "It seems impressive, but I’m not sure how to put it into practice."
- "I’m too busy with the current project to learn something new."
- "I don’t really get the point of unit testing."

Thus, the effort to instill testing practices in the embedded software development team is still ongoing. I plan to continue demonstrating the benefits of test implementation and raising awareness of the importance of testing.

This guide is a slightly revised version of the materials I used to explain how to introduce unit testing to my team. I hope it will be useful for those who understand the importance of testing but are unsure how to implement unit testing in embedded software development.

[^1]: [https://www.selenium.dev/](https://www.selenium.dev/)
[^2]: [https://playwright.dev/](https://playwright.dev/)
[^3]: [Software Engineering at Google Chapter 16: Testing Overview Figure 11-3](https://abseil.io/resources/swe-book/html/ch11.html)
[^4]: [Software Engineering at Google Chapter 16: Testing Overview Figure 11-4](https://abseil.io/resources/swe-book/html/ch11.html)
