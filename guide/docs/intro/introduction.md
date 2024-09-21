---
sidebar_position: 1
---

import pyramid from "./img/pyramid.png";
import anti from "./img/anti.png";

# Current State of Embedded Software Development

I work for a manufacturer developing embedded software. Although I am not very experienced, the software development process in the projects I’ve been involved in was extremely outdated. There were no test codes at all, testing was done entirely manually, regression bugs frequently occurred, and delayed releases became the norm.

Why don’t we automate testing? When I asked my supervisors and colleagues, these were the answers I received:

- "We can’t do that because with embedded, we have to actually see things moving to understand."
- "Isn’t test code something for web development?"
- "Embedded software runs on embedded devices, so emulating them is difficult."
- "What’s test code?"

Overall, the sentiment was that automating tests was impossible. As a result, manual testing was seen as the only way forward.

I understand what they mean. In web app development, you have a unified environment like browsers, and there are excellent open-source tools like Selenium or Playwright. However, creating software to emulate each of the countless embedded devices used by different companies and projects is not feasible, except in fields like medical or space where a single bug can have catastrophic consequences.

But that only applies to manual tests (E2E tests). There’s no reason why unit tests or integration tests can’t be automated. In teams with little knowledge or experience in testing, automating tests tends to be confused with automating manual tests, like using capture-and-replay tools.

<img src={pyramid} alt="Test Pyramid" width="300" />[^1]

But embedded software is also just a collection of logic, so unit tests should be possible. In fact, most bugs found during manual testing or in the field were caused by logical errors, such as incorrect conditional branching. These are clearly not issues that manual testing should be responsible for catching.

In other words, my workplace was trying to catch all bugs through manual testing at the final stages of development. This naturally resulted in extended evaluation times. In terms of the test pyramid, our process was worse than the "ice cream cone" anti-pattern, as we didn’t have any unit tests at all.

<img src={anti} alt="Anti-pattern" width="300" />[^1]

To break free from this situation and improve quality by reducing manual testing workload and finding bugs earlier, I explained to my team that we needed to introduce unit tests into embedded software development. The reactions were mixed:

- Some didn’t quite understand the importance of testing.
- Some thought it seemed great but didn’t know how to implement it.
- Some said they were too busy with the current project to learn something new.

So, my efforts to get unit testing established in the team are still ongoing. I’ve introduced unit testing and CI for the product I’m involved with. I plan to continue promoting the benefits of testing by sharing the results with the team.

This guide is a slightly modified version of the materials I used to explain unit test adoption to my team. The product code examples have been replaced with dummies. I hope this will be helpful for those who understand the importance of testing but don’t know how to introduce unit tests into embedded development.

[^1]: [Software Engineering at Google Chapter 11: Testing Overview](https://abseil.io/resources/swe-book/html/ch11.html)
