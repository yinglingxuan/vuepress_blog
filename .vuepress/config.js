module.exports = {
  "title": "Sakura",
  "description": "Sakura,是一个关注于互联网、IT技术经验分享的个人独立博客。专注于IT行业最前沿的技术。致力成为互联网上最个性、最极客、具传播力的个人独立博客。",
  "dest": "dist",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "https://pan.zealsay.com/blog/favicon.ico"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ],
    ['script', {}, `
          var _hmt = _hmt || [];
          (function() {
            var hm = document.createElement("script");
            hm.src = "https://hm.baidu.com/hm.js?b0aae218897fa9d8a9f76e9a77e0b3c6";
            var s = document.getElementsByTagName("script")[0]; 
            s.parentNode.insertBefore(hm, s);
          })();
        `] //百度统计
  ],
  "locales": {
    "/": {
      "lang": 'zh-CN'
    }
  },
  // "theme": "reco",
  "themeConfig": {
    "nav": [
      {
        "text": "主页",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "时间轴",
        "link": "/timeline/",
        "icon": "reco-date"
      },
      {
        "text": "关于",
        "link": "/about/",
        "icon": "reco-account"
      }
    ],
    "type": "blog",
    "sidebar": false,
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "博客"
      },
      "tag": {
        "location": 3,
        "text": "标签"
      }
    },
    "friendLink": [
      {
        "title": "博客",
        "desc": "Sakura",
        "logo": "http://cnd.yinglingxuan.cn/touxiang.jpg",
        "link": "https://blog.zealsay.com"
      },
    ],
    "valineConfig": {
      "appId": "xxx",// your appId
      "appKey": "xxx", // your appKey
      "avatar": "", //
      "enableQQ": true, //启用昵称框自动获取QQ昵称和QQ头像
      "requiredFields": ['nick', 'mail'], //设置必填项
    },
    "logo": "/logo.png",
    // "huawei": true, //首页出现华为文案
    "search": true,
    "searchMaxSuggestions": 10,
    "lastUpdated": "Last Updated",
    "author": "Sakura",
    "authorAvatar": "http://cnd.yinglingxuan.cn/touxiang.jpg",
    "record": "粤ICP备18152313号 ", //icp备案
    "startYear": "2019 - 2022",
    "info": "一名追求技术喜欢安静的前端开发工程师",
    "socials":{
      "github" : "https://github.com/yinglingxuan", //github
      "gitlub" : false, //gitlub
      "gitee" : "https://gitee.com/yinglingxuan", //gitee
      // "jianshu" : "https://www.jianshu.com/u/e2d051b6d2e9", //简书
      "zhihu" : "https://www.zhihu.com/people/ying-ling-xuan-30", //知乎
      "toutiao" : false, //知乎
      // "juejin": "https://juejin.im/user/2796746683716990", //掘金
      "segmentfault" : "https://segmentfault.com/u/yinglingxuancx0yc", //思否
      "csdn" : false, //CSDN
      "wechat" : "http://cnd.yinglingxuan.cn/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20190119151359.jpg", //微信
      "qq" : "http://cnd.yinglingxuan.cn/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20190119151342.jpg" //QQ
    },
    "mottos": [{
      "zh": "愿你保持初心和善良,笑里尽是温暖与坦荡。",
      "en": "May you keep your original heart and kindness, and smile with warmth and magnanimity."
    },
      {
        "zh": "年轻就是无限的可能。",
        "en": "Youth means limitless possibilities."
      },
      {
        "zh": "真正的梦就是现实的彼岸。",
        "en": "Real dream is the other shore of reality."
      },
      {
        "zh": "不为模糊不清的未来担忧，只为清清楚楚的现在努力。",
        "en": "Don't worry about the vague future, just strive for the clear present."
      },
      {
        "zh": "与其装腔作势企图影响别人，不如咬牙切齿狠命修理自己。",
        "en": "Rather than pretending to influence others, it's better to grind your teeth and repair yourself."
      }, {
        "zh": "上天是公平的，只要努力就会有收获，否则就是你不够努力。",
        "en": "God is fair, as long as effort will include results, otherwise is you hard enough."
      },
      {
        "zh": "人生没有后悔，我们只能尽力去不让自己后悔。",
        "en": "Life without regret, we can only do our best to not to regret."
      }
    ],
    "covers": [
      'http://cnd.yinglingxuan.cn/myPng/1.jpg',
      'http://cnd.yinglingxuan.cn/myPng/2.jpg',
      'http://cnd.yinglingxuan.cn/myPng/3.jpg',
      'http://cnd.yinglingxuan.cn/myPng/4.jpg',
      'http://cnd.yinglingxuan.cn/myPng/5.jpg',
      'http://cnd.yinglingxuan.cn/myPng/6.jpg',
      'http://cnd.yinglingxuan.cn/myPng/7.jpg',
      'http://cnd.yinglingxuan.cn/myPng/8.jpg',
    ],
    "codeTheme": "tomorrow"
  },
  "markdown": {
    "lineNumbers": false
  },
  // configureWebpack: (config, isServer) => {
  //   if (!isServer) {
  //     // 修改客户端的 webpack 配置
  //     config.output.publicPath = config.mode === 'production'
  //       ? 'https://pan.zealsay.com/blog/' // sample/essays 打包的默认路径为 ‘_nuxt’ 或者可以指定cdn 域名
  //       : '/';
  //     config.output.filename = "assets/js/[name].js";
  //   }
  // }
}