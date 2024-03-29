export type FeedInfo = {
  label: string;
  url: string;
};
export type Tech = {
  field: string;
  keywords: string[];
};

const createFeedInfoList = (feedInfoTuples: [label: string, url: string][]) => {
  const feedInfoList: FeedInfo[] = [];

  for (const [label, url] of feedInfoTuples) {
    feedInfoList.push({ label, url });
  }

  return feedInfoList;
};

const createTechKeywordsList = (techKeywordsTuples: [techfield: string, keywords: string[]][]) => {
  const techKeywordsList: Tech[] = [];

  for (const [field, keywords] of techKeywordsTuples) {
    techKeywordsList.push({ field, keywords });
  }

  return techKeywordsList;
};

// フィード情報一覧。アルファベット順
const KEYWORDS = {
  AWS: ['alb', 'aws', 'alexa', 'amazon ', 'ec2', 'elb', 'elastic load balancing', 'nlb'],
  GCP: [
    'gcp',
    'anvato',
    'firebase',
    'g suite',
    'cloud endpoints',
    'apigee',
    'analytics hub',
    'anthos',
    'app engine',
    'appsheet',
    'artifact registry',
    'autoscaling',
    'bigquery',
    'certificate authority service',
    'certificate manager',
    'cloud armor',
    'cloud asset inventory',
    'cloud audit logs',
    'cloud automl natural language',
    'cloud automl translation',
    'cloud automl vision',
    'cloud billing',
    'cloud build',
    'cloud cdn',
    'cloud composer',
    'cloud dns',
    'cloud data fusion',
    'cloud data loss prevention',
    'cloud dataflow',
    'cloud datastore/cloud bigtable',
    'cloud deployment manager',
    'cloud filestore',
    'cloud firestore',
    'cloud functions',
    'cloud hsm',
    'cloud healthcare api',
    'cloud iam',
    'cloud ids',
    'cloud identity',
    'cloud identity-aware proxy',
    'cloud interconnect',
    'cloud iot core',
    'cloud iot edge',
    'cloud key management service',
    'cloud load balancing',
    'cloud monitoring',
    'cloud natural language',
    'cloud pub/sub',
    'cloud run',
    'cloud sql for mysql',
    'cloud sql for postgresql',
    'cloud sql for sql server',
    'cloud scheduler',
    'cloud shell',
    'cloud shell code editor',
    'cloud source repositories',
    'cloud spanner',
    'cloud speech-to-text',
    'cloud storage',
    'cloud storage coldline',
    'cloud storage transfer service',
    'cloud tpu',
    'cloud tasks',
    'cloud trace',
    'cloud translation',
    'compliance reports manager',
    'compute engine',
    'confidential vms',
    'contact center ai insights',
    'container registry',
    'cost management',
    'data catalog',
    'database migration service',
    'dataprep by trifacta',
    'dataproc',
    'deep leaning containers',
    'deep learning vm image',
    'dialogflow',
    'document ai',
    'elastic cloud on gcp',
    'eventarc',
    'identity platform',
    'looker',
    'managed service for microsoft active directory',
    'memorystore',
    'network connectivity center',
    'network intelligence center',
    'persistent disk',
    'policy intelligence',
    'private access options for services',
    'private catalog',
    'recommendations ai',
    'recommender',
    'resource manager',
    'secret manager',
    'security command center',
    'service directory',
    'text-to-speech',
    'traffic director',
    'transcoder ap',
    'transfer appliance',
    'vm manager',
    'vertex',
    'vision ai',
    'workflow',
  ],
  Azure: [
    'api apps',
    'api management',
    'anomaly detector',
    'app configuration',
    'app service certificates',
    'azure',
    'computer vision',
    'custom speech',
    'custom vision',
    'data science virtual machines',
    'elasticsearch service on elastic cloud',
    'event grid',
    'hdinsight',
    'language understanding',
    'managed disk',
    'microsoft defender for cloud',
    'mobile apps',
    'network watcher',
    'notification hubs',
    'office 365',
    'personalizer',
    'power bi',
    'powerapps',
    'sql database',
    'service fabric',
    'service trust portal',
    'speech services',
    'storage archive access tier',
    'subspricton+rbac',
    'translator text',
    'translator text custom translator',
    'virtual machine scale sets',
    'visual studio app center',
    'visual studio codespaces',
  ],
  Tableau: ['tableau'], // TODO: キーワードが少ない
  Snowflake: ['snowflake'], // TODO: キーワードが少ない
};

export const TECHS: Tech[] = createTechKeywordsList([
  ['ALL', [...KEYWORDS.AWS, ...KEYWORDS.GCP, ...KEYWORDS.Azure, ...KEYWORDS.Tableau, ...KEYWORDS.Snowflake]],
  ['Cloud', [...KEYWORDS.AWS, ...KEYWORDS.GCP, ...KEYWORDS.Azure]],
  ['AWS', KEYWORDS.AWS],
  ['GCP', KEYWORDS.GCP],
  ['Azure', KEYWORDS.Azure],
  ['Tableau', KEYWORDS.Tableau],
  ['Snowflake', KEYWORDS.Snowflake],
]);

