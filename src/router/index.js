import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  // { path: '/', name: 'Home', component: () => import('@/views/Home.vue'), meta: {title: 'Home'} },
  {
    path: '/',
    component: () => import('@/layout/index.vue'),
    meta: { title: '首页', index: '/' },
    children: [
      {
        // 首页
        path: '/',
        component: resolve => require(['@/views/market/market-place.vue'], resolve),
        meta: { title: 'Market Place', auth: true, class: 4 }
      },
      {
        // 保险项目
        path: '/market-detail',
        component: resolve => require(['@/views/market/market-detail.vue'], resolve),
        meta: { title: 'Market Detail', auth: true, class: 4 }
      },
      {
        // 挖矿
        path: '/mint',
        component: resolve => require(['@/views/mint/mint.vue'], resolve),
        meta: { title: 'Mint', auth: true, class: 4 }
      },
      {
        // 赎回
        path: '/redeem',
        component: resolve => require(['@/views/redeem/redeem.vue'], resolve),
        meta: { title: 'Redeem', auth: true, class: 4 }
      },
      // {
      //   // 关于我
      //   path: '/about',
      //   component: resolve => require(['@/views/About.vue'], resolve),
      //   meta: { title: 'About', auth: true, class: 4 }
      // }, {
      //   // 关于我
      //   path: '/about2',
      //   component: resolve => require(['@/views/About2.vue'], resolve),
      //   meta: { title: 'About2', auth: true, class: 4 }
      // },
    ]
  },
]

const router = new VueRouter({
  routes
})

export default router
