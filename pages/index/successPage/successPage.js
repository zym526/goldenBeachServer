export default {
	data() {
		return {
		}
	},
	computed: {
	},
	components: {

	},
	methods: {
		// 发布成功，跳转发现页面
		toIndex(){
			uni.switchTab({
				url:"/pages/index/index/index"
			})
		}
	},
	onLoad(options){
	},
}