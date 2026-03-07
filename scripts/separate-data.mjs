#!/usr/bin/env node
/**
 * Volume・Article データ分離と画像リネーム統合スクリプト
 * 既存のvolume-*.jsonファイルを巻情報（volumes.json）と記事情報（articles/volume-*.json）に分離
 * NicheLife*.jpgをvolume-*.jpgにリネーム
 * データ検証も実行
 */

import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// プロジェクトのルートディレクトリを正しく設定
const ROOT_DIR = path.dirname(__dirname); // scripts/の親ディレクトリ
const SRC_DIR = path.join(ROOT_DIR, "src");
const DATA_DIR = path.join(SRC_DIR, "data");
const ARTICLES_DIR = path.join(DATA_DIR, "articles");
const COVER_DIR = path.join(SRC_DIR, "assets", "cover");

/**
 * 巻情報のみの構造
 * @typedef {Object} Volume
 * @property {number} no
 * @property {string} title
 * @property {string} url
 * @property {string} publishedDate
 * @property {string} image
 * @property {number} articleCount
 */

/**
 * 記事情報の構造
 * @typedef {Object} Article
 * @property {string} title
 * @property {string} author
 * @property {string} page
 * @property {string} url
 */

/**
 * 元の統合データ構造
 * @typedef {Object} OriginalVolumeData
 * @property {number} no
 * @property {string} series
 * @property {string} url
 * @property {string} publishedDate
 * @property {string} image
 * @property {Article[]} article
 */

class DataSeparationProcessor {
  constructor() {}

  /**
   * 全volume-*.jsonファイルを取得
   * @returns {Promise<string[]>}
   */
  async getVolumeFiles() {
    const files = await fs.readdir(ARTICLES_DIR);
    return files
      .filter((file) => file.match(/^volume-\d+\.json$/))
      .sort((a, b) => {
        const aNum = parseInt(a.match(/\d+/)?.[0] || "0");
        const bNum = parseInt(b.match(/\d+/)?.[0] || "0");
        return aNum - bNum;
      });
  }

  /**
   * 元のvolume-*.jsonファイルを読み込み
   * @param {string} filename
   * @returns {Promise<OriginalVolumeData>}
   */
  async loadOriginalVolumeData(filename) {
    const filePath = path.join(ARTICLES_DIR, filename);
    const content = await fs.readFile(filePath, "utf8");
    return JSON.parse(content);
  }

  /**
   * 画像ファイルをリネーム (NicheLifeX.jpg -> volume-X.jpg)
   */
  async renameImages() {
    console.log("🖼️  表紙画像ファイルのリネーム処理を開始...");

    const imageFiles = await fs.readdir(COVER_DIR);
    const nicheLifeImages = imageFiles.filter((file) =>
      file.match(/^NicheLife\d+\.jpg$/),
    );

    for (const imageFile of nicheLifeImages) {
      const match = imageFile.match(/^NicheLife(\d+)\.jpg$/);
      if (match) {
        const volumeNo = match[1];
        const oldPath = path.join(COVER_DIR, imageFile);
        const newFileName = `volume-${volumeNo}.jpg`;
        const newPath = path.join(COVER_DIR, newFileName);

        await fs.rename(oldPath, newPath);
        console.log(`  ✓ ${imageFile} -> ${newFileName}`);
      }
    }

    console.log("✅ 画像リネーム処理完了");
  }

  /**
   * 巻データと記事データを分離
   * @param {OriginalVolumeData} originalData
   * @returns {{volume: Volume, articles: Article[]}}
   */
  separateData(originalData) {
    // 表紙記事を除外した記事一覧
    const articles = originalData.article.filter(
      (article) =>
        !article.title.includes("表紙") && !article.title.includes("目次"),
    );

    const volume = {
      no: originalData.no,
      title: originalData.series,
      url: originalData.url,
      publishedDate: originalData.publishedDate,
      image: `volume-${originalData.no}.jpg`, // 新しい画像名
      articleCount: articles.length,
    };

    return { volume, articles };
  }

