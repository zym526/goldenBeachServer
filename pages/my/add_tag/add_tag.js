export default {
	data() {
		return {
			list: [
				{
					name: '标签文字',
					checked: false,
				},
				{
					name: '标签文字',
					checked: false,
				},
				{
					name: '标签文字',
					checked: false,
				}
			]
		}
	},
	computed: {
	},
	methods: {
		// 选中任一checkbox时，由checkbox-group触发
		checkboxGroupChange(e) {
			console.log(e);
		},
		// 添加标签成功跳转信息页面
		toUserInfo(){
			uni.navigateTo({
				url:'/pages/my/user_info/user_info'
			})
		}
	},
	onShow(){

	},
}