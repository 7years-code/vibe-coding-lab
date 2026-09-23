// 细分项（对应 TECH_DESIGN 的 subitems 表）
// hasContent 说明：true = 有真实小类页；false = 点进去看到「内容建设中」占位页

export const subitems = [
  // ===== 民俗节庆：本期 8 个节日的真实页面（PRD 4.2）=====
  { categorySlug: 'festivals', slug: 'spring-festival', name: { zh: '春节', en: 'Spring Festival' }, hasContent: true, sortOrder: 1 },
  { categorySlug: 'festivals', slug: 'lantern-festival', name: { zh: '元宵节', en: 'Lantern Festival' }, hasContent: true, sortOrder: 2 },
  { categorySlug: 'festivals', slug: 'qingming', name: { zh: '清明节', en: 'Qingming Festival' }, hasContent: true, sortOrder: 3 },
  { categorySlug: 'festivals', slug: 'dragon-boat', name: { zh: '端午节', en: 'Dragon Boat Festival' }, hasContent: true, sortOrder: 4 },
  { categorySlug: 'festivals', slug: 'qixi', name: { zh: '七夕节', en: 'Qixi Festival' }, hasContent: true, sortOrder: 5 },
  { categorySlug: 'festivals', slug: 'mid-autumn', name: { zh: '中秋节', en: 'Mid-Autumn Festival' }, hasContent: true, sortOrder: 6 },
  { categorySlug: 'festivals', slug: 'double-ninth', name: { zh: '重阳节', en: 'Double Ninth Festival' }, hasContent: true, sortOrder: 7 },
  { categorySlug: 'festivals', slug: 'winter-solstice', name: { zh: '冬至', en: 'Winter Solstice' }, hasContent: true, sortOrder: 8 },

  // ===== 其余八类：细分项骨架，本期无内容（点进去是「内容建设中」）=====
  // 思想哲学
  { categorySlug: 'thought', slug: 'confucianism', name: { zh: '儒家', en: 'Confucianism' }, hasContent: false, sortOrder: 1 },
  { categorySlug: 'thought', slug: 'daoism', name: { zh: '道家', en: 'Daoism' }, hasContent: false, sortOrder: 2 },
  { categorySlug: 'thought', slug: 'legalism', name: { zh: '法家', en: 'Legalism' }, hasContent: false, sortOrder: 3 },
  // 语言文字
  { categorySlug: 'language', slug: 'chinese-characters', name: { zh: '汉字', en: 'Chinese Characters' }, hasContent: false, sortOrder: 1 },
  { categorySlug: 'language', slug: 'couplets', name: { zh: '对联', en: 'Couplets' }, hasContent: false, sortOrder: 2 },
  { categorySlug: 'language', slug: 'idioms', name: { zh: '成语', en: 'Chinese Idioms' }, hasContent: false, sortOrder: 3 },
  // 文学典籍
  { categorySlug: 'literature', slug: 'book-of-songs', name: { zh: '诗经', en: 'Book of Songs' }, hasContent: false, sortOrder: 1 },
  { categorySlug: 'literature', slug: 'tang-poetry', name: { zh: '唐诗', en: 'Tang Poetry' }, hasContent: false, sortOrder: 2 },
  { categorySlug: 'literature', slug: 'song-ci', name: { zh: '宋词', en: 'Song Lyrics' }, hasContent: false, sortOrder: 3 },
  // 传统艺术
  { categorySlug: 'arts', slug: 'chinese-painting', name: { zh: '国画', en: 'Chinese Painting' }, hasContent: false, sortOrder: 1 },
  { categorySlug: 'arts', slug: 'peking-opera', name: { zh: '京剧', en: 'Peking Opera' }, hasContent: false, sortOrder: 2 },
  { categorySlug: 'arts', slug: 'guqin', name: { zh: '古琴', en: 'Guqin' }, hasContent: false, sortOrder: 3 },
  // 传统技艺（非遗）
  { categorySlug: 'crafts', slug: 'tea-making', name: { zh: '制茶技艺', en: 'Tea Making' }, hasContent: false, sortOrder: 1 },
  { categorySlug: 'crafts', slug: 'ceramics', name: { zh: '陶瓷', en: 'Ceramics' }, hasContent: false, sortOrder: 2 },
  { categorySlug: 'crafts', slug: 'embroidery', name: { zh: '刺绣', en: 'Embroidery' }, hasContent: false, sortOrder: 3 },
  // 生活和医药
  { categorySlug: 'life', slug: 'chinese-medicine', name: { zh: '中医', en: 'Chinese Medicine' }, hasContent: false, sortOrder: 1 },
  { categorySlug: 'life', slug: 'solar-health', name: { zh: '节气养生', en: 'Seasonal Health Care' }, hasContent: false, sortOrder: 2 },
  { categorySlug: 'life', slug: 'tea-culture', name: { zh: '茶道', en: 'Tea Culture' }, hasContent: false, sortOrder: 3 },
  // 传统体育
  { categorySlug: 'sports', slug: 'martial-arts', name: { zh: '武术', en: 'Martial Arts' }, hasContent: false, sortOrder: 1 },
  { categorySlug: 'sports', slug: 'taiji', name: { zh: '太极', en: 'Taiji' }, hasContent: false, sortOrder: 2 },
  { categorySlug: 'sports', slug: 'dragon-boat-race', name: { zh: '龙舟', en: 'Dragon Boat Racing' }, hasContent: false, sortOrder: 3 },
  // 服饰建筑
  { categorySlug: 'attire', slug: 'hanfu', name: { zh: '汉服', en: 'Hanfu' }, hasContent: false, sortOrder: 1 },
  { categorySlug: 'attire', slug: 'qipao', name: { zh: '旗袍', en: 'Qipao' }, hasContent: false, sortOrder: 2 },
  { categorySlug: 'attire', slug: 'gardens', name: { zh: '园林', en: 'Classical Gardens' }, hasContent: false, sortOrder: 3 }
]

// 取某大类下的细分项，按 sortOrder 排序
export function findSubitemsByCategory(categorySlug) {
  return subitems
    .filter((s) => s.categorySlug === categorySlug)
    .sort((a, b) => a.sortOrder - b.sortOrder)
}

// 按 slug 找一个细分项
export function findSubitem(slug) {
  return subitems.find((s) => s.slug === slug)
}
