/**
 * データ取得ユーティリティ
 * 分離されたvolumes.jsonとarticles/volume-*.jsonからデータを効率的に取得
 */

import type { ImageMetadata } from "astro";

/**
 * 巻情報の型定義
 */
export interface Volume {
  no: number;
  title: string;
  url: string;
  publishedDate: string;
  image: string;
  articleCount: number;
  fullPdfUrl?: string;
}

/**
 * 記事情報の型定義
 */
export interface Article {
  title: string;
  author: string;
  page: string;
  url: string;
}

/**
 * 全巻データを取得
 * @returns {Promise<Volume[]>} 全巻のデータ配列
 */
export async function loadAllVolumes(): Promise<Volume[]> {
  try {
    const volumesModule = await import("/src/data/volumes.json");
    return volumesModule.default || [];
  } catch (error) {
    console.error("volumes.jsonの読み込みに失敗:", error);
    return [];
  }
}

/**
 * 指定した巻の記事データを取得（編集委員ページなど、記事データのみが必要な場合用）
 * @param volumeNo - 巻番号
 * @returns {Promise<Article[]>} 記事データ配列
 */
export async function loadVolumeArticles(volumeNo: number): Promise<Article[]> {
  try {
    // Viteの制約により、動的インポートはimport.meta.globを使用
    const articleModules = import.meta.glob("/src/data/articles/volume-*.json");
    const modulePath = `/src/data/articles/volume-${volumeNo}.json`;

    if (modulePath in articleModules) {
      const module = await articleModules[modulePath]();
      return (module as any).default || [];
    }

    console.error(`volume-${volumeNo}.jsonが見つかりません`);
    return [];
  } catch (error) {
    console.error(`volume-${volumeNo}.jsonの読み込みに失敗:`, error);
    return [];
  }
}

/**
 * 指定した巻の詳細情報（巻データ + 記事データ）を取得
 * @param volumeNo - 巻番号
 * @returns {Promise<{volume: Volume | null, articles: Article[]}>}
 */
export async function loadVolumeWithArticles(volumeNo: number): Promise<{
  volume: Volume | null;
  articles: Article[];
}> {
  const volumes = await loadAllVolumes();
  const volume = volumes.find((v) => v.no === volumeNo) || null;
  const articles = await loadVolumeArticles(volumeNo);

  return { volume, articles };
}

/**

 * 表紙画像を取得
 * @param imageFilename - 画像ファイル名
 * @returns {Promise<ImageMetadata | undefined>}
 */
export async function getCoverImage(
  imageFilename: string,
): Promise<ImageMetadata | undefined> {
  try {
    // 動的画像インポート
    const images = import.meta.glob<{ default: ImageMetadata }>(
      "/src/assets/cover/*.{jpeg,jpg,png,gif}",
    );

    const imagePath = `/src/assets/cover/${imageFilename}`;
    const resolvedImage = images[imagePath];

    if (resolvedImage) {
      const imageModule = await resolvedImage();
      return imageModule.default;
    }

    console.warn(`画像ファイルが見つかりません: ${imageFilename}`);
    return undefined;
  } catch (error) {
    console.error(`画像の読み込みに失敗: ${imageFilename}`, error);
    return undefined;
  }
}

/**
 * 全巻データと表紙画像を一括取得（一覧ページ用）
 * @returns {Promise<Array<Volume & {coverImage?: ImageMetadata}>>}
 */
export async function loadAllVolumesWithImages(): Promise<
  Array<Volume & { coverImage?: ImageMetadata }>
> {
  const volumes = await loadAllVolumes();

  // 新しい順にソート
  const sortedVolumes = volumes.sort((a, b) => b.no - a.no);

  // 各巻の表紙画像を並行して取得
  const volumesWithImages = await Promise.all(
    sortedVolumes.map(async (volume) => ({
      ...volume,
      coverImage: await getCoverImage(volume.image),
    })),
  );

  return volumesWithImages;
}

/**
 * 編集者画像を取得
 * @param imageFilename - 画像ファイル名（オプショナル、未指定時はno-image.jpgを使用）
 * @returns {Promise<ImageMetadata | undefined>}
 */
export async function getEditorImage(
  imageFilename?: string,
): Promise<ImageMetadata | undefined> {
  try {
    // 動的画像インポート
    const images = import.meta.glob<{ default: ImageMetadata }>(
      "/src/assets/editors/*.{jpeg,jpg,png,gif}",
    );

    const filename = imageFilename || "no-image.jpg";
    const imagePath = `/src/assets/editors/${filename}`;
    const resolvedImage = images[imagePath];

    if (resolvedImage) {
      const imageModule = await resolvedImage();
      return imageModule.default;
    }

    console.warn(`編集者画像が見つかりません: ${filename}`);
    return undefined;
  } catch (error) {
    console.error(`編集者画像の読み込みに失敗: ${filename}`, error);
    return undefined;
  }
}

/**
 * 静的パス生成用の巻データ取得
 * @returns {Promise<Array<{params: {id: string}, props: {volumeNo: number}}>>}
 */
export async function getVolumeStaticPaths(): Promise<
  Array<{
    params: { id: string };
    props: { volumeNo: number };
  }>
> {
  const volumes = await loadAllVolumes();

  return volumes.map((volume) => ({
    params: { id: volume.no.toString() },
    props: { volumeNo: volume.no },
  }));
}
