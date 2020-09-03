<script>
	export default {
		onLaunch: function() {
			// 获取状态栏高度
			this.$store.dispatch('changeStatusBarHeight',uni.getSystemInfoSync().statusBarHeight)
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	@import "uview-ui/index.scss";
	@import "/static/font/iconfont.scss";
</style>
