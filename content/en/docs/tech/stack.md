---
title: "Tech Stack"
description: "About the technologies operating SpeechNinja"
lead: "About the technologies operating SpeechNinja"
date: 2023-02-12T15:22:20+01:00
lastmod: 2023-02-12T15:22:20+01:00
draft: false
images: []
menu:
  docs:
    parent: "tech"
weight: 310
toc: true
---

## Problems updating npm packages

Delete the `./node_modules` folder, and run again:

```bash
npm install
```

## Problems with cache

Delete the temporary directories:

```bash
npm run clean
```
