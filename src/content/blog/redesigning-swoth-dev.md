---
title: "Redesigning swoth.dev: less dashboard, more signal"
summary: "Why I stripped away the dark bento grids, package counters, and old bot repos in favor of a quieter page."
publishedAt: "2026-11-03"
readingTime: "3 min read"
tags:
  - Design
  - Astro
  - Portfolio
---

For the last few years, my site looked like a developer dashboard. It was a stack of dark, rounded containers overlaid with topographic lines, trying to prove that I wrote code by listing almost everything I had ever published.

There was a 3×2 grid for open-source repositories, another 3×2 grid for npm packages, language color borders at the bottom of every card, and an "About Me" box that calculated the exact number of days I had been pressing keys on a keyboard—complete with a oversized `+9.8 years of experience` counter on the right.

At the time, it felt good to fill the screen. When you are building Discord bots like `awardbot.me`, small utility packages like `discordkit`, or early UI experiments like `@windui`, quantity feels like momentum.

## Outgrowing the inventory

Eventually, the site stopped sounding like me. Most of the repositories in that six-card grid were archived bots or weekend experiments from years ago, yet they occupied the exact same visual weight as the products I actually care about today.

A portfolio shouldn't work like a `git log` or an npm profile page. Visitors don't need twelve cards with license badges and watcher counts to figure out what I do; they need to see what I'm putting my energy into right now.

So for v7, I threw the layout away and started from a blank sheet of warm paper (`#f7f5f0`).

## Curation over volume

Instead of treating every repository equally, the new page is built around hierarchy:

- **One featured project** at the top ([riddleo](https://www.riddleo.com)), given enough room to breathe and carry its own typographic voice.
- **A short selected work list** underneath for active projects like [Taleon](https://taleon.swoth.dev) and this site itself—kept to a single numbered line per project.
- **No package grid.** If a library matters, it lives on GitHub. It doesn't need a permanent box on my homepage.

## Replacing metrics with a timeline

In the previous version, my bio read:

> "I've been writing code by pressing those wonderful keyboard keys for about 3593 days."

It was a fun gimmick when I first wrote it, but counting days doesn't say anything meaningful. I replaced the entire "About Me" card and the `+9.8` counter with a four-line timeline: when I wrote my first lines of code (2017), when I graduated high school (2023), and when I started university (2024)—plus a small note from 2010 to keep it from taking itself too seriously.

## Quiet by default

Moving from a dark bento layout to a light, single-column editorial layout also changed how the site is built. Everything runs on Astro and Tailwind CSS with almost no client-side JavaScript.

The only indulgent detail left is the theme toggle: switching between paper and dark mode triggers a brief WebGL shader sweep via `glimm` (unless `prefers-reduced-motion` is enabled). Everything else is static HTML, subtle hairline borders, and typography that gets out of the way.

It shows far less than the old version did—which is why it finally feels accurate.
