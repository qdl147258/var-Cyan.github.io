<template>
	<div class="slide-menu-wrap">
		<transition name="slide">
			<div 
				class="slide-menu"
				v-show="popupVisible"
				ref="slidemenu"
				@touchstart="slideStart"
				@touchmove="slideMove"
				@touchend="slideEnd"
			>
				<div class="content">
					<div class="head">
						<div class="user">
							<img src="../assets/images/user.png" alt="">
							salen
						</div>
						<div class="my-news">
							<i class="iconfont icon-star"></i>
							<span>我的收藏</span>
							<i class="iconfont icon-xiazai"></i>
							<span>离线下载</span>						
						</div>
					</div>
					<div class="list">
						<div class="home" @click="gotoHome" :class="{active:id===0}">
							<i class="iconfont icon-home"></i>
							首页
						</div>
						<ul>
							<li 
								v-for="item,index in list" 
								:key="index"
								@click="gotoTheme(item.id,item.name)"
								:class="{active:id===item.id}"	
						        tag="li"
							>
								{{item.name}}
								<i class="iconfont icon-right"></i>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</transition>
		<div class="modal-mask" v-show="popupVisible" @click="hidePopup"></div>	
	</div>
</template>

<script>
	export default{
		data(){
			return {
				list:[],
				id:0,
				slideStartX:0,
				slideEndX:0
			}
		},
		mounted(){
			// 获取主题列表项
			this.$http.get('/api/4/themes').then((d)=>{
				this.list = d.data.others
			})					
		},
		computed:{
			// 是否显示主题列表[Boolean]
			popupVisible(){
				return this.$store.state.popupVisible
			}
		},
		methods:{
			gotoTheme(id,title){
				this.$store.commit('changePopupVisible')
				this.$store.commit('changeTitle',title)
				this.id = id
				this.$router.push( { name:'Theme',params:{id:id} })
			},
			gotoHome(){
				this.$store.commit('changePopupVisible')
				this.$store.commit('changeTitle','首页')
				this.id = 0
				this.$router.push( {name:'Main'} )				
			},
			hidePopup(){
				this.$store.commit('changePopupVisible')
			},
			slideStart(e){
				this.$refs.slidemenu.style.transition = ''
				this.slideStartX = e.changedTouches[0].pageX
			},
			slideMove(e){
				let dx = e.changedTouches[0].pageX-this.slideStartX
				dx = dx >= 0 ? 0 : dx
				this.$refs.slidemenu.style.transform = `translateX(${dx}px)`
			},
			slideEnd(e){
				this.slideEndX = e.changedTouches[0].pageX
				let dx = this.slideEndX-this.slideStartX
				let w = this.$refs.slidemenu.offsetWidth
				if(-dx > w/2){
					this.$refs.slidemenu.style.transform = 'translateX(-100%)'
					this.$store.commit('changePopupVisible',this.$refs.slidemenu)
				}else{
					this.$refs.slidemenu.style.transition = '.3s'
					this.$refs.slidemenu.style.transform = ''
				}
			}
		}		
	}
</script>

<style lang="less">
	@rem:40rem;
	.slide-menu-wrap{
		.modal-mask{
			position:fixed;
			left:0;
			top:0;			
			width:100%;
			height:100%;
			z-index: 1900;
			background-color:rgba(0,0,0,.5);
		}
		.slide-menu{
			position:fixed;
			left:0;
			top:0;
			width:85%;
			height:100%;
			overflow: hidden;
			overflow-y: auto;
			z-index:2000;
			background-color:#fff;
		
			.content{
				width:101%;
				.head{
					height:333/@rem;
					box-sizing: border-box;
					padding: 32/@rem 48/@rem;
					background-color:#00a2ea;

					.user{
						margin-bottom:100/@rem;
						font-size:40/@rem;
						line-height:100/@rem;
						color:#fff;
						img{
							width:100/@rem;
							height:100/@rem;
							border-radius: 50%;
							margin-right: 40/@rem;
						}
					}
					.my-news{
						display: flex;
						justify-content: space-between;
						padding: 0 22/@rem;
						padding-right: 60/@rem;
						font-size: 46/@rem;
						font-weight: bold;
						color: #fff;
					}
				}
				.list{
					.home,ul li{
						height:152/@rem;
						line-height:152/@rem;
						padding-left:48/@rem;	
						font-size:48/@rem;
						font-weight: bold;			
					}
					.active{
						background-color:#f0f0f0;
					}
					.home{
						height:152/@rem;
						line-height:152/@rem;
						color:#00a0e8;

						.icon-home{
							color:#00a0e8 !important;
							margin-right: 40/@rem;
						}
					}
					ul{
						li{
							padding-right: 160/@rem;
							.icon-right{
								line-height:152/@rem;
								font-size: 46/@rem !important;
								color:#cdcdcd !important;
								float: right;
							}
						}
					}
				}
			}
		}	
		.slide-enter-active, .slide-leave-active {
		  transition: all .3s
		}
		.slide-enter, .slide-leave-active {
		  transform: translateX(-100%)
		}
	}
</style>