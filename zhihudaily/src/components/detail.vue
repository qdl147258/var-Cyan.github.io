<template>
<div id="detailBox">
    <head-bar>
        <slot>
            <div class="header">
                <i @click="goBack">返回</i>
            </div>
            <div class="header">
                <i>分享</i>
                <i>星星</i>
                <router-link tag="i" :to="{name:'commentBar',params:{id:data.id}}" >评论</router-link>
                <i>点赞</i>
            </div>
        </slot>
    </head-bar>
    <section id="detailContant">
        <div id="Contant">
            <header id="contantHead" v-show="data.image"  :style="{'background-image':`url(${data.image})`}" >
                <p id="title">{{data.title}}</p>
                <span id="mask"></span>
                <span id="from">{{data.image_source}}</span>
            </header>
            <section id="contantBody" v-html="data.body">
            </section>
            <router-link tag="div" v-if="data.section" :to="{name:'collection',params:{id:data.section.id}}" id="fix">
                <div id="fixedimg">
                    <img :src="data.section.thumbnail" alt="">
                </div>
                <div id="fixedtext">
                    本文来自：{{data.section.name}}·合集
                </div>
            </router-link>
        </div>
    </section>
</div>
</template>
<script>
import HeadBar from './headBar';
export default{
    data(){
        return {
            data:{}
        }
    },
    components:{
        HeadBar
    },
    mounted(){
        
        this.$http.get(`/api/4/news/${window.location.hash.split('/')[2]}`).then((d)=>{
		        this.data = d.data    
	        })	
        
    },
    methods:{
        goBack(){
            this.$router.go(-1)
        }
    }
}
</script>
<style lang="less">
@rem:48rem;
    .headline{
        h1{
            font-size:50/@rem;
            font-weight:bold;
            margin-bottom:35/@rem;
        }

    }
    #detailBox{
        height:100%;
        #back{
            
        }
        #nav{
        }
        #detailContant{
            position: fixed;
            top:0;
            left:0;
            height:100%;
            width:100%;
            overflow: hidden;
            overflow-y: auto;
            #Contant{
                padding-top:112/@rem;
                #contantHead{
                    height:405/@rem;
                    position: relative;
                    background-size:cover;
                    background-position:center;
                    background-repeat: no-repeat;
                    #title{
                        position: absolute;
                        bottom:60/@rem;
                        left:30/@rem;
                        width:660/@rem;
                        text-align: center;
                        color:#fff;
                        z-index: 1;
                    }
                    #mask{
                        position: absolute;
                        top:0;
                        left:0;
                        width:100%;
                        height:100%;
                        background:-webkit-linear-gradient(top,rgba(0,0,0,0) 0%,rgba(0,0,0,0.2) 60%,rgba(0,0,0,0.6) 100%)
                    }
                    #from{
                        position: absolute;
                        right:40/@rem;
                        bottom:20/@rem;
                        color:#bdbeb9;
                        font-size:24/@rem;
                        line-height: 30/@rem;
                    }
                }
                #contantBody{
                    padding: 40/@rem;
                    .question{
                        .question-title{
                            font-size:35/@rem;
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
                                width:40/@rem;
                                height:40/@rem;
                                margin-right: 20/@rem;
                                vertical-align:top;
                            }
                            .author{
                                font-size:35/@rem;
                                font-weight: bold;
                                vertical-align:top;
                            }
                            .bio{
                                color:#666;
                                font-size:35/@rem;
                                vertical-align:top;
                            }
                        }
                        .content{
                            font-size: 36/@rem;
                            p{	
                                margin-bottom: 30/@rem;
                                font-size: 36/@rem;
                                line-height: 54/@rem;
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
                        height:62/@rem;
                        // margin-bottom:50/@rem;
                        background:#f0f0f0;
                        line-height:62/@rem;
                        text-align: center;
                        
                        a{
                            color:#b9b9b9;
                            font-size:34/@rem;
                            line-height: 62/@rem;
                        }
                    }
                }
                #fix{
                    width: 640/@rem;
                    height:100/@rem;
                    background: #f0f0f0;
                    display: flex;
                    margin: 0 auto 30/@rem;
                    #fixedimg{
                        width: 100/@rem;
                        background: pink;
                    }
                    #fixedtext{
                        flex:1;
                        padding-top:8/@rem;
                        height:92/rem;
                        line-height: 92/@rem;
                        font-size:32/@rem;
                        padding-left:20/@rem; 
                    }
                }
            }
        }
    }
</style>