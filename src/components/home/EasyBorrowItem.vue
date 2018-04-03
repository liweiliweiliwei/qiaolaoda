<template>
  <div class="easy-borrow-item">
    <img src="https://testec.ghs.net/public/images/be/fb/7d/1d5c5ca7fef82bdbc0be49a020cda8432e887291.jpg"><div class="rightPart">
      <div class="one"><p>飞豹贷</p><item-icon></item-icon><span></span></div>
      <div class="two"><span>3万</span><span>0.05%</span><span>4958096人</span></div>
      <div class="three"><span>最高额度</span><span>参考日利率</span><span>成功借款</span></div>
    </div>
    <div class="line"></div>
  </div>
</template>

<script>

import ItemIcon from '$home/ItemIcon'
export default {
  name: 'easy-borrow-item',
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
    ItemIcon
  }
}
</script>

<style lang="scss" scoped>
  .easy-borrow-item{
    width: 750px;
    height: 162px;
    padding: 0 15px 0 30px;
    box-sizing: border-box;
    img{
      display: inline-block;
      width: 130px;
      height: 130px;
      border-radius: 15px;
      vertical-align: middle;
    }
    .rightPart{
      display: inline-block;
      width: 575px;
      padding-left: 24px;
      box-sizing: border-box;
      height: 160px;
      vertical-align: middle;
      .one{
        display: inline-block;
        height: 75px;
        font-size: 36px;
        p{
          display: inline-block;
          vertical-align: middle;
          margin-right: 20px;
        }
        span{
          display: inline-block;
          margin-left: 300px;
          border-right: 6px solid #3C3C3C;
          border-bottom: 6px solid #3C3C3C;
          width: 26px;
          height: 26px;
          transform: rotate(-45deg);
          vertical-align: middle;
        }
      }
      .two{
        height: 37.5px;
        display: flex;
        justify-content:space-between;
        font-size: 24px;
        padding: 0 30px 0 0;
        span{
          display: inline-block;
          width: 130px;
          text-align: center;
        }
      }
      .three{
        height: 37.5px;
        display: flex;
        justify-content:space-between;
        font-size: 24px;
        padding: 0 30px 0 0;
        span{
          display: inline-block;
          width: 130px;
          text-align: center;
        }
      }
    }
    .line{
      width: 700px;
      height: 0;
      border-top: 2px solid #d0d0d0;
    }
  }
</style>
