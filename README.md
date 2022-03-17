# 個人用企業テックブログ RSS

https://yamadashy.github.io/tech-blog-rss-feed/  
を一部改変して使わせていただいております。

## 改変内容

- Feed 先を追加（公式サイト、TECHFEED を追加）
- Feed を技術領域ごとに作成するように変更（タイトルを技術領域ごとの抽出用キーワードで絞り込み）
- constants.js を自分の URL に書き換え、技術領域リストを追加
- Web サイトを簡略化（Web サイトからの回遊は行わないため）
- Feed のカテゴリ名に記号が入るパターンに対応（Snowflake blog）

## サイトの追加方法

[src/resources/feed-info-list.ts](src/resources/feed-info-list.ts) の FEED_INFO_LIST に追加する

## 技術領域、抽出用キーワードの追加方法

[src/resources/feed-info-list.ts](src/resources/feed-info-list.ts) の KEYWORDS, および、TECHS に追加する

## 仕組み

（本家のまま）  
GitHub Actions で定期的に更新されており、サイトの生成は [Eleventy](https://www.11ty.dev/) を使用しています。

更新は多少遅延ありますが以下のタイミングで行います。

- 平日 8 時-24 時の 1 時間おき
- 休日 8 時-24 時の 2 時間おき

### 開発用コマンド

（本家のまま）

```bash
$ # フィードを取得して作成
$ yarn feed:generate

$ # localhost:8080 で確認
$ yarn site:serve
```

### （補足）キーワード、及び、サイトのチューニング結果

blog: ブログ数（左：全ブログ数、右：対象ブログ数）  
post: 記事数（左：全記事数、右：対象記事数）

- AWS
  - チューニング前
    - blog: { feedsCnt: 429, feedsByTechCnt: 154 }
    - post: { feedItemsCnt: 197, feedItemsByTechCnt: 19 }
  - チューニング後
    - blog: { feedsCnt: 479, feedsByTechCnt: 191 }
    - post: { feedItemsCnt: 320, feedItemsByTechCnt: 64 }
- GCP
  - チューニング前
    - blog: { feedsCnt: 429, feedsByTechCnt: 25 }
    - post: { feedItemsCnt: 40, feedItemsByTechCnt: 3 }
  - チューニング後
    - blog: { feedsCnt: 479, feedsByTechCnt: 107 }
    - post: { feedItemsCnt: 235, feedItemsByTechCnt: 33 }
- Azure
  - チューニング前
    - blog: { feedsCnt: 429, feedsByTechCnt: 20 }
    - post: { feedItemsCnt: 41, feedItemsByTechCnt: 8 }
  - チューニング後
    - blog: { feedsCnt: 479, feedsByTechCnt: 30 }
    - post: { feedItemsCnt: 104, feedItemsByTechCnt: 29 }
- Tableau
  - チューニング前
    - blog: { feedsCnt: 429, feedsByTechCnt: 8 }
    - post: { feedItemsCnt: 13, feedItemsByTechCnt: 1 }
  - チューニング後
    - blog: { feedsCnt: 479, feedsByTechCnt: 10 }
    - post: { feedItemsCnt: 18, feedItemsByTechCnt: 4 }
- Snowflake
  - チューニング前
    - blog: { feedsCnt: 429, feedsByTechCnt: 4 }
    - post: { feedItemsCnt: 7, feedItemsByTechCnt: 1 }
  - チューニング後
    - blog: { feedsCnt: 479, feedsByTechCnt: 6 }
    - post: { feedItemsCnt: 26, feedItemsByTechCnt: 10 }
