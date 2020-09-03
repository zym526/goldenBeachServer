<template>
	<view class="fans">
		<u-navbar title="我的粉丝"></u-navbar>
		<view class="outer_fans" v-if="fans.length!=0">
			<u-cell-item :title="item.fansName" :arrow="false" hover-class="none" class="outer_item" :title-style="titleStyle" v-for="(item,index) in fans">
				<u-avatar :src="item.image" slot="icon" size="80"></u-avatar>
			</u-cell-item>
		</view>
		<view class="no_data" v-else>
			<noData :text="text"></noData>
		</view>
	</view>
</template>

<script>
	import fans from "./fans.js";
	export default fans;
</script>
<style scoped lang="scss">
	@import './fans.scss';
</style>
