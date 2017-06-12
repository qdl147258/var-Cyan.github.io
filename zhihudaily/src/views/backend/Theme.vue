<template>
	<div id="main">
		<div id="content">	
			<custom-Loading v-show="isLoading"/>
			<div class="top-img">
				<p class="title">{{data.description}}</p>
				<div class="img" :style="{'background-image':`url(${data.image})`}"></div>
				<div class="img-mask"></div>
			</div>
			<div id="list" :class="{'night-style':nightStyle}">
				<div class="editor">
					主编 
					<img 
						v-for="value in data.editors" 
						class="avatar" 
						:src="value.avatar" 
						alt="editor"
					>
				</div>
		        <router-link
			        class="media-item"  
			        v-for="item,index in data.stories" 
			        :to="{name:'Detail',params:{id:item.id}}"
			        tag="div"
			        :key="index"
		        >
			        <div class="item-body">
			           {{item.title}}
			        </div>
			        <div class="item-pic" v-if="item.images">
			            <img :src="item.images" alt="" height="100%" width="100%"/>
			        </div>
		        </router-link>	
		    </div>
		</div>		
	</div>    
</template>

<script>
	import Bscroll from 'better-scroll'
	import Loading from '@/components/Loading'

	export default{
		components:{
			'custom-Loading':Loading
		},
		data(){
			return {
				data:{},
				scroll:null,
				isLoading:false,
				id:0
			}
		},
		beforeRouteUpdate (to,from,next){
	        next()
			this.$http.get(`/api/4/theme/${this.id}`).then((d)=>{
		        this.data = d.data 	        	            
	        })	          
	    },
	    watch:{
	    	data(){
	           this.$nextTick( () =>{
		           this.scroll.refresh()
		        })   		
	    	}
	    },	
		mounted(){
			this.id = this.$route.params.id
			this.$http.get(`/api/4/theme/${this.id}`).then((d)=>{
		        this.data = d.data	       	            
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
			
				let status = true
				this.scroll.on("scroll",(pos) => {
					// 下拉刷新
					if(pos.y === 0 && status){
						status = false
						this.isLoading = true
						this.$http.get(`/api/4/theme/${this.id}`).then((d)=>{
			 				this.data = d.data

							this.$nextTick(function(){
					           this.scroll.refresh()
					           status = true
					           this.isLoading = false
					        })		        
				        })						
					}
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

		.spinner{
	    	position:absolute;
	    	left:50%;
	    	top:120/@rem;
	    	transform:translateX(-50%);
	    	z-index: 10;
	    }	    	
	}	
	.top-img{
		position:relative;
		height:676/@rem;
		padding-top:168/@rem;
		.title {
		    margin: 20/@rem 0;
		    padding:0 40/@rem;
		    bottom: 50/@rem;
		    z-index: 1;
		    position: absolute;
		    color: white;
		    font-size: 56/@rem;
		    line-height:88/@rem;
		}		
        .img{
			position:relative;
	        width:100%; 
	        height:100%;
	        background-repeat: no-repeat;
	        background-position: center;       
	        background-size: cover;		
        }
		.img-mask{
			position:absolute;
			left:0;
			top:0;
			width:100%;
			height:100%;					
			background:-webkit-linear-gradient(top,rgba(0,0,0,0) 0%,rgba(0,0,0,.2) 60%,rgba(0,0,0,.6) 100%); 
		}        
	}
	#list.night-style{
		color:#f3f3f3;	
		background-color:#343434 !important;

		.media-item{
			background-color:#404040 !important;
		}
	}	
	#list{
		padding:0 30/@rem;
		background-color:#f3f3f3;
		
		.editor{
			height:96/@rem;
			padding-top:28/@rem;
			margin-bottom:56/@rem;
			line-height:96/@rem;

			.avatar{
				width:96/@rem;
				height:96/@rem;
				border-radius:50%;
				margin-left: 40/@rem;
				vertical-align: top;
			}
		}
		.media-item{
			display: flex;
			height: auto;
			min-height: 228/@rem;
			box-sizing: border-box;
			padding:40/@rem 52/@rem;
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