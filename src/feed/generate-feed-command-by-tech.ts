import { FEED_INFO_LIST, TECHS, Tech } from '../resources/feed-info-list';
import { FeedCrawler, CustomRssParserFeed, CustomRssParserItem } from './utils/feed-crawler';
import { FeedGenerator } from './utils/feed-generator';
import * as path from 'path';
import { FeedStorer } from './utils/feed-storer';

const FEED_FETCH_CONCURRENCY = 50;
const FEED_OGP_FETCH_CONCURRENCY = 50;
const FILTER_ARTICLE_DATE = new Date(Date.now() - 14 * 24 * 60 * 60 * 1000);
const MAX_FEED_DESCRIPTION_LENGTH = 200;
const MAX_FEED_CONTENT_LENGTH = 500;
const STORE_FEEDS_DIR_PATH = path.join(__dirname, '../site/feeds');
const STORE_BLOG_FEEDS_DIR_PATH = path.join(__dirname, '../site/blog-feeds');

const feedCrawler = new FeedCrawler();
const feedGenerator = new FeedGenerator();
const feedStorer = new FeedStorer();

const generateFeedByTechFields = async (
  techfield: string,
  feeds: CustomRssParserFeed[],
  allFeedItems: CustomRssParserItem[],
) => {
  // フィード関連データ取得
  const [allFeedItemOgsResultMap, allFeedItemHatenaCountMap, feedOgsResultMap] = await Promise.all([
    feedCrawler.fetchFeedItemOgsResultMap(allFeedItems, FEED_OGP_FETCH_CONCURRENCY),
    feedCrawler.fetchHatenaCountMap(allFeedItems),
    feedCrawler.fetchFeedOgsResultMap(feeds, FEED_OGP_FETCH_CONCURRENCY),
  ]);
  const ogsResultMap = new Map([...allFeedItemOgsResultMap, ...feedOgsResultMap]);

  // まとめフィード作成
  const aggregatedFeed = feedGenerator.generateFeed(
    allFeedItems,
    ogsResultMap,
    allFeedItemHatenaCountMap,
    MAX_FEED_DESCRIPTION_LENGTH,
    MAX_FEED_CONTENT_LENGTH,
  );

  // まとめフィードのバリデーション。エラーならすぐに終了する
  const isValid = await feedGenerator.validateAggregatedFeed(aggregatedFeed);
  if (!isValid) {
    process.exit(1);
  }

  // ファイル出力、画像キャッシュ
  // 技術領域ごとにRSSを出力
  console.log('[DEBUG] Create Feed ByTech:');
  console.log({
    tech: techfield,
    feedsCnt: feeds.length,
    allFeedItemsCnt: allFeedItems.length,
    aggregatedFeedCnt: aggregatedFeed.items.length,
  });

  await Promise.all([
    feedStorer.storeFeeds(aggregatedFeed, `${STORE_FEEDS_DIR_PATH}/${techfield}/`),
    feedStorer.storeBlogFeeds(
      feeds,
      ogsResultMap,
      allFeedItemHatenaCountMap,
      `${STORE_BLOG_FEEDS_DIR_PATH}/${techfield}/`,
    ),
    feedStorer.cacheImages(allFeedItems, ogsResultMap, feeds),
  ]);

  console.log('[DEBUG] Created Feed ByTech:' + techfield);
};

(async () => {
  // フィード取得、後処理
  const feeds = await feedCrawler.fetchFeedsAsync(FEED_INFO_LIST, FEED_FETCH_CONCURRENCY);

  TECHS.forEach(async (tech: Tech) => {
    const feedsByTech: CustomRssParserFeed[] = [];
    const allFeedItemsByTech: CustomRssParserItem[] = [];

    // feedsを絞り込み
    feeds.forEach((feed) => {
      let needsGenerate = false;
      const items = [];
      // feed = 個社ごとにループ
      feed.items.forEach((item) => {
        tech.keywords.some((keyword) => {
          // 各feedのタイトルにキーワードが含まれている場合、RSS作成対象
          const reg = new RegExp(keyword);
          const isContain = item.title.toLowerCase().match(reg);
          if (isContain) {
            items.push(item);
            needsGenerate = true;
            return true;
          }
        });
      });
      if (needsGenerate) {
        feedsByTech.push(feed);
      }
    });
    console.log({ feedsCnt: feeds.length, feedsByTechCnt: feedsByTech.length });

    // フィード取得後の後処理
    const titles: string[] = []; // タイトル重複排除用
    const allFeedItems = feedCrawler.aggregateFeeds(feedsByTech, FILTER_ARTICLE_DATE);
    const items = [];
    allFeedItems.forEach((item) => {
      let needsGenerate = false;
      tech.keywords.some((keyword) => {
        // 各feedのタイトルにキーワードが含まれている場合、RSS作成対象
        const reg = new RegExp(keyword);
        const isContain = item.title.toLowerCase().match(reg);
        if (isContain && titles.indexOf(item.title) === -1) {
          items.push(item);
          titles.push(item.title);
          needsGenerate = true;
          return true;
        }
      });
      if (needsGenerate) {
        allFeedItemsByTech.push(item);
      }
    });
    // カテゴリに記号が入る不具合対応
    allFeedItemsByTech.forEach((item) => {
      if (item.categories) {
        item.categories = item.categories.map((category: string) => category.replace(/[!"#$%'()=~|&<>?_+*}`{]/g, ''));
      }
    });

    console.log('[DEBUG] Created ByTech:');
    console.log({ tech: tech.field, feedItemsCnt: allFeedItems.length, feedItemsByTechCnt: allFeedItemsByTech.length });

    // 後続処理を実行
    await generateFeedByTechFields(tech.field, feedsByTech, allFeedItemsByTech);
  });
})();
