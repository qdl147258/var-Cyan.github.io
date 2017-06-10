<template>
    <div id="collectionBox">
        <head-bar>
            <slot>
                <div id="collectionHead"  class="header">
                    <i @click="goBack">返回</i>
                    <i>瞎扯</i>
                </div>
            </slot>
        </head-bar>
        <div id="collectionContentBox">
            <div id="collectionContent">
                <ul>
                    <router-link :to="{name:'detail',params:{id:item.id}}" tag="li" v-for="(item,index) in data.stories" :key="index">
                        <div class="collectionText">
                            <h3>{{item.title}}</h3>
                            <time>{{item.display_date}}</time>
                        </div>
                        <div class="collectionImg">
                            <img :src="item.images" alt="">
                        </div>
                    </router-link>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
import HeadBar from './headBar'
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
        console.log(window.location.hash.split('/')[2])
        this.$http.get(`/api/4/section/${window.location.hash.split('/')[2]}`).then((d)=>{
		        this.data = d.data    
                console.log(this.data)	            
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
    #collectionBox{
        width:100%;
        height:100%;
        #collectionContentBox{
            padding:0 15/@rem 8/@rem 15/@rem;
            background: #f1f1f1;
            position: absolute;
            top:0;
            left:0;
            height:100%;
            width:100%;
            box-sizing:border-box;
            #collectionContent{
                padding-top:120/@rem;
                ul{
                    li{
                        background: #fff;
                        height:240/@rem;
                        border:1px solid #dddddd;
                        margin-bottom: 15/@rem;
                        padding:28/@rem 32/@rem;
                        box-sizing:border-box;
                        display: flex;
                        .collectionImg{
                            width:180/@rem;
                            height:180/@rem;
                        }
                        .collectionText{
                            flex:1;
                            display: flex;
                            flex-wrap:wrap;
                            flex-direction: column;
                            height:180/@rem;
                            justify-content: space-between;
                            h3{
                                width:100%;
                                color:#030303;
                                font-size:40/@rem;
                                line-height: 40/@rem;
                            }
                            time{
                                width:100%;
                                color:#b5b5b5;
                                font-size:24/@rem;
                                line-height: 30/@rem;
                                height:30/@rem;
                            }
                        }
                    }
                }
            }
        }
    }
</style>