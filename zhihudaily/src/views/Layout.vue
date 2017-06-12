<template>
	<section>
		<custom-header :name="name"/>
		<transition name="slide">
			<router-view></router-view>
		</transition>
		<!-- 侧边栏主题列表 -->
		<slide-menu></slide-menu>	
	</section>
</template>

<script>
	import Header from '../components/Header.vue'
	import SlideMenu from '../components/SideMenu.vue'

	export default{
		components:{
			'custom-header':Header,
			SlideMenu
		},
		data(){
			return{
				name:''
			}
		},
		mounted(){
			this.name = this.$route.name
		},
		updated(){
			this.name = this.$route.name
		}			
	}
</script>

<style lang="less" scoped>
	@rem:40rem;
	section{
		height:100%;

		.slide-enter-active, .slide-leave-active {
		  transition: all .3s
		}
		.slide-enter, .slide-leave-active {
		  transform: translateX(-100%)
		}		
	}	
</style>