// 九大类传统文化（对应 TECH_DESIGN 的 categories 表）
// 说明：文案为 Day 7 初稿，正式发布前需核实来源；中英成对。

export const categories = [
  {
    slug: 'thought',
    name: { zh: '思想哲学', en: 'Thought & Philosophy' },
    description: {
      zh: '诸子百家与儒、释、道构成了中华思想的骨架，回答的是"人该如何活着、如何与人相处"。',
      en: 'Confucianism, Daoism and Buddhism, together with the Hundred Schools of Thought, form the backbone of Chinese thinking — how to live, and how to live with others.'
    },
    sortOrder: 1
  },
  {
    slug: 'language',
    name: { zh: '语言文字', en: 'Language & Script' },
    description: {
      zh: '从甲骨文到今天的汉字，是世界上仍在使用的最古老文字之一；对联、成语、书法都从这里生长出来。',
      en: "From oracle-bone script to modern characters, Chinese writing is among the world's oldest scripts still in use — and the root of couplets, idioms and calligraphy."
    },
    sortOrder: 2
  },
  {
    slug: 'literature',
    name: { zh: '文学典籍', en: 'Literature & Classics' },
    description: {
      zh: '《诗经》《楚辞》、唐诗宋词与四大名著，记录了中国人几千年的情感与想象。',
      en: 'From the Book of Songs and the Songs of Chu to Tang poetry, Song lyrics and the four great classical novels — millennia of Chinese feeling and imagination.'
    },
    sortOrder: 3
  },
  {
    slug: 'arts',
    name: { zh: '传统艺术', en: 'Traditional Arts' },
    description: {
      zh: '国画讲究意境，京剧讲究程式，古琴讲究心境——东方审美藏在留白与含蓄里。',
      en: 'Traditional painting values mood, Peking opera values form, the guqin values inner calm — Eastern aesthetics lives in emptiness and restraint.'
    },
    sortOrder: 4
  },
  {
    slug: 'festivals',
    name: { zh: '民俗节庆', en: 'Festivals & Folk Customs' },
    description: {
      zh: '春节的团圆、清明的追思、端午的驱邪、中秋的望月——节日是中国人安排时间与情感的方式。',
      en: 'Reunion at Spring Festival, remembrance at Qingming, warding off evil at Dragon Boat, moon-gazing at Mid-Autumn — festivals are how Chinese people arrange time and feeling.'
    },
    sortOrder: 5
  },
  {
    slug: 'crafts',
    name: { zh: '传统技艺（非遗）', en: 'Traditional Crafts' },
    description: {
      zh: '制茶、陶瓷、刺绣、木作……手艺靠口传心授，是非物质文化遗产的主体。',
      en: 'Tea making, ceramics, embroidery, woodwork — crafts passed on by hand and by word, the core of intangible cultural heritage.'
    },
    sortOrder: 6
  },
  {
    slug: 'life',
    name: { zh: '生活和医药', en: 'Daily Life & Medicine' },
    description: {
      zh: '中医讲究"治未病"，节气养生讲究顺应天时；茶道与饮食里藏着生活的分寸。',
      en: "Chinese medicine emphasises preventing illness, seasonal health care follows nature's rhythm, and tea and food carry a sense of measure in daily life."
    },
    sortOrder: 7
  },
  {
    slug: 'sports',
    name: { zh: '传统体育', en: 'Traditional Sports' },
    description: {
      zh: '武术与太极不只练身体，更练"气"与心意；龙舟与围棋把竞技变成协作与谋略。',
      en: 'Martial arts and taiji train not only the body but breath and mind; dragon boats and Go turn competition into teamwork and strategy.'
    },
    sortOrder: 8
  },
  {
    slug: 'attire',
    name: { zh: '服饰建筑', en: 'Attire & Architecture' },
    description: {
      zh: '汉服与旗袍讲"形制"，园林与古建筑讲"借景"——穿衣与造屋都讲究与天地相合。',
      en: 'Hanfu and qipao follow form; gardens and old buildings borrow scenery — both dressing and building seek harmony with nature.'
    },
    sortOrder: 9
  }
]

// 按 slug 找一个大类，找不到返回 undefined
export function findCategory(slug) {
  return categories.find((c) => c.slug === slug)
}
