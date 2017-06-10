<template>
    <div id="themeDetail">
        <head-bar>
            <slot>
                <div class="header">
                    <i @click="showState">slide</i>
                    <i>{{changeTitleName}}</i>
                </div>
                <div class="header">
                    <i>关注</i>
                </div>
            </slot>
        </head-bar>
        <section id="themedetailContant">
            <div id="themeContant">  
                <header id="themeTopPic" :style="{'background-image':`url(${data.background})`}">
                    <span id="themeMask"></span>
                    <p id="themeTitle">{{data.description}}</p>
                </header>
                <div id="themeNewsBox">
                    <header id="editors">
                        主编<a :href="item.url" v-for="item,index in data.editors" :style="{'background-image':`url(${item.avatar})`}" ></a>
                    </header>
                    <ul id="themeNewsList">
                        <router-link tag="li" v-for="item,index in data.stories" :to="`/detail/${item.id}`" :key="index">
                            <p class="themeEveryText">{{item.title}}</p>
                            <div class="themeEveryPic" v-show="item.images" :style="{'background-image':`url(${item.images})`}"></div>
                        </router-link>
                    </ul>
                </div>
            </div>
        </section>
        <list v-show="changeShowState"></list>
                 
    </div>
</template>
<script>
import HeadBar from './headBar';
import List from './list';
    export default{
        data(){
            return {
                data:{}
            }
        },
        components:{
            HeadBar,
            List
        },
        watch:{
            $route(){
                this.getstate()
            }
        },
        mounted(){
            this.getstate()
        
        },
        methods:{
            showState(){
                this.$store.commit('showState')
            },
            getstate(){
                this.$http.get(`/api/4/theme/${window.location.hash.split('/')[2]}`).then((d)=>{
                    this.data = d.data    
                })	
            }
        },
        computed:{
            changeShowState(){
                return this.$store.state.show
            },
            changeTitleName(){
                return this.$store.state.title
            }
        },
    }
</script>
<style lang="less">
@rem:48rem;
    #themeDetail{
        height:100%;
        width:100%;
        #themedetailContant{
            position: fixed;
            top:0;
            left:0;
            height:100%;
            width:100%;
            overflow: hidden;
            overflow-y: auto;
            background: #f4f4f4;
            #themeContant{
                padding-top:112/@rem;
                #themeTopPic{
                    height:450/@rem;
                    background:#00bbff;
                    position:relative;
                    background-size:cover;
                    background-position:center;
                    background-repeat: no-repeat;
                    #themeMask{
                        position: absolute;
                        top:0;
                        left:0;
                        width:100%;
                        height:100%;
                        background:-webkit-linear-gradient(top,rgba(0,0,0,0) 0%,rgba(0,0,0,0.2) 60%,rgba(0,0,0,0.6) 100%)
                    }
                    #themeTitle{
                        position: absolute;
                        bottom:60/@rem;
                        left:30/@rem;
                        width:660/@rem;
                        text-align: center;
                        color:#fff;
                        z-index: 1;
                    }
                }
                #themeNewsBox{
                    padding:0 15/@rem;
                    #editors{
                        height:60/@rem;
                        padding: 20/@rem 0 40/@rem 0;
                        display: flex;
                        justify-content: flex-start;
                        font-size:30/@rem ;
                        line-height: 60/@rem;
                        a{
                            width:60/@rem;
                            height:60/@rem;
                            border-radius: 50%;
                            margin-left:25/@rem;
                        }
                    }
                    #themeNewsList{
                        li{
                            padding:32/@rem 24/@rem;
                            margin-bottom:15/@rem;
                            display: flex;
                            
                            box-sizing:border-box;
                            background: #fff;
                            .themeEveryText{
                                flex:1;
                                
                                line-height: 52/@rem;
                                font-size: 36/@rem;
                                min-height:128/@rem;
                            }
                            .themeEveryPic{
                                width:164/@rem;
                                height:164/@rem;
                                background-size:cover;
                                background-position:center;
                                background-repeat: no-repeat;
                            }
                        }
                    }
                }
            }
        }
    }
</style>