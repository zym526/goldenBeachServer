<template>
	<view class="success_page">
		<u-navbar title="发布成功"></u-navbar>
		<view class="success_outer">
			<view class="icon iconfont icon-tongyi"></view>
			<view class="success_text">您的问题已经发布成功！</view>
		</view>
		<button type="default" @click="toIndex()">返回</button>
	</view>
</template>

<script>
	import successPage from "./successPage.js";
	export default successPage;
</script>

<style scoped lang="scss">
	@import './successPage.scss';
</style>