export default {
	data() {
		return {
			tags:["标签","标签","标签","标签","标签","标签"],
			classify:[{
				image:"../../../static/images/data.png",
				title:"我的资料",
				num:"已完成",
				color:"#5C93FF",
				color1:"#42A8F7"
			},{
				image:"../../../static/images/article.png",
				title:"我的文章",
				num:"23",
				color:"#FD5F62",
				color1:"#FF928F"
			},{
				image:"../../../static/images/video.png",
				title:"我的视频",
				num:"23",
				color:"#FA8B46",
				color1:"#F09F5B"
			},{
				image:"../../../static/images/liveBroadcast.png",
				title:"我的直播回放",
				num:"23",
				color:"#8B8BEF",
				color1:"#7C9FFF"
			},{
				image:"../../../static/images/answer.png",
				title:"我的回答",
				num:"23",
				color:"#FD5F62",
				color1:"#FF928F"
			}],
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
		// 模块跳转到内页
		toInside(index){
			// index模块跳转，0用户信息，1文章，2视频，3直播回放，4回答
			if(index==0){
				uni.navigateTo({
					url:"/pages/my/user_info/user_info"
				})
			}else{//跳转到列表页
				uni.navigateTo({
					url:"/pages/my/list_all/list_all?type="+index
				})
			}
		}
	},
	onShow(){

	},
}