export const FEED_INFO_LIST: FeedInfo[] = createFeedInfoList([
  // 追加分
  ['AWS blog', 'https://aws.amazon.com/jp/blogs/news/feed/'],
  ['GCP blog', 'https://cloudblog.withgoogle.com/ja/products/gcp/rss/'],
  ['Azure blog', 'https://azurecomcdn.azureedge.net/ja-jp/blog/feed/'],
  ['Snowflake blog', 'https://www.snowflake.com/feed/?lang=ja'],
  ['Tableau trust', 'https://trust.tableau.com/history.rss'],
  ['tableau-id Press', 'https://blog.truestar.co.jp/feed/'],
  ['TECHFEED AI', 'https://techfeed.io/feeds/channels/AI'],
  ['TECHFEED API Economy', 'https://techfeed.io/feeds/channels/API%20Economy'],
  ['TECHFEED Access analysis', 'https://techfeed.io/feeds/channels/Access%20analysis'],
  ['TECHFEED Amazon Web Services', 'https://techfeed.io/feeds/channels/Amazon%20Web%20Services'],
  [
    'TECHFEED Authentication & Authorization',
    'https://techfeed.io/feeds/channels/Authentication%20%2F%20Authorization',
  ],
  ['TECHFEED Blockchain', 'https://techfeed.io/feeds/channels/Blockchain'],
  ['TECHFEED Cassandra', 'https://techfeed.io/feeds/channels/Cassandra'],
  ['TECHFEED Cat', 'https://techfeed.io/feeds/channels/Cat%F0%9F%98%BA'],
  ['TECHFEED Containers', 'https://techfeed.io/feeds/channels/Containers'],
  ['TECHFEED Continuous Integration', 'https://techfeed.io/feeds/channels/Continuous%20Integration'],
  ['TECHFEED Data Visualization', 'https://techfeed.io/feeds/channels/Data%20Visualization'],
  ['TECHFEED DevOps', 'https://techfeed.io/feeds/channels/DevOps'],
  ['TECHFEED Docker', 'https://techfeed.io/feeds/channels/Docker'],
  ['TECHFEED Git', 'https://techfeed.io/feeds/channels/Git'],
  ['TECHFEED GitHub', 'https://techfeed.io/feeds/channels/GitHub'],
  ['TECHFEED Google Cloud Platform', 'https://techfeed.io/feeds/channels/Google%20Cloud%20Platform'],
  ['TECHFEED Google Spreadsheet', 'https://techfeed.io/feeds/channels/Google%20Spreadsheet'],
  ['TECHFEED GovTech', 'https://techfeed.io/feeds/channels/GovTech'],
  ['TECHFEED HR Tech', 'https://techfeed.io/feeds/channels/HR%20Tech'],
  ['TECHFEED Heroku', 'https://techfeed.io/feeds/channels/Heroku'],
  ['TECHFEED IoT', 'https://techfeed.io/feeds/channels/IoT'],
  ['TECHFEED Japanese Ventures', 'https://techfeed.io/feeds/channels/Japanese%20Ventures'],
  ['TECHFEED JavaScript', 'https://techfeed.io/feeds/channels/JavaScript'],
  ['TECHFEED Kubernetes', 'https://techfeed.io/feeds/channels/Kubernetes'],
  ['TECHFEED Machine Learning', 'https://techfeed.io/feeds/channels/Machine%20Learning'],
  ['TECHFEED Marketing', 'https://techfeed.io/feeds/channels/Marketing'],
  ['TECHFEED Microsoft Azure', 'https://techfeed.io/feeds/channels/Microsoft%20Azure'],
  ['TECHFEED Node.js', 'https://techfeed.io/feeds/channels/Node.js'],
  ['TECHFEED Object Oriented Programming', 'https://techfeed.io/feeds/channels/Object%20Oriented%20Programming'],
  ['TECHFEED Open Innovation', 'https://techfeed.io/feeds/channels/Open%20Innovation'],
  ['TECHFEED Oracle', 'https://techfeed.io/feeds/channels/Oracle'],
  ['TECHFEED Product Management', 'https://techfeed.io/feeds/channels/Product%20Management'],
  ['TECHFEED Progressive Web Apps', 'https://techfeed.io/feeds/channels/Progressive%20Web%20Apps'],
  ['TECHFEED Python', 'https://techfeed.io/feeds/channels/Python'],
  ['TECHFEED React', 'https://techfeed.io/feeds/channels/React'],
  ['TECHFEED SDGs', 'https://techfeed.io/feeds/channels/SDGs'],
  ['TECHFEED Software Design', 'https://techfeed.io/feeds/channels/Software%20Design'],
  ['TECHFEED Software testing', 'https://techfeed.io/feeds/channels/Software%20testing'],
  ['TECHFEED Startup', 'https://techfeed.io/feeds/channels/Startup'],
  ['TECHFEED TypeScript', 'https://techfeed.io/feeds/channels/TypeScript'],
  ['TECHFEED Wearable', 'https://techfeed.io/feeds/channels/Wearable'],
  ['TECHFEED Web Performance', 'https://techfeed.io/feeds/channels/Web%20Performance'],
  ['TECHFEED WordPress', 'https://techfeed.io/feeds/channels/WordPress'],
  ['TECHFEED X as a Service', 'https://techfeed.io/feeds/channels/X%20as%20a%20Service'],
  ['Qiita trend', 'https://qiita.com/popular-items/feed'],
  ['zenn.dev trend', 'https://zenn.dev/feed'],
  ['zenn.dev AWS trend', 'https://zenn.dev/topics/aws/feed'],
  ['zenn.dev GCP trend', 'https://zenn.dev/topics/gcp/feed'],
  ['zenn.dev Azure trend', 'https://zenn.dev/topics/azure/feed'],
  // ['ClassMethod', 'https://dev.classmethod.jp/feed/'],
  ['バシャログ', 'http://bashalog.c-brains.jp/index.xml'],
  ['グノシー', 'https://tech.gunosy.io/rss'],

  // フィード情報一覧。アルファベット順
  // ['企業名・製品名など', 'RSS/AtomフィードのURL'],
  ['10ANTZ', 'https://developers.10antz.co.jp/feed'],
  ['10X', 'https://product.10x.co.jp/feed'],
  ['207', 'https://tech.207-inc.com/feed'],
  ['ABEJA', 'https://tech-blog.abeja.asia/feed'],
  ['ACES', 'https://tech.acesinc.co.jp/feed'],
  ['AI inside', 'https://note.com/aiinside_tech/rss'],
  ['AIREV', 'https://zenn.dev/airev/feed'],
  ['ANDPAD', 'https://tech.andpad.co.jp/feed'],
  ['Acroquest Technology', 'https://acro-engineer.hatenablog.com/feed'],
  ['Adways', 'https://blog.engineer.adways.net/feed'],
  ['Aiming', 'https://developer.aiming-inc.com/feed'],
  ['AppBrew', 'https://tech.appbrew.io/feed'],
  ['BASE', 'https://devblog.thebase.in/feed'],
  ['BFT名古屋', 'https://bftnagoya.hateblo.jp/feed'],
  ['BIGLOBE', 'https://style.biglobe.co.jp/feed/category/TechBlog'],
  // ['BRANU', 'https://tech.branu.jp/feed'],
  ['Babel', 'https://dev.babel.jp/feed'],
  ['Baseconnect', 'https://techblog.baseconnect.in/feed'],
  ['Basicinc', 'https://tech.basicinc.jp/feed'],
  ['Beatrust', 'https://tech.beatrust.com/feed'],
  ['BrainPad', 'https://blog.brainpad.co.jp/feed'],
  ['CADDi', 'https://caddi.tech/feed'],
  ['CARTA', 'https://techblog.cartaholdings.co.jp/feed'],
  ['CCCマーケティング', 'https://techblog.cccmk.co.jp/feed'],
  ['CData Software', 'https://www.cdatablog.jp/feed'],
  ['CHUGAI DIGITAL', 'https://note.chugai-pharm.co.jp/m/mdaeaf24de472/rss'],
  // ['COOSY', 'https://coosy.co.jp/blog/category/system-develop/feed/'],
  // ['CROOZ SHOPLIST', 'https://crooz.shoplist.com/blog-category/technology/feed'],
  ['CROOZ', 'https://croozblog.hatenablog.com/feed'],
  ['CauchyE', 'https://zenn.dev/cauchye/feed'],
  ['Cerevo', 'https://tech-blog.cerevo.com/feed'],
  ['Chatwork', 'https://creators-note.chatwork.com/feed'],
  ['Classi', 'https://tech.classi.jp/feed'],
  ['Colorful Palette', 'https://media.colorfulpalette.co.jp/m/m753f507dae79/rss'],
  ['ContractS', 'https://tech.contracts.co.jp/feed'],
  // ['Croooober', 'https://tech.croooober.co.jp/feed'],
  ['CyberZ', 'https://note.com/cyberz_cto/rss'],
  // ['DMM', 'https://inside.dmm.com/feed'],
  ['DeNA SWET', 'https://swet.dena.com/feed'],
  ['DeNA', 'https://engineering.dena.com/blog/index.xml'],
  ['Dentsu Digital', 'https://note.com/dd_techblog/rss'],
  ['Diverse', 'https://developer.diverse-inc.com/feed'],
  ['ELYZA', 'https://elyza-inc.hatenablog.com/feed'],
  ['ENECHANGE', 'https://tech.enechange.co.jp/feed'],
  ['Emotion Tech', 'https://tech.emotion-tech.co.jp/feed'],
  ['Eureka', 'https://medium.com/feed/eureka-engineering'],
  ['FLINTERS', 'https://labs.septeni.co.jp/feed'],
  ['FiNC', 'https://medium.com/feed/finc-engineering'],
  ['Filot', 'https://filot-nextd2.hatenablog.com/feed'],
  ['Finatext', 'https://medium.com/feed/finatext'],
  ['Findy', 'https://findy-code.io/engineer-lab/feed/atom'],
  ['Flatt Security', 'https://blog.flatt.tech/feed'],
  ['Fusic', 'https://tech.fusic.co.jp/feed'],
  ['G-gen', 'https://blog.g-gen.co.jp/feed'],
  ['GA TECHNOLOGIES', 'https://tech.ga-tech.co.jp/feed'],
  ['GMOアドパートナーズ', 'https://techblog.gmo-ap.jp/feed/'],
  ['GMOインターネット', 'https://developers.gmo.jp/feed/'],
  ['GMOグローバルサイン・ホールディングス', 'https://tech.gmogshd.com/feed'],
  ['GMOペパボ', 'https://tech.pepabo.com/feed.xml'],
  ['GMOメディア', 'https://blog.gmo.media/feed/atom/'],
  ['GMOリサーチ', 'https://gmor-sys.com/feed'],
  ['GREE', 'https://labs.gree.jp/blog/feed/'],
  ['GRIPHONE', 'https://tech.griphone.co.jp/feed/'],
  ['Game Server Services', 'https://gs2.hatenablog.com/feed'],
  ['GameWith', 'https://tech.gamewith.co.jp/feed'],
  ['Goodpatch', 'https://goodpatch-tech.hatenablog.com/feed'],
  ['Google', 'https://developers-jp.googleblog.com/atom.xml'],
  ['GreenSnap', 'https://greensnap-tech.hatenablog.com/feed'],
  ['Grooves', 'https://tech.grooves.com/feed'],
  ['Gunosy', 'https://tech.gunosy.io/feed'],
  ['Gunosyデータ分析', 'https://data.gunosy.io/feed'],
  ['HERP', 'https://tech-hub.herp.co.jp/feed.xml'],
  ['HRBrain', 'https://times.hrbrain.co.jp/feed'],
  ['Hajimari', 'https://tech.hajimari.inc/feed'],
  ['HiCustomer', 'https://tech.hicustomer.jp/index.xml'],
  // ['HireRoo', 'https://tech.hireroo.io/feed'],
  ['IDCフロンティア', 'https://blog.idcf.jp/feed'],
  ['IIJ', 'https://eng-blog.iij.ad.jp/feed'],
  ['JBCC', 'https://jbcc-tech.hatenablog.com/feed'],
  ['JMDC', 'https://techblog.jmdc.co.jp/feed'],
  ['JTP', 'https://tech-blog.jtp.co.jp/feed'],
  ['JX通信社', 'https://tech.jxpress.net/feed'],
  ['KAIZEN PLATFORM', 'https://developer.kaizenplatform.com/feed'],
  ['KARAKURI', 'https://medium.com/feed/karakuri'],
  ['KDL', 'https://kdl-di.hatenablog.com/feed'],
  ['KLab DSAS', 'http://dsas.blog.klab.org/index.rdf'],
  ['KLab', 'https://www.klab.com/jp/assets/rss/rss_tech.xml'],
  ['Kyash', 'https://blog.kyash.co/feed'],
  ['LAPRAS', 'https://ai-lab.lapras.com/feed/'],
  ['LCL', 'https://techblog.lclco.com/feed'],
  ['LIFULL', 'https://www.lifull.blog/feed'],
  // ['LIG', 'https://liginc.co.jp/technology/feed'],
  ['LINE', 'https://engineering.linecorp.com/ja/feed/'],
  ['LIVESENSE', 'https://made.livesense.co.jp/feed'],
  ['LayerX', 'https://tech.layerx.co.jp/feed'],
  ['Leaner', 'https://zenn.dev/leaner_tech/feed'],
  ['LegalForce', 'https://tech.legalforce.co.jp/feed'],
  ['Legoliss', 'https://blog.legoliss.co.jp/feed'],
  ['Libra Studio', 'https://tech.librastudio.co.jp/feed'],
  ['Liquid', 'https://tech.liquid.bio/feed'],
  ['Lisa Technologies', 'https://zenn.dev/lisatech/feed'],
  ['M&Aクラウド', 'https://tech.macloud.jp/feed'],
  ['MESON', 'https://zenn.dev/meson/feed'],
  ['MNTSQ', 'https://tech.mntsq.co.jp/feed'],
  ['MUGENUP', 'https://mugenup-tech.hatenadiary.com/feed'],
  ['Magic Moment', 'https://zenn.dev/magicmoment/feed'],
  ['MicroAd', 'https://developers.microad.co.jp/feed'],
  ['Mirrativ', 'https://tech.mirrativ.stream/feed'],
  ['Money Forward Kessai', 'https://tech.mfkessai.co.jp/index.xml'],
  ['N-Technologies', 'https://zenn.dev/n1nc/feed'],
  ['N.F.Laboratories', 'https://blog.nflabs.jp/feed'],
  ['NEMTUS', 'https://zenn.dev/nemtus/feed'],
  ['NHNテコラス', 'https://techblog.nhn-techorus.com/feed'],
  ['NRIネットコム', 'https://tech.nri-net.com/feed/category/Technology'],
  ['NTTコミュニケーションズ', 'https://engineers.ntt.com/feed'],
  ['NTTソフトウェアイノベーションセンタ ', 'https://medium.com/feed/nttlabs'],
  ['Nature', 'https://engineering.nature.global/feed'],
  ['NearMe', 'https://tech.nearme.jp/feed'],
  ['Nextat', 'https://nextat.co.jp/staff/index.rss'],
  ['Nota', 'https://blog.notainc.com/feed'],
  ['OPEN8', 'https://open8tech.hatenablog.com/feed'],
  ['OPTiM', 'https://tech-blog.optim.co.jp/feed'],
  ['Open Reach Tech', 'https://zenn.dev/openreachtech/feed'],
  ['OpenWork', 'https://techblog.openwork.co.jp/feed'],
  ['PHONE APPLI', 'https://phoneappli.net/recruit/blog/atom.xml'],
  ['PLAID', 'https://tech.plaid.co.jp/rss.xml'],
  ['PR TIMES', 'https://developers.prtimes.jp/feed/'],
  ['Pentagon', 'https://blog.pentagon.tokyo/category/engineer/feed/'],
  ['Playground', 'https://tech.playground.style/feed/'],
  ['Polestar-ID', 'https://www.psid.co.jp/news/feed/'],
  ['Progate', 'https://tech.prog-8.com/feed'],
  ['QualiArts', 'https://technote.qualiarts.jp/rss.xml'],
  ['R&D', 'https://zenn.dev/randd/feed'],
  ['READYFOR', 'https://tech.readyfor.jp/feed'],
  ['RIT', 'https://rit-inc.hatenablog.com/feed'],
  ['ROBOT PAYMENT', 'https://tech.robotpayment.co.jp/feed'],
  ['ROXX', 'https://techblog.roxx.co.jp/feed'],
  ['Red Hat', 'https://rheb.hatenablog.com/feed'],
  ['Repro', 'https://tech.repro.io/feed'],
  ['Retail AI', 'https://note.com/retail_ai/rss'],
  ['Retty', 'https://engineer.retty.me/feed'],
  ['Ridge-i', 'https://iblog.ridge-i.com/feed'],
  ['SCSK', 'https://blog.usize-tech.com/feed/'],
  ['SEGA', 'https://techblog.sega.jp/feed'],
  ['SO Technologies', 'https://developer.so-tech.co.jp/feed'],
  ['SOELU', 'https://engineering.soelu.com/feed'],
  ['Safie', 'https://engineers.safie.link/feed'],
  ['Salesforce', 'https://developer.salesforce.com/jpblogs/feed/'],
  ['Sansan', 'https://buildersbox.corp-sansan.com/feed'],
  ['Seeed', 'https://lab.seeed.co.jp/feed'],
  ['Showcase Gig', 'https://note.com/scg_tech/rss'],
  ['SmartBank', 'https://blog.smartbank.co.jp/feed'],
  ['SmartHR', 'https://tech.smarthr.jp/feed'],
  ['SmartNews', 'https://developer.smartnews.com/blog/feed'],
  ['SmartNewsメディア担当チーム', 'https://www.mediatechnology.jp/feed'],
  ['Speee', 'https://tech.speee.jp/feed'],
  ['Studyplus', 'https://tech.studyplus.co.jp/feed'],
  // ['Supership', 'https://www.wantedly.com/stories/s/Supership/rss.xml'],
  ['Synamon', 'https://synamon.hatenablog.com/feed'],
  ['Sysdig', 'https://www.scsk.jp/sp/sysdig/rss.xml'],
  ['TANP', encodeURI('https://www.tanp-blog.com/feed/category/エンジニアブログ')],
  ['TENTIAL', 'https://tech.tential.jp/feed'],
  ['THECOO', 'https://note.com/thecoo_engineer/rss'],
  ['TURING', 'https://zenn.dev/turing/feed'],
  ['TVISION INSIGHTS', 'https://tech.tvisioninsights.co.jp/feed'],
  ['TeamSpirit', 'https://teamspirit.hatenablog.com/feed'],
  ['TechRacho', 'https://techracho.bpsinc.jp/feed'],
  ['TechTrain', 'https://zenn.dev/techtrain/feed'],
  ['Tier IV', 'https://tech.tier4.jp/feed'],
  ['Tokyo Otaku Mode', 'https://blog.otakumode.com/atom.xml'],
  ['UUUM', 'https://system.blog.uuum.jp/feed'],
  ['Ubie', 'https://zenn.dev/ubie/feed'],
  ['UnReact', 'https://zenn.dev/unreact/feed'],
  ['Unipos', 'https://fringeneer.hatenablog.com/feed'],
  ['Uzabase', 'https://tech.uzabase.com/feed'],
  ['VA Linux', 'https://valinux.hatenablog.com/feed'],
  ['VirtualCast', 'https://virtualcast.jp/blog/category/tech/feed/'],
  ['Visional', 'https://engineering.visional.inc/blog/index.xml'],
  ['Voicy', 'https://medium.com/feed/voicy-engineering'],
  ['WASD', 'https://tech.wasd-inc.com/feed'],
  ['WESEEK', 'https://weseek.co.jp/tech/feed/'],
  // ['Wantedly', 'https://www.wantedly.com/stories/s/wantedly_engineers/rss.xml'],
  ['Wiz', 'https://tech.012grp.co.jp/feed'],
  ['YAZ', 'https://www.yaz.co.jp/feed'],
  ['YOJO Technologies', 'https://note.com/yojo_engineering/m/m59a0657d21e2/rss'],
  ['Yahoo! JAPAN', 'https://techblog.yahoo.co.jp/atom.xml'],
  ['Yappli', 'https://tech.yappli.io/feed'],
  ['ZOZO', 'https://techblog.zozo.com/feed'],
  ['Zaim', 'https://blog.zaim.co.jp/rss'],
  ['Zeals', 'https://tech.zeals.co.jp/feed'],
  ['aumo', 'https://techblog.aumo.co.jp/feed'],
  ['auカブコム証券', 'https://engineering.kabu.com/feed'],
  ['auコマース＆ライフ', 'https://kcf-developers.hatenablog.jp/feed'],
  ['cloud.config', 'https://tech-blog.cloud-config.jp/feed/'],
  ['dely', 'https://tech.dely.jp/feed'],
  ['dip', 'https://developer.dip-net.co.jp/feed'],
  ['estie', 'https://inside.estie.co.jp/feed'],
  ['for Startups', 'https://tech.forstartups.com/feed'],
  ['freee', 'https://developers.freee.co.jp/feed'],
  ['gaudiy', 'https://techblog.gaudiy.com/feed'],
  ['hacomono', 'https://techblog.hacomono.jp/feed'],
  ['i-Vinci', 'https://www.i-vinci.co.jp/techblog/feed'],
  ['i-plug', 'https://itbl.hatenablog.com/feed'],
  ['iChain', 'https://ichain.hatenablog.com/feed'],
  ['ispec', 'https://zenn.dev/ispec/feed'],
  ['justInCaseTechnologies', 'https://jict.hatenablog.com/feed'],
  ['mikan', 'https://mikan-tech.hatenablog.jp/feed'],
  ['nana music', 'https://tech.nana-music.com/feed'],
  ['no plan', 'https://zenn.dev/no_plan/feed'],
  ['paiza', 'https://paiza.hatenablog.com/feed'],
  ['stand.fm', 'https://note.com/standfm_company/rss'],
  ['var', 'https://zenn.dev/var/feed'],
  ['vivit', 'https://vivit.hatenablog.com/feed'],
  ['x garden', 'https://x-garde-creation.hatenablog.com/feed'],
  ['あした', 'https://engineer.ashita-team.com/feed'],
  ['あすけん', 'https://tech.asken.inc/feed'],
  ['くらしのマーケット', 'https://tech.curama.jp/feed'],
  ['ぐるなび', 'https://developers.gnavi.co.jp/feed'],
  ['さくら', 'https://knowledge.sakura.ad.jp/rss/'],
  ['はてな', 'https://developer.hatenastaff.com/feed'],
  ['みてね', 'https://team-blog.mitene.us/feed'],
  ['みらい翻訳', 'https://miraitranslate-tech.hatenablog.jp/feed'],
  ['アイキューブドシステムズ', 'https://tech.i3-systems.com/feed'],
  // ['アイスタイル', 'https://techblog.istyle.co.jp/feed'],
  ['アイプランニング', 'https://iplanning.hatenablog.jp/feed'],
  ['アカツキ', 'https://hackerslab.aktsk.jp/feed'],
  ['アクトインディ', 'https://tech.actindi.net/feed'],
  ['アスクル', 'https://tech.askul.co.jp/feed'],
  ['アスタミューゼ', 'https://lab.astamuse.co.jp/feed'],
  ['アソビュー', 'https://medium.com/feed/asoview-engineering'],
  ['アットホーム', 'https://dblog.athome.co.jp/feed'],
  ['アトラエ', 'https://atraetech.hatenablog.com/feed'],
  ['アプトポッド', 'https://tech.aptpod.co.jp/feed'],
  ['アプリボット', 'https://blog.applibot.co.jp/feed'],
  ['アメリエフ', 'https://staffblog.amelieff.jp/feed'],
  ['アルダグラム', 'https://zenn.dev/aldagram/feed'],
  ['イエソド', 'https://zenn.dev/yesodco/feed'],
  ['イノベーター・ジャパン', 'https://tech.innovator.jp.net/feed'],
  ['インテリジェントテクノロジー', 'https://iti.hatenablog.jp/feed'],
  ['インフィニットループ', 'https://www.infiniteloop.co.jp/blog/feed/atom/'],
  ['ウィルゲート', 'https://tech.willgate.co.jp/feed'],
  ['ウェイブ', 'https://tech.wwwave.jp/feed'],
  ['ウエディングパーク', 'https://engineers.weddingpark.co.jp/feed'],
  ['ウォーターセル', 'https://watercelldev.hatenablog.jp/feed'],
  ['エキサイト', 'https://tech.excite.co.jp/feed'],
  ['エクサウィザーズ', 'https://techblog.exawizards.com/feed'],
  ['エス・エム・エス', 'https://tech.bm-sms.co.jp/feed'],
  ['エニグモ', 'https://tech.enigmo.co.jp/feed'],
  ['エブリー', 'https://tech.every.tv/feed'],
  ['エムオーテックス', 'https://tech.motex.co.jp/feed'],
  ['エムスリー', 'https://www.m3tech.blog/feed'],
  ['エムティーアイ', 'https://tech.mti.co.jp/feed'],
  ['エーピーコミュニケーションズ', 'https://techblog.ap-com.co.jp/feed'],
  ['オイシックス', 'https://creators.oisix.co.jp/feed'],
  ['オプトテクノロジーズ', 'https://tech-magazine.opt.ne.jp/feed'],
  ['オルターブース', 'https://aadojo.alterbooth.com/feed'],
  ['オールアバウト', 'https://allabout-tech.hatenablog.com/feed'],
  ['カケハシ', 'https://kakehashi-dev.hatenablog.com/feed'],
  ['カミナシ', 'https://kaminashi-developer.hatenablog.jp/feed'],
  ['カヤック', 'https://techblog.kayac.com/feed'],
  ['カラビナテクノロジー', 'https://zenn.dev/karabiner/feed'],
  ['カンムテック', 'https://tech.kanmu.co.jp/feed'],
  ['ガイアックス', 'https://gaiax.hatenablog.com/feed'],
  ['キカガク', 'https://blog.kikagaku.co.jp/feed'],
  ['キッチハイク', 'https://tech.kitchhike.com/feed'],
  ['クイック', 'https://aimstogeek.hatenablog.com/feed'],
  ['クイックガード', 'https://tech.quickguard.jp/index.xml'],
  ['クックパッド', 'https://techlife.cookpad.com/feed'],
  // ['クラウドエース', 'https://cloud-ace.jp/tech_blog/feed'],
  ['クラウドワークス', 'https://engineer.crowdworks.jp/feed'],
  ['クラシコム', 'https://note.com/kurashicom_tech/rss'],
  ['クラッソーネ', 'https://tech.crassone.jp/rss.xml'],
  ['コインチェック', 'https://tech.coincheck.blog/feed'],
  ['ココナラ', 'https://yomoyamablog.coconala.co.jp/feed'],
  ['ココネ', 'https://engineering.cocone.io/feed/'],
  ['コネヒト', 'https://tech.connehito.com/feed'],
  ['コミューン', 'https://tech.commmune.jp/feed'],
  ['コロプラ', 'https://blog.colopl.dev/feed'],
  ['サイオステクノロジー', 'https://tech-lab.sios.jp/feed'],
  ['サイゼント', 'https://cyzennt.co.jp/blog/feed/'],
  ['サイバーエージェント', 'https://developers.cyberagent.co.jp/blog/feed/'],
  // ['サイバーディフェンス研究所', 'https://io.cyberdefense.jp/feed'],
  ['サイボウズ', 'https://blog.cybozu.io/feed'],
  ['サムザップ', 'https://tech.sumzap.co.jp/feed'],
  ['シタテル', 'https://tech-blog.sitateru.com/feeds/posts/default'],
  ['シナジーマーケティング', 'https://techscore.hatenablog.com/feed'],
  ['シナプス', 'https://tech.synapse.jp/feed'],
  ['シビラ', 'https://zenn.dev/sivira/feed'],
  ['シンシア', 'https://tech-blog.xincere.jp/feed'],
  ['シー・エス・エス', 'https://blog.css-net.co.jp/feed'],
  ['ジモティー', 'https://jmty-tech.hatenablog.com/feed'],
  ['ジークレスト', 'https://blog.gcrest.com/feed'],
  ['スイッチサイエンス', 'https://tech.144lab.com/feed'],
  ['スタディサプリ', 'https://blog.studysapuri.jp/feed'],
  ['スタディスト', 'https://studist.tech/feed'],
  ['スタートアップテクノロジー', 'https://startup-technology.com/feed'],
  ['スターフェスティバル', 'https://zenn.dev/stafes/feed'],
  ['スペースリー', 'https://tech.spacely.co.jp/feed'],
  ['スマートキャンプ', 'https://tech.smartcamp.co.jp/feed'],
  ['スマートスタイル', 'https://blog.s-style.co.jp/feed/'],
  ['セキュアスカイ･テクノロジー', 'https://techblog.securesky-tech.com/feed'],
  ['ゼネット', 'https://media.zenet-web.co.jp/feed'],
  ['タイマーズ', 'https://techblog.timers-inc.com/feed'],
  ['タイミー', 'https://tech.timee.co.jp/feed'],
  ['ダイニー', 'https://note.com/dinii/m/mf6424286cfa2/rss'],
  ['テコテック', 'https://tec.tecotec.co.jp/feed'],
  ['テックタッチ', 'https://tech.techtouch.jp/feed'],
  ['テックファーム', 'https://www.techfirm.co.jp/blog/?feed=rss2'],
  ['デザインワン・ジャパン', 'https://tech.designone.jp/feed'],
  ['デザミス', 'https://zenn.dev/u_motion/feed'],
  ['トップゲート', 'https://www.topgate.co.jp/category/engineer/feed'],
  ['トドケール', 'https://zenn.dev/todoker/feed'],
  ['トヨクモ', 'https://tech.toyokumo.co.jp/feed'],
  ['トライステージ', 'https://blog.ddm.tri-stage.jp/feed/'],
  ['トライト', 'https://tryt-group.hatenablog.com/feed'],
  ['トラストバンク', 'https://tech.trustbank.co.jp/feed'],
  ['トラベルブック', 'https://tech.travelbook.co.jp/index.xml'],
  ['トラーナ', 'https://tech.torana.co.jp/feed'],
  ['トレタ', 'https://tech.toreta.in/feed'],
  ['ドクターズプライム', encodeURI('https://blog.drsprime.com/feed/category/エンジニアリング')],
  ['ドコカデ', 'https://zenn.dev/dokokade/feed'],
  ['ドリコム', 'https://tech.drecom.co.jp/feed/'],
  ['ドワンゴ', 'https://dwango.github.io/index.xml'],
  ['ドワンゴ教育サービス', 'https://blog.nnn.dev/feed'],
  ['ニフクラ', 'https://blog.pfs.nifcloud.com/feed'],
  ['ヌーラボ', 'https://nulab.com/ja/blog/categories/techblog/feed/'],
  ['ネクストビート', 'https://medium.com/feed/nextbeat-engineering'],
  ['ネフロック', 'https://blog.nefrock.com/feed'],
  ['ハイウィザード', 'https://high-wizard.hatenablog.com/feed'],
  ['ハウテレビジョン', 'https://blog.howtelevision.co.jp/feed'],
  ['ハンズラボ', 'https://www.hands-lab.com/feed'],
  ['ハートビーツ', 'https://heartbeats.jp/hbblog/atom.xml'],
  ['バイセル', 'https://tech.buysell-technologies.com/feed'],
  ['バスキュール', 'https://blog.bascule.co.jp/feed'],
  ['バレットグループ', 'https://blog.bltinc.co.jp/feed'],
  ['パトコア', 'https://tech.patcore.com/feed'],
  ['ヒストリア', 'https://historia.co.jp/feed'],
  ['ヒュープロ', 'https://hupro-techblog.hatenablog.com/feed'],
  ['ビザスク', 'https://tech.visasq.com/feed'],
  ['ビットバンク', 'https://tech.bitbank.cc/rss/'],
  ['ピクシブ', 'https://inside.pixiv.blog/feed'],
  ['ピクスタ', 'https://texta.pixta.jp/feed'],
  ['ピリカ', 'https://devblog.pirika.org/feed'],
  ['ファブリカ', 'https://www.fabrica-com.co.jp/techblog/feed/'],
  ['フィードフォース', 'https://developer.feedforce.jp/feed'],
  ['フェンリル', 'https://engineers.fenrir-inc.com/feed'],
  ['フォトシンス', 'https://akerun.hateblo.jp/feed'],
  ['フォージビジョン', 'https://techblog.forgevision.com/feed'],
  ['フクロウラボ', 'https://developers.fukurou-labo.co.jp/feed/'],
  ['フューチャー', 'https://future-architect.github.io/atom.xml'],
  // ['フリュー', 'https://tech.furyu.jp/index.xml'],
  ['ブックウォーカー', 'https://developers.bookwalker.jp/feed'],
  ['プラミナス', 'https://zenn.dev/plminus/feed'],
  ['プレックス', 'https://product.plex.co.jp/feed'],
  // ['ヘイ データチーム', 'https://data.hey.jp/feed'],
  ['ヘイ', 'https://tech.hey.jp/feed'],
  ['ベルシステム', 'https://note.com/pocke_techblog/rss'],
  ['ペライチ', 'https://zenn.dev/peraichi/feed'],
  ['ホクソエム', 'https://blog.hoxo-m.com/feed'],
  ['ホワイトプラス', 'https://blog.wh-plus.co.jp/feed'],
  ['マクロミル', 'https://techblog.macromill.com/feed'],
  ['マナリンク', 'https://zenn.dev/manalink/feed'],
  ['マネックス', 'https://blog.tech-monex.com/feed'],
  // ['マネーフォワード ', 'https://moneyforward.com/engineers_blog/feed/'],
  ['マンハッタンコード', 'https://zenn.dev/manhattan_code/feed'],
  ['ミクシィ', 'https://mixi-developers.mixi.co.jp/feed'],
  ['メディアエンジン', 'https://zenn.dev/media_engine/feed'],
  ['メディアドゥ', 'https://techdo.mediado.jp/feed'],
  ['メドピア', 'https://tech.medpeer.co.jp/feed'],
  ['メルカリ', 'https://engineering.mercari.com/blog/feed.xml/'],
  ['メンテモ', 'https://engineering.mentemo.com/feed'],
  ['モノグサ', 'https://tech.monoxer.com/feed'],
  ['モノタロウ', 'https://tech-blog.monotaro.com/feed'],
  ['モバイルファクトリー', 'https://tech.mobilefactory.jp/feed'],
  ['モルフォ', 'https://techblog.morphoinc.com/feed'],
  ['ユカシカド', 'https://note.com/tech_yukashikado/rss'],
  ['ユニファ', 'https://tech.unifa-e.com/feed'],
  ['ユニラボ', 'https://note.unilabo.jp/m/mc84cf9468445/rss'],
  ['ライトハウス', 'https://developers.lighthouse-frontier.tech/feed'],
  ['ラクス', 'https://tech-blog.rakus.co.jp/feed'],
  ['ラクスル', 'https://tech.raksul.com/feed'],
  ['ラクーン', 'https://techblog.raccoon.ne.jp/feed'],
  ['ラック', 'https://devblog.lac.co.jp/feed'],
  ['ランサーズ', 'https://engineer.blog.lancers.jp/feed/'],
  ['リクルートコミュニケーションズ', 'https://blog.recruit.co.jp/rco/feed.xml'],
  ['リクルートテクノロジーズ', 'https://blog.recruit.co.jp/rtc/feed/'],
  ['リクルートマーケティングパートナーズ', 'https://tech.recruit-mp.co.jp/feed/'],
  ['リクルートライフスタイル', 'https://engineer.recruit-lifestyle.co.jp/techblog/feed.xml'],
  ['リサーチ・アンド・イノベーション', 'https://rni-dev.hatenablog.com/feed'],
  ['リゾーム', 'https://tech.rhizome-e.com/feed'],
  ['リンカーズ', 'https://linkers.hatenablog.com/feed'],
  ['リンコード', 'https://blog.linkode.co.jp/feed'],
  ['レアジョブ', 'https://rarejob-tech-dept.hatenablog.com/feed'],
  ['レアゾン', 'https://techblog.reazon.jp/feed'],
  ['レイ・フロンティア', 'https://tech-blog.rei-frontier.jp/feed'],
  ['レコチョク', 'https://techblog.recochoku.jp/feed/atom'],
  ['レバレジーズ', 'https://tech.leverages.jp/feed'],
  ['レブコム', 'https://tech.revcomm.co.jp/feed'],
  ['レンジャーシステムズ', 'https://ranger-systems.co.jp/blog-engineer/feed'],
  ['レンティオ', 'https://zenn.dev/rentio/feed'],
  ['ロコガイド', 'https://techblog.locoguide.co.jp/feed'],
  ['ロジカルビート', 'https://logicalbeat.jp/blog/feed/'],
  ['ロジカル・アーツ', 'https://blog.logical.co.jp/feed'],
  ['ワウテック', 'https://engineer.wowtech.co.jp/feed'],
  ['ワンキャリア', 'https://note.com/dev_onecareer/rss'],
  ['ワンダープラネット', 'https://developers.wonderpla.net/feed'],
  ['一休', 'https://user-first.ikyu.co.jp/feed'],
  ['富士通クラウドテクノロジーズ', 'https://tech.fjct.fujitsu.com/feed'],
  ['富士通研究所', 'https://blog.fltech.dev/feed'],
  ['弁護士ドットコム', 'https://creators.bengo4.com/feed'],
  ['弥生', 'https://tech-blog.yayoi-kk.co.jp/feed'],
  ['日本仮想化技術', 'https://tech.virtualtech.jp/feed'],
  ['日販テクシード', 'https://www.techceed-inc.com/engineer_blog/feed/'],
  ['朝日ネット', 'https://techblog.asahi-net.co.jp/feed'],
  ['朝日新聞社', 'https://note.com/asahi_ictrad/rss'],
  ['楽天コマース', encodeURI('https://commerce-engineer.rakuten.careers/feed/category/テック')],
  ['永和システムマネジメント', 'https://blog.agile.esm.co.jp/feed'],
  ['現場サポート', 'https://support.genbasupport.com/techblog/feed/'],
  ['虎の穴', 'https://toranoana-lab.hatenablog.com/feed'],
  ['遊舎工房', 'https://blog.yushakobo.jp/feed'],
  ['電通国際情報サービス', 'https://tech.isid.co.jp/feed'],
  ['食べチョク', 'https://tech.tabechoku.com/feed'],
  ['食べログ', 'https://note.com/tabelog_frontend/rss'],
  ['ＦＦＲＩセキュリティ', 'https://engineers.ffri.jp/feed'],
]);

