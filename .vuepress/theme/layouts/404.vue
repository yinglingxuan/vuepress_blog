<template>
  <!-- <section class="theme-container" v-if="!noFoundPageByTencent"> -->
    <!-- <article class="content">
      <h1>404</h1>
      <blockquote>{{ getMsg() }}</blockquote>
      <router-link to="/">Take me home.</router-link>
    </article> -->
    <div class="_body">

   
    <div class="error">
        <div class="wrap">
                <div class="404">
                  <pre>
                    <code>
                        <span class="green">&lt;! DOCTYPE html&gt;</span>
    
                        <span class="orange">&lt;html&gt;</span>
                        <span class="orange" style="margin-left: 60px;">&lt;style&gt;</span>
                          <span  style="margin-left: 80px;">* {</span>
                        <span class="green" style="margin-left: 300px;">everything:<span class="blue">awesome;</span>
                        </span>
                        <span  style="margin-left: 80px;">}</span>
                        
                        <span class="orange" style="margin-left: 60px;">&lt;/style&gt;</span>
                        <span class="orange">&lt;body&gt;</span> 
                            ERROR 404!
                            FILE NOT FOUND!
                        <span class="comment">&lt;!--The file you are looking for, 
                          is not where you think it is.--&gt;
                        </span>
                        <span class="orange"></span> 
                      </code>
                    </pre>
                </div>
          <br />
          <span class="info"> </span>
          <br />
            <span class="orange">&nbsp;&lt;/body&gt;</span>
            <br/>
            <span class="orange">&lt;/html&gt;</span>
         
        </div>
    </div>
  </div>
  <!-- </section> -->
</template>

<script>
const msgs = [
  `There's nothing here.`,
  `How did we get here?`,
  `That's a Four-Oh-Four.`,
  `Looks like we've got some broken links.`
]

export default {
  computed: {
    noFoundPageByTencent() {
      return this.$themeConfig.noFoundPageByTencent !== false
    }
  },
  mounted() {
    // if (this.noFoundPageByTencent) {
    //   const dom = document.createElement('script')
    //   dom.setAttribute('homePageName', '回到首页')
    //   dom.setAttribute('homePageUrl', '/')
    //   dom.setAttribute('src', '//qzonestyle.gtimg.cn/qzone/hybrid/app/404/search_children.js')

    //   document.body.append(dom)
    // }
  },
  methods: {
    // getMsg() {
    //   return msgs[Math.floor(Math.random() * msgs.length)]
    // }
  }
}
</script>

<style src="../styles/theme.styl" lang="stylus"></style>
<style scoped>
@import url('../images/404style.css');
</style>
<style lang="stylus">
.content
  margin 4rem auto 0
  max-width 800px
  padding 0 2rem
.mod_404
  .desc
    .desc_link
      display: inline-block
      // margin: 20px 0
      background: #424242!important
      color: #ffffff
      padding: 6px 20px!important
      text-decoration: none!important
      border-radius: 4px

@media screen and (max-width: 720px)
  .mod_404
    .desc
      margin: 50px 0
    .wrapper
      margin 0!important
      padding-top 20px
</style>
