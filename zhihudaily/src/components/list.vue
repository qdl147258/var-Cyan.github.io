<template>
<transition name="slide-fade">  
    <div class="slide-menu-wrap">
        <div class="slide-menu">
            <header id="slide-head" @click="goBack">
                <div id="head-load">
                    <span id="head-portrait"></span>
                    <span id="please-load">请登录</span>
                </div>
                <div id="collect-downLoad">
                    <div><i>icon</i>我的收藏</div>
                    <div><i>icon</i>离线下载</div>
                </div>
            </header>
            <div id="slide-contant-box">
                <div to="/" class="slide-contant-list homePage"  @click="goHomePage">
                    <div><i>icon</i>首页</div>
                </div>
                <ul id="slide-contant-list">
                    <li  class="slide-contant-list" v-for="(item,index) in data" :key="index" @click="showState(item)">
                        <div>{{item.name}}</div><span>+</span>
                    </li>
                </ul>
            </div>
        </div>
        <div class="modal-mask" @click="goBack"></div>
    </div>
</transition>
</template>
<script>
    
    export default{
        data(){
            return {
                data:{}
            }
        },
        mounted(){
            this.$http.get(`/api/4/themes`).then((d)=>{
                    this.data = d.data.others
                    console.log(this.data)
                })	
        },
        methods:{
            showState(item){
                this.$store.commit('showState')
                this.$store.commit('changeTitle',item.name)
                this.$router.push({
                   name:'themeNewsbox',params:{id:item.id}
                })
            },
            goBack(){
                this.$store.commit('showState')
            },
            goHomePage(){
                this.$store.commit('showState')
                this.$router.push({
                   name:'homePage'
                })
                console.log(1111)
            }
        },
        computed:{
            changeShowState(){
                return this.$store.state.show
            }
            
        },
    }
</script>
<style lang="less">
    @rem:48rem;
    .slide-fade-enter-active, .slide-fade-leave-active {
        transition: all 1s
    }
    .slide-fade-enter, .slide-fade-leave-active {
        transform: translateX(-100%);
    }
    .slide-menu-wrap{
        position: fixed;
        top:0;
        left:0%;
        width:100%;
        height:100%;
        z-index: 99;
        .modal-mask{
            position: absolute;
            left:0;
            top:0;
            width:100%;
            height:100%;
            z-index: 99;
            background: rgba(0,0,0,0.5);
        }
        .slide-menu{
            position: absolute;
            left:0;
            right:0;
            width:85%;
            height:100%;
            overflow: hidden;
            overflow-y: auto;
            z-index: 100;
            background: #fff;
            color:000;
            #slide-head{
                height:220/@rem;
                background: #00a2ed;
                color:#fff;
                #head-load{
                    padding:22/@rem 32/@rem;
                    height:50%;
                    box-sizing: border-box;
                    display: flex;
                    justify-content: flex-start;
                    #head-portrait{
                        width: 66/@rem;
                        height:66/@rem;
                        background: #00e09e;
                        border-radius: 50%;
                        margin-right:25/@rem;
                    }
                    #please-load{
                        font-size: 36/@rem;
                        line-height: 66/@rem;
                        height:66/@rem;
                    }
                }
                #collect-downLoad{
                    padding:35/@rem 50/@rem;
                    height:50%;
                    box-sizing: border-box;
                    display: flex;
                    font-size: 30/@rem;
                    justify-content: space-around;
                    div{
                       i{
                            margin-right:50/@rem;
                        }
                    }

                }
            }
            #slide-contant-box{
                .slide-contant-list{
                    height:100/@rem;
                    display: flex;
                    justify-content: space-between;
                    font-size:40/@rem;
                    padding-left:30/@rem;
                    line-height: 100/@rem;
                    color:#000;
                       i{
                            margin-right:20/@rem;
                        }
                        span{
                            margin-right:30/@rem;
                        }
                }
                .homePage{
                    color:#1c92f6;
                    i{
                        color:#1c92f6;
                    }
                }
            }
        }
    }
</style>