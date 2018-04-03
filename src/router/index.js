import Vue from 'vue'
import Router from 'vue-router'
const Index = () => import('@/components/Index')
const Home = () => import('@/components/home/Home')
const EasyBorrow = () => import('@/components/easyborrow/EasyBorrow')
const SpeedBorrow = () => import('@/components/speedborrow/SpeedBorrow')
const My = () => import('@/components/my/My')

Vue.use(Router)

export default new Router({
  mode: 'history',
  scrollBehavior () {
    return {x: 0, y: 0}
  },
  routes: [
    {
      path: '/',
      component: Index,
      children: [
        {
          path: '',
          name: 'home',
          component: Home
        },
        {
          path: 'easyborrow',
          name: 'easyborrow',
          component: EasyBorrow
        },
        {
          path: 'speedborrow',
          name: 'speedborrow',
          component: SpeedBorrow
        },
        {
          path: 'my',
          name: 'my',
          component: My
        }
      ]
    }
  ]
})
