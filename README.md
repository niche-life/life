# ニッチェ・ライフ - ウェブ生物雑誌

[![Built with Starlight](https://astro.badg.es/v2/built-with-starlight/tiny.svg)](https://starlight.astro.build)

『ニッチェ・ライフ』誌の公式ウェブサイト。Astro + Starlightで構築された、無料で読めるウェブ生物雑誌のプラットフォームです。

## 📊 データ構造

### 分離アーキテクチャ

本プロジェクトでは巻情報と記事情報を分離して管理し、各ページで必要なデータのみを効率的に取得します。

#### 巻データ (`src/data/volumes.json`)

```json
[
  {
    "no": 1,
    "title": "ニッチェ・ライフ 第1号",
    "url": "001/Niche001.pdf",
    "publishedDate": "2013/9/30",
    "image": "volume-1.jpg",
    "articleCount": 4
  }
]
```

#### 記事データ (`src/data/articles/volume-{番号}.json`)

```json
[
  {
    "title": "身近なコケ植物――その分類と生態",
    "author": "熊澤 辰徳",
    "page": "2-11",
    "url": "https://doi.org/10.60269/nichelife.1.0_2"
  }
]
```

#### 表紙画像 (`src/assets/cover/volume-{番号}.jpg`)

- 命名規則: `volume-1.jpg`, `volume-2.jpg`, ...
- 推奨サイズ: 180×254px（縦横比 1:1.41）

## 📝 入稿ワークフロー

### 新巻号追加の手順

#### 1. 表紙画像の配置

```bash
# 表紙画像を適切な名前で配置
cp /path/to/new_cover.jpg src/assets/cover/volume-{番号}.jpg
```

#### 2. 巻データの更新

`src/data/volumes.json` に新しい巻情報を追加：

```json
{
  "no": 14, // 次の番号
  "title": "ニッチェ・ライフ 第14号",
  "url": "014/Niche014.pdf", // 全巻PDFのパス
  "publishedDate": "2024/12/31",
  "image": "volume-14.jpg",
  "articleCount": 0 // 初期値、記事追加後に更新
}
```

#### 3. 記事データファイルの作成

`src/data/articles/volume-{番号}.json` を作成：

```json
[
  {
    "title": "記事タイトル",
    "author": "著者名",
    "page": "2-15",
    "url": "https://doi.org/10.60269/nichelife.14.0_2"
  }
]
```

#### 4. 記事数の同期

`volumes.json` の `articleCount` を実際の記事数に更新

#### 5. データ検証

```bash
# ビルド前に自動検証が実行されます
npm run build

# または手動で検証実行
node src/utils/validation.ts
```

### 個別記事追加の手順

既存巻号への記事追加：

1. 対象の `src/data/articles/volume-{番号}.json` に記事を追加
2. `src/data/volumes.json` の該当巻の `articleCount` を更新
3. データ検証実行

## 🛠️ 開発コマンド

| コマンド                         | 説明                                 |
| :------------------------------- | :----------------------------------- |
| `npm install`                    | 依存関係のインストール               |
| `npm run dev`                    | 開発サーバー起動 (`localhost:4321`)  |
| `npm run build`                  | 本番用ビルド（データ検証含む）       |
| `npm run preview`                | ビルド結果のプレビュー               |
| `node scripts/separate-data.mjs` | データ分離スクリプト実行（初期化用） |
| `node src/utils/validation.ts`   | データ検証手動実行                   |

## 📁 プロジェクト構造

```
.
├── public/
│   ├── images/                  # 公開画像
│   └── robots.txt
├── src/
│   ├── assets/
│   │   ├── cover/              # 表紙画像 (volume-*.jpg)
│   │   └── editors/            # 編集委員写真
│   ├── components/
│   │   ├── Carousel.astro      # トップページカルーセル
│   │   ├── VolumeDetail.astro  # 巻詳細表示
│   │   ├── Footer.astro
│   │   └── Hero.astro
│   ├── content/
│   │   └── docs/               # 静的ページ（MDX）
│   ├── data/
│   │   ├── volumes.json        # 巻メタデータ
│   │   ├── articles/           # 記事データ（巻ごと）
│   │   │   ├── volume-1.json
│   │   │   ├── volume-2.json
│   │   │   └── ...
│   │   ├── articles-backup/    # 元データバックアップ
│   │   └── editors.json        # 編集委員情報
│   ├── pages/
│   │   ├── volume/             # 巻号関連ページ
│   │   │   ├── index.astro     # バックナンバー
│   │   │   └── [id].astro      # 個別巻詳細
│   │   └── news/               # ニュース
│   ├── utils/
│   │   ├── data.ts            # データ取得ユーティリティ
│   │   └── validation.ts      # データ検証ユーティリティ
│   └── styles/
├── scripts/
│   └── separate-data.mjs      # データ分離スクリプト
├── astro.config.mjs           # Astro設定（ビルド時検証含む）
└── package.json
```

## 🔍 データ検証

### 自動検証項目

- ✅ 巻番号の重複チェック
- ✅ 必須フィールドの存在確認
- ✅ 表紙画像ファイルの存在確認
- ✅ 記事数の整合性チェック
- ✅ URL形式の妥当性
- ⚠️ 著者名空白の警告（編集情報の可能性）

### エラー発生時

- **ビルド時**: エラーが検出されるとビルドが停止
- **警告のみ**: ビルドは継続、修正推奨

## 🚀 デプロイメント

Cloudflare Pages向けに設定済み：

- **ビルドコマンド**: `npm run build`
- **出力ディレクトリ**: `dist`
- **Node.js版**: 24.x

## 📋 トラブルシューティング

### よくある問題

#### 1. 画像が表示されない

- ファイル名が `volume-{番号}.jpg` 形式になっているか確認
- ファイルが `src/assets/cover/` に配置されているか確認

#### 2. ビルドエラー

```bash
# データ検証を手動実行
node src/utils/validation.ts

# 詳細なエラー情報を確認
npm run build 2>&1 | grep -A 10 "error"
```

#### 3. 記事数が合わない

- `volumes.json` の `articleCount` と実際の記事数を確認
- 表紙・目次記事は自動除外済み

#### 4. 新しい巻が表示されない

1. `volumes.json` に巻データが追加されているか
2. 対応する `volume-{番号}.json` が存在するか
3. 表紙画像 `volume-{番号}.jpg` が存在するか

## 🔗 関連リンク

- [Starlight Documentation](https://starlight.astro.build/)
- [Astro Documentation](https://docs.astro.build)
- [ニッチェ・ライフ公式サイト](https://niche-life.com)
- [J-STAGE](https://www.jstage.jst.go.jp/browse/nichelife/list/-char/ja)
