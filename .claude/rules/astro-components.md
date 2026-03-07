---
paths:
  - "src/components/**/*.astro"
  - "src/pages/**/*.astro"
---

# Astroコンポーネント開発規約

## コンポーネント設計原則

### ファイル命名
- PascalCase使用（例：`VolumeGrid.astro`, `ImagePlaceholder.astro`）
- 機能を明確に表す名前
- 単一責任の原則に従う

### プロップス定義
```astro
---
export interface Props {
  volume: Volume;
  showArticles?: boolean; // オプショナルは?を使用
}

const { volume, showArticles = false } = Astro.props;
---
```

### スタイリング
- TailwindCSSクラスのみ使用
- カスタムCSSは禁止
- レスポンシブデザインを考慮したクラス設定

## 画像処理

### 必須：Astro Imageコンポーネント使用
```astro
---
import { Image } from 'astro:assets';
import { getCoverImage } from '@/utils/data';

const coverImage = await getCoverImage(volume.image);
---

{coverImage && (
  <Image
    src={coverImage}
    alt={`${volume.title}の表紙`}
    width={180}
    height={254}
    class="w-full h-auto"
  />
)}
```

### 禁止：直接パス指定
```astro
<!-- ❌ 絶対にやらない -->
<img src="/src/assets/cover/volume-1.jpg" alt="表紙">

<!-- ✅ 正しい方法 -->
<Image src={coverImage} alt="表紙" width={180} height={254} />
```

## SEO対応

### メタデータ設定
```astro
---
const title = `第${volume.no}号 - ${volume.title}`;
const description = `ニッチェ・ライフ第${volume.no}号（${volume.publishedDate}発行）`;
---

<html>
<head>
  <title>{title} | ニッチェ・ライフ</title>
  <meta name="description" content={description} />
</head>
</html>
```

### アクセシビリティ
- セマンティックHTML使用
- 適切なheading階層
- alt属性の必須設定

## パフォーマンス

### 画像最適化
- `loading="lazy"`を適切に使用
- WebP自動変換を活用
- 適切なサイズ指定

### データフェッチ
- 必要なデータのみ取得
- `loadVolumeWithArticles()`等のユーティリティ活用