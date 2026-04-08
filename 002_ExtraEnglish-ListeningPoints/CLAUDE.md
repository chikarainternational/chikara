# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

This directory contains a **static multi-page web app** and design assets for the **Extra English リスニング完全攻略ガイド** — a 3-month English listening program using the "Extra English" TV series.

## Directory Structure

```
002_ExtraEnglish-ListeningPoints/
├── design/
│   └── design_sp.pen              # Pencil UI design file (SP + Tablet + PC frames)
├── document/
│   └── Extra English 学習ポイント・リスニングポイント.pdf  # Canonical content source
└── page/                          # Static web app (19 HTML pages)
    ├── style.css                  # Shared styles — mobile-first, responsive
    ├── js/
    │   └── yt-banner.js           # YouTube banner injector + 右クリック禁止
    ├── index.html                 # Top page — Month selection
    ├── month1.html                # Month 1 lesson list
    ├── month2.html                # Month 2 lesson list
    ├── month3.html                # Month 3 lesson list
    ├── list.html                  # Full review list (filter by month)
    ├── m1-1.html … m1-4.html      # Month 1 day pages (Lesson 1–4)
    ├── m2-1.html … m2-4.html      # Month 2 day pages (Lesson 1–4)
    └── m3-1.html … m3-6.html      # Month 3 day pages (Lesson 1–6)
```

## Page Architecture

| Page | Route | Content |
|------|-------|---------|
| Top | `index.html` | Month 1/2/3 selection cards (`.month-grid`) + 全一覧リンク |
| Month | `month1–3.html` | Lesson day cards (`.lesson-grid`) |
| Day | `m1-1.html` etc. | 学習ポイント + リスニングポイント (`.day-cols`) + YouTube banner + prev/next nav |
| List | `list.html` | 全リスニング・学習ポイント、月別フィルター (JS) |

All pages include:
- `<meta name="robots" content="noindex,nofollow">`
- Right-click disabled via `yt-banner.js`

## Responsive Layout

Mobile-first。`body` の `max-width: 480px` は 600px 以上で解除。

| Breakpoint | body | コンテンツ幅 | Day ページ列構成 |
|-----------|------|------------|----------------|
| SP (〜599px) | 480px max | 全幅 | 縦積み：学習→リスニング |
| Tablet (600px+) | 100% | max-width 700px | 2列：学習(1.4fr) / リスニング(1fr) |
| PC (1024px+) | 100% | max-width 960px | 2列：学習(1fr可変) / リスニング(300px固定・sticky) |

### HTML wrapper クラス

| クラス | 対象ファイル | 役割 |
|--------|------------|------|
| `.month-grid` | `index.html` | 3枚の月カードを囲む（タブレット以上で3列グリッド） |
| `.lesson-grid` | `month1–3.html` | レッスンカードを囲む（タブレット以上で2列グリッド） |
| `.day-cols` | `m*-*.html` | 学習・リスニングの2カラムラッパー |
| `.day-col-left` | `m*-*.html` | リスニングポイント列（DOM上は先頭） |
| `.day-col-right` | `m*-*.html` | 学習ポイント列（`order: -1` で常に左表示） |

**注意:** `.day-col-right`（学習ポイント）は CSS `order: -1` によって常に左側に表示される。DOM 順序は変えないこと。

## アコーディオン構造（学習ポイント）

`<details>/<summary>` によるネイティブアコーディオン。JavaScript 不要。

```html
<details class="learn-item">
  <summary>
    <span class="learn-num">1</span>
    <div class="learn-summary-text">
      <span class="learn-phrase">I told you.</span>   <!-- 常時表示 -->
      <div class="learn-jp">昨日言ったでしょ</div>     <!-- 常時表示 -->
    </div>
    <span class="learn-arrow">▼</span>
  </summary>
  <div class="learn-body">
    <div class="learn-desc">tell + 人 で「人に言う」</div>  <!-- 開いたとき表示 -->
    <div class="learn-examples">
      <div class="learn-ex">I told you last night.</div>
    </div>
  </div>
</details>
```

- `learn-phrase` + `learn-jp` は **サマリーに常時表示**（タップ前に意味がわかる）
- `learn-desc` + `learn-examples` は **展開後に表示**

## YouTube Banner (`js/yt-banner.js`)

全19ページに `<script src="js/yt-banner.js"></script>` が含まれる。チャンネル情報はこのファイルの `YT` オブジェクト1箇所で管理。**チャンネルを変更する場合はここだけ編集すれば全ページに反映される。**

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

Day ページは `data-day` 属性でエピソードラベルを渡す:
```html
<div class="yt-banner" data-day="Month 1 Day 1〜4"></div>
```

バナー構成: チャンネルバナー画像(上) → アバター + タイトル + ハンドル(白背景・下)。クリックで別ウィンドウ表示。

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

`.pen` ファイルは **Pencil MCP tools のみ**で操作すること。`Read`・`Edit`・`Grep` は使用不可。

Key tools:
- `mcp__pencil__open_document(filePath)` — open the file before any other operation
- `mcp__pencil__get_editor_state()` — get current node tree and active selection
- `mcp__pencil__batch_design(filePath, operations)` — create/update/delete nodes (max 25 ops per call)
- `mcp__pencil__get_screenshot(nodeId)` — visually verify changes after each batch

### Frames in design_sp.pen

| ID | Name | Size | Description |
|----|------|------|-------------|
| `bi8Au` | Frame | 800×600 | Original frame |
| `lVMr6` | SP_01_Home | 390×844 | Original home screen |
| `bGx8D` | SP_02_About | 390×844 | Original about screen |
| `Stoqa` | SP_03_Script | 390×844 | Original script screen |
| `2rqgF` | SP_04_Index | 390×844 | SP — Top page (Month selection) |
| `R5JNG` | SP_05_Month | 390×844 | SP — Month page (lesson list) |
| `njZXd` | SP_06_Day | 390×844 | SP — Day page (listening + learning + nav) |
| `szkoO` | SP_07_List | 390×844 | SP — List page (filter + review) |
| `6iOap` | TB_01_Index | 768×1024 | Tablet — Top page (3-column month grid) |
| `c6o8M` | TB_02_Day | 768×1024 | Tablet — Day page (2-column layout) |
| `8oSWE` | PC_01_Index | 1280×900 | PC — Top page (header nav + 3-column cards) |
| `8vKkr` | PC_02_Day | 1280×900 | PC — Day page (header prev/next + 2-column) |

SP フレームレイアウト:
- Status bar: y=0, h=44, `fill: #023E8A`
- Header: y=44, h=88, `fill: #0077B6`
- Day subheader: y=132, h=36, `fill: #CAF0F8`
- Content: y=168, remaining, `fill: #F0F9FF`

## Source Document

`Extra English 学習ポイント・リスニングポイント.pdf` が正規コンテンツソース。以下を定義:
- Month 1–3 の全レッスン構成
- リスニングポイント（英語フレーズ → カタカナ発音 + 変化の説明）
- 学習ポイント（フレーズ・日本語訳・文法パターン・例文）

コンテンツの追加・変更はこのPDFを参照すること。既存コンテンツはユーザー承認なしに削除・変更しないこと。
