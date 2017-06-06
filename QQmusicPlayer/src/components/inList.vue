<template>
    <div id="Inlist">
        <div id="listContant">
            <header id="topFocus" style="background:url(../../static/img/list1.jpg) 0px 0px / 100% no-repeat">
                <div id="topText">
                    <h2>巅峰榜·福特新蒙迪欧·流行指数</h2>
                    <p>2017-05-27 更新</p>
                </div>
            </header>
            <ol id="topInfoList">
                <li>
                    <div id="topInfoListNum">1</div>
                    <div id="topInfoListInfo">
                        <h3 class="abbreviation">望</h3>
                        <p class="abbreviation">张碧晨 / 赵丽颖 · 望 · 《楚乔传》电视剧片头曲</p>
                    </div>
                </li>
            </ol>
        </div>
        <foot-bar></foot-bar>
    </div>
</template>
<script>
    import FootBar from "./public/foot.vue"
    import BetterScroll from "better-scroll"
    export default{
        components:{
            FootBar
        },
        mounted(){
            this.scrollRefresh()
        },
        updated(){
           this.scrollRefresh()
        },
        methods:{
            scrollRefresh(){
                let scroll=null;
                this.$nextTick( ()=>{
                    let wrapBox=document.getElementById('Inlist');
                    scroll = new BetterScroll(wrapBox,{
                        startX:0,
                        startY:0,
                        click:true,//
                        momentum:true,//惯性效果
                        bounce:true,//回弹效果
                        deceleration:0.003//加速度效果
                    })
                })
            }
        }
    }
</script>
<style lang="less">
@rem:24rem;
    #Inlist{
        height:100%;
        #listContant{
            
            padding-bottom:70/@rem;
            #topFocus{
                position: relative;
                overflow: hidden;
                height:360/@rem;
                #topText{
                    color:#fff;
                    position: absolute;
                    left: 0;
                    bottom: 0;
                    width: 100%;
                    height: 20%;
                    padding-top: 40%;
                    background-image: -webkit-linear-gradient(top,transparent,rgb(0, 0, 0) 80%);
                    h2{
                        font-size: 24/@rem;
                        line-height: 27/@rem;
                        height: 27/@rem;
                        overflow: hidden;
                        white-space: nowrap;
                        text-overflow: ellipsis;
                        padding-left: 10/@rem;
                        margin-bottom:8/@rem;
                    }
                    p{
                        font-size: 16/@rem;
                        line-height: 21/rem;
                        height: 21/@rem;
                        padding-left: 10/@rem;
                    }
                }
            }
            #topInfoList{
                background-color: rgb(0, 0, 0);
                border-top: 1px solid rgba(255,255,255,.4);
                li{
                    display: flex;
                    height:60/@rem;
                    #topInfoListNum{
                        width: 46/@rem;
                        color:#fff;
                        text-align: center;
                        line-height: 60/@rem;
                        font-size:20/@rem;
                    }
                    #topInfoListInfo{
                        color:#fff;
                        flex:1;
                        height:100%;
                        box-sizing: border-box;
                        border-bottom: 1px solid rgba(255,255,255,.4);
                        overflow: hidden;  
                        padding-right: 15/@rem;
                        flex-direction:column;
                        align-content: center;
                        h3{
                            font-size:18/@rem;
                            height:22/@rem;
                            line-height: 22/@rem;
                        }
                        p{
                            font-size:14/@rem;
                            height:21/@rem;
                            line-height: 21/@rem;
                            color: rgba(255,255,255,.6);
                        }
                    }
                }
            }
        }
    }
</style>