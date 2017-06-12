<template>
	<header id="head" :class="{'night-style':nightStyle}">
		<div class="left">
			<i 
				class="iconfont icon-menu" 
				v-if="name==='Main' || name==='Theme'"
				@click="showSlideMenu" 
			>
			</i>
			<i 
				class="iconfont icon-arrow" 
				v-if="name==='Detail' || name==='Section' || name==='Comment'"
				@click="goBack" 
			>
			</i>			
			<span v-if="name!=='Detail'">{{title}}</span>
		</div>
		<div class="right" :class="{detail:name==='Detail'}">
			<i class="iconfont icon-bell" v-if="name==='Main'"></i>
			<i class="iconfont icon-more" v-if="name==='Main'" @click="showAction"></i>

			<i class="iconfont icon-share" v-if="name==='Detail'"></i>
			<i class="iconfont icon-star" v-if="name==='Detail'"></i>
			<span
				class="comment" 
				v-if="name==='Detail'" 
				@click="gotoComment"
			>
				<i class="iconfont icon-comment"></i>
				<span>{{extraInfo.comments}}</span>
			</span>
			<span class="like" v-if="name==='Detail'">
				<i class="iconfont icon-like"></i>
				<span>{{extraInfo.popularity}}</span>
			</span>
			<Actionsheet  
				:actions="actions" 
				v-model="sheetVisible" 
				cancelText="" 
				closeOnClickModal="true"
			/>
		</div>		
	</header>	
</template>

<script>
	import { Actionsheet } from 'mint-ui'
	import { mapState } from 'vuex'
	export default{
		props:["name"],
		data(){
			return {
				sheetVisible:false,
				actions:[
					{
						name:'夜间模式',
						method:()=>{
							this.actions[0].name = !this.$store.state.nightStyle ? '日间模式' : '夜间模式'
							this.$store.commit('changeNightStyle')
						}
					},
					{
						name:'设置选项'
					}					
				]
			}
		},
		components: {
	        Actionsheet
	    },
	    methods:{
	    	showAction(){
	    		this.sheetVisible = true
	    	},
	    	showSlideMenu(){
	    		this.$store.commit('changePopupVisible')
	    	},
	    	goBack(){
	    		this.$store.commit('changeTitle','首页')
	    		this.$router.go(-1)
	    	},
	    	gotoComment(){
	    		this.$store.commit('changeTitle',this.extraInfo.comments+'条点评')
	    		this.$router.push( { name:'Comment',params:{id:this.detailId} } )
	    	}
	    },
		computed:mapState(['nightStyle','title','extraInfo','popularity','detailId'])
	}
</script>

<style lang="less">
	@rem:40rem;
	.flex-style1{
		display:flex;
		justify-content: space-between;
		align-items: center;		
	}
	
	#head.night-style{
		background-color:#222222;
	}
	#head{
		position:fixed;
		left:0;
		top:0;
		.flex-style1;
		width:100%;
		height: 168/@rem;
		box-sizing: border-box;
		padding: 0 56/@rem;
		background-color:#00a2ea;
		z-index: 999;
		
		.left{		
			height:80px;
			font-size:52/@rem;
			color:#fff;
			.iconfont{
				margin-right: 100/@rem;
			}
		}
		
		.detail{
			width:600/@rem !important;
		}
		.right{
			position:relative;
			.flex-style1;			
			width:220/@rem;
			height:80/@rem;		

			.icon-more{
				font-size:80/@rem;
			}
			.comment,.like{
				color:#fff;
			}	
			
			.mint-actionsheet{
				position:absolute;
				top:-20/@rem;
				left:-33%;
				width:590/@rem;
				height:290/@rem;
				background-color:#fff;
				border-radius: 10/@rem;

				.mint-actionsheet-list{
					display:flex;
					flex-direction:column;
					height:100%;
					
					.mint-actionsheet-listitem{
						flex:1;
						.flex-style1;
						box-sizing:border-box;
						padding-left: 50/@rem;
						border:none;
						font-size:48/@rem;
						background-color:transparent;
					}
					
				}
			}
			.v-modal{
				opacity:0;
			}			

		}
	}
		
</style>