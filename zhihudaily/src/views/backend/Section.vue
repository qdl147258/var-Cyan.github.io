<template>
	<!--  帖子列表  -->
	<div id="main">
		<div id="content">	
			<div id="list" :class="{'night-style':nightStyle}">
		        <router-link
			        class="media-item"  
			        v-for="item,index in list.stories" 
			        :to="`/detail/${item.id}`"
			        tag="div"
			        :key="index"
		        >
			        <div class="item-body">
			           {{item.title}}
			        </div>
			        <div class="item-pic">
			            <img :src="item.images" alt="" height="100%" width="100%"/>
			        </div>
		        </router-link>	
		    </div>
		</div>
	</div>    
</template>

<script>
	import Bscroll from 'better-scroll'

	export default{
		data(){
			return {
				list:{},
				scroll:null
			}
		},
		mounted(){
			this.$http.get(`/api/4/section/${this.$route.params.id}`).then((d)=>{
		        this.list = d.data 
				this.$nextTick(function(){
		           this.scroll.refresh()
		        })		         	            
	        })	

			this.$nextTick( ()=>{
				let main = document.getElementById("main")	
				this.scroll = new Bscroll(main,{
			        startX: 0,
			        startY: 0,
			        bounce:false,
			        momentum:true,
			        probeType: 3,
			        click: true
			    })					    				
			})				
		},		
		computed:{
			nightStyle(){
				return this.$store.state.nightStyle
			}
		}
	}
</script>

<style lang="less" scoped>
	@rem:40rem;
	
	#main{
		position: fixed;
	    left: 0;
	    top: 0;
	    right: 0;
	    bottom:0;		
	}	
	#list.night-style{
		color:#f3f3f3;	
		background-color:#343434 !important;

		.media-item{
			background-color:#404040 !important;
		}
	}	
	#list{
		padding:188/@rem 30/@rem 0 30/@rem;
		background-color:#f3f3f3;
			
		.media-item{
			display: flex;
			height: 300/@rem;
			box-sizing: border-box;
			padding:42/@rem 52/@rem;
			border-radius: 10/@rem;
			margin-bottom: 42/@rem;
			background-color:#fff;

			.item-body{
				flex:1;
				font-size: 52/@rem;
				line-height:64/@rem;
				box-sizing:border-box;
				padding-right: 10/@rem;
			}
			.item-pic{
				width:248/@rem;
				height:216/@rem;
			}
		}
	}
</style>