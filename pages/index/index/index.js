export default {
	data() {
		return {
			navigation:[
				{
					icon:"icon-tianxie",
					color:"#663399",
					text:"发布文章"
				},{
					icon:"icon-kaishi",
					color:"#FFCC66",
					text:"发布视频"
				},{
					icon:"icon-zhibo",
					color:"#FF6584",
					text:"发起直播"
				},
			],
			text:"暂无未解答问题",
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
			]
		}
	},
	computed: {
	},
	methods: {
		click(index) {
			// index:0发布文章，1发布视频，2发起直播
			if(index==0){
				uni.navigateTo({
					url:"/pages/index/publishArticles/publishArticles"
				})
			}else if(index==1){
				uni.navigateTo({
					url:"/pages/index/releaseVideo/releaseVideo"
				})
			}else{
				this.$util.tips({title:"暂未开放"})
			}
		},
	},
	onShow(){

	},
}