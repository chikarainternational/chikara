# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

This directory contains design and document assets for the **Extra English コーチング・プロジェクト** — a 3-month English listening program using the "Extra English" TV series.

## Directory Structure

```
002_ExtraEnglish-ListeningPoints/
├── design/
│   └── design_sp.pen   # Pencil SP (smartphone) UI design file
└── document/
    └── コーチング・プロジェクト.pdf  # Program curriculum and script source
```

## Working with the Design File

The `.pen` file must be opened and edited exclusively via the **Pencil MCP tools** — never with `Read`, `Edit`, or `Grep`.

Key tools:
- `mcp__pencil__open_document(filePath)` — open the file before any other operation
- `mcp__pencil__get_editor_state()` — get current node tree and active selection
- `mcp__pencil__batch_design(filePath, operations)` — create/update/delete nodes (max 25 ops per call)
- `mcp__pencil__get_screenshot(nodeId)` — visually verify changes after each batch

## Design Specs

The SP design targets **390 × 844 px** (iPhone-size) frames with the following layout convention:

| Zone | Height | Notes |
|------|--------|-------|
| Status Bar | 62 px | `fill: #0077B6` |
| Header | 72–96 px | `fill: #00B4D8` |
| Content | remaining | `fill: #F0F9FF`, `layout: none`, absolute-positioned children |
| Tab Bar | 64 px | pill-style, fixed at y=780 |

**Color tokens used in this project:**

| Role | Hex |
|------|-----|
| Primary blue | `#00B4D8` |
| Dark navy | `#0077B6` / `#023E8A` |
| Accent amber | `#FFB703` |
| Background | `#F0F9FF` |
| Card bg | `#FFFFFF` |
| Success green | `#4CAF50` |
| Hint cyan | `#48CAE4` / `#CAF0F8` |

Tab bar pill uses `stroke: {fill: "#E0F2FE", thickness: 1}`, active tab `fill: "#00B4D8"`, inactive `fill: "#00000000"`.

## Source Document

`コーチング・プロジェクト.pdf` is the canonical content source. It defines:
- Program structure (Month 1–3, Day 1–90)
- Weekly learning flow: 日本語訳視聴 → 英語字幕＋音読 → 字幕なしリスニング → コーチ振り返り → ローレン実践
- Episode 1 & 2 Japanese/English parallel scripts (Bridget, Annie, Nick, Hector)
- Listening points (e.g. "Did you → ディジュ", "I told you → トウジュ")

When generating new screens or copy, use this PDF as the authoritative content reference.
