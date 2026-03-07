/**
 * リンクURL生成と外部リンク判定のための共通ヘルパー関数
 */

/**
 * アイテムからURLを生成する
 * @param item - リンクアイテム（link または slug プロパティを持つ）
 * @returns 生成されたURL
 */
export function buildUrl(item: any): string {
  if (item.link) {
    // http://、https://で始まる場合はそのまま使用、それ以外はslugとして扱う
    if (item.link.startsWith("http://") || item.link.startsWith("https://")) {
      return item.link;
    } else {
      return `/${item.link}`;
    }
  } else if (item.slug) {
    return `/${item.slug}`; // slugベースのパス
  }
  return "#";
}

/**
 * URLが外部リンクかどうかを判定する
 * @param url - 判定するURL
 * @returns 外部リンクの場合true
 */
export function isExternalLink(url: string): boolean {
  return url.startsWith("http://") || url.startsWith("https://");
}
