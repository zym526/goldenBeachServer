export default {
	data() {
		return {
			type:1,//类型，1文章，2视频，3回放，4回答
			title:"我的文章",//顶部文字
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
	},
	onShow(){

	},
	onLoad(options){
		this.type=options.type
		if(this.type==1){
			this.title="我的文章"
		}else if(this.type==2){
			this.title="我的视频"
		}else if(this.type==3){
			this.title="我的直播回放"
		}else{
			this.title="我的回答"
		}
	}
}