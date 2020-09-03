import Vue from 'vue'
import App from './App'
import store from './store'//引入vuex
import uView from "uview-ui";
import noData from 'common/no_data.vue'
import threeClasses from 'common/threeClasses.vue'
import util from './util/util.js'//引入全局自定义

Vue.use(uView);
Vue.config.productionTip = false

// 把vuex定义成全局组件
Vue.prototype.$store = store
Vue.prototype.$util = util

Vue.component('noData',noData);
Vue.component('threeClasses',threeClasses);

App.mpType = 'app'

const app = new Vue({
    ...App,
	store
})
app.$mount()
