<template>
	<view class="list_all">
		<u-navbar :title="title"></u-navbar>
		<threeClasses :threeClasses="threeClasses"></threeClasses>
	</view>
</template>

<script>
	import list_all from "./list_all.js";
	export default list_all;
</script>
<style>
	page{background-color: #F4F4F4;}
</style>
<style scoped lang="scss">
	@import './list_all.scss';
</style>
