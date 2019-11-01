import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Detail from '../views/Detail.vue'
import Carts from '../views/Carts.vue'
import Login from '../views/Login.vue'
import Regist from '../views/Regist.vue'
import LogOut from '../views/LogOut.vue'
import Center from '../views/Center.vue'
import Baby from '@/components/Baby.vue'
import Comment from '@/components/Comment.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',	
    component: Home
  },
  {
    path: '/login',
    name: 'login',	
    component: Login,
  },
  {
    path: '/regist',
    name: 'regist',	
    component: Regist,
  },
  {
    path: '/logout',
    name: 'logout',	
    component:LogOut ,
  },
  {
    path: '/center',
    name: 'center',	
    component:Center ,
  },
  {
    path: '/carts',
    name: 'carts',	
    component: Carts,
	meta:{
		auth:true
	}
  },
  {
    path: '/detail/:id',
    name: 'detail',
    component: Detail,
	children:[
		{
			path:"baby",
			name:"baby",
			component:Baby
		},	
		{
			path:"comment",
			name:"comment",
			component:Comment
		},
	]
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/joke',
    name: 'joke',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Joke.vue'),
	meta:{
		auth:true
	}
  }
]

const router = new VueRouter({
  routes
})
import store from '../store'
// // 导航守卫 拦截非法请求
router.beforeEach((toRouter,fromRouter,next)=>{
	// console.log(toRouter,fromRouter)
	// console.log(toRouter.meta.auth)
	if(toRouter.meta.auth){
	//需要授权 请进入login
	// console.log(toRouter.path)
	//redirect 意思是重定向
	//处理如果登录成功该怎么办
	if(store.getters.getLog){
		next();
	}
	else{
	next(`/login?redirect=${toRouter.path}`)
	}
	}
	else{
		next()
	}
})



export default router
