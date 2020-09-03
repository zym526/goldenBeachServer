// import jinEdit from '../../../common/jin-edit/jin-edit.vue';
export default {
	data() {
		return {
			areaValueTitle:"",//文章标题
			placeholder: '开始输入...',
			uploadFileUrl:"#",//上传的服务器
			showPopup:false,//标签弹出
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
	// components: {
	// 	jinEdit
	// },
	computed: {
	},
	methods: {
		// 点击发布
		release(isPublic) {
			this.editorCtx.getContents({
				success: res => {
					Object.assign(res, {
						isPublic: isPublic
					})
					console.log(res)
				} 
			})
			uni.navigateTo({
				url:"/pages/index/successPage/successPage"
			})
		},
		onEditorReady(e) {
			uni.createSelectorQuery()
				.in(this)
				.select('.ql-container')
				.fields({
					size: true,
					context: true
				},res => {
					this.editorCtx = res.context;
					this.editorCtx.setContents({
						html: this.html
					})
				})
				.exec();
		},
		// 插入图片
		insertImage() {
			uni.chooseImage({
				count: 9, //默认9
				sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
				sourceType: ['album', 'camera'], //从相册选择
				success: async(res) => {
					var tempFilePaths = res.tempFilePaths;
					// uni.showLoading({
					// 	title: '正在上传中...'
					// })
					for (let temp of tempFilePaths) {
						// 图片上传服务器
						// await uni.uploadFile({
							// url: this.uploadFileUrl,
							// filePath: temp,
							// name: "file",
							// header: this.header,
							// success: res => {
								// 上传完成后处理
								this.editorCtx.insertImage({
									src: temp,  // 此处需要将图片地址切换成服务器返回的真实图片地址
									alt: '图片',
									success: function(e) {}
								});
								// uni.hideLoading()
							// },
							
						// });
					}
				}
			});
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