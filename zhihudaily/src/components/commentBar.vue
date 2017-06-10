<template>
    <div>
        <head-bar>
            <slot>
                <div class="header">
                    <i @click="goBack">返回</i>
                    <i>112条点评</i>
                </div>
                <div class="header">
                    <i>编辑</i>
                </div>
            </slot>
        </head-bar>
        <section id="commentWrap">
            <div id="commentContant">
                <div id="longComment">
                    <div id="longCommentHead" class="CommentHead">{{longData.length}}条长评</div>
                    <!--<div id="kongBg"></div>-->
                    <ul id="longCommentUl" class="CommentUl">
                        <li v-for="item,index in longData">
                            <div class="CommentLiHead">
                                <div  class="CommentLiHeadLeft">
                                    <div class="CommentHeader" :style="{'background-image':`url(${item.avatar})`}">
                                    </div>
                                    <div class="CommentName">
                                        {{item.author}}
                                    </div>
                                </div>
                                <div  class="CommentLiHeadRight">
                                    <span>点赞</span><span>{{item.likes}}</span>
                                </div>
                            </div>
                            <p>
                                {{item.content}}
                            </p>
                            <p class="CommentCopy" v-if="item.reply_to">
                                <span>//{{item.reply_to.author}}</span>{{item.reply_to.content}}
                            </p>
                            <time>{{item.time}}</time>
                        </li>
                    </ul>
                    <div id="shortCommentHead" class="CommentHead">{{shortData.length}}条短评</div>
                    <ul id="shortCommentUl" class="CommentUl">
                        <li v-for="item,index in shortData">
                            <div class="CommentLiHead">
                                <div  class="CommentLiHeadLeft">
                                    <div class="CommentHeader" :style="{'background-image':`url(${item.avatar})`}">
                                    </div>
                                    <div class="CommentName">
                                        {{item.author}}
                                    </div>
                                </div>
                                <div  class="CommentLiHeadRight">
                                    <span>点赞</span><span>{{item.likes}}</span>
                                </div>
                            </div>
                            <p>
                                {{item.content}}
                            </p>
                            <p class="CommentCopy" v-if="item.reply_to">
                                <span>//{{item.reply_to.author}}</span>{{item.reply_to.content}}
                            </p>
                            <time>{{item.time}}</time>
                        </li>
                    </ul>
                </div>
            </div>
        </section>  

    </div>
</template>

<script>
    import HeadBar from './headBar';
    export default{
        data(){
            return {
                longData:[],
                shortData:[],
                id:''
            }
        },
        components:{
            HeadBar
        },
        mounted(){
            this.id=window.location.hash.split('/')[2]
            this.$http.get(`/api/4/story/${this.id}/long-comments`).then((d)=>{
                // http://news-at.zhihu.com/api/4/story/8997528/long-comments
                    this.longData = d.data.comments 
                })	
            this.$http.get(`/api/4/story/${this.id}/short-comments`).then((d)=>{
                // http://news-at.zhihu.com/api/4/story/8997528/long-comments
                    this.shortData = d.data.comments 
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
    #commentWrap{
        position: fixed;
        top:0;
        left:0;
        height:100%;
        width:100%;
        overflow: hidden;
        overflow-y: auto;
        #commentContant{
            padding-top:112/@rem;
            #longComment{
                #longCommentHead{
                    
                }
                #kongBg{
                    min-height:920/@rem;
                }
                #longCommentUl{
                }
                #shortCommentHead{
                }
                .CommentHead{
                    height:92/@rem;
                    border-bottom:2/@rem solid #dfdfdf;
                    border-top:2/@rem solid #dfdfdf;
                    font-size:34/@rem;
                    line-height: 92/@rem;
                    color:#000;
                    padding-left:32/@rem;
                }
                #longCommentUl{
                }
                .CommentUl{
                    li{
                        padding:30/@rem 32/@rem;
                        border-bottom:2/@rem solid #dfdfdf;
                        .CommentLiHead{
                            height:70/@rem;
                            display: flex;
                            justify-content: space-between;
                            .CommentLiHeadLeft{
                                display: flex;
                                .CommentHeader{
                                    height:70/@rem;
                                    width:70/@rem;
                                    background: #fff;
                                    border-radius: 50%;
                                    margin-right:15/@rem;
                                }
                                .CommentName{
                                    line-height: 50/@rem;
                                    font-size:30/@rem;
                                    font-weight:bold;
                                }
                            }
                            .CommentLiHeadRight{
                                display: flex;
                                height:5/@rem;
                                font-size:30/@rem;
                                line-height: 50/@rem;
                                color:#b9b9b9;
                                margin-right:10/@rem;
                                span{
                                    padding:0 5/@rem;
                                }
                            
                            }
                            

                        }
                        p{
                            padding:0 0 25/@rem 80/@rem;
                            font-size:25/@rem;
                            line-height: 60/@rem;
                        }
                        .CommentCopy{
                            color:#606060;
                                span{
                                    color:#000;
                                    font-weight:bold;
                                    margin-right:20/@rem;
                                }
                            }
                        time{
                            padding-left:80/@rem;
                            font-size:16/@rem;
                            line-height: 20/@rem;
                            color:#c0c0c0;
                        }
                    }
                }
            }
        }
    }
</style>