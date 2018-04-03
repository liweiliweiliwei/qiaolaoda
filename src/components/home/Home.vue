<template>
  <div class="home">
    <!--<no-login-home></no-login-home>-->
    <login-home></login-home>
  </div>
</template>

<script>
// import Vue from 'vue'
import NoLoginHome from '$home/NoLoginHome'
import LoginHome from '$home/LoginHome'
export default {
  name: 'home',
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
    NoLoginHome,
    LoginHome
  }
}
</script>

<style lang="scss" scoped>
</style>
