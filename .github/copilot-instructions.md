# Copilot Instructions for ニッチェ・ライフ (Niche Life)

## Project Overview
ニッチェ・ライフ（Niche Life）は、生物学・生態学に特化したオープンアクセス学術ウェブマガジンです。Nuxt.js 2を使用したSSGサイトで、研究論文、観察記録、生物多様性に関する記事を掲載しています。

## Architecture & Tech Stack
- **Framework**: Nuxt.js 2 (SSG mode) + Vue.js 2 + Vuetify
- **Deployment**: Netlify (static site generation)
- **Assets**: AWS S3 バケット (`https://media.niche-life.com`)
- **Code Quality**: ESLint + Prettier + CommitLint (conventional commits)
- **Key Dependencies**: vue-awesome-swiper, epic-spinners, FontAwesome

## Data Structure & Content Model
- **Magazine Issues**: [data/magazineData.json](data/magazineData.json) - 雑誌号数、記事リスト、PDF URL管理
- **Members**: [data/members.json](data/members.json) - 編集委員プロフィール、専門分野
- **News**: [data/news.json](data/news.json) - サイト更新情報、お知らせ
- **Static Assets**: S3経由で配信（`$conf.s3_bucket_url`で設定）

## Component Architecture
- **Layout**: [default.vue](layouts/default.vue) - ローディング → Toolbar/Jumbotron/Content/Footer
- **Magazine Display**: [MagazineCard.vue](components/MagazineCard.vue) + [MagazineDetailCard.vue](components/MagazineDetailCard.vue)
- **Navigation**: [NavigationContent.vue](components/NavigationContent.vue) - メインナビゲーション
- **Content Blocks**: [ImageTile.vue](components/ImageTile.vue), [TextCard.vue](components/TextCard.vue) - 再利用可能なレイアウト要素

## Development Patterns
- **Global Config**: [plugins/conf.js](plugins/conf.js) - `Vue.prototype.$conf` でS3 URL等設定
- **Asset References**: `$conf.s3_bucket_url + '/path/to/asset'` で外部アセット参照
- **Routing**: 動的ルート `/series/_id.vue` でマガジン詳細ページ
- **SEO/Meta**: [nuxt.config.js](nuxt.config.js) でOGP・Twitter Card設定済み

## Commands & Workflows
```bash
# 開発サーバー起動
yarn dev

# 本番ビルド（Netlifyで自動実行）
yarn generate

# S3アセット連携確認
# getPdfUrl(), getThunmbnailUrl() メソッドで URL構築
```

## Content Management
- **記事追加**: [data/magazineData.json](data/magazineData.json) に新号数/記事データ追加
- **メンバー更新**: [data/members.json](data/members.json) で編集委員情報管理
- **PDF/画像**: S3バケットにアップロード後、JSON内でファイル名参照

## Project-Specific Conventions
- **日本語中心**: UIテキスト、コメント、変数名は日本語対応
- **学術雑誌形式**: 号数（no）、記事タイトル、著者、ページ番号での構造化
- **オープンアクセス**: 全コンテンツ無料公開前提の設計
- **レスポンシブ**: Vuetifyグリッドシステム使用、モバイル対応

## Key Files for AI Context
- [data/magazineData.json](data/magazineData.json) - コンテンツ構造の理解必須
- [pages/index.vue](pages/index.vue) - サイト目的・価値観の表現
- [components/MagazineCard.vue](components/MagazineCard.vue) - 核となるコンテンツ表示ロジック
- [nuxt.config.js](nuxt.config.js) - SEO設定、プラグイン構成

## Important Notes
- 生物学用語の正確性を重視（種名、学名、分類群等）
- S3アセットURLの一貫性維持
- 学術雑誌としての信頼性・アクセシビリティ確保