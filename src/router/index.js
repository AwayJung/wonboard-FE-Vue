import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginView from '../views/Login.vue'
import SignupView from '../views/Signup.vue'
import PostView from '@/views/articles/Post.vue'
import ArticleList from '@/views/articles/List.vue'
import ArticleDetail from '@/views/articles/Detail.vue'
import ArticleEdit from '@/views/articles/Edit.vue'

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
    path: "/articles/post",
    name: "PostView",
    component: PostView
  },
  {
    path: "/articles/list",
    name: "ArticleList",
    component: ArticleList
  },
  {
    path: "/articles/:id",
    name: "ArticleDetail",
    component: ArticleDetail
  },
  {
    path: "/articles/edit/:id",
    name: "ArticleEdit",
    component: ArticleEdit
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
