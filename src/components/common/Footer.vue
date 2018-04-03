<template>
  <div class="footer-box">
    <template v-cloak v-for="(item,index) in footerList">
      <router-link :key='index' :to="item.link" v-if="item.isShow" class="footer-list">
        <div class="item" @click="activeFooter(item.name)">
          <img :src='item.activeImg' v-if="item.isActive" />
          <img :src='item.defaultImg' v-else />
          <div class="title active" v-if="item.isActive" >{{ item.title }}</div>
          <div class="title" v-else>{{ item.title }}</div>
        </div>
      </router-link>
    </template>
  </div>
</template>

<script>
export default {
  name: 'v-footer',
  data () {
    return {
      footerList: [
        {
          name: 'home',
          isShow: true,
          isActive: true,
          title: '首页',
          defaultImg: '/static/img/toolbaricon_home.png',
          activeImg: '/static/img/toolbaricon_home_full.png',
          link: '/'
        },
        {
          name: 'easyborrow',
          isShow: true,
          isActive: false,
          title: '无忧借款',
          defaultImg: '/static/img/toolbaricon_classify.png',
          activeImg: '/static/img/toolbaricon_classify_full.png',
          link: '/easyborrow'
        },
        {
          name: 'speedborrow',
          isShow: true,
          isActive: false,
          title: '速借大全',
          defaultImg: '/static/img/toolbaricon_shoppingcart.png',
          activeImg: '/static/img/toolbaricon_shoppingcart_full.png',
          link: '/speedborrow'
        },
        {
          name: 'my',
          isShow: true,
          isActive: false,
          title: '我的',
          defaultImg: '/static/img/toolbaricon_profile.png',
          activeImg: '/static/img/toolbaricon_profile_full.png',
          link: '/my'
        }
      ]
    }
  },
  created () {
    this.setDefaultActive()
  },
  methods: {
    activeFooter (key) {
      // 处理底部导航的点击事件
      for (let index = 0, size = this.footerList.length; index < size; index += 1) {
        const item = this.footerList[index]
        if (item.name !== key) {
          item.isActive = false
        } else {
          item.isActive = true
        }
      }
    },
    setDefaultActive () {
      const routerName = this.defaultPage
      this.activeFooter(routerName)
    }
  },
  computed: {
    defaultPage () {
      return this.$store.state.defaultPage
    }
  },
  watch: {
    defaultPage () {
      this.setDefaultActive()
    }
  }
}
</script>

<style lang="scss" scoped>
.footer-box {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100vw;
  height: 100px;
  border-top: 1px solid #ededed;
  z-index: 5;
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
}

.footer-list {
  flex: 1 1 auto;
}

a.footer-list {
  width: 187.5px;
  cursor: cursor;
  text-decoration: none;
}

.item {
  height: 100px;
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;

  img {
    width: 44px;
  }

  .title {
    color: #333;
    font-size: 24px;
    vertical-align: middle;
  }

  .title.active {
    color: $ghs-color;
  }
}
</style>
