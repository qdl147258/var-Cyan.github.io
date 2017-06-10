<template>
    <div id="wrap">
        <head-bar>
            <slot>
                <div class="header">
                    <i @click="showState">列表</i>
                    <i>首页</i>
                </div>
                <div class="header">
                    <i>登陆</i>
                    <i>模式</i>
                </div>
            </slot>
        </head-bar>
        <div id="wrapBox">
            <div id="box">
                    <carousel :topData='topData'></carousel>
                    <newsBox :data='data'></newsBox>
            </div>
        </div>
         
        <list v-show="changeShowState"></list>
        
    </div>

</template>

<script>
import HeadBar from './headBar';
import Carousel from './carousel';
import NewsBox from './newsBox';
import BetterScroll from "better-scroll";
import List from './list';
export default {
    data(){
        return{
            data:[],
            topData:[],
            date:[]
        }
    },
    methods:{
        showState(){
            this.$store.commit('showState')
        }
    },
    computed:{
        changeShowState(){
            return this.$store.state.show
        }
    },
    mounted(){
        let scroll=null;
        this.$http.get('/api/4/news/latest').then((d)=>{
            this.topData=d.data.top_stories
            this.data.push(d.data)
            this.date=d.data.date
            // setTimeout(()=>{
                 this.$nextTick(function(){
                    scroll.refresh()
                })
            // },1000)
           
        })

        this.$nextTick( ()=>{
            let wrapBox=document.getElementById('wrapBox');
            let box=document.getElementById('box');
            console.log(wrapBox.offsetHeight)
                
            
            scroll = new BetterScroll(wrapBox,{
                startX:0,
                startY:0,
                click:true,//
                momentum:true,//惯性效果
                bounce:true,//回弹效果
                deceleration:0.003,//加速度效果
                probeType:3
            })

            scroll.on('scroll',(pos)=>{
                console.log(box.offsetHeight)


            })
        })
    },
    components:{
        HeadBar,
        Carousel,
        NewsBox,
        List
    }
}
</script>
<style lang="less">
    @rem:48rem;
    #wrap{
        width:100%;
        height:100%;
        overflow: hidden;
        #wrapBox{
            position: fixed;
            top:0;
            left:0;
            height:100%;
            // box-sizing:border-box;
            #box{
                padding-top:112/@rem;
            }
        }
    }

</style>
