<template>
  <div class="home-blog">
    <div class="hero" :style="{ ...bgImageStyle }">
      <div class="motto">
        <ModuleTransition>
          <img
            class="hero-img"
            v-if="recoShowModule && $frontmatter.heroImage"
            :style="heroImageStyle || {}"
            :src="$withBase($frontmatter.heroImage)"
            alt="hero"
          />
        </ModuleTransition>

        <ModuleTransition delay="0.04" duration="0.5">
          <h1 v-if="recoShowModule && $frontmatter.heroText !== null" class="longcang">
            {{ motto.zh || $frontmatter.heroText || $title || 'zealsay' }}
          </h1>
          
        </ModuleTransition>

        <ModuleTransition delay="0.08" duration="0.5">
          <p v-if="recoShowModule && $frontmatter.tagline !== null" class="description">
            {{ motto.en || $frontmatter.tagline || $description || 'Welcome to your zealsay site' }}
          </p>
        </ModuleTransition>
        <ModuleTransition delay="0.08" duration="0.5">
          <h2 class="type_writer">{{typewriter}}</h2>
        </ModuleTransition>
        

        <a href="#anchor" class="scroll-down bounce-enter-active down-arrow"></a>
      </div>
    </div>
    <div>
      <Springbili></Springbili>
      <!-- <Autumnbili></Autumnbili> -->
       <!-- <Winterbili></Winterbili> -->
    </div>
    <ModuleTransition delay="0.16">
      <div id="anchor" v-show="recoShowModule" class="home-blog-wrapper">
        <div class="blog-list">
          <!-- 博客列表 -->
          <note-abstract
            :data="$recoPosts"
            :currentPage="currentPage"></note-abstract>
          <!-- 分页 -->
          <pagation
            class="pagation"
            :total="$recoPosts.length"
            :currentPage="currentPage"
            @getCurrentPage="getCurrentPage"/>
        </div>
        <div class="info-wrapper">
          <PersonalInfo/>
          <h4><i class="iconfont reco-category"></i> {{homeBlogCfg.category}}</h4>
          <ul class="category-wrapper">
            <li class="category-item" v-for="(item, index) in this.$categories.list" :key="index">
              <router-link :to="item.path">
                <span class="category-name">{{ item.name }}</span>
                <span class="post-num" :style="{ 'backgroundColor': getOneColor() }">{{ item.pages.length }}</span>
              </router-link>
            </li>
          </ul>
          <hr>
          <h4 v-if="$tags.list.length !== 0"><i class="iconfont reco-tag"></i> {{homeBlogCfg.tag}}</h4>
          <TagList @getCurrentTag="getPagesByTags"/>
          <h4 v-if="$themeConfig.friendLink && $themeConfig.friendLink.length !== 0"><i
            class="iconfont reco-friend"></i> {{homeBlogCfg.friendLink}}</h4>
          <FriendLink/>
        </div>
      </div>
    </ModuleTransition>

    <ModuleTransition delay="0.24">
      <Content v-show="recoShowModule" class="home-center" custom/>
    </ModuleTransition>
  </div>
</template>

