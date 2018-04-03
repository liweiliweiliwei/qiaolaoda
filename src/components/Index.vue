<template>
  <div class="index-box">
    <router-view/>
    <footer-view></footer-view>
  </div>
</template>

<script>
import Footer from '@/components/common/Footer'

export default {
  name: 'index',
  data () {
    return {
      test: 'hello,world!'
    }
  },
  components: {
    'footer-view': Footer
  }
}
</script>
