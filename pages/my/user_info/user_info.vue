<template>
	<view class="user_info">
		<u-navbar title="编辑个人资料"><view class="slot-wrap" slot="right" @click="editInfo()">{{nowEdit?'保存':'编辑'}}</view></u-navbar>
		<!-- 用户头像，昵称和简介 -->
		<view class="top_info" v-if="!nowEdit">
			<u-cell-item class="cell_item" title="头像" :arrow="false" hover-class="none" :title-style="titleStyle">
				<u-avatar slot="right-icon" :src="userInfo.avatar" size="80"></u-avatar>
			</u-cell-item>
			<u-cell-item class="cell_item" title="昵称" :value="userInfo.userName" :arrow="false" hover-class="none" :title-style="titleStyle" :value-style="valueStyle"></u-cell-item>
			<u-cell-item class="cell_item" title="我的简介" :value="userInfo.introduce" :arrow="false" hover-class="none" :border-bottom="false" :title-style="titleStyle" :value-style="valueStyle"></u-cell-item>
		</view>
		<!-- 编辑状态下的头像，昵称和简介 -->
		<view class="top_info" v-else>
			<u-cell-item class="cell_item" title="头像" :arrow="false" hover-class="none" :title-style="titleStyle">
				<u-avatar slot="right-icon" :src="userInfo.avatar" size="80"></u-avatar>
			</u-cell-item>
			<u-cell-item class="cell_item" title="昵称" :arrow="false" hover-class="none" :title-style="titleStyle">
				<input slot="right-icon" type="text" v-model="userInfo.userName" placeholder="请输入昵称" class="right_input"/>
			</u-cell-item>
			<u-cell-item class="cell_item" title="我的简介" :arrow="false" hover-class="none" :border-bottom="false" :title-style="titleStyle">
				<input slot="right-icon" type="text" v-model="userInfo.introduce" placeholder="请输入个人简介" class="right_input"/>
			</u-cell-item>
		</view>
		<!-- 用户其它信息 -->
		<view class="bottom_info">
			<u-cell-item class="cell_item" title="标签" hover-class="none" :border-bottom="userInfo.tags.length==0?true:false" :title-style="titleStyle" @click="toAddInfo(0)"></u-cell-item>
			<view class="all_tags" v-if="userInfo.tags.length!=0">
				<view class="one_tag" v-for="(item,index) in userInfo.tags">{{item}}</view>
			</view>
			<u-cell-item class="cell_item" title="身份证" :value="userInfo.userId?'已完善':'!未完善'" hover-class="none" :title-style="titleStyle" :value-style="userInfo.userId?isPerfect:noPerfect" @click="toAddInfo(1)"></u-cell-item>
			<u-cell-item class="cell_item" title="工作证明" :value="userInfo.workId?'已完善':'!未完善'" hover-class="none" :title-style="titleStyle" :value-style="userInfo.workId?isPerfect:noPerfect" @click="toAddInfo(2)"></u-cell-item>
			<u-cell-item class="cell_item" title="个人资质" :value="userInfo.qualifications?'已完善':'!未完善'" hover-class="none" :border-bottom="false" :title-style="titleStyle" :value-style="userInfo.qualifications?isPerfect:noPerfect"></u-cell-item>
		</view>
	</view>
</template>

<script>
	import userInfo from "./user_info.js";
	export default userInfo;
</script>
<style>
	page{background-color: #F4F4F4;}
</style>
<style scoped lang="scss">
	@import './user_info.scss';
</style>
