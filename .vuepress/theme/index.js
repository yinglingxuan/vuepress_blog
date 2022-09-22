const path = require('path')

// Theme API.
module.exports = (options, ctx) => ({
  alias () {
    const { themeConfig, siteConfig } = ctx
    // resolve algolia
    const isAlgoliaSearch = (
      themeConfig.algolia ||
      Object.keys(siteConfig.locales && themeConfig.locales || {})
        .some(base => themeConfig.locales[base].algolia)
    )
    return {
      '@AlgoliaSearchBox': isAlgoliaSearch
        ? path.resolve(__dirname, 'components/AlgoliaSearchBox.vue')
        : path.resolve(__dirname, 'noopModule.js'),
      '@SearchBox': path.resolve(__dirname, 'components/SearchBox.vue')
    }
  },

  plugins: [
    '@vuepress-reco/back-to-top',
    '@vuepress-reco/loading-page',
    '@vuepress-reco/pagation',
    '@vuepress-reco/comments',
    '@vuepress/active-header-links',
    ['@vuepress/medium-zoom', {
      selector: '.theme-reco-content :not(a) > img'
    }],
    '@vuepress/plugin-nprogress',
    ['@vuepress/plugin-blog', {
      permalink: '/:regular',
      frontmatters: [
        {
          id: 'tags',
          keys: ['tags'],
          path: '/tag/',
          layout: 'Tags',
          scopeLayout: 'Tag'
        },
        {
          id: 'categories',
          keys: ['categories'],
          path: '/categories/',
          layout: 'Categories',
          scopeLayout: 'Category'
        },
        {
          id: 'timeline',
          keys: ['timeline'],
          path: '/timeline/',
          layout: 'TimeLines',
          scopeLayout: 'TimeLine'
        },
        {
          id: 'about',
          keys: ['about'],
          path: '/about/',
          layout: 'About',
          scopeLayout: 'About'
        }
      ]
    }],
    'vuepress-plugin-smooth-scroll',
    ['container', {
      type: 'tip',
      defaultTitle: {
        '/': '',
        '/zh/': '提示'
      }
    }],
    ['container', {
      type: 'warning',
      defaultTitle: {
        '/': '',
        '/zh/': '注意'
      }
    }],
    ['container', {
      type: 'danger',
      defaultTitle: {
        '/': '',
        '/zh/': '警告'
      }
    }],
    ['container', {
      type: 'right',
      defaultTitle: ''
    }],
    ['container', {
      type: 'theorem',
      before: info => `<div class="custom-block theorem"><p class="title">${info}</p>`,
      after: '</div>'
    }],
    ['container', {
      type: 'details',
      before: info => `<details class="custom-block details">${info ? `<summary>${info}</summary>` : ''}\n`,
      after: () => '</details>\n',
      defaultTitle: {
        '/': 'See More',
        '/zh/': '更多'
      }
    }],
    [
      '@vuepress-reco/vuepress-plugin-bgm-player',
      {
        audios: [
          {
            name: 'LIKPLA',
            artist: '夏.烟火',
            url: 'https://cnd.yinglingxuan.cn/a_mp3/LIKPIA%20-%20%E5%A4%8F%C2%B7%E7%83%9F%E7%81%AB.mp3',
            cover: 'https://cnd.yinglingxuan.cn/myPng/1.jpg'
          },
          {
            name: 'LOSER',
            artist: '米津玄師',
            url: 'https://www.ytmp3.cn/down/73654.mp3',
            cover: 'https://p1.music.126.net/qTSIZ27qiFvRoKj-P30BiA==/109951165895951287.jpg?param=200y200'
          }
        ] ,
        // 是否默认缩小
        autoShrink: true ,
        // 缩小时缩为哪种模式
        shrinkMode: 'float',
        // 悬浮窗样式
        floatStyle: { top: '10px', 'z-index': '999999' },
        autoplay:true,
      }
    ],
    [
      '@vuepress-reco/vuepress-plugin-kan-ban-niang',
      {
        theme: ['blackCat', 'whiteCat', 'haru1', 'haru2', 'haruto', 'koharu', 'izumi', 'shizuku', 'wanko', 'miku', 'z16']
      }
    ],
    ['cursor-effects', {
      size: 2, // size of the particle, default: 2
      shape: 'star', // ['star' | 'circle'], // shape of the particle, default: 'star'
      zIndex: 999999999, // z-index property of the canvas, default: 999999999
    }],
    ['dynamic-title', {
      showIcon: 'https://www.typescriptlang.org/favicon-32x32.png?v=8944a05a8b601855de116c8a56d3b3ae',
      showText: '客官欢迎回来~',
      hideIcon: 'https://www.typescriptlang.org/favicon-32x32.png?v=8944a05a8b601855de116c8a56d3b3ae',
      hideText: '客官不要走嘛~',
      recoverTime: 2000,
   }]
  ]
})
