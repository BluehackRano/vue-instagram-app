import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import MyInfo from '@/components/MyInfo'
import MyFeed from '@/components/MyFeed'
import TagSearch from '@/components/TagSearch'

Vue.use(Router)

const router = new Router({
  mode: 'history', // 'hash'
  routes: [
    {
      path: '/',
      redirect: '/me'
    },
    {
      path: '/me',
      name: 'MyInfo',
      component: MyInfo
    },
    {
      path: '/feeds',
      name: 'MyFeed',
      component: MyFeed
    },
    {
      path: '/search',
      name: 'TagSearch',
      component: TagSearch
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})

// to: 이동전 / from: 이동후 / next: 가자 !
router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token')
  if (to.name !== 'Login' && token === null) {
    // '#' 뒤에 붙은 값을 가져옴
    if (to.hash.includes('#access_token')) {
      // #access_token=6097098544.e9d5d8a.9964746c2de14b27ac5b6937a900c8f4
      const tokenHash = to.hash
      const tokenValue = tokenHash.split('=')[1]
      localStorage.setItem('token', tokenValue)
      next('/me')
      return
    }
    next('/login')
  }
  // 원래 가려던 곳으로 이동
  next()
})

export default router
