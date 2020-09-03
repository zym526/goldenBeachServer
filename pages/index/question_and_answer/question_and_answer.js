import {mapState} from 'vuex'
export default {
	data() {
		return {
			// 顶部导航栏颜色
			background: {backgroundColor: 'rgba(0,0,0,0)',},
			showPopup:false,//回答弹窗
			openCollect:false,//描述展开或收起
		}
	},
	computed: {
		...mapState(['statusBarHeight']),
	},
	methods: {
	},
	onShow(){

	},
}