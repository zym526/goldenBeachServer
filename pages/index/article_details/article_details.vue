<template>
	<view class="article_details" style="background: url(../../../static/images/other.jpg) no-repeat center top;">
		<u-navbar title=" " :border-bottom="false" back-icon-color="#FFFFFF" back-icon-size="38" :background="background">
			<view class="slot-wrap" slot="right" @click="popupDetele=true">
				<view class="icon iconfont icon-gengduo"></view> 
			</view>
		</u-navbar>
		<view class="special_column">
			<view class="icon iconfont icon-zhuanlan1"></view>
			<view class="special_column_text">金沙滩专栏</view>
		</view>
		<view class="special_column_title">小额贷</view>
		<!-- 文章 -->
		<view class="article" style="">
			<view class="article_title">标题标题</view>
			<view class="tag_all">
				<view class="tag">标签</view>
			</view>
			<view class="author">
				<view class="author_time">
					<text>名字</text>
					<text>时间</text>
				</view>
				<view class="author_name">作者因上传连接无法显示</view>
			</view>
			<view class="article_content">
				<!-- 音频 -->
				<view class="audio_outer" v-if="false">
					<view class="audio_play_left" :style="nowIsPlay?'color:#003399':''">
						<view class="audio_play_image" @click="audioPlay()">
							<image :src="nowIsPlay?'../../../static/images/videpGif.gif':'../../../static/images/play.png'" mode="widthFix"></image>
						</view>
						<view class="now_is_play">{{nowIsPlay?'正在朗读':'暂停朗读'}}</view>
					</view>
					<view class="audio_end" :style="nowIsPlay?'color:#003399':''">{{overTimer}}</view>
				</view>
				<!-- 文章内容 -->
				<view class="content_outer">
					<!-- <u-parse :html="article"></u-parse> -->
				</view>
				<!-- 浏览收藏等 -->
				<view class="look_like">1500浏览/233收藏</view>
			</view>
		</view>
		<!-- 删除下弹窗 -->
		<u-popup v-model="popupDetele" mode="bottom" border-radius="20" class="outer_popup">
			<view class="delete_text" @click="modalShow=true,popupDetele=false">删除</view>
			<view class="cancel_text" @click="popupDetele=false">取消</view>
		</u-popup>
		<!-- 确定删除 -->
		<u-modal v-model="modalShow" content="您确定要删除吗？" :show-title="false" :show-cancel-button="true" confirm-color="#003399" border-radius="20" :content-style="contentStyle" @confirm="deleteYes()"></u-modal>
	</view>
</template>

<script>
	import article_details from "./article_details.js";
	export default article_details;
</script>
<style>
	page{background-color: #F3F3F3;}
</style>
<style scoped lang="scss">
	@import './article_details.scss';
</style>
