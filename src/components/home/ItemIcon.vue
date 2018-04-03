<template>
  <div class="item-icon">
    <div class="left"></div><div class="right"> <slot>热门</slot></div>
  </div>
</template>

<script>

export default {
  name: 'item-icon',
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
  .item-icon{
    display: inline-block;
    width: 75px;
    height: 30px;
    vertical-align: middle;
    .left{
      display: inline-block;
      width: 0;
      height: 0;
      border-top: 15px solid transparent;
      border-bottom: 15px solid transparent;
      border-right: 15px solid red;
      vertical-align: top;
    }
    .right{
      display: inline-block;
      width: 60px;
      height: 30px;
      line-height: 30px;
      text-align: center;
      background-color: red;
      font-size: 22px;
      color: #ffffff;
      vertical-align: top;
    }

  }
</style>
