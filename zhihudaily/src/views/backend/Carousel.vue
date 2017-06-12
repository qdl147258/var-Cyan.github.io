<template>
  <swipe :auto="4000" id="swipe-wrap">
      <swipe-item v-for="(item, index) in topStories" :key="index">
        <router-link
          class="top-img"  
          :to="`/detail/${item.id}`"
          tag="div"
          :style="{'background-image':`url(${item.image})`}"
        >
          <div class="title">{{item.title}}</div>
          <div class="img-mask"></div> 
        </router-link>   
      </swipe-item>
  </swipe>  
</template>

<script>
  import {Swipe, SwipeItem} from 'mint-ui'

  export default{
    props:['topStories'],
    components: {
        Swipe,
        SwipeItem
    }
  }
</script>

<style  lang="less">
  @rem:40rem;
  #swipe-wrap{
    padding-top: 168/@rem;
    height:610/@rem;

    .top-img{
      position:relative;
      width:100%; 
      height:100%;
      background-repeat: no-repeat;
      background-position: center;       
      background-size: cover;

      .title{
        margin: 20/@rem 0;
        padding:0 40/@rem;
        bottom: 40/@rem;
        z-index: 1;
        position: absolute;
        color: white;
        font-size: 62/@rem;
        line-height:88/@rem;        
      }
    }

    .img-mask{
      position:absolute;
      left:0;
      top:0;
      width:100%;
        height:100%;          
      background:-webkit-linear-gradient(top,rgba(0,0,0,0) 0%,rgba(0,0,0,.2) 60%,rgba(0,0,0,.6) 100%);      
    }

    .mint-swipe-indicators{
      .mint-swipe-indicator {
        width: 18/@rem; 
        height: 18/@rem; 
        background: rgba(255, 255, 255, 0.6);
        opacity: 1;
      }
      .is-active{
        background:#fff;
      }
    }    
  }
</style>