/**
 * その他候補
 *
 * パースエラー修正
 * ['Qiita', 'https://zine.qiita.com/'],
 *
 * 日本語以外が交じるのを解消できたら入れたい
 * ['クラスメソッド', 'https://dev.classmethod.jp/feed'],
 *
 * 403 Forbidden
 * ['Cygames', 'https://tech.cygames.co.jp/feed/'],
 *
 * 404
 * ['リクルートデータ', 'https://blog.recruit.co.jp/data/index.json'],
 * ['メドレー', 'https://developer.medley.jp/feed'],
 * ['NAXA', 'https://blog.naxa.co.jp/feed'],
 * ['ロジクラ', 'https://blog.logikura.dev/feed'],
 * ['HiTTO', 'https://product-blog.hitto.co.jp/feed'],
 * ['フリュー', 'https://tech.furyu.jp/index.xml'],
 * ['マネーフォワード ', 'https://moneyforward.com/engineers_blog/feed/'],
 *
 * 406
 * ['AsiaQuest', 'https://techblog.asia-quest.jp/rss.xml'],
 *
 * Error: unable to verify the first certificate
 * ['スペースマーケット', 'https://blog.spacemarket.com/category/code/feed/'],
 *
 * pubDate なし
 * ['リクルート', 'https://engineers.recruit-jinji.jp/techblog/feed/']
 *
 * フィードなし。スクレイピング？
 * https://lab.mo-t.com/blog
 * https://tech-blog.sweeep.ai/
 * https://minedia-engineer-hub-minedia.vercel.app/
 * https://segaxd.co.jp/news/?category=blog
 * https://tech.smartshopping.co.jp/
 * https://olaris.jp/category/technology
 * https://licensecounter.jp/engineer-voice/blog/
 *
 * 証明書エラー
 * ['Reigle', 'https://www.reigle.info/feed'],
 *
 */
