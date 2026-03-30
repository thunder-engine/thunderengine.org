---
layout: post
title: Editor logs are now available! Plus a couple of important changes
image: /media/Crates.png
tags:
  - Development
pinned: false
---
You asked — I listened. A few days ago, someone asked me: "Where can I get the editor logs?"

And I thought… yeah, why aren’t they available? Previously, logs only existed for game builds. In the editor, you'd just get console output — and that was it. But that’s clearly not enough, especially when you're trying to figure out why the editor crashed.

**What's been done:**
- Rewritten the logging system — it now works differently and covers more scenarios  
- Added log rotation — logs no longer grow indefinitely  
- Added a backtracer for crashes — with log output. Now when a crash occurs, the call stack is visible

**Where to find editor logs now:**  
`C:\Users\%username%\AppData\Local\ThunderEngine\WorldEditor`

**Important change: registry paths**

Previously, the developer organization was named FrostSpear (a fictional name I wanted to conquer the world with). Now it's officially — **ThunderEngine**.

This means your editor settings might "disappear." To fix this, you need to manually change the registry path:

**Was:**  
`\HKEY_CURRENT_USER\Software\FrostSpear\WorldEditor`

**Now:**  
`\HKEY_CURRENT_USER\Software\ThunderEngine\WorldEditor`

After that, your settings should be picked up again. Apologies for the temporary inconvenience — this is a step toward proper branding!

Logs + backtracers + clear paths = transparent and stable development