  /**
   * 基本データ検証
   * @param {Volume} volume
   * @param {Article[]} articles
   * @returns {string[]}
   */
  validateData(volume, articles) {
    const errors = [];

    // 巻データの必須フィールドチェック
    if (!volume.no || volume.no <= 0)
      errors.push(`Volume ${volume.no}: 巻番号が無効です`);
    if (!volume.title) errors.push(`Volume ${volume.no}: タイトルが空です`);
    if (!volume.publishedDate)
      errors.push(`Volume ${volume.no}: 発行日が空です`);
    if (!volume.image)
      errors.push(`Volume ${volume.no}: 画像ファイル名が空です`);

    // 記事データの必須フィールドチェック
    articles.forEach((article, index) => {
      if (!article.title)
        errors.push(
          `Volume ${volume.no}, Article ${index + 1}: タイトルが空です`,
        );
      if (!article.author)
        errors.push(
          `Volume ${volume.no}, Article ${index + 1}: 著者名が空です`,
        );
      if (!article.page)
        errors.push(
          `Volume ${volume.no}, Article ${index + 1}: ページが空です`,
        );
      if (!article.url)
        errors.push(`Volume ${volume.no}, Article ${index + 1}: URLが空です`);
    });

    return errors;
  }

  /**
   * 画像ファイル存在チェック
   * @param {string} imageName
   * @returns {Promise<boolean>}
   */
  async validateImageExists(imageName) {
    try {
      const imagePath = path.join(COVER_DIR, imageName);
      await fs.access(imagePath);
      return true;
    } catch {
      return false;
    }
  }

  /**
   * volumes.jsonを生成
   * @param {Volume[]} volumes
   */
  async generateVolumesJson(volumes) {
    const volumesPath = path.join(DATA_DIR, "volumes.json");
    await fs.writeFile(volumesPath, JSON.stringify(volumes, null, 2), "utf8");
    console.log(`✅ volumes.json を生成 (${volumes.length}巻)`);
  }

  /**
   * 個別記事JSONファイルを生成
   * @param {number} volumeNo
   * @param {Article[]} articles
   */
  async generateArticleJson(volumeNo, articles) {
    const articlePath = path.join(ARTICLES_DIR, `volume-${volumeNo}.json`);
    await fs.writeFile(articlePath, JSON.stringify(articles, null, 2), "utf8");
    console.log(`✅ volume-${volumeNo}.json を生成 (${articles.length}記事)`);
  }

  /**
   * メイン処理
   */
  async run() {
    try {
      console.log("🚀 Volume・Article データ分離処理を開始...\n");

      // 1. 画像リネーム処理
      await this.renameImages();
      console.log("");

      // 2. データ分離処理
      console.log("📊 データ分離処理を開始...");
      const volumeFiles = await this.getVolumeFiles();
      const volumes = [];
      let totalErrors = [];
      let totalImageErrors = [];

      for (const filename of volumeFiles) {
        console.log(`  📖 処理中: ${filename}`);

        // 元データ読み込み
        const originalData = await this.loadOriginalVolumeData(filename);

        // データ分離
        const { volume, articles } = this.separateData(originalData);

        // データ検証
        const errors = this.validateData(volume, articles);
        if (errors.length > 0) {
          totalErrors.push(...errors);
        }

        // 画像存在チェック
        const imageExists = await this.validateImageExists(volume.image);
        if (!imageExists) {
          totalImageErrors.push(`画像ファイルが存在しません: ${volume.image}`);
        }

        volumes.push(volume);

        // 記事JSONファイル生成
        await this.generateArticleJson(volume.no, articles);
      }

      // 3. volumes.json生成
      await this.generateVolumesJson(volumes);

      // 4. 検証結果レポート
      console.log("\n📋 検証結果:");
      if (totalErrors.length === 0 && totalImageErrors.length === 0) {
        console.log("✅ すべての検証をパスしました！");
      } else {
        if (totalErrors.length > 0) {
          console.log("❌ データエラー:");
          totalErrors.forEach((error) => console.log(`  - ${error}`));
        }
        if (totalImageErrors.length > 0) {
          console.log("❌ 画像ファイルエラー:");
          totalImageErrors.forEach((error) => console.log(`  - ${error}`));
        }
      }

      console.log(`\n🎉 処理完了! ${volumes.length}巻のデータを分離しました。`);
    } catch (error) {
      console.error("💥 処理中にエラーが発生:", error);
      process.exit(1);
    }
  }
}

// スクリプト実行
if (import.meta.url === `file://${process.argv[1]}`) {
  const processor = new DataSeparationProcessor();
  processor.run();
}