<script>
  import TagList from '@theme/components/TagList'
  import FriendLink from '@theme/components/FriendLink'
  import NoteAbstract from '@theme/components/NoteAbstract'
  import pagination from '@theme/mixins/pagination'
  import ModuleTransition from '@theme/components/ModuleTransition'
  import PersonalInfo from '@theme/components/PersonalInfo'
  import {getOneColor} from '@theme/helpers/other'
  import moduleTransitonMixin from '@theme/mixins/moduleTransiton'
  import Springbili from '@theme/components/Springbili.vue'
  //  import Winterbili from '@theme/components/Winterbili.vue'
  import AOS from 'aos'

  export default {
    mixins: [pagination, moduleTransitonMixin],
    components: {NoteAbstract, TagList, FriendLink, ModuleTransition, PersonalInfo,Springbili},
    data() {
      return {
        recoShow: false,
        currentPage: 1,
        tags: [],
        motto: [],
        typewriter: '',
        i: 0,
        timer: 0,
        str: '',
        strArr: [
          "真正的成功源于生命里的学习，成长和热爱，以及不停步。",
          "自己的命运自己掌控，脚下的路不停步。",
          "即使爬到最高的山上，一次也只能脚踏实地地迈一步。",
          "未来属于那些相信梦想，并愿意为之付诸行动的人。",
          "每一次跌倒都是为了华丽的站起来。",
          "没有任何信念的人，就会失去所有",
          "想要做到不可替代，你就必须与众不同。",
          "其实，我们并不在同一起跑线，尽力就好。",
          "为了梦想，一路狂奔。",
          "自己选择的路，再难也要，勇敢的走下去。",
          "如果你觉得现在走的辛苦，那就证明你在走上坡路。",
          "愿意做别人不愿意做的事，便能达到别人达不成的事。",
          "运气只是当机会来临时，你已为它准备好。",
          "原地踏步还是跑遍世界，选择权在你手里。",
          "每一点滴的进展，都是缓慢而艰苦的。",
          "坚持是成功的一大要素。",
          "青春不停步，不停进步。",
          "不要只懂生存，不懂生活。",
          "飞不动就跑，跑不动就走，走不动就爬。",
          "不经历风雨长不成大树。",
        ]
      }
    },
    computed: {
      homeBlogCfg() {
        return this.$recoLocales.homeBlog
      },
      actionLink() {
        const {
          actionLink: link,
          actionText: text
        } = this.$frontmatter

        return {
          link,
          text
        }
      },
      motto() {
        return this.$themeConfig.mottos[new Date().getDay()] || {
          "zh": "愿你保持初心和善良,笑里尽是温暖与坦荡。",
          "en": "May you keep your original heart and kindness, and smile with warmth and magnanimity."
        }
      },
      heroImageStyle() {
        return this.$frontmatter.heroImageStyle || {}
      },
      bgImageStyle() {
        //   const initBgImageStyle = {
        //     textAlign: 'center',
        //     overflow: 'hidden',
        //     background: `
        //       url(${this.$frontmatter.bgImage
        // ? this.$withBase(this.$frontmatter.bgImage)
        // : require('../images/bg.svg')}) center/cover no-repeat
        //     `
        //   }
        //   const {
        //     bgImageStyle
        //   } = this.$frontmatter
        //
        //   return bgImageStyle ? { ...initBgImageStyle, ...bgImageStyle } : initBgImageStyle
      },
      heroHeight() {
        return document.querySelector('.hero').clientHeight
      }
    },
    mounted() {
      this.recoShow = true
      this._setPage(this._getStoragePage())
      AOS.init()
      this.str = this.strArr[Math.floor(Math.random() * this.strArr.length)]
      this.typeing()
      setInterval(() => {
        this.qieHuan()
      },10000)
    },
  methods: {
      typeing() {
          if (this.i <= this.str.length) {
              this.typewriter = this.str.slice(0, this.i++)
              this.timer = setTimeout(() => {
                  this.typeing()
              }, 150)
          } else { // 如果等于0.那么久重新获取
            setTimeout(() => {
              this.i = 0
              this.str = this.strArr[Math.floor(Math.random() * this.strArr.length)]
              this.typeing()
            },3000)
              // clearTimeout(this.timer)
          }
      },

      // 获取当前页码
      getCurrentPage(page) {
        this._setPage(page)
        setTimeout(() => {
          window.scrollTo(0, this.heroHeight)
        }, 100)
      },
      qieHuan () {
        this.motto = this.$themeConfig.mottos[Math.floor(Math.random() * this.$themeConfig.mottos.length)]
        // console.info(this.motto)
      },
      // 根据分类获取页面数据
      getPages() {
        let pages = this.$site.pages
        pages = pages.filter(item => {
          const {home, date} = item.frontmatter
          return !(home == true || date === undefined)
        })
        // reverse()是为了按时间最近排序排序
        this.pages = pages.length == 0 ? [] : pages
      },
      getPagesByTags(tagInfo) {
        this.$router.push({path: tagInfo.path})
      },
      _setPage(page) {
        this.currentPage = page
        this.$page.currentPage = page
        this._setStoragePage(page)
      },
      getOneColor
    }
  }
</script>

