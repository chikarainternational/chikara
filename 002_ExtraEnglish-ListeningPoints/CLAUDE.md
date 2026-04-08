# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

This directory contains a **static multi-page web app** and design assets for the **Extra English リスニング完全攻略ガイド** — a 3-month English listening program using the "Extra English" TV series.

## Directory Structure

```
002_ExtraEnglish-ListeningPoints/
├── design/
│   └── design_sp.pen              # Pencil SP (smartphone) UI design file
├── document/
│   └── Extra English 学習ポイント・リスニングポイント.pdf  # Canonical content source
└── page/                          # Static web app (19 HTML pages)
    ├── style.css                  # Shared styles for all pages
    ├── js/
    │   └── yt-banner.js           # YouTube banner injector (all-page config)
    ├── index.html                 # Top page — Month selection
    ├── month1.html                # Month 1 lesson list
    ├── month2.html                # Month 2 lesson list
    ├── month3.html                # Month 3 lesson list
    ├── list.html                  # Full review list (all months, filter by month)
    ├── m1-1.html … m1-4.html      # Month 1 day pages (Lesson 1–4)
    ├── m2-1.html … m2-4.html      # Month 2 day pages (Lesson 1–4)
    └── m3-1.html … m3-6.html      # Month 3 day pages (Lesson 1–6)
```

## Page Architecture

| Page | Route | Content |
|------|-------|---------|
| Top | `index.html` | Month 1/2/3 selection cards + 全一覧リンク |
| Month | `month1–3.html` | Lesson day cards for that month |
| Day | `m1-1.html` etc. | リスニングポイント + 学習ポイント(accordion) + YouTube banner + prev/next nav |
| List | `list.html` | All listening + learning points, filter by month (JS) |

All pages include:
- `<meta name="robots" content="noindex,nofollow">`
- Right-click disabled via `yt-banner.js`

## YouTube Banner (`js/yt-banner.js`)

All 19 pages include this script. It injects the YouTube channel banner into every `.yt-banner` div. **To update the channel, edit only this file.**

```javascript
var YT = {
  channelUrl: "https://www.youtube.com/@SoCal",
  channelHandle: "@SoCal",
  channelName: "SoCal",
  avatarUrl: "https://yt3.googleusercontent.com/ytc/AIdro_m795dTA9jcg-oAFPG9Mv6tQtNG7_n8OQfcR31OjcQ_sN8=s160-c-k-c0x00ffffff-no-rj",
  bannerUrl: "https://yt3.googleusercontent.com/99NjXrLc0tOULQJeHmVSqX84DlkoriTeKTn7hBvKH6RUpYvW9OCFoHHyZfZefF5P9yQms6E6NQM=w1707-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj",
  label: "英語コーチChikara",
  note: "10,000人以上の日本人を英語ペラペラに変えた英語コーチ 横田チカラのYouTube公式チャンネル『SoCal英会話』（ソーカル英会話）"
};
```

Day pages pass `data-day` to show the episode label:
```html
<div class="yt-banner" data-day="Month 1 Day 1〜4"></div>
```

## Design Specs (style.css color tokens)

| Role | Hex |
|------|-----|
| Header navy | `#0077B6` |
| Status bar / dark accent | `#023E8A` |
| Primary blue | `#00B4D8` |
| Background | `#F0F9FF` |
| Cyan light | `#CAF0F8` / `#48CAE4` |
| Accent amber | `#FFB703` |
| Card bg | `#FFFFFF` |
| YouTube red | `#FF0000` |

## Working with the Pencil Design File

The `.pen` file must be opened and edited exclusively via the **Pencil MCP tools** — never with `Read`, `Edit`, or `Grep`.

Key tools:
- `mcp__pencil__open_document(filePath)` — open the file before any other operation
- `mcp__pencil__get_editor_state()` — get current node tree and active selection
- `mcp__pencil__batch_design(filePath, operations)` — create/update/delete nodes (max 25 ops per call)
- `mcp__pencil__get_screenshot(nodeId)` — visually verify changes after each batch

### Existing frames in design_sp.pen

| ID | Name | Description |
|----|------|-------------|
| `bi8Au` | Frame | Original frame |
| `lVMr6` | SP_01_Home | Original home screen |
| `bGx8D` | SP_02_About | Original about screen |
| `Stoqa` | SP_03_Script | Original script screen |
| `2rqgF` | SP_04_Index | Top page — Month selection cards |
| `R5JNG` | SP_05_Month | Month page — lesson list |
| `njZXd` | SP_06_Day | Day page — listening + learning + nav |
| `szkoO` | SP_07_List | List page — filter buttons + review list |

Frame size: **390 × 844 px** (iPhone-size).

Layout zones per frame:
- Status bar: y=0, h=44, `fill: #023E8A`
- Header: y=44, h=88, `fill: #0077B6`
- Day subheader (day pages): y=132, h=36, `fill: #CAF0F8`
- Content: y=168 (or 132), remaining height, `fill: #F0F9FF`

## Source Document

`Extra English 学習ポイント・リスニングポイント.pdf` is the canonical content source. It defines:
- Program structure (Month 1–3, Day 1–90)
- Weekly learning flow: 日本語訳視聴 → 英語字幕＋音読 → 字幕なしリスニング → コーチ振り返り → ローレン実践
- Listening points per lesson (English phrase → katakana pronunciation + note)
- Learning points per lesson (phrase, Japanese meaning, grammar pattern, examples)

When adding or modifying content, use this PDF as the authoritative source. Do not delete or alter existing content without user approval.
