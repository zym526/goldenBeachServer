export default {
	data() {
		return {
			titleStyle:{//标题样式
				fontSize:"30rpx",
				color:"#333333"
			},
			valueStyle:{//内容样式
				fontSize:"28rpx",
				color:"#232323",
				overflow:"hidden",
				textOverflow:"ellipsis",
				whiteSpace:"nowrap",
				paddingLeft:"20rpx",
				boxSizing:"border-box"
			},
			isPerfect:{//已完善
				fontSize:"26rpx",
				color:"#999999"
			},
			noPerfect:{//未完善
				fontSize:"26rpx",
				color:"#E9434C"
			},
			nowEdit:false,//是否是编辑状态
			userInfo:{
				avatar:"http://pic2.sc.chinaz.com/Files/pic/pic9/202002/hpic2119_s.jpg",//头像
				userName:"某个人",//昵称
				introduce:"个人简介",//个人简介
				tags:["标签","标签","标签"],//标签
				userId:true,//身份证
				workId:false,//工作证明
				qualifications:false//个人资质
			}
		}
	},
	computed: {
	},
	methods: {
		// 编辑和保存的切换
		editInfo(){
			this.nowEdit=!this.nowEdit
		},
		// 跳转到添加页面，0添加标签，1身份证，2工作证明，3个人资质
		toAddInfo(index){
			if(index==0){
				uni.navigateTo({
					url:'/pages/my/add_tag/add_tag'
				})
			}else if(index==1){
				uni.navigateTo({
					url:'/pages/my/user_id/user_id'
				})
			}else if(index==2){
				uni.navigateTo({
					url:'/pages/my/work_certificate/work_certificate'
				})
			}
		}
	},
	onShow(){

	},
}