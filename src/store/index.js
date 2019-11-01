import Vue from 'vue'
import Vuex from 'vuex'
import Cookie from 'js-cookie'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
	  goods:[],
	  flag:false,
	  
  },
  // 类似于computed
  getters:{
	  getLog( state ){
		  return state.flag||Cookie.get("islog");
	  }
  },
  mutations: {
	  addtocard(state,item){
		  state.goods.push(item)
	  },
	  setlog(state,log){
		  state.flag=log;
		  if(log){
			  Cookie.set("islog",true)
			  }
		  else{
			  Cookie.remove("islog")
		  
		  }
		  
	  }
  },
  actions: {
  },
  modules: {
  }
})
