// import jinEdit from '../../../common/jin-edit/jin-edit.vue';
export default {
	data() {
		return {
			areaValueTitle:"",//文章标题
			pickerShow:false,//专栏选择
			specialColumn:"请选择",//选中的专栏
			selectorObj: [
				{
					cateName: '选择专栏',
					id: 1
				},
				{
					cateName: '信用卡',
					id: 2
				}
			]
		}
	},
	computed: {
	},
	methods: {
		// 点击发布
		release() {
			console.log("发布视频")
			uni.navigateTo({
				url:"/pages/index/successPage/successPage"
			})
		},
		// 确定选择
		choice(e){
			var index=e[0]
			this.specialColumn=this.selectorObj[index].cateName
		}
	},
	onShow(){

	},
}