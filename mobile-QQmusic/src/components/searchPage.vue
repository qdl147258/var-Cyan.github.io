<template>
    <div id="hotKey">
        <h3>热门搜索</h3>
        <nav>
            <router-link tag="a" to="/searchResult" class="hot">薛之谦</router-link>
            <router-link tag="a" to="/searchResult">音乐带我解脱 邓伦 </router-link>
            <router-link tag="a" to="/searchResult">爱的可能</router-link>
            <router-link tag="a" to="/searchResult">THERE FOR YOU</router-link>
            <router-link tag="a" to="/searchResult">我的一个道姑朋友</router-link>
            <router-link tag="a" to="/searchResult">皇朝中我指鹿为马</router-link>
            <router-link tag="a" to="/searchResult">你就不要想起我</router-link>
        </nav>
    </div>
</template>
<script>
    export default{

    }
</script>
<style lang="less">
    @rem:24rem;
    #hotKey{
        background: #fff;
        padding: 15/@rem 15/@rem 10/@rem 15/@rem;
        h3{
            color: rgba(0,0,0,.6);
            margin-bottom: 8/@rem;
            font-size:14/@rem;
            height:21/@rem;
            line-height: 21/@rem;
            font-weight: bold;
        }
        nav{
            display: flex;
            flex-wrap:wrap;
                a{
                    font-size: 14/@rem;
                    padding: 0 10/@rem;
                    height: 30/@rem;
                    line-height: 30/@rem;
                    color: #000;
                    border: 1/@rem solid rgba(0,0,0,.6);
                    border-radius: 99/@rem;
                    word-break: keep-all;
                    margin-bottom: 10/@rem;
                    margin-right: 14/@rem;
                }
                a.hot{
                    color: #fc4524;
                    border-color: #fc4524;
                }
        }
    }
</style>