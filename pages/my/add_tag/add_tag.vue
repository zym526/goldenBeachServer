<template>
	<view class="add_tag">
		<u-navbar title="添加标签"></u-navbar>
		<!-- 标签选择 -->
		<view class="tag_outer">
			<u-checkbox-group @change="checkboxGroupChange" :wrap="true" class="checkbox_group">
				<u-checkbox 
					v-model="item.checked" 
					v-for="(item, index) in list" :key="index" 
					:name="item.name"
					shape="circle"
					active-color="#003399"
					label-size="32"
					size="32"
					class="one_checkbox"
				>{{item.name}}</u-checkbox>
			</u-checkbox-group>
		</view>
		<button class="add_btn" @click="toUserInfo()">确认添加</button>
	</view>
</template>

<script>
	import add_tag from "./add_tag.js";
	export default add_tag;
</script>
<style>
	page{background-color: #F4F4F4;}
</style>
<style scoped lang="scss">
	@import './add_tag.scss';
</style>
