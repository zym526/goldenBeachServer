import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store=new Vuex.Store({
	state: {
		edition:"1.0.0",//版本号
		statusBarHeight:0,//状态栏高度
	},  
	getters:{},
	mutations: {
		changeStatusBarHeight(state,data){
			state.statusBarHeight=data
		},
	},
	actions:{
		changeStatusBarHeight(context,data){
			context.commit('changeStatusBarHeight',data)
		},
	}
})

export default store