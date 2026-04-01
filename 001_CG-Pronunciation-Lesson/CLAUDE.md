# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Static HTML application for a Japanese English pronunciation lesson portal (チカラ留学). Three standalone HTML files with identical functionality but different visual themes, served directly with no build step.

## No Build System

Open files directly in a browser or serve with any static file server:
```
npx serve page/
```
No compilation, bundling, linting, or test suite.

## Architecture

Each file (`page/1.html`, `2.html`, `3.html`) is a self-contained SPA with all CSS and JS inline.

### Data Layer

All lesson data lives in a single `lessons` array at the top of the `<script>` block:
```js
{ no: 1, items: [{ id: 'A1', v: 'YouTubeVideoId', t: '動画タイトル' }] }
```
- `id` — used as the HTML `id` on `.card-title` elements and as TOC anchor targets (`#A1`)
- `v` — YouTube video ID for `youtube-nocookie.com` embeds
- `no` — 1-based lesson number, also used for accordion item `id="L{no}"`

### Key Functions

| Function | Role |
|---|---|
| `showThumb(yt)` | Renders YouTube thumbnail + play icon into a `.yt` element |
| `openItem(item)` | Shows thumbnails for all `.yt[data-v]` in an accordion item and sets `onclick` handler |
| `closeAll()` | Restores thumbnails and clears `onclick` for all `.yt` elements across all accordions |
| `toggleAcc(btn)` | Accordion button click handler — calls `closeAll()` then `openItem()` |
| `openLesson(no, targetId)` | TOC link handler — same as `toggleAcc` but by lesson number index |

### Video Lazy-Load Flow

1. Accordions start **closed** — `.yt` divs are empty
2. Opening an accordion calls `openItem()` → thumbnails rendered, `onclick` set on each `.yt`
3. Tapping a thumbnail (`.yt`):
   - Resets all **sibling** `.yt` in the same accordion back to thumbnail via `showThumb()`
   - Clears own content, creates a **new iframe** with `?rel=0&autoplay=1&playsinline=1`
   - New iframe creation within user gesture → autoplay permitted on iOS
4. Closing the accordion calls `closeAll()` → all iframes replaced with thumbnails, `onclick` cleared

### URL Hash Auto-Open

An IIFE at the bottom of `<script>` reads `window.location.hash` on load:
- `#L5` → opens accordion at index 4 (1-based)
- `#DEF45` → finds element with that `id`, walks up to `.acc-item` and opens it

### Floating TOC / Hamburger

The hamburger button is hidden until the inline `.toc` element scrolls out of view, detected via `IntersectionObserver`. The float panel clones TOC columns from `#toc-body`.

## Theme Differences

| File | Theme | Primary colors |
|---|---|---|
| `1.html` | Bold / Bauhaus | `#111` + `#FFE500` |
| `2.html` | Modern / Teal | `#059669` + `#0891b2` |
| `3.html` | Corporate / Blue-Orange | `#1a3557` + `#e8610a` |

All three have identical JS logic; CSS class names differ slightly (e.g. `.lesson-badge` vs `.badge`).

## Important Constraints

- `<meta name="robots" content="noindex,nofollow">` is intentional on all pages
- Right-click, F12, and Ctrl+C/A/U/S/P are disabled by design
- YouTube embeds use `youtube-nocookie.com` intentionally
