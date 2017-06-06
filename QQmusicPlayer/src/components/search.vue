<template>
    <div id="wrapBox">
        <div class="pageContant">
            <div id="searchBar">
                <div id="inputWrap">
                    <form id="searchFrom"  method="get">
                        <input type="search" placeholder="搜索歌曲、歌单、专辑" class="searhInput">
                        <span class="iconSearch">搜索</span>
                        <span class="iconDel">删除</span>
                    </form>
                </div>
                <div class="searchCancel">取消</div>
            </div>
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
    import SearchPage from "./searchPage.vue"
    export default{
        components:{
            SearchPage
        }
    }
</script>
<style lang="less">
    @rem:24rem;
    #searchBar{
        background: #f4f4f4;
        padding: 10/@rem;
        width:340/@rem;
        height:36/@rem;
        display: flex;
        #inputWrap{
            position: relative;
            border-radius: 3/@rem;
            background: #fff;
            height: 20/@rem;
            padding: 8/@rem 12/@rem 8/@rem 35/@rem;
            flex: 1;
            #searchFrom{
                display: block;
                .searhInput{
                    height: 20/@rem;
                    line-height: 20/@rem;
                    width: 100%;
                    color: rgba(0,0,0,.3);
                    border: none;
                    font-size: 14/@rem;
                    vertical-align: top;
                    outline: none;
                }
                .iconSearch{
                    position: absolute;
                    top: 9/@rem;
                    left: 10/@rem;
                    width: 18/@rem;
                    height: 18/@rem;
                    background-image: url(../../static/img/search.png);
                    background-repeat: no-repeat;
                    background-size: cover;
                    text-indent: -999px;
                }
                .iconDel{
                    position: absolute;
                    top: 9/@rem;
                    right: 12/@rem;
                    width: 18/@rem;
                    height: 18/@rem;
                    background: #b1b1b1;
                    text-indent: -9999/@rem;
                    border-radius: 99/@rem;
                    display: none;
                    .iconDel:after,.iconDel:before{
                        content: "";
                        display: block;
                        position: absolute;
                        left: 50%;
                        top: 50%;
                        border-radius: 8/@rem;
                        background: #fff;
                        -webkit-transform: rotate(45deg);
                    }
                    .iconDel:before{
                        width: 10/@rem;
                        height: 2/@rem;
                        margin-left: -5/@rem;
                        margin-top: -1/@rem;
                    }
                    .iconDel:after{
                        width: 2/@rem;
                        height: 10/@rem;
                        margin-left: -1/@rem;
                        margin-top: -5/@rem;
                    }

                }
                
            }
        }
        .searchCancel{
            padding-right: 10/@rem;
            padding-left: 10/@rem;
            font-size: 14/@rem;
            height: 36/@rem;
            line-height: 36/@rem;
            display: none;
        }
        .active{
            display: block;
        }


    }


</style>