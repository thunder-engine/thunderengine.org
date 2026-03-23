---
layout: post
title: Why You Need Unit Tests Even If You're Coding Alone (Part I)
image: /media/Books.png
tags:
  - Development
pinned: false
---
Last time we talked about development, and I decided it's worth mixing in some educational content with the news updates. Today, let's discuss a topic that's close to heart — testing.

I fully understand that my readers aren't just seasoned game engine developers, but also people taking their first steps in development. In the previous post, I mentioned unit tests, and now I'd like to talk a bit about developing large projects and the role unit tests play in them.

**When Your Project Outgrows Your Head**

When your project crosses a certain threshold of complexity (everyone has their own limit), it becomes impossible to keep individual code blocks and their logic in your head.

You write a block of code, switch to another part of the project, and when you come back a couple of months later, you can barely remember what that block does. And sometimes, there might be a dozen people working on the project. Your colleague then faces the difficult task of figuring out what you wrote and how to use or modify it without breaking anything.

Commenting every line of code can ease this problem, but it won't solve it completely. And that's where unit tests come to the rescue.

**What Are They For?**

Unit tests help "avoid" breakages caused by incorrect changes — what we call regressions. By running the tests, a developer can quickly get a report on whether a particular function in your project is working correctly.

Unit tests are part of a larger testing group called "automated tests." We could talk at length about the differences and nuances of each testing type, but today I'll only touch on unit tests. Unit tests are the **foundation of the testing pyramid**! And like any pyramid, the widest part is at the bottom, which means there **should be A LOT** of unit tests.

**What Makes Good Tests?**

The main quality criterion for tests is **code coverage percentage**.

We write a test by creating specific conditions for the function being tested and verifying the result of its execution. We have the right to modify any fields in the class that contains the function under test. This principle is called **White-Box** testing.

Ideally, your code should have 100% test coverage. But this isn't always achievable.

Several issues can get in the way:
- Code complexity
- External dependencies
- Access to network/files/data sources

**Tools of the Trade**

There are many frameworks available for organizing testing in your project. For Thunder Engine, I use **GTest** from Google. It makes it easy to group unit tests and integrates well with development environments (IDEs).