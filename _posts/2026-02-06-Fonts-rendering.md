---
layout: post
title: Text Rendering - A New Approach for Small Glyphs
image: /media/2026-02-06.jpg
tags:
  - Development
pinned: false
---
Text rendering is a critical part of any game engine. Without text, there are no interfaces, no dialogues, no information.

For a long time, Thunder Engine used SDF glyph rendering, which worked great for large text but proved less than ideal for small font sizes. Glyphs lost sharpness and appeared blurry—achieving perfect quality wasn't possible.

🔍 What I noticed:
Unreal Engine doesn't use SDF for UI text—it uses regular bitmap glyphs instead. And this looks significantly better at small sizes!

⚙️ What's been done:
After a major refactoring and optimization of the text rendering system, I created a Pull Request that adds support for a non-SDF rendering option. Now you can choose between:

✅ SDF for large, stylized text
✅ Bitmap glyphs for small, readable text

![BeforeAndAfter](/media/2026-02-06.jpg)

This step will not only improve the quality of interfaces but also expand design possibilities.
