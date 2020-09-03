<template>
	<view class="user_id">
		<u-navbar title="身份证"></u-navbar>
		<!-- 上传身份证 -->
		<view class="id_image">
			<view class="id_text_title">请拍摄并上传你的身份证照片</view>
			<view class="image_outer">
				<view class="id_image_left">
					<image src="../../../static/images/positive.png" mode="widthFix"></image>
					<view class="bottom_id_text">拍摄正面</view>
				</view>
				<view class="id_image_right">
					<image src="../../../static/images/back.png" mode="widthFix"></image>
					<view class="bottom_id_text">拍摄反面</view>
				</view>
			</view>
		</view>
		<!-- 拍摄要求 -->
		<view class="requirement">
			<view class="requirement_title">拍摄身份证要求：</view>
			<view class="requirement_desc_one">大陆公民持有的本人有效二代身份证；</view>
			<view class="requirement_desc_two">拍摄时确保身份证<text>边框完整，字体清晰，亮度均匀；</text></view>
			<image src="../../../static/images/examples.png" mode="widthFix"></image>
		</view>
		<button type="default" class="btn_bottom" @click="toUserInfo()">提交</button>
	</view>
</template>

<script>
	import user_id from "./user_id.js";
	export default user_id;
</script>
<style>
	page{background-color: #F4F4F4;}
</style>
<style scoped lang="scss">
	@import './user_id.scss';
</style>

