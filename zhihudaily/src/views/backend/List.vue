<template>
	<!--  帖子列表  -->
	<div id="list" :class="{'night-style':nightStyle}">
	    <div class="list-item"  v-for="list,index in data" :key="index">
	        <div class="list-title">{{ index === 0 ? '今日热闻' : dateForm(list.date)}}</div>
	        <router-link
		        class="media-item"  
		        v-for="item,index in list.stories" 
		        :to="{name:'Detail',params:{id:item.id}}"
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
</template>

<script>
	import dateForm from '../../assets/js/DateForm.js'

	export default{
		props:['data'],
		methods:{
			dateForm
		},
		computed:{
			// 是否开启夜间模式[Boolean]
			nightStyle(){
				return this.$store.state.nightStyle
			}
		}
	}
</script>

<style lang="less" scoped>
	@rem:40rem;
	
	#list.night-style{
		color:#f3f3f3;	
		background-color:#343434 !important;

		.media-item{
			background-color:#404040 !important;
		}
	}	
	#list{
		padding:42/@rem 30/@rem 0 30/@rem;
		background-color:#f3f3f3;
		
		.list-title{
			padding-left: 18/@rem;
			font-size: 42/@rem;
			line-height: 66/@rem;
			margin-bottom: 60/@rem;
			color:#6b6b6b;
		}
		
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