<template>
	<view class="publishArticles">
		<u-navbar title="发布文章"></u-navbar>
		<!-- 问题 -->
		<textarea v-model="areaValueTitle" placeholder="请输入标题" class="text_area_title"/>
		<!-- <jinEdit placeholder="请输入文章的内容..." @editOk="editOk" uploadFileUrl="/#"></jinEdit> -->
		<editor 
			id="editor"
			class="ql-container" 
			:placeholder="placeholder" 
			:show-img-size="true"
			:show-img-toolbar="true"
			:show-img-resize="true"
			@ready="onEditorReady"
		></editor>
		<!-- 插入图片 -->
		<view class="add_image" @click="insertImage">
			<view class="icon iconfont icon-picture_icon"></view>
		</view>
		<!-- 添加标签 -->
		<view class="add_tag" @click="showPopup=true">
			<view class="icon iconfont icon-jiahao1"></view>
			<view class="add_tag_text">添加标签<text>(至少添加一个)</text></view>
		</view>
		<!-- 专栏 -->
		<view class="release_special_column">
			<view class="special_column" @click="pickerShow=true">
				<view class="special_column_left">专栏</view>
				<view class="special_column_right">{{specialColumn}}<view class="icon iconfont icon-iconfontjiantou5"></view></view>
			</view>
			<button type="default" @click="release()">发布</button>
		</view>
		<!-- 标签弹窗 -->
		<u-popup v-model="showPopup" mode="bottom" border-radius="20" height="600rpx" :mask="false">
			<view class="popup_outer">
				<view class="icon iconfont icon-iconfontjiantou5-copy" @click="showPopup=false"></view>
				<view class="one_info">
					<text class="left_info_text">标签</text>
					<text class="right_info_add">添加</text>
				</view>
			</view>
		</u-popup>
		<!-- 专栏选择器 -->
		<u-picker mode="selector" v-model="pickerShow"  :default-selector="[0]" :range="selectorObj" range-key="cateName" confirm-color="#003399" title="选择专栏" @confirm="choice"></u-picker>
	</view>
</template>

<script>
	import publishArticles from "./publishArticles.js";
	export default publishArticles;
</script>
<style>
	page{background-color: #F3F3F3;}
</style>
<style scoped lang="scss">
	@import './publishArticles.scss';
</style>
