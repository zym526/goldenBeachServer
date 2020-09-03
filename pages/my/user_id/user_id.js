export default {
	data() {
		return {
		}
	},
	computed: {
	},
	methods: {
		// 添加身份证明成功跳转信息页面
		toUserInfo(){
			uni.navigateTo({
				url:'/pages/my/user_info/user_info'
			})
		}
	},
	onShow(){

	},
}