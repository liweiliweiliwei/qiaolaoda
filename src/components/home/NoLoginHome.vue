<template>
  <div class="no-login-home">
    <img v-lazy="imgUrl">
  </div>
</template>

<script>
export default {
  name: 'no-login-home',
  data () {
    return {
      imgUrl: '/static/img/homeNoLogin.jpg'
    }
  },
  created () {
  },
  methods: {
  },
  computed: {
  }
}
</script>

<style lang="scss" scoped>
  .no-login{
    width: 100vw;
    height: 100%;
    img{
      width: inherit;
      height: 100%;
    }
  }
</style>
