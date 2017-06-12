<template>
	<div id="wrapper">
		<div id="detail">
		    <div class="detail-header" v-if="data.image">
		      <div class="img-wrap">
		        <p class="detail-title">{{data.title}}</p>
		        <span class="img-source">{{data.image_source}}</span>
		        <div 
			        :style="{'background-image':`url(${data.image})`}" 
			        class="top-img">
		        </div>
		        <div class="img-mask"></div>
		      </div>
		    </div>
		    <div class="article" :class="{'night-style':nightStyle}" v-html="data.body">
		    </div>
		    <div 
			    class="from" 
			    v-if="data.section"
			    @click="gotoSection(data.section.id,data.section.name)" 
		    >
		    	<img :src="data.section.thumbnail" alt="">
		    	<div class="from-body">本文来自: {{data.section.name}}.合集 <span></span></div>
		    </div>
		</div>		
	</div>
</template>

<script>
	import Bscroll from 'better-scroll'

	export default{
		data(){
			return {
				data:{},
				dataId:'',
				scroll:null
			}
		},
		watch: {
			data(){
				this.$nextTick( () =>{
		           this.scroll.refresh()
		        })
		        setTimeout( () =>{
		        	this.scroll.refresh()
		        },500)
				setTimeout( () =>{
		        	this.scroll.refresh()
		        },1000)	
				setTimeout( () =>{
		        	this.scroll.refresh()
		        },2000)		        	        				
			}
		},
		mounted(){
			this.$http.get(`/api/4/news/${this.$route.params.id}`).then((d)=>{
		        this.data = d.data  	          
	        })	
			this.$http.get(`/api/4/story-extra/${this.$route.params.id}`).then((d)=>{
		        this.$store.commit('getExtraInfo',d.data)          
	        })	

			this.$store.commit('getDetailId',this.$route.params.id)	                   

			this.$nextTick( ()=>{
				let wrapper = document.getElementById("wrapper")	
				this.scroll = new Bscroll(wrapper,{
			        startX: 0,
			        startY: 0,
			        bounce: false,
			        momentum: true,
			        probeType: 3,
			        click: true
			    })		

				let head = document.getElementById('head')
				let h = document.getElementById('head').offsetHeight
				this.scroll.on("scroll",(pos) => {
					head.style.opacity = `${(pos.y + h) / h}`
					if(head.style.opacity < 0 ){
						head.style.opacity = 0
					}
				})			    				
			})				
		},
		beforeRouteLeave(to,from,next){
			let head = document.getElementById('head')
			head.style.opacity = 1
			next()
		},
		computed:{
			nightStyle(){
				return this.$store.state.nightStyle
			}
		},
		methods:{
			gotoSection(id,title){
	    		this.$store.commit('changeTitle',title)
	    		this.$router.push( { name:'Section',params:{id:id} } )
	    	}			
		}			
	}
</script>

<style  lang="less">
	@rem:40rem;
	#wrapper{
		position: fixed;
	    left: 0;
	    top: 0;
	    right: 0;
	    bottom:0;		
	}	
	#detail{
		padding-top: 168/@rem;

		.detail-header{
			height: 610/@rem; 

			.img-wrap{
				position: relative;
    			overflow: hidden;	
    			width:100%;
    			height:100%;
				 			
				.detail-title {
				    margin: 20/@rem 0;
				    padding:0 40/@rem;
				    bottom: 50/@rem;
				    z-index: 1;
				    position: absolute;
				    color: white;
				    font-size: 62/@rem;
				    line-height:88/@rem;
				}
				.img-source {
				    position: absolute;
				    bottom: 10/@rem;
				    z-index: 1;
				    font-size: 36/@rem;
				    color: rgba(255,255,255,.8);
				    right: 40/@rem;
				}		
				.top-img{
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
		}
		
		.article.night-style{
			color:#f2f2f2;
			background-color:#444;
			.question-title{
				color:#fff !important;
			}
		}
		.article{
			padding: 60/@rem;
			font-size: 50/@rem;
			line-height: 74/@rem;
			
			.question{
				.question-title{
					font-size:54/@rem;
					color:#000;
					font-weight: bold;
					margin-bottom: 30/@rem;
				}
			}
			.answer{
				margin-bottom: 50/@rem;
				.meta{
					margin-bottom: 30/@rem;

					.avatar{
						width:62/@rem;
						height:62/@rem;
						margin-right: 30/@rem;
					}
					.author{
						font-size:50/@rem;
						font-weight: bold;
					}
					.bio{
						color:#666;
					}
				}
				.content{
					p{	
						margin-bottom: 30/@rem;
						.content-image{
							width: 100%;
						}
						a{
							color:#1f5496;
						}
					}
				}
			}

			.view-more{
				width:100%;
				height:90/@rem;
				margin-bottom:10/@rem;
				background:#eee;
				line-height:90/@rem;
				text-align: center;
				color:#aaa;
			}
		}
		.from{
			display: flex;
			height:150/@rem;
			padding:0 60/@rem;
			padding-bottom:74/@rem;

			img{
				width:150/@rem;
				height:150/@rem;
			}
			.from-body{
				flex:1;
				display:flex;
				justify-content: space-between;
				align-items: center;
				padding:0 30/@rem;
				background:#eee;
				font-size:40/@rem;

				span{
					display:inline-block;
					width:28/@rem;
					height:28/@rem;
					border-top: 2px solid #000;
					border-right: 2px solid #000;
					transform: rotate(45deg);
				}
			}
		}
	}
</style>