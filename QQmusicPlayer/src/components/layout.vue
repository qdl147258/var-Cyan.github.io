
<template>
    <div id="layout">
        <head-bar></head-bar>
        <router-view></router-view>
        <foot-bar></foot-bar>
    </div>
</template>
<script>
    import HeadBar from "./public/head.vue"
    import FootBar from "./public/foot.vue"
    import BetterScroll from "better-scroll"
    export default{
        components:{
            HeadBar,
            FootBar
        },
        // data(){
        //     return {
        //        abc:this.$route.name
        //     }
        // },
        mounted(){
            this.scrollRefresh()
        },
        updated(){
           this.scrollRefresh()
        //    this.abc = this.$route.name
        //    console.log(this.abc)
        },
        methods:{
            scrollRefresh(){
                let scroll=null;
                this.$nextTick( ()=>{
                    let wrapBox=document.getElementById('wrapBox');
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
     #layout{
         width:100%;
         height:100%;
        #wrapBox{
            position: absolute;
            top:0;
            left:0;
            width:100%;
            height:486/@rem;
            overflow:hidden;
            margin-top:84/@rem;
            margin-bottom:70/@rem;    
            .pageContant{
                background: #f4f4f4;
                width:100%;
                overflow: hidden;
            }
        }
     }

</style>