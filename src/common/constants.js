const siteUrlStem = 'https://higurashit.github.io/knowledge-management-rss';
const siteUrl = `${siteUrlStem}/`;

module.exports = {
  // サイト設定
  siteUrl: `${siteUrl}`,
  siteUrlStem: siteUrlStem,
  siteTitle: '企業テックブログRSS（技術領域ごと）',
  siteDescription: '企業のテックブログの更新をまとめたRSSフィードを技術領域ごとに配信しています。',

  // フィード設定
  feedTitle: '企業テックブログRSS',
  feedDescription: '企業のテックブログの更新をまとめたRSSフィード',
  feedLanguage: 'ja',
  feedCopyright: 'higurashit/knowledge-management-rss',
  feedGenerator: 'higurashit/knowledge-management-rss',
  feedUrls: {
    atom: `${siteUrl}feeds/atom.xml`,
    rss: `${siteUrl}feeds/rss.xml`,
    json: `${siteUrl}feeds/feed.json`,
  },

  // GitHub
  author: 'higurashit',
  gitHubUserUrl: 'https://github.com/higurashit/',
  gitHubRepositoryUrl: 'https://github.com/higurashit/knowledge-management-rss/',

  // Google Analytics系。フォークして使う際は値を空にするか書き換えてください
  googleSiteVerification: '',
  globalSiteTagKey: '',

  // フィードの取得などに使う UserAgent
  requestUserAgent: 'facebookexternalhit/1.1; higurashit/knowledge-management-rss',

  // 技術領域
  techs: ['ALL', 'Cloud', 'AWS', 'GCP', 'Azure', 'Snowflake', 'Tableau'],
};
