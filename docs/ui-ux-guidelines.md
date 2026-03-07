# UI/UXデザインガイドライン

## デザイン原則

### 学術雑誌としての信頼性
- **清潔で読みやすいレイアウト**：テキスト中心の構成
- **一貫性のある情報階層**：見出し、本文、引用の明確な区分
- **専門性の演出**：過度な装飾を避け、内容に集中できるデザイン
- **アクセシビリティ最優先**：全ユーザーが情報にアクセス可能

### ユーザビリティ重視
- **直感的なナビゲーション**：3クリック以内で目的の情報に到達
- **レスポンシブデザイン**：デバイスを問わない閲覧体験
- **高速表示**：学術利用を想定した効率的なローディング
- **検索・発見の支援**：必要な情報を素早く見つけられる仕組み

## 色彩・タイポグラフィ

### カラーパレット（Starlight準拠）
```css
/* メインカラー */
--sl-color-accent: #4f46e5; /* インディゴ（リンク、CTA） */
--sl-color-accent-light: #6366f1;
--sl-color-accent-dark: #3730a3;

/* テキストカラー */
--sl-color-text: #1f2937; /* ダークグレー（本文） */
--sl-color-text-accent: #4f46e5; /* アクセント（見出し） */

/* 背景色 */
--sl-color-bg: #ffffff; /* 白（メイン背景） */
--sl-color-bg-nav: #f8fafc; /* ライトグレー（ナビ背景） */
```

### フォント階層
```css
/* 見出し */
h1: 2.5rem/1.2 "Roboto Variable", sans-serif; /* 40px */
h2: 2rem/1.3 "Roboto Variable", sans-serif;   /* 32px */
h3: 1.5rem/1.4 "Roboto Variable", sans-serif; /* 24px */

/* 本文 */
body: 1rem/1.6 "Roboto Variable", sans-serif; /* 16px */
small: 0.875rem/1.5; /* 14px（メタ情報） */
```

## コンポーネント設計

### ナビゲーションコンポーネント

#### サイトタイトル・ヘッダー構成
1. **サイトロゴ & タイトル**：メインブランディング要素
2. **ISSN表示**：サイトタイトル直下に控えめに配置
3. **メインナビゲーション**：階層構造対応のサイドバー
4. **検索機能**：サイト内検索（実装予定）

#### ISSN表示の詳細設計（2026年2月更新）

**配置方針の変更**
- **旧方針**：サイドバー下部への配置
- **新方針**：サイトタイトル直下への配置
- **変更理由**：モバイルでの信頼性向上、フッターの簡素化

**実装仕様**
```html
<div class="site-title-wrapper">
  <!-- サイトタイトル（ロゴ付き） -->
  <a href="/" class="site-title-link">
    <img src="logo.png" alt="ロゴ" />
    <span>ニッチェ・ライフ</span>
  </a>
  <!-- ISSN表示：控えめなスタイルで直下に配置 -->
  <div class="issn-display">
    <span class="text-xs text-gray-500">ISSN 2188-0972 (Online)</span>
  </div>
</div>
```

**スタイリング原則**
- フォントサイズ：12px（text-xs）
- カラー：グレー500（目立ちすぎない程度）
- 位置：サイトタイトルと同じ左端に揃える
- レスポンシブ：モバイルでも同様に表示

#### フッターの簡素化
- ISSN表示をヘッダーに移動したことでフッターをよりシンプルに
- 著作権表示のみに集約
- デザインの重複排除

### 巻号表示コンポーネント

#### 一覧表示（グリッド）
```astro
<div class="volume-grid">
  <div class="volume-card">
    <img class="cover-image" />
    <div class="volume-info">
      <h3 class="volume-title">第{no}号</h3>
      <p class="publish-date">{publishedDate}</p>
      <p class="article-count">{articleCount}本の記事</p>
    </div>
  </div>
</div>
```

#### 詳細表示
```astro
<div class="volume-detail">
  <header class="volume-header">
    <img class="cover-large" />
    <div class="volume-meta">
      <h1>{title}</h1>
      <dl class="metadata">
        <dt>発行日</dt><dd>{publishedDate}</dd>
        <dt>ISSN</dt><dd>2188-0972</dd>
        <dt>PDF</dt><dd><a href="{pdfUrl}">J-STAGEで読む</a></dd>
      </dl>
    </div>
  </header>
</div>
```

## インタラクション設計

### 状態表示
- **ローディング状態**：画像遅延読み込み時のプレースホルダー
- **エラー状態**：画像読み込み失敗時のフォールバック表示
- **空状態**：検索結果なし時の案内表示

### ホバー・フォーカス効果
```css
/* カード型コンポーネント */
.volume-card {
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.volume-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(0,0,0,0.1);
}

/* リンク */
a {
  transition: color 0.2s ease;
}
a:hover {
  color: var(--sl-color-accent-light);
}
```

## モバイル最適化

### ブレイクポイント
```css
/* Tailwind CSS準拠 */
sm: 640px  /* タブレット縦 */
md: 768px  /* タブレット横 */
lg: 1024px /* デスクトップ小 */
xl: 1280px /* デスクトップ大 */
```

### モバイル特有の考慮事項
1. **タッチターゲット**：最小44px×44pxのタップ領域
2. **読み込み最適化**：画像の段階的読み込み
3. **ナビゲーション**：ハンバーガーメニューの直感的な操作
4. **表示密度**：情報過多を避けた適切な余白

## パフォーマンス要件

### 表示速度目標
- **LCP (Largest Contentful Paint)**: 2.5秒以下
- **FID (First Input Delay)**: 100ms以下
- **CLS (Cumulative Layout Shift)**: 0.1以下

### 画像最適化
- WebP自動変換（Astro標準機能活用）
- 適切なサイズ設定（1x, 2x対応）
- 遅延読み込み（viewport外は後読み込み）

### フォント最適化
```astro
---
// 可変フォント使用でファイルサイズ削減
import '@fontsource-variable/roboto/wght.css';
---
```

## アクセシビリティ

### 必須対応項目
- [ ] セマンティックHTML使用
- [ ] 適切なコントラスト比（4.5:1以上）
- [ ] キーボード操作対応
- [ ] スクリーンリーダー対応（aria-label等）
- [ ] 画像代替テキスト

### 学術コンテンツ特有
- [ ] 学名の適切なマークアップ（`<i>`タグ）
- [ ] 表・図表のキャプション
- [ ] 引用文献の構造化表示
- [ ] 数式・化学式の代替表現

## ブランディング

### 視覚的アイデンティティ
- **自然・生物らしさ**：過度に人工的でないデザイン
- **学術性**：専門性を感じられる品格
- **親しみやすさ**：一般読者も歓迎する雰囲気
- **信頼性**：長期間の運営を感じられる安定感

### ロゴ・アイコン使用規則
- サイトロゴは読みやすいサイズで表示
- ファビコンは単純化したデザイン
- 表紙画像との調和を考慮した配置