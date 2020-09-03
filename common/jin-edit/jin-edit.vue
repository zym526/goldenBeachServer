<template>
	<view class="container" style="paddingBottom:120rpx"> 
		<editor
			class="ql-container"
			:placeholder="placeholder"
			:show-img-size="true"
			:show-img-toolbar="true"
			:show-img-resize="true"
			@ready="onEditorReady"
			id="editor"
			@statuschange="statuschange"
			@focus="editFocus" 
			@blur="editBlur"
			ref="editot"
		></editor>   
		<!-- 操作工具 -->
		<view class="tool-view" > 
			<view class="tool">
				<jinIcon class="single" type="&#xe6f3;" font-size="44rpx" title="插入图片" @click="insertImage"></jinIcon>
				<jinIcon class="single" type="&#xeb8a;" font-size="44rpx" title="设置" @click="release(true)"></jinIcon>
			</view>
		</view>
	</view>
</template>

<script>
import jinIcon from './jin-icons.vue';
export default {
	props: {
		// 点击图片时显示图片大小控件
		showImgSize: {
			type: Boolean,
			default: false
		},
		// 点击图片时显示工具栏控件
		showImgToolbar: {
			type: Boolean,
			default: false
		},
		// 点击图片时显示修改尺寸控件
		showImgResize: {
			type: Boolean,
			default: false
		},
		// 占位符
		placeholder: {
			type: String,
			default: '开始输入...'
		},
		// 图片上传的地址
		uploadFileUrl: {
			type: String,
			default: '#'
		},
		// 上传文件时的name
		fileKeyName: {
			type: String,
			default: 'file'
		},
		// 上传图片时，http请求的header
		header: {
			type: Object
		},
		// 初始化html
		html: {
			type: String
		}
	},
	computed:{
		
	},
	data() {
		return {
			showBold: false,
			showItalic: false,
			showIns: false,
			showHeader: false,
			showCenter: false,
			showRight: false,
			activeColor: '#F56C6C'
		};
	},
	components: {
		jinIcon
	},
	created() {
		
	},
	methods: {
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
					uni.showLoading({
						title: '正在上传中...'
					})
					for (let temp of tempFilePaths) {
						// 图片上传服务器
						await uni.uploadFile({
							url: this.uploadFileUrl,
							filePath: temp,
							name: this.fileKeyName,
							header: this.header,
							success: res => {
								// 上传完成后处理
								this.editorCtx.insertImage({
									src: temp,  // 此处需要将图片地址切换成服务器返回的真实图片地址
									alt: '图片',
									success: function(e) {}
								});
								uni.hideLoading()
							},
							
						});
					}
				}
			});
		},
		checkStatus(name, detail, obj) {
			if (detail.hasOwnProperty(name)) {
				this[obj] = true;
			} else {
				this[obj] = false;
			}
		},
		statuschange(e) {
			var detail = e.detail;
			this.checkStatus('bold', detail, 'showBold');
			this.checkStatus('italic', detail, 'showItalic');
			this.checkStatus('ins', detail, 'showIns');
			this.checkStatus('header', detail, 'showHeader');
			if (detail.hasOwnProperty('align')) {
				if (detail.align == 'center') {
					this.showCenter = true;
					this.showRight = false;
				} else if (detail.align == 'right') {
					this.showCenter = false;
					this.showRight = true;
				} else {
					this.showCenter = false;
					this.showRight = false;
				}
			} else {
				this.showCenter = false;
				this.showRight = false;
			}
		},
		async editFocus() {
			
		},
		editBlur() {
			
		},
		release(isPublic) {
			this.editorCtx.getContents({
				success: res => {
					Object.assign(res, {
						isPublic: isPublic
					})
					this.$emit('editOk', res);
				} 
			})
		},
	}
};
</script>

<style scoped>
.container {
	padding: 30rpx 0;
	box-sizing: border-box;
	padding-bottom: 120rpx;
}

.ql-container {
	line-height: 160%;
	font-size: 34rpx;
	width: calc(100% - 60rpx); 
	height: auto;
	margin: 0 auto;
} 
.tool-view{
	width: 100vw;
	position: fixed;
	bottom: 0;
	left: 0;
	
}
.tool {
	height: 100rpx;
	display: flex;
	align-items: center;
	justify-content: space-around;
	width: 100%;
	background: #eee;
}

.font-more {
	position: absolute;
	left: 0;
	bottom: 100rpx;
	display: flex;
	align-items: center;
	justify-content: space-around;
	width: 100%;
	background: rgb(235, 235, 235);
	overflow: hidden;
	transition: all 0.15s;
}

.setting-layer {
	position: absolute;
	bottom: 100rpx;
	background: #fff;
	width: 250rpx;
	right: 20rpx;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
	border-radius: 8rpx;
}
.setting-layer .single {
	height: 80rpx;
	font-size: 32rpx;
	padding: 0 30rpx;
	display: flex;
	align-items: center;
	line-height: 80rpx;
	flex-direction: row;
	color: #666;
}
.setting-layer .single .icon {
	margin-right: 20rpx;
}
.setting-layer-mask{
	position: fixed;
	left: 0;
	top: 0;
	width: 100vw;
	height: 100vh;
	background: transparent; 
}
</style>
