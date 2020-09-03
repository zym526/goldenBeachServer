<template>
	<view class="five_index">
		<view class="one_info" v-for="(item,index) in threeClasses" @click="toDetail(item)">
			<view :class="item.image?'left_info':'left_info no_image'">
				<view class="one_text_title">{{item.title}}</view>
				<view class="two_text_content">{{item.desc}}</view>
				<view class="three_text_bottom">
					<view class="user_or_classes">
						<text class="user">{{item.user}}</text><text>{{item.time}}更新</text>
					</view>
					<view class="look_or_like">
						<view class="look"><text>{{item.look}}</text>{{item.type==3?"回放":"浏览"}}</view>
						<view class="like" v-if="item.type!=3"><text>•{{item.like}}</text>{{item.type==0?'关注':'收藏'}}</view>
					</view>
				</view>
			</view>
			<u-image :src="item.image" width="168rpx" height="168rpx" :lazy-load="true" mode="aspectFill" border-radius="10rpx" v-if="item.image"></u-image>
		</view>
	</view>
</template>

<script>
export default {
		name:"five_index",
		props:{
			threeClasses:{
				type:Array,
			}
		},
		data(){
			return {
			}
		},
		methods:{
			toDetail(item){
				//0问题，1文章，2视频，3回放
				if(item.type==0){
					uni.navigateTo({
						url:"/pages/index/question_and_answer/question_and_answer"
					})
				}else if(item.type==1){//文章详情
					uni.navigateTo({
						url:"/pages/index/article_details/article_details"
					})
				}else if(item.type==2||item.type==3){
					uni.navigateTo({
						url:"/pages/index/video_details/video_details"
					})
				}
			}
		}
	}
</script>

<style scoped lang="scss">
	.five_index{
		.one_info{
			display: flex;
			justify-content: space-between;
			align-items: center;
			background-color: #FFFFFF;
			padding: 20rpx 26rpx;
			margin-bottom: 20rpx;
			.left_info{
				width: calc(100% - 188rpx);
				height: 168rpx;
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				.one_text_title{
					font-size: 30rpx;
					color: #232323;
					overflow: hidden;
					text-overflow:ellipsis;
					white-space: nowrap;
				}
				.two_text_content{
					font-size: 22rpx;
					color: #666666;
					text-overflow: -o-ellipsis-lastline;
					overflow: hidden;
					text-overflow: ellipsis;
					display: -webkit-box;
					-webkit-line-clamp: 2;
					line-clamp: 2;
					-webkit-box-orient: vertical;
				}
				.three_text_bottom{
					display: flex;
					justify-content: space-between;
					align-items: center;
					.user_or_classes{
						font-size: 22rpx;
						color: #999999;
						.user{
							padding-right: 10rpx;
							margin-right: 10rpx;
							position: relative;
							&::before{
								content: "";
								width: 2rpx;
								height: 22rpx;
								background-color: #999999;
								position: absolute;
								right: 0rpx;
								top: 50%;
								transform: translateY(-50%);
							}
						}
					}
					.look_or_like{
						display: flex;
						font-size: 22rpx;
						color: #999999;
						text{
							color: #232323;
						}
					}
				}
			}
			.no_image{
				width: 100%;
			}
		}
	}
</style>
