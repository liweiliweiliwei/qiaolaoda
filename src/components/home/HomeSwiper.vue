<template>
  <div>
    <swiper :options="swiperOption" class="home-swiper">
      <swiper-slide>
        <img src="https://testec.ghs.net/public/images/be/fb/7d/1d5c5ca7fef82bdbc0be49a020cda8432e887291.jpg">
      </swiper-slide>
      <swiper-slide>
        <img src="https://testec.ghs.net/public/images/be/fb/7d/1d5c5ca7fef82bdbc0be49a020cda8432e887291.jpg">
      </swiper-slide>
      <swiper-slide>
        <img src='https://testec.ghs.net/public/images/be/fb/7d/1d5c5ca7fef82bdbc0be49a020cda8432e887291.jpg'>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import {swiper, swiperSlide} from 'vue-awesome-swiper'

export default {
  name: 'home-swiper',
  data () {
    return {
      swiperOption: {
        loop: true,
        autoplay: true,
        pagination: {
          el: '.swiper-pagination'
        }
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
  .home-swiper {
    height: 300px;
    .swiper-pagination {
      width: 100%;
      bottom: 20px;
      background-color: transparent;

      .swiper-pagination-bullet {
        width: 12px;
        height: 12px;
        background: #fff;
        opacity: 0.4;
      }

      .swiper-pagination-bullet-active {
        width: 12px;
        height: 12px;
        background: #fff;
        opacity: 1;
      }
    }
    img {
      width: 750px;
      height: 300px;
    }
  }
</style>
