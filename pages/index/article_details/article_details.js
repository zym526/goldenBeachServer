export default {
	data() {
		return {
			background: {backgroundColor: 'rgba(0,0,0,0)',},
			popupDetele:false,//删除下弹窗
			modalShow:false,//确定删除
			contentStyle:{//删除提示文字样式
				fontSize:"38rpx",
				color:"#232323"
			}
		}
	},
	computed: {
	},
	methods: {
		// 删除
		deleteDetail(){
			console.log("删除")
		},
		// 删除成功
		deleteYes(){//返回上一页
			uni.navigateBack({
				delta:1
			})
		}
	},
	onShow(){

	},
}