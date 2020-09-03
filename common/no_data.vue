<template>
	<view class="no_data">
		<image src="../static/images/no_data.png" mode="widthFix"></image>
		<view class="no_data_text">{{text}}</view>
	</view>
</template>

<script>
	export default {
		name:"no_data",
		props:{
			text:{
				type:String
			}
		},
		data(){
			return {
			}
		},
		methods:{
			
		}
	}
</script>

<style scoped lang="scss">
	.no_data{
		text-align: center;
		image{
			width: 232rpx;
			height: auto;
		}
		.no_data_text{
			font-size: 26rpx;
			color: #999999;
			margin-top: 19rpx;
		}
	}
</style>
