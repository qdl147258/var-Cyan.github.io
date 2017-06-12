<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style  lang="less">
	@rem:40rem;
	html,body{
		height:100%;
	}
	#app{
		height: 100%;
		.iconfont{
			font-size:56/@rem;
			color:#fff;
		}
	}
</style>
