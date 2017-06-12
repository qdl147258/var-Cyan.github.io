<template>
	<div id="comments" :class="{showShortComments:showShortComments}">
		<div class="long-comm">
			<h3>{{long_comments.length}}条长评</h3>
			<div class="content">
				<ul>
					<li v-for="item in long_comments">
						<div class="author-info">
							<div>
								<img class="avatar" :src="item.avatar" alt="">
								<span class="author">{{item.author}}</span>
							</div>
							<div>
								<i class="iconfont icon-like"></i>
								<span class="likes">{{item.likes}}</span>
							</div>
						</div>
						<div class="text">{{item.content}}</div>
						<time>{{timeForm(item.time)}}</time>
					</li>
				</ul>
			</div>
		</div>
		<div class="short-comm">
			<h3>
				{{short_comments.length}}条短评 
				<i 
					class="iconfont icon-arrow_top" 
					:class="{bottom:!showShortComments}"
					@click="showShortComments=!showShortComments"
				></i>
			</h3>
			<div class="content">
				<ul>
					<li v-for="item in short_comments">
						<div class="author-info">
							<div>
								<img class="avatar" :src="item.avatar" alt="">
								<span class="author">{{item.author}}</span>
							</div>
							<div>
								<i class="iconfont icon-like"></i>
								<span class="likes">{{item.likes}}</span>
							</div>
						</div>
						<div class="text">{{item.content}}</div>
						<time>{{timeForm(item.time)}}</time>
					</li>
				</ul>				
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				showShortComments:false
			}
		},
		mounted(){
			//get comments
			this.$http.get(`/api/4/story/${this.$route.params.id}/long-comments`).then((d)=>{this.$store.commit('getLongComments',d.data.comments)     
	        })	
			this.$http.get(`/api/4/story/${this.$route.params.id}/short-comments`).then((d)=>{     
		        this.$store.commit('getShortComments',d.data.comments)  
	        })
		},
		methods:{
			timeForm:nS => new Date(parseInt(nS) * 1000).toLocaleString().replace(/年|月/g, "-").replace(/日/g, " ")
		},
		computed:{
			long_comments(){
				return this.$store.state.long_comments
			},
			short_comments(){
				return this.$store.state.short_comments
			}			
		}
	}
</script>

<style lang="less">
	@rem:40rem;
	#comments.showShortComments{
		 transform:translateY(-100%+620/@rem); 
	}
	#comments{
		height:100%;
		box-sizing: border-box;
		padding-top:168/@rem;
		transition:300ms;

		.long-comm,.short-comm{
			position:relative;
			height:100%;
			box-sizing:border-box;
		}
		.long-comm{
			padding-bottom: 140/@rem;
		}
		.short-comm{
			margin-top: -140/@rem;
			h3{
				display:flex;
				justify-content: space-between;
				border-top: 3px solid #e5e5e5;
				.iconfont{
					color:#a6a6a6;
					font-size:40/@rem;
				}
				.bottom{
					transform:rotate(180deg);
				}
			}
		}
		h3{
			height: 140/@rem;
			padding:0 48/@rem;
			border-bottom: 3px solid #e5e5e5;
			font-size:46/@rem;
			line-height: 140/@rem;
			background-color:#fff;
		}
		.content{
			height:100%;
			box-sizing:border-box;
			padding-bottom: 140/@rem;
			overflow:hidden;
			overflow-y:auto;
			ul{
				margin-top:-3px;
			}
			li{
				padding:45/@rem 56/@rem;
				border-top: 3px solid #e5e5e5;

				.author-info{
					display: flex;
					justify-content: space-between;
					height:108/@rem;
					.avatar{
						width:108/@rem;
						height:108/@rem;
						border-radius: 50%;
						margin-right:20/@rem;
					}
					.author{
						font-size:50/@rem;
						font-weight:bold;
						line-height:80/@rem;
					}
					.likes,.iconfont{
						color:#b8b8b8;
					}
					.iconfont{
						margin-right:10/@rem;
					}
				}
				.text{
					padding-left:140/@rem;
					margin-bottom: 66/@rem;
					font-size:48/@rem;
					line-height:70/@rem;
					color:#313131;
				}
				time{
					padding-left:140/@rem;
					color:#b5b5b5;
				}
			}
		}
	}
</style>