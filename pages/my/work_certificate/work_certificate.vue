<template>
	<view class="work_certificate">
		<u-navbar title="工作证明"></u-navbar>
		<!-- 上传工作证 -->
		<view class="work_image">
			<view class="work_text_title">请拍摄并上传你的工作证明照片</view>
			<view class="work_image_outer">
				<view class="work_one_image">
					<image src="../../../static/images/work.png" mode="widthFix"></image>
					<view class="bottom_work_text">工作证</view>
				</view>
			</view>
		</view>
		<!-- 拍摄要求 -->
		<view class="requirement">
			<view class="requirement_title">拍摄工作证明要求：</view>
			<view class="requirement_desc_one">工作名片、在职证明等相关的证明即可；</view>
			<view class="requirement_desc_two">拍摄时确保证明<text>内容完整，字体清晰，亮度均匀；</text></view>
			<image src="../../../static/images/work_examples.png" mode="widthFix"></image>
		</view>
		<button type="default" class="btn_bottom" @click="toUserInfo()">提交</button>
	</view>
</template>

<script>
	import work_certificate from "./work_certificate.js";
	export default work_certificate;
</script>
<style>
	page{background-color: #F4F4F4;}
</style>
<style scoped lang="scss">
	@import './work_certificate.scss';
</style>
