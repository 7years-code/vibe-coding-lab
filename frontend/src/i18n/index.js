// 全站界面文案（中英成对）
// 第 8 步：把原先散落在各页面里的文案收口到这里，统一管理、方便校对
// 对应 TECH_DESIGN 的 frontend/src/i18n/

export const UI_TEXT = {
  zh: {
    htmlLang: 'zh-CN',
    documentTitle: '知蕴｜中华传统文化学习平台',
    switchLabel: 'EN',

    home: {
      siteName: '知蕴',
      tagline: '中华传统文化学习平台',
      welcome: '欢迎来到知蕴，希望大家能够在这里觉知并汲取文化底蕴。',
      scrollHint: '向下滚动，探索九大类',
      learnMore: '了解更多'
    },

    category: {
      notFound: '没有找到这个类别',
      topics: '细分项',
      comingSoon: '建设中',
      backHome: '← 返回首页'
    },

    detail: {
      notFound: '没有找到这个条目',
      photos: '主题照片',
      photosPending: '图片素材筹备中',
      pendingTitle: '内容持续补充中',
      pendingNote: '这个节日的内容正在整理，先看看「中秋」吧。',
      back: '← 返回'
    },

    comingSoon: {
      title: '内容建设中',
      currentItem: '当前条目',
      note: '这一条内容正在建设中，敬请期待。',
      back: '← 返回上一页'
    }
  },

  en: {
    htmlLang: 'en',
    documentTitle: 'Zhiyun | Learn Chinese Traditional Culture',
    switchLabel: '中',

    home: {
      siteName: 'Zhiyun',
      tagline: 'A learning platform for Chinese traditional culture',
      welcome:
        'Welcome to Zhiyun — may you awaken to and draw from the depths of Chinese culture.',
      scrollHint: 'Scroll down to explore the nine categories',
      learnMore: 'Learn more'
    },

    category: {
      notFound: 'Category not found',
      topics: 'Topics',
      comingSoon: 'Soon',
      backHome: '← Back to home'
    },

    detail: {
      notFound: 'Item not found',
      photos: 'Photos',
      photosPending: 'Image assets coming soon',
      pendingTitle: 'Content in progress',
      pendingNote: "This festival's content is still being prepared. Try “Mid-Autumn” first.",
      back: '← Back'
    },

    comingSoon: {
      title: 'Coming soon',
      currentItem: 'Current item',
      note: 'This content is under construction. Please stay tuned.',
      back: '← Go back'
    }
  }
}

// 取某语言的整套文案；语言不存在时回落到中文
export function getText(lang) {
  return UI_TEXT[lang] || UI_TEXT.zh
}
