---
## 

1. 目前版本 node v20.18.0
2. yarn 1.22.22
3. npm 10.8.2
4. 主题追求极简，根据 vuepress 的默认主题修改而成，官方的主题配置仍然适用；

## Quick start

**npx**

```
npx @vuepress-reco/theme-cli init my-blog
```

**npm**

```bash
# init
npm install @vuepress-reco/theme-cli -g
theme-cli init my-blog

# install
cd my-blog
npm install

# run
npm run dev

# build
npm run build
```

**yarn**

```bash
# init
yarn global add @vuepress-reco/theme-cli
theme-cli init my-blog

# install
cd my-blog
yarn install

# run
yarn dev

# build
yarn build
```

home: true
all: true
heroText: 愿你保持初心和善良,笑里尽是温暖与坦荡。
tagline: A simple and beautiful vuepress blog theme.
# heroImage: /hero.png
# heroImageStyle: {
#   maxWidth: '600px',
#   width: '100%',
#   display: block,
#   margin: '9rem auto 2rem',
#   background: '#fff',
#   borderRadius: '1rem',
# }
bgImageStyle: {
  height: '100vh'
}
isShowTitleInHome: false
actionText: Guide
actionLink: /views/other/guide
features:
- title: Yesterday
  details: 开发一款看着开心、写着顺手的 vuepress 博客主题

---