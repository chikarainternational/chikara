# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

This directory contains a **static web app** and design assets for the **Extra English リスニング完全攻略ガイド** — a 3-month English listening program using the "Extra English" TV series.

## Directory Structure

```
002_ExtraEnglish-ListeningPoints/
├── design/
│   └── design_sp.pen              # Pencil UI design file (SP + Tablet + PC frames)
├── document/
│   └── Extra English 学習ポイント・リスニングポイント.pdf  # Canonical content source
├── manual/
│   └── manual.html                # Admin manual (JP/EN toggle, bilingual)
└── page/                          # Static web app
    ├── style.css                  # Shared styles — mobile-first, responsive
    ├── js/
    │   ├── data.js                # 全コンテンツ JSON（単一の真実のソース）
    │   └── script.js              # 右クリック禁止 + 検索オーバーレイ + 音声読み上げ TTS（全ページ共通）
    ├── index.html                 # Top page — Month selection (static)
    ├── month.html                 # Month page — ?m=1|2|3 でルーティング
    ├── day.html                   # Day page — ?m=1&l=1 でルーティング
    └── list.html                  # 全一覧 + 月別フィルター（data.js から動的描画）
```

## アーキテクチャ概要

全コンテンツは `js/data.js` の `DATA` オブジェクト1箇所で管理。
ページは `data.js` を読み込み JS で動的描画するため、**HTMLファイルは4枚のみ**。

### URL ルーティング

| ページ | URL例 | 説明 |
|--------|-------|------|
| Top | `index.html` | 月選択（静的） |
| Month | `month.html?m=2` | Month 2 レッスン一覧 |
| Day | `day.html?m=2&l=3` | Month 2 レッスン 3 |
| List | `list.html` | 全ポイント一覧 + 月フィルター |

### data.js 構造

```js
var DATA = {
  months: [
    {
      no: 1, name: "Month 1", icon: "📘", iconBg: "m1-bg",
      desc: "...", meta: "レッスン 4回 ｜ ...",
      lessons: [
        {
          no: 1, day: "Day 1〜4", title: "...",
          listen: [{ en: "Did you", kana: "ディジュ", note: "", example: "..." }],
          learn:  [{ phrase: "I told you", jp: "昨日言ったでしょ", desc: "...",
                     examples: [{ en: "...", jp: "..." }] }]
        }
      ]
    }
  ]
}
```

### コンテンツ追加・変更

**`js/data.js` のみ編集すれば全ページ（day.html / list.html）に即反映される。**
HTMLファイルは編集不要。

### 全ページ共通機能 (`js/script.js`)

- **右クリック禁止**
- **検索オーバーレイ**: ヘッダー右端に🔍ボタンを自動挿入。クリックで全コンテンツ横断検索。
  - 学習ポイント（フレーズ・日本語訳・文法説明・例文）
  - リスニングポイント（英語・カタカナ・発音ノート）
  - 結果クリック → `day.html?m=X&l=Y` へ遷移
- **音声読み上げ（TTS）**: Web Speech API を使用。リスニングポイントの英語フレーズ横にスピーカーボタンを自動挿入。
  - `window.ttsBtnHtml(text)` — ボタン HTML 文字列を返すヘルパー関数（`day.html` / `list.html` の innerHTML 構築で使用）
  - クリック → `en-US` / rate 0.85 で英語読み上げ。読み上げ中はボタンが青くパルス点滅
  - 複数クリック時は前の発話を `cancel()` してから新規発話
  - Web Speech API 非対応ブラウザでは `ttsBtnHtml` が定義されず、ボタン自体が表示されない（フォールバック済み）

すべてのページで `data.js` → `script.js` の順に読み込む:
```html
<script src="js/data.js"></script>
<script src="js/script.js"></script>
```

## Page Architecture

| Page | Content |
|------|---------|
| `index.html` | Month 1/2/3 selection cards (`.month-grid`) + 全一覧リンク |
| `month.html` | Lesson day cards (`.lesson-grid`) — data.js から描画 |
| `day.html` | 学習ポイント + リスニングポイント (`.day-cols`) + prev/next nav — data.js から描画 |
| `list.html` | 全ポイント一覧、月別フィルター — data.js から描画 |

All pages include:
- `<meta name="robots" content="noindex,nofollow">`
- Right-click disabled via `script.js`

## Responsive Layout

Mobile-first。`body` の `max-width: 480px` は 600px 以上で解除。

| Breakpoint | body | コンテンツ幅 | Day ページ列構成 |
|-----------|------|------------|----------------|
| SP (〜599px) | 480px max | 全幅 | 縦積み：学習→リスニング |
| Tablet (600px+) | 100% | max-width 700px | 2列：学習(1.4fr) / リスニング(1fr) |
| PC (1024px+) | 100% | max-width 960px | 2列：学習(1fr可変) / リスニング(300px固定・sticky) |

### HTML wrapper クラス

| クラス | 対象 | 役割 |
|--------|------|------|
| `.month-grid` | `index.html` | 3枚の月カードを囲む（タブレット以上で3列グリッド） |
| `.lesson-grid` | `month.html` | レッスンカードを囲む（タブレット以上で2列グリッド） |
| `.day-cols` | `day.html` | 学習・リスニングの2カラムラッパー |
| `.day-col-left` | `day.html` | リスニングポイント列（DOM上は先頭） |
| `.day-col-right` | `day.html` | 学習ポイント列（`order: -1` で常に左表示） |

**注意:** `.day-col-right`（学習ポイント）は CSS `order: -1` によって常に左側に表示される。DOM 順序は変えないこと。

## リスニングポイント HTML 構造

`day.html` と `list.html` で動的生成。英語フレーズは `.listen-en-row` でボタンと横並び。

```html
<div class="listen-item">
  <div class="listen-en-row">
    <div class="listen-en">Did you</div>           <!-- 英語フレーズ -->
    <button class="tts-btn" data-speak="Did you" aria-label="読み上げ">
      <!-- SVG スピーカーアイコン（script.js で自動挿入） -->
    </button>
  </div>
  <div class="listen-kana">ディジュ</div>          <!-- カタカナ発音 -->
  <div class="listen-note">d が弱くなる</div>      <!-- 変化の説明（任意）-->
  <div class="listen-example">Did you get it?</div> <!-- 例文（任意）-->
</div>
```

- `.tts-btn` は `window.ttsBtnHtml(item.en)` で生成。`data-speak` 属性に英語テキストを持つ
- `.listen-en` の `margin-bottom` は `.listen-en-row` 側で管理（`listen-en` 自身には設定しない）

## アコーディオン構造（学習ポイント）

`<details>/<summary>` によるネイティブアコーディオン。`day.html` と `list.html` で動的生成。

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

## Admin Manual

`manual/manual.html` — 管理者向け運用マニュアル。JP/EN 切替ボタン付き。

セクション構成:
1. ファイル構成
2. ページ構成と役割
3. data.js の構造
4. コンテンツの編集（学習ポイント・リスニングポイント）
5. レッスンの追加
6. 共通機能（script.js）— 右クリック禁止 / 検索 / TTS
7. レスポンシブレイアウト
8. 運用上の注意

スタイルは `001_CG-Pronunciation-Lesson/manual/manual.html` と同一パターン（スタンドアロン HTML、インライン CSS/JS）。

## Source Document

`Extra English 学習ポイント・リスニングポイント.pdf` が正規コンテンツソース。以下を定義:
- Month 1–3 の全レッスン構成
- リスニングポイント（英語フレーズ → カタカナ発音 + 変化の説明）
- 学習ポイント（フレーズ・日本語訳・文法パターン・例文）

コンテンツの追加・変更はこのPDFを参照すること。既存コンテンツはユーザー承認なしに削除・変更しないこと。
