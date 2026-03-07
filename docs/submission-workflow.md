# 新巻号入稿ワークフロー

## 事前準備

### 必要な情報の収集
- [ ] 巻号番号（連番）
- [ ] 正式タイトル
- [ ] 発行日（YYYY/M/D形式）
- [ ] 記事一覧（タイトル、著者、ページ、DOI）
- [ ] 表紙画像（JPG形式推奨）

### ファイル命名規則の確認
- 表紙画像: `volume-{番号}.jpg`
- 記事データ: `volume-{番号}.json`
- 巻号番号は整数のみ（ゼロパディングなし）

## 入稿手順

### 1. 表紙画像の準備と配置

```bash
# 画像を最適化（推奨サイズ: 180×254px）
# ファイル名は必ず volume-{番号}.jpg 形式
cp cover-image.jpg src/assets/cover/volume-13.jpg
```

**注意事項:**
- 縦横比は1:1.41を維持
- ファイルサイズは100KB以下を推奨
- JPG形式（品質80-90%）

### 2. 巻情報の追加 (`src/data/volumes.json`)

```json
{
  "no": 13,
  "title": "ニッチェ・ライフ 第13号",
  "url": "013/Niche013.pdf",
  "publishedDate": "2024/10/30",
  "image": "volume-13.jpg",
  "articleCount": 6
}
```

**フィールド説明:**
- `no`: 巻号番号（整数）
- `title`: 表示用タイトル
- `url`: J-STAGEでのPDFパス（相対パス）
- `publishedDate`: 発行日（YYYY/M/D形式、ゼロパディングなし）
- `image`: 表紙画像ファイル名
- `articleCount`: 記事数（統計用）

### 3. 記事データの作成 (`src/data/articles/volume-{番号}.json`)

```json
[
  {
    "title": "身近なコケ植物――その分類と生態",
    "author": "熊澤 辰徳",
    "page": "2-11",
    "url": "https://doi.org/10.60269/nichelife.13.0_2"
  },
  {
    "title": "都市部における鳥類の生息状況調査",
    "author": "田中 花子・佐藤 太郎",
    "page": "12-25",
    "url": "https://doi.org/10.60269/nichelife.13.0_12"
  }
]
```

**フィールド説明:**
- `title`: 記事タイトル
- `author`: 著者名（複数著者は「・」で区切り）
- `page`: ページ範囲（「開始-終了」形式）
- `url`: DOIリンク（必ずhttps形式）

## 品質チェック

### データ整合性の確認
```bash
# 開発サーバーを起動して確認
npm run dev
```

### チェック項目
- [ ] バックナンバーページで新巻が表示される
- [ ] 個別巻号ページで記事一覧が正しく表示される
- [ ] 表紙画像が適切に表示される
- [ ] 記事のDOIリンクが機能する
- [ ] J-STAGEのPDFリンクが機能する

### SEO確認
- [ ] メタタイトルが適切
- [ ] メタディスクリプションが生成される
- [ ] OGP画像が表示される

## デプロイ

### 本番環境への反映
```bash
# ビルド確認
npm run build

# Cloudflareへデプロイ
wrangler pages deploy
```

## トラブルシューティング

### よくあるエラー
1. **画像が表示されない**: ファイル名規則の確認
2. **記事が表示されない**: JSONの文法エラー確認
3. **巻号が見つからない**: volumes.jsonでの番号重複確認

### デバッグコマンド
```bash
# JSONファイルの文法チェック
npx jsonlint src/data/volumes.json
npx jsonlint src/data/articles/volume-13.json
```