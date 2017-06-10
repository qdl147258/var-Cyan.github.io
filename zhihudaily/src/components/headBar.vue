<template>
    <header id="headBar">
        <slot></slot>
    </header>
</template>
<script>
export default{

}
</script>
<style lang="less">
    @rem:48rem;
    #headBar{
        width:100%;
        position: fixed;
        left:0;
        top:0;
        z-index: 9;
        background:#00a2ed;
        height:112/@rem;
        display: flex;
        justify-content: space-between;
        .header{
            i{
                display: inline-block;
                padding:0 25/@rem;
                line-height:112/@rem;
                font-size:40/@rem;
            }
        }
    }
</style>