import {mapState} from 'vuex'
export default {
	data() {
		return {
			tags:["标签","最多","三个"],
			threeClasses:[//问题0，文章1，视频2，直播回放3
				{
					title:"问题的标题，你回答问题的标题或未回答问题的标题？",
					desc:"问题的描述，描述的内容可能过长或比较短，如果超出两行的花描述内容省略",
					user:"某个人",
					time:"01/03",
					look:1111,
					like:666,
					image:"https://cdn.uviewui.com/uview/example/fade.jpg",
					type:0
				},{
					title:"问题的标题，你回答问题的标题或未回答问题的标题？",
					desc:"问题的描述，描述的内容可能过长或比较短，如果超出两行的花描述内容省略",
					user:"某个人",
					time:"01/03",
					look:1111,
					like:666,
					image:"https://cdn.uviewui.com/uview/example/fade.jpg",
					type:1
				},{
					title:"问题的标题，你回答问题的标题或未回答问题的标题？",
					desc:"问题的描述，描述的内容可能过长或比较短，如果超出两行的花描述内容省略",
					user:"某个人",
					time:"01/03",
					look:1111,
					like:666,
					type:2
				},{
					title:"问题的标题，你回答问题的标题或未回答问题的标题？",
					desc:"问题的描述，描述的内容可能过长或比较短，如果超出两行的花描述内容省略",
					user:"某个人",
					time:"01/03",
					look:1111,
					like:666,
					type:3
				},{
					title:"问题的标题，你回答问题的标题或未回答问题的标题？",
					desc:"问题的描述，描述的内容可能过长或比较短，如果超出两行的花描述内容省略",
					user:"某个人",
					time:"01/03",
					look:1111,
					like:666,
					image:"https://cdn.uviewui.com/uview/example/fade.jpg",
					type:0
				},
			],
			popupDetele:false,//删除下弹窗
			modalShow:false,//确定删除
			contentStyle:{//删除提示文字样式
				fontSize:"38rpx",
				color:"#232323"
			}
		}
	},
	computed: {
		...mapState(['statusBarHeight']),
	},
	methods: {
		// 删除成功
		deleteYes(){//返回上一页
			uni.navigateBack({
				delta:1
			})
		}
	},
	onShow(){

	},
}