<style lang="stylus">
  .motto {
    text-align: center
    color: white
    transition-duration: .3s;
  }
  .type_writer{
    position: absolute;
    text-align: left;
    left:50%;
    transform: translateX(-50%)
  }

  .home-blog {
    padding: 0
    margin: 0px auto

    .hero {
      // margin $navbarHeight auto 0
      // margin-top -3rem
      position relative
      box-sizing border-box
      padding 0 20px
      height 94vh
      display flex
      align-items center
      justify-content center

      .hero-img {
        max-width: 300px;
        margin: 0 auto 1.5rem
      }

      h1 {
        margin-top: 5rem;
        font-size: 2.5rem;
      }

      .description {
        margin: 1.8rem auto;
        font-size: 1.6rem;
        line-height: 1.3;
      }
    }

    .home-blog-wrapper {
      display flex
      align-items: flex-start;
      padding 5rem 3rem
      max-width $homePageWidth
      margin 0 auto

      .blog-list {
        flex auto
        width 0

        .abstract-wrapper {
          .abstract-item:last-child {
            margin-bottom: 0px;
          }
        }
      }

      .info-wrapper {
        position -webkit-sticky;
        position sticky;
        top 70px
        overflow hidden
        transition all .3s
        margin-left 15px
        flex 0 0 300px
        height auto
        box-shadow var(--box-shadow)
        border-radius $borderRadius
        box-sizing border-box
        padding 0 15px
        background var(--background-color)

        &:hover {
          box-shadow var(--box-shadow-hover)
        }

        h4 {
          color var(--text-color)
        }

        .category-wrapper {
          list-style none
          padding-left 0

          .category-item {
            margin-bottom .4rem
            padding: .4rem .8rem;
            transition: all .5s
            border-radius $borderRadius
            box-shadow var(--box-shadow)
            background-color var(--background-color)

            &:hover {
              transform scale(1.04)

              a {
                color $accentColor
              }
            }

            a {
              display flex
              justify-content: space-between
              color var(--text-color)

              .post-num {
                width 1.6rem;
                height 1.6rem
                text-align center
                line-height 1.6rem
                border-radius $borderRadius
                background #eee
                font-size 13px
                color #fff
              }
            }
          }
        }
      }
    }
  }

  @media (max-width: $MQMobile) {
    .home-blog {
      .hero {
        // height 450px

        img {
          max-height: 210px;
          margin: 2rem auto 1.2rem;
        }

        h1 {
          margin: 0 auto 1.8rem;
          font-size: 2rem;
        }

        .description {
          font-size: 1.2rem;
        }

        .action-button {
          font-size: 1rem;
          padding: 0.6rem 1.2rem;
        }
      }

      .home-blog-wrapper {
        display block !important
        padding 5rem 0

        .blog-list {
          width auto
        }

        .info-wrapper {
          // display none!important
          margin-left 0

          .personal-info-wrapper {
            display none
          }
        }
      }
    }
  }

  @media (max-width: $MQMobileNarrow) {
    .home-blog {
      .hero {
        // height 450px

        img {
          max-height: 210px;
          margin: 2rem auto 1.2rem;
        }

        h1 {
          margin: 0 auto 1.8rem;
          font-size: 2rem;
        }

        h1, .description, .action {
          // margin: 1.2rem auto;
        }

        .description {
          font-size: 1.2rem;
        }

        .action-button {
          font-size: 1rem;
          padding: 0.6rem 1.2rem;
        }
      }

      .home-blog-wrapper {
        display block !important
        padding 2rem 0;

        .blog-list {
          width auto
        }

        .info-wrapper {
          // display none!important
          margin-left 0

          .personal-info-wrapper {
            display none
          }
        }
      }
    }
  }

  .scroll-down {
    display: block;
    margin 12rem auto 0 auto;
    bottom: 45px;
    width: 34px;
    height: 34px;
    font-size: 34px;
    text-align: center;
  }

  .bounce-enter-active {
    animation: bounce-in 5s 3s infinite;
  }

  /*.bounce-leave-active {*/
  /*  animation: bounce-in 4s 2s reverse;*/
  /*}*/
  @keyframes bounce-in {
    0% {
      transform: translateY(0);
    }
    20% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-20px);
    }
    80% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(0);
    }
  }

  .down-arrow {
    width: 20px;
    height: 20px;
  }

  .down-arrow:after {
    content: '';
    display: block;
    width: 20px;
    height: 20px;
    border-right: 3px solid #ffffff;
    border-top: 3px solid #ffffff;
    -webkit-transform: rotate(135deg); /*箭头方向可以自由切换角度*/
    transform: rotate(135deg);
  }
</style>
