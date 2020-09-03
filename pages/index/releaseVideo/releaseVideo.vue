<template>
	<view class="release_video">
		<u-navbar title="发布视频"></u-navbar>
		<!-- 问题 -->
		<textarea v-model="areaValueTitle" placeholder="请输入标题" class="text_area_title"/>
		<!-- 添加视频 -->
		<view class="add_video">
			<video src="" controls></video>
			<view class="bottom_editor">
				<view class="left_editor_text">
					<view class="icon iconfont icon-jiahao1"></view>
					<view class="add_text">添加视频</view>
				</view>
				<view class="right_editor_text no_video">
					<view class="icon iconfont icon-shanchu"></view>
					<view class="delete_text">删除视频</view>
				</view>
			</view>
		</view>
		<!-- 专栏 -->
		<view class="release_special_column">
			<view class="special_column" @click="pickerShow=true">
				<view class="special_column_left">专栏</view>
				<view class="special_column_right">{{specialColumn}}<view class="icon iconfont icon-iconfontjiantou5"></view></view>
			</view>
			<button type="default" @click="release()">发布</button>
		</view>
		<!-- 专栏选择器 -->
		<u-picker mode="selector" v-model="pickerShow"  :default-selector="[0]" :range="selectorObj" range-key="cateName" confirm-color="#003399" title="选择专栏" @confirm="choice"></u-picker>
	</view>
</template>

<script>
	import releaseVideo from "./releaseVideo.js";
	export default releaseVideo;
</script>
<style>
	page{background-color: #F3F3F3;}
</style>
<style scoped lang="scss">
	@import './releaseVideo.scss';
</style>
