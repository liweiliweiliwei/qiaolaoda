<template>
  <div class="login-home">
    <home-swiper></home-swiper>
    <div class="homeGap"></div>
    <div class="homeEasyBorrHead"><span class="title">无忧借款平台</span><span class="desc">99.99%通过，24小时到账</span></div>
    <easy-borrow-item></easy-borrow-item>
    <easy-borrow-item></easy-borrow-item>
    <easy-borrow-item></easy-borrow-item>
    <div class="homeSpeedBorrHead"><span class="title">速借大全</span><span class="desc">查看全部<span class="el-icon-d-arrow-right"></span></span></div>
    <speed-borrow-item></speed-borrow-item>
    <div class="endSpace"></div>
  </div>
</template>

<script>

import HomeSwiper from '$home/HomeSwiper'
import EasyBorrowItem from '$home/EasyBorrowItem'
import SpeedBorrowItem from '$home/SpeedBorrowItem'
export default {
  name: 'login-home',
  data () {
    return {
    }
  },
  created () {
  },
  methods: {
  },
  computed: {
  },
  components: {
    HomeSwiper,
    EasyBorrowItem,
    SpeedBorrowItem
  }
}
</script>

<style lang="scss" scoped>
  .homeGap{
    width: 750px;
    height: 10px;
    background-color: #e3e3e3;
  }
  .homeEasyBorrHead,.homeSpeedBorrHead{
    width: 750px;
    height: 60px;
    border-bottom: 2px solid #e3e3e3;
    .title{
      display: inline-block;
      width: 250px;
      height: 60px;
      padding-left: 20px;
      box-sizing: border-box;
      line-height: 1.9;
      font-size: 36px;
    }
    .desc{
      display: inline-block;
      width: 500px;
      height: 60px;
      padding-right: 20px;
      box-sizing: border-box;
      text-align: right;
      line-height: 3.4;
      font-size: 24px;
      vertical-align: top;
    }

  }
  .endSpace{
    height: 100px;
  }
</style>
