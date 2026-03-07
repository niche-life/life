# SEO最適化チェックリスト

## メタデータ基本設定

### サイト全体
- [x] サイトURL設定 (`astro.config.mjs`)
- [x] サイトマップ生成 (`@astrojs/sitemap`)
- [x] ロボット.txt配置
- [x] OGP画像設定

### 各ページ共通
- [ ] 適切なタイトルタグ（60文字以内）
- [ ] メタディスクリプション（160文字以内）
- [ ] 構造化データ（JSON-LD）
- [ ] 正規URL（canonical）

## コンテンツSEO

### バックナンバーページ
```html
<title>バックナンバー | ニッチェ・ライフ - 無料ウェブ生物雑誌</title>
<meta name="description" content="ニッチェ・ライフの全バックナンバー。生物多様性に関する最新研究と記録を無料で公開。">
```

### 個別巻号ページ
```html
<title>第{番号}号 - {タイトル} | ニッチェ・ライフ</title>
<meta name="description" content="ニッチェ・ライフ第{番号}号（{発行日}発行）。{記事数}本の記事を収録。">
```

### 記事メタデータ
- 学術論文に適したメタタグ
- DOI情報の適切な記述
- 著者情報の構造化データ

## 構造化データ

### 学術雑誌としての構造化データ
```json
{
  "@context": "https://schema.org",
  "@type": "ScholarlyArticle",
  "headline": "記事タイトル",
  "author": {
    "@type": "Person",
    "name": "著者名"
  },
  "datePublished": "発行日",
  "publisher": {
    "@type": "Organization",
    "name": "ニッチェ・ライフ編集委員会"
  }
}
```

### 雑誌全体の構造化データ
```json
{
  "@context": "https://schema.org",
  "@type": "Periodical",
  "name": "ニッチェ・ライフ",
  "issn": "未取得",
  "publisher": "ニッチェ・ライフ編集委員会"
}
```

## パフォーマンス最適化

### Core Web Vitals
- **LCP**: 2.5秒以下（画像最適化が重要）
- **FID**: 100ms以下（JavaScriptの最小化）
- **CLS**: 0.1以下（レイアウトシフト防止）

### 画像最適化
- WebP自動変換（Astro標準機能）
- 遅延読み込み（`loading="lazy"`）
- 適切なalt属性

### フォント最適化
```astro
---
// Roboto Variable フォントの最適読み込み
import '@fontsource-variable/roboto';
---
```

## アクセシビリティ

### 必須項目
- [ ] セマンティックHTML使用
- [ ] 適切な見出し階層（h1→h2→h3）
- [ ] 画像の代替テキスト
- [ ] キーボード操作対応
- [ ] 色によらない情報伝達

### 学術コンテンツ特有
- [ ] 表・図表の説明文
- [ ] 学名の適切なマークアップ
- [ ] 引用文献の構造化

## モバイル対応

### レスポンシブデザイン
- [ ] モバイルファースト設計
- [ ] タッチターゲットサイズ（44px以上）
- [ ] 横スクロールなし

### 読みやすさ
- [ ] 適切な行間・文字サイズ
- [ ] PDFの代替表示方法
- [ ] 表の横スクロール対応

## 定期チェック項目

### 月次チェック
- [ ] Google Search Console確認
- [ ] ページ読み込み速度測定
- [ ] 404エラーのチェック
- [ ] 外部リンクの生存確認

### 四半期チェック
- [ ] Lighthouse監査実行
- [ ] SEOキーワード順位確認
- [ ] 競合サイト分析
- [ ] 構造化データの検証

## 測定ツール

### 必須ツール
- Google Search Console
- Google Analytics 4
- Lighthouse（Chrome DevTools）
- PageSpeed Insights

### 補助ツール
- GTmetrix
- WebPageTest
- Schema.org Validator
- Google Rich Results Test