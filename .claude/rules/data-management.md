---
paths:
  - "src/data/**/*.json"
  - "src/utils/data.ts"
---

# データ管理規約

## 分離アーキテクチャの維持

### 巻データ (`src/data/volumes.json`)
巻の基本情報のみを管理。記事データは含めない。

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

### 記事データ (`src/data/articles/volume-*.json`)
各巻の記事情報のみを管理。

```json
[
  {
    "title": "記事タイトル",
    "author": "著者名",
    "page": "開始-終了",
    "url": "https://doi.org/10.60269/nichelife.13.0_2"
  }
]
```

## データ整合性ルール

### 必須フィールド検証
- `volumes.json`の各エントリに必須フィールドがすべて存在
- `publishedDate`はYYYY/M/D形式（ゼロパディングなし）
- `no`は正の整数、重複なし
- `url`は相対パス形式

### 記事データの整合性
- DOIは必ず`https://doi.org/`形式
- `page`は「開始-終了」形式（例：「2-11」）
- `author`は複数の場合「・」で区切り

## ファイル操作規約

### 新規追加時の必須操作
1. 表紙画像を`src/assets/cover/volume-{番号}.jpg`に配置
2. `volumes.json`に巻情報を追加
3. `src/data/articles/volume-{番号}.json`を作成

### 修正時の注意事項
- 既存巻号のnoを変更してはならない
- DOIリンクは学術引用に使用されるため慎重に扱う
- 画像ファイル名の変更時は複数ファイルの同期が必要

## データ取得ユーティリティ

### 使用必須の関数
- `loadAllVolumes()`: 全巻データ取得
- `loadVolumeArticles(volumeNo)`: 特定巻の記事取得  
- `loadVolumeWithArticles(volumeNo)`: 巻+記事の結合データ取得
- `getCoverImage(filename)`: 表紙画像取得

### 直接import禁止
```typescript
// ❌ 直接importは禁止
import volumesData from '/src/data/volumes.json';

// ✅ ユーティリティ関数を使用
import { loadAllVolumes } from '@/utils/data';
const volumes = await loadAllVolumes();
```