<template>
  <div class="autumnBili">
    <header id="autumnBili">
      <div><img src="../images/autumn/bilibili-autumn-1.png" alt=""></div>
      <div><img src="../images/autumn/bilibili-autumn-2.png" alt=""></div>
      <div><img src="../images/autumn/bilibili-autumn-3.png" alt=""></div>
      <div><img src="../images/autumn/bilibili-autumn-4.png" alt=""></div>
      <div><img src="../images/autumn/bilibili-autumn-5.png" alt=""></div>
      <div><img src="../images/autumn/bilibili-autumn-6.png" alt=""></div>
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
    /* 获取图片 */
    
    const images = document.querySelectorAll('header > div > img')

    document.querySelector('#autumnBili').addEventListener('mousemove', (e) => {
      let percentage = e.clientX / window.outerWidth
      let offset = 10 * percentage
      let blur = 20

      for (let [index, image] of images.entries()) {
        offset *= 1.3;
        let blurValue = (Math.pow((index / images.length - percentage), 2) * blur);
        image.style.setProperty('--offset', `${offset}px`);
        image.style.setProperty('--blur', `${blurValue}px`);
      }
    });

    document.querySelector('.banner').addEventListener('mouseout', (event) => {
      for (let [index, image] of images.entries()) {
        image.style.setProperty('--offset', `${offset}px`);
        image.style.setProperty('--blur', `${blurValue}px`);
      }
    });
  },
  methods: {
  }
}
</script>

<style scoped>
@import url("../images/autumn/style.css");
</style>
