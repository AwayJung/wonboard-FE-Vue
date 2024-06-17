import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginView from '../views/Login.vue'
import SignupView from '../views/Signup.vue'
import PostView from '@/views/articles/Post.vue'
import ArticleList from '@/views/articles/List.vue'
import ArticleDetail from '@/views/articles/Detail.vue'
import ArticleEdit from '@/views/articles/Edit.vue'
import store from '@/stores/index.js'
import Main from '@/views/Main.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: "/login",
    name: "LoginView",
    component: LoginView
  },
  {
    path: "/signup",
    name: "SignupView",
    component: SignupView
  },
  {
    path: "/",
    name: "MainView",
    component: Main
  },
  {
    path: "/articles/post",
    name: "PostView",
    component: PostView,
    meta: {
      requiresAuth: true
    }
    // 인증이 필요한 페이지임을 명시(인증이 필요한 라우트에는 meta 속성을 추가하고 requiresAuth 값을 true로 설정)
  },
  {
    path: "/articles/list",
    name: "ArticleList",
    component: ArticleList,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/articles/:id",
    name: "ArticleDetail",
    component: ArticleDetail,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/articles/edit/:id",
    name: "ArticleEdit",
    component: ArticleEdit,
    meta: {
      requiresAuth: true
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)

  if (requiresAuth && !store.state.isLoggedIn) {
    alert('로그인 후 이용해주세요.')
    next('/login')
  } else {
    next()
  }
})
export default router
