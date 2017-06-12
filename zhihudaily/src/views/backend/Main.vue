<template>
	<div id="main">
		<div id="content">
			<custom-carousel :topStories="topStories" />
			<custom-list :data="data" />
			<custom-Loading v-show="isLoading"/>
		</div>		
	</div>
</template>

<script>
	import Carousel from '@/views/backend/Carousel'
	import List from '@/views/backend/List'
	import Loading from '@/components/Loading'
	import { Popup } from 'mint-ui'

	import Bscroll from 'better-scroll'

	export default{
		components:{
			'custom-carousel':Carousel,
			'custom-list':List,
			'custom-Loading':Loading
		},
		data(){
			return {
				data:[],
				topStories:[],
				date:'',
				isLoading:false
			}
		},
		mounted(){
			let scroll = null
 			this.$http.get('/api/4/news/latest').then((d)=>{
 				this.topStories = d.data.top_stories
		        this.data.push(d.data)
		        this.date = d.data.date

				this.$nextTick(function(){
		           scroll.refresh()
		        })		        
	        })		

			this.$nextTick( ()=>{
				let main = document.getElementById("main")	
				let content = document.getElementById("content")

				scroll = new Bscroll(main,{
			        startX: 0,
			        startY: 0,
			        probeType: 3, // 事件完毕后触发
			        click: true,
			        momentum: true, // 惯性拖动
			        bounce: false, // 弹动效果
			        deceleration: 0.003, // 滚动动量减速,越大越快
			        HWCompositing: true // 硬件加速
			    })						
				
				let status = true
				scroll.on("scroll",(pos) => {
					// 下拉刷新
					if(pos.y >= 0 && status){
						status = false
						this.isLoading = true
						this.$http.get('/api/4/news/latest').then( (d) => {
			 				this.topStories = d.data.top_stories
					        this.data = [d.data]
					        this.date = d.data.date

							this.$nextTick( () => {
					           scroll.refresh()
					           status = true
					           this.isLoading = false
					        })		        
				        })						
					}
					// 上拉加载
			        if(pos.y < 0){			          
			            let max = content.offsetHeight - main.offsetHeight
			            if( max - (-pos.y) <= 50 && status ){
		                    this.$http.get(`/api/4/news/before/${this.date}`).then((d)=>{
		                    	this.date = d.data.date
		                        this.data.push(d.data)

		                        this.$nextTick(function(){
		                            // 重新计算滚动
		                            scroll.refresh()
		                            status = true
		                        })
		                    })
			                status = false
			            }
			        }
			    })
			})						
		}
	}
</script>

<style lang="less">
	@rem:40rem;
	#main{
		position: fixed;
	    left: 0;
	    top: 0;
	    right: 0;
	    bottom:0;	

	    .spinner{
	    	position:absolute;
	    	left:50%;
	    	top:120/@rem;
	    	transform:translateX(-50%);
	    }	
	}
</style>


