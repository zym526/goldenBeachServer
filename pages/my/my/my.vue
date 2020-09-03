<template>
	<view class="my">
		<!-- 顶部个人信息 -->
		<view class="my_all_info">
			<!-- 信息 -->
			<navigator class="my_info" url="../user_info/user_info">
				<view class="left_image_text">
					<u-avatar src="http://pic2.sc.chinaz.com/Files/pic/pic9/202002/hpic2119_s.jpg" size="128" class="user_image"></u-avatar>
					<view class="left_text">
						<view class="user_text">用户昵称</view>
						<view class="user_position">
							<text class="position_left">职位</text><text class="position_right">任职机构</text>
						</view>
					</view>
				</view>
				<view class="icon iconfont icon-iconfontjiantou5"></view>
			</navigator>
			<!-- 简介 -->
			<view class="brief_introduction">个人简介个人简介个人简介个人简介个人简介个人简介个人简介个人简介个人简介个人简介个人简介个人简介</view>
			<!-- 标签 -->
			<view class="all_tags">
				<view class="one_tag" v-for="(item,index) in tags">{{item}}</view>
			</view>
			<!-- 发布量和粉丝量 -->
			<view class="release_fans">
				<view class="release_left">
					<view class="release_num">26</view>
					<view class="release_text">总发布</view>
				</view>
				<navigator class="fans_left" url="../fans/fans">
					<view class="fans_num">26</view>
					<view class="fans_text">粉丝量</view>
				</navigator>
			</view>
		</view>
		<!-- 分类 -->
		<view class="classify_all">
			<view class="one_classify_grid" v-for="(item,index) in classify" @click="toInside(index)">
				<view class="left_image" :style="'background: linear-gradient(to bottom, '+item.color+' 0%,'+item.color1+' 100%);'">
					<image :src="item.image" mode="widthFix"></image>
				</view>
				<view class="right_text">
					<view class="one_text">{{item.title}}</view>
					<view class="two_text">{{item.num=='已完成'?item.num:'总数量为'+item.num}}</view>
				</view>
			</view>
		</view>
		<!-- 与我回答相关的问题 -->
		<view class="unanswered">
			<view class="icon iconfont icon-xiangguan"></view>
			<text>与我回答相关的问题</text>
		</view>
		<threeClasses :threeClasses="threeClasses"></threeClasses>
	</view>
</template>

<script>
	import my from "./my.js";
	export default my;
</script>
<style>
	page{background-color: #F4F4F4;}
</style>
<style scoped lang="scss">
	@import './my.scss';
</style>
