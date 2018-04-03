<template>
  <div>
    <swiper :options="swiperOption" class="succ-swiper">
      <swiper-slide v-for="{item,index} in 5" :key="index">
        <img src="https://testec.ghs.net/public/images/be/fb/7d/1d5c5ca7fef82bdbc0be49a020cda8432e887291.jpg"><p>用户188****8888成功借款9999元</p>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import {swiper, swiperSlide} from 'vue-awesome-swiper'

export default {
  name: 'succ-swiper',
  data () {
    return {
      swiperOption: {
        loop: true,
        autoplay: true,
        direction: 'vertical'
      }
    }
  },
  created () {
  },
  methods: {},
  computed: {},
  components: {
    swiper,
    swiperSlide
  }
}
</script>

<style lang="scss" scoped>
  .succ-swiper {
    height: 40px;
    padding: 0 30px;
    img {
      display: inline-block;
      width: 30px;
      height: 30px;
      vertical-align: super;
    }
    p{
      display: inline-block;
      width: 600px;
      height: 40px;
      padding-left: 20px;
      line-height: 40px;
      font-size: 24px;
      white-space:nowrap;
      overflow:hidden;
      text-overflow:ellipsis
    }
  }
</style>
