<template>
	<view class="index">
		<u-navbar title="首页" :is-back="false" z-index="1"></u-navbar>
		<!-- 顶部 -->
		<view class="top_bg">
			<view class="one_text">欢迎回来，某个人!</view>
			<view class="two_text">您一共回答了388个问题</view>
			<image src="/static/images/indexTopBg.png" mode="widthFix"></image>
		</view>
		<!-- 导航 -->
		<u-grid :col="3" class="grid_outer" :border="false" hover-class="none" @click="click">
			<u-grid-item v-for="(item, index) in navigation" :index="index" :key="index">
				<view :class="'icon iconfont '+item.icon" :style="'background-color: '+item.color"></view>
				<view class="grid-text">{{item.text}}</view>
			</u-grid-item>
		</u-grid>
		<!-- 未解答的问题 -->
		<view class="unanswered">
			<view class="icon iconfont icon-gantanhao"></view>
			<text>未解答的问题</text>
		</view>
		<threeClasses :threeClasses="threeClasses"></threeClasses>
		<!-- 暂无未解答问题 -->
		<noData :text="text" v-if="false"></noData>
	</view>
</template>
<script>
	import index from "./index.js";
	export default index;
</script>
<style>
	page{background-color: #F3F3F3;}
</style>
<style scoped lang="scss">
	@import './index.scss';
</style>
