import Vue from 'vue'
import VueRouter from 'vue-router'
import detail from '@/views/detail/detail.vue'
import about from '@/views/About.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/Home.vue'),
    meta: {
      requireAuth: true,//添加该字段表示进入这个路由是需要登录的
    },
    children: [
      {
        path: '', component: () => import('@/views/Homec.vue')
      },
      {
        path: 'detail',
        name:'detail',
        component:detail
      },
      {
        path: 'about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: about
      },
    ]
  },
 
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/login.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  console.log(to)
  console.log(from)
  //to and from are Route Object,next() must be called to resolve the hook}
  if (to.meta.requireAuth) { //判断该路由是否需要登录权限
    if (localStorage.getItem('sid')) { //获取登录身份信息
      next()
    } else {
      next({
        path: '/login'
      })
    }
  } else { 
    next()
  }
})

export default router
