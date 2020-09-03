<template>
	<view class="video_details">
		<!-- 顶部状态栏 -->
		<view class="status_bar" :style='"height:"+statusBarHeight+"px;"'></view>
		<!-- 视频 -->
		<view class="video_playback_outer">
			<video src="http://video.pearvideo.com/mp4/third/20190118/cont-1507692-10736549-162158-hd.mp4" controls autoplay="true" object-fit="contain">
				<cover-image src="../../../static/images/left_arrow.png" mode="widthFix" class="left_back"></cover-image>
				<cover-image src="../../../static/images/more.png" mode="widthFix" class="right_more" @click="popupDetele=true"></cover-image>
			</video>
		</view>
		<!-- 简介 -->
		<view class="introduce_info">
			<view class="introduce_text">简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介</view>
			<view class="introduce_bottom">
				<view class="left_tags">
					<view class="one_tag" v-for="(item,index) in tags">{{item}}</view>
				</view>
				<view class="right_look_time">观看666 • 1天前</view>
			</view>
		</view>
		<!-- 未解答的问题 -->
		<view class="unanswered">
			<view class="icon iconfont icon-gantanhao"></view>
			<text>未解答的问题</text>
		</view>
		<threeClasses :threeClasses="threeClasses"></threeClasses>
		
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
	import video_details from "./video_details.js";
	export default video_details;
</script>
<style>
	page{background-color: #F3F3F3;}
</style>
<style scoped lang="scss">
	@import './video_details.scss';
</style>
