<template>
  <div class="speed-borrow-item">
    <div v-for="{item,index} in 16" :key="index"><img src="https://testec.ghs.net/public/images/be/fb/7d/1d5c5ca7fef82bdbc0be49a020cda8432e887291.jpg"><p>平安普惠贷</p></div>
  </div>
</template>

<script>

export default {
  name: 'speed-borrow-item',
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
  }
}
</script>

<style lang="scss" scoped>
  .speed-borrow-item{
    box-sizing: border-box;
    width: 750px;
    padding: 20px 30px;
    display: flex;
    justify-content:space-around;
    flex-wrap:wrap;
    div{
      width: 150px;
      height: 150px;
      img{
        display: block;
        width: 100px;
        height: 100px;
        margin: 0 auto;
        border-radius: 10px;
      }
      p{
        height: 50px;
        line-height: 50px;
        font-size: 24px;
        text-align: center;
      }
    }
  }
</style>
