<template>
	<view class="question_and_answer">
		<u-navbar title=" " :border-bottom="false" back-icon-color="#FFFFFF" back-icon-size="38" :background="background"></u-navbar>
		<view class="special_column">
			<view class="icon iconfont icon-zhuanlan1"></view>
			<view class="special_column_text">金沙滩专栏</view>
		</view>
		<view class="special_column_title">信用卡</view>
		<!-- 问答 -->
		<view class="top_ask">
			<view class="ask">
				<view class="ask_wen">问</view>
				<view class="ask_info">
					<view class="ask_info_top">信用卡不还会坐牢吗？</view>
					<view class="label">
						<view class="one_label">
							<view class="one_label_text">标签</view>
							<view class="one_label_num">456</view>
						</view>
					</view>
					<view :class="openCollect?'ask_info_inside_all':'ask_info_inside'">描述信息描述</view>
					<view class="ask_info_open_outer">
						<view class="ask_info_open" @click="openCollect=!openCollect">
							<view class="ask_info_open_text">{{openCollect?'收起描述':'展开描述'}}</view>
							<view class="icon jinshatan">{{openCollect?'&#xe632;':'&#xe633;'}}</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<!-- 答案 -->
		<view class="all_answer">
			<view class="ask_only">
				<view class="ask_only_top">
					<u-avatar src="" mode="circle" size="70"></u-avatar>
					<view class="ask_only_top_left_right">
						<view class="ask_only_top_name">姓名</view>
						<view class="ask_only_top_qita">
							<view class="ask_only_top_qita_one">
								<view class="icon jinshatan">&#xe641;</view>
								<view class="ask_only_top_qita_one_text">地址</view>
							</view>
							<!-- <view class="ask_only_top_qita_two">{{item.adviser}}</view>
							<view class="ask_only_top_qita_three">{{item.bank}}</view> -->
						</view>
					</view>
				</view>
				<view class="ask_only_info">按照法律规定：“恶意透支”是指持卡人以非法占有为目的，超过规定限额或者规定期限透支，经发卡银行两次有效催收后超过三个月仍不归还的行为。而数额在五万元以上不满五十万元的，应当认定为“数额较大”；数额在五十万元以上不满五百万 元的，应当认定为 “数额巨大”；数额在五百万元以上的，对于信用卡账单拖欠不还的人来说，央行征信上一定会留下严重的污点。</view>
				<view class="ask_only_number_comments">
					<view class="ask_only_number_comments_left">111人认为有用 / 88点赞</view>
					<view class="ask_only_number_comments_right">20/02/02更新</view>
				</view>
			</view>
		</view>
		<view class="i_want_answer" @click="showPopup=true">我要回答</view>
		
		<!-- 回答弹窗 -->
		<u-popup v-model="showPopup" mode="bottom" border-radius="20" height="1200rpx">
			<view class="outer_oopup">
				<view class="cancel_determine">
					<view class="cancel" @click="showPopup=false">取消</view>
					<view class="determine" @click="showPopup=false">确定</view>
				</view>
				<view class="title_question">信用卡不还会咋样？</view>
				<view class="line_center"></view>
				<textarea class="text_area" placeholder="请填写回答的内容" maxlength="5000" :auto-height="true"></textarea>
			</view>
		</u-popup>
	</view>
</template>

<script>
	import question_and_answer from "./question_and_answer.js";
	export default question_and_answer;
</script>
<style>
	page{background-color: #F3F3F3;}
</style>
<style scoped lang="scss">
	@import './question_and_answer.scss';
</style>
