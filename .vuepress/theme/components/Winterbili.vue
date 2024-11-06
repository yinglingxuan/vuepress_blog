<template>
  <div class="winterBili">
    <header id="winterBili">
      <div class="view">
        <img src="../images/winter/bilibili-winter-view-1.jpg" class="morning" alt="">
        <img src="../images/winter/bilibili-winter-view-2.jpg" class="afternoon" alt="">

        <!-- video 标签添加 muted 属性，每一次打开网页，视频都可以自动播放 -->
        <video autoplay loop muted class="evening">
          <source src="../images/winter/bilibili-winter-view-3.webm" type="video/webm" />
        </video>

        <img src="../images/winter/bilibili-winter-view-3-snow.png" class="window-cover" alt="">
      </div>

      <!-- 树的部分 -->
      <div class="tree">
        <img src="../images/winter/bilibili-winter-tree-1.png" class="morning" alt="">
        <img src="../images/winter/bilibili-winter-tree-2.png" class="afternoon" alt="">
        <img src="../images/winter/bilibili-winter-tree-3.png" class="evening" alt="">
      </div>
    </header>
  </div>
</template>

<script>
import AOS from 'aos'
// import Spring from '../images/spring/script'
export default {
  // mixins: [Spring],
  data() {
    return {

    }
  },
  computed: {

  },
  mounted() {
    let startingPoint
    /* css 选择 */
    const header = document.querySelector('#winterBili')

    /* 事件监听，对鼠标放上时进行监听 */
    header.addEventListener('mouseenter', (e) => {
      startingPoint = e.clientX
      header.classList.add('moving')
    })

    /* 事件监听，对鼠标移开时进行监听 */
    header.addEventListener('mouseout', (e) => {
      header.classList.remove('moving')
      header.style.setProperty('--percentage', 0.5)
    })

    header.addEventListener('mousemove', (e) => {
      let percentage = (e.clientX - startingPoint) / window.outerWidth + 0.5

      header.style.setProperty('--percentage', percentage)
    })
  },
  methods: {
  }
}
</script>

<style scoped>
@import url("../images/winter/style.css");
</style>
