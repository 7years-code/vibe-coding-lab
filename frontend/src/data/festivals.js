// 节日详情内容（对应 TECH_DESIGN 的 content_sections + festival_photos 两张表）
// 说明：中秋为 Day 7 首版内容（初稿，正式发布前需核实来源）；其余 7 个节日本期先留骨架。

export const festivalDetails = [
  {
    slug: 'mid-autumn',
    sections: [
      {
        key: 'origin',
        title: { zh: '由来', en: 'Origin' },
        body: {
          zh: '中秋源于上古的"秋夕祭月"。古人认为月属阴、象征团圆，"中秋"一词最早见于《周礼》；到唐代，赏月、玩月成为风尚，中秋逐渐固定为节日；宋代以后，月饼与家人团聚成为节日的核心。关于中秋的起源有多种说法（祭月说、丰收说等），学界尚无定论。',
          en: 'Mid-Autumn began as an ancient autumn moon sacrifice. The moon was linked with reunion, and the term "mid-autumn" already appears in the Rites of Zhou. Moon-gazing became fashionable in the Tang dynasty, and by the Song the mooncake and family reunion had become the heart of the festival. Several theories about its origin exist and scholars have not settled on one.'
        }
      },
      {
        key: 'story',
        title: { zh: '对应的故事', en: 'Legend' },
        body: {
          zh: '最流行的是"嫦娥奔月"：后羿射日得仙药，其妻嫦娥吞药飞升月宫，独居广寒宫；后羿在月下摆上她爱吃的食物遥祭，人间由此有了中秋祭月的习俗。另有"吴刚伐桂"（吴刚砍伐随砍随合的桂树）与"玉兔捣药"两个传说。',
          en: "The best-known tale is Chang'e Flying to the Moon: Houyi obtained an elixir of immortality, his wife Chang'e swallowed it and rose to the moon, where she lives alone in the Guanghan Palace. Houyi then offered her favourite foods under the moon, and people followed. Two other legends tell of Wu Gang chopping an ever-healing osmanthus tree, and the Jade Rabbit pounding medicine."
        }
      },
      {
        key: 'spirit',
        title: { zh: '蕴含的精神与文化符号', en: 'Spirit and Symbols' },
        body: {
          zh: '精神内核是"团圆"与"思亲"——月圆对应人圆。文化符号包括：圆月（圆满）、月饼（团聚分享）、桂花（秋意与吉祥）、玉兔与蟾宫（神话想象）。',
          en: 'The core is reunion and longing for loved ones — a full moon stands for a whole family. Symbols include the full moon (completeness), the mooncake (sharing), osmanthus (autumn and good fortune), and the Jade Rabbit and moon palace (mythic imagination).'
        }
      },
      {
        key: 'customs',
        title: { zh: '各地传统习俗 + 美食器物', en: 'Regional Customs, Food and Objects' },
        body: {
          zh: '各地过法不同：广东"拜月"、江南饮桂花酒吃大闸蟹、北京供"兔儿爷"、福建有"博饼"游戏、香港有"舞火龙"。美食以月饼为主，另有桂花糕、芋头、柚子；器物有月饼模子、花灯、兔儿爷泥塑。',
          en: 'Customs vary by region: moon worship in Guangdong, osmanthus wine and hairy crab in the Jiangnan area, clay Lord Rabbit figures in Beijing, the dice game bo-bing in Fujian, and the fire dragon dance in Hong Kong. Mooncakes lead the food, alongside osmanthus cake, taro and pomelo; objects include mooncake moulds, lanterns and clay rabbit figures.'
        }
      },
      {
        key: 'poems',
        title: { zh: '经典诗词赏析', en: 'Classic Poetry' },
        body: {
          zh: '最广为人知的是苏轼《水调歌头·明月几时有》，"但愿人长久，千里共婵娟"把对亲人的祝愿写到了极致；张九龄《望月怀远》"海上生明月，天涯共此时"则以明月连接两地。两首的共同点：借月写思念。',
          en: 'The best-known is Su Shi\'s "Prelude to Water Melody", whose closing line wishes loved ones well though a thousand miles apart under the same moon. Zhang Jiuling\'s "Looking at the Moon and Longing for One Far Away" opens with "The moon rises over the sea; the ends of the earth share this moment." Both use the moon to speak of longing.'
        }
      },
      {
        key: 'past_now',
        title: { zh: '古今过节对比', en: 'Then and Now' },
        body: {
          zh: '古人中秋以祭月、赏月、燃灯、猜灯谜、饮桂花酒为主，仪式感强，常通宵赏月；今人多以家人聚餐、吃月饼、赏月、看晚会、送礼为主，节奏更快、仪式简化。不变的是"想和家人在一起"。',
          en: 'In the past people sacrificed to the moon, gazed at it, lit lanterns, solved lantern riddles and drank osmanthus wine — highly ceremonial, often lasting all night. Today it is mostly family dinners, mooncakes, moon-gazing, TV galas and gifts — faster and simpler. What has not changed is wanting to be with family.'
        }
      },
      {
        key: 'trivia',
        title: { zh: '趣味冷知识 & 常见误区', en: 'Fun Facts and Myths' },
        body: {
          zh: '常见误区："月饼自古就有"——其实"月饼"之名到宋代才出现，明代才成为中秋必备。"月饼起义"（元末借月饼传密信）流传很广，但正史无确证。冷知识：中秋也是秋收节；有些地方中秋不吃月饼而吃芋头、糍粑。',
          en: 'A common misconception is that mooncakes are ancient: the name appears only in the Song dynasty, and the custom became essential in the Ming. The tale of secret messages hidden in mooncakes during the Yuan is popular but lacks firm historical proof. Fun facts: mid-autumn is also a harvest festival, and some regions eat taro or glutinous rice cakes instead of mooncakes.'
        }
      },
      {
        key: 'ich',
        title: { zh: '相关非遗', en: 'Related Heritage' },
        body: {
          zh: '中秋节已列入中国第一批国家级非物质文化遗产名录（2006 年）。相关的非遗还有各地月饼制作技艺以及灯笼、花灯制作技艺等。（具体项目名称与入选批次，建议正式发布前再核实。）',
          en: "The Mid-Autumn Festival was listed in China's first batch of national intangible cultural heritage in 2006, together with related skills such as regional mooncake-making and lantern-making. Project names and listing batches should be verified before publication."
        }
      },
      {
        key: 'overseas',
        title: { zh: '海外华人如何过节', en: 'Mid-Autumn Overseas' },
        body: {
          zh: '在东南亚（新加坡、马来西亚、印尼）中秋气氛浓厚：提灯笼游行、吃月饼、逛灯笼市集；唐人街常有灯会。近年海外华人社区也办"中秋晚会"与月饼义卖，把节日变成联结乡情的场合。',
          en: 'In Southeast Asia (Singapore, Malaysia, Indonesia) the festival is lively, with lantern parades, mooncakes and lantern markets; Chinatowns often host lantern fairs. In recent years overseas Chinese communities also hold galas and mooncake charity sales, turning the festival into an occasion that connects people to home.'
        }
      }
    ],
    // 主题照片：图片素材尚未准备，先留空数组（第 9 步做视觉时再补）
    photos: []
  },

  // ===== 以下 7 个节日本期先留骨架，内容后续逐步补充 =====
  { slug: 'spring-festival', sections: [], photos: [] },
  { slug: 'lantern-festival', sections: [], photos: [] },
  { slug: 'qingming', sections: [], photos: [] },
  { slug: 'dragon-boat', sections: [], photos: [] },
  { slug: 'qixi', sections: [], photos: [] },
  { slug: 'double-ninth', sections: [], photos: [] },
  { slug: 'winter-solstice', sections: [], photos: [] }
]

// 按 slug 取节日详情
export function findFestivalDetail(slug) {
  return festivalDetails.find((f) => f.slug === slug)
}
