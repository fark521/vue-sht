<template>
    <div class="searchHeader">
        <router-link class="inp" to="/search" tag="div"> 
            <i></i>
            <span>搜索商品</span>
        </router-link>
    </div>
</template>

<script>
export default {
    name:"SearchHeader",
    data(){
        return{
            path:"/search"
        }
    }

}
</script>

<style scoped>
.searchHeader{
    background: #fff;
    width:3.2rem;
    position: fixed;
    top:0;
    left:0;
    height:0.38rem;
    padding:0.07rem 0.13rem;
    border-bottom: 1px solid #dfdfdf;
}
.inp{
    width:2.94rem;
    height:0.25rem;
    background:#eee;
    display: flex;
    justify-content:center;
    align-items: center;
}
header .inp i{
    width:0.25rem;
    height:0.25rem;
    display: block;
    background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAMAAADzN3VRAAAAWlBMVEUAAAC7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7tso/x4AAAAHXRSTlMAH/P5p7l4Gtlbrqt0KCPjaVeiTx0P0G0N5uViCZBZC4gAAACvSURBVCjPdZJXFsMgDASFqO7dTtv7XzMhdniOgfmdJyGkpYPW6Dvw0EbQH0IhoM6uYMiqaJZbU1QSPAVRA6UIbStg+1UAhk7UwLC/wYcI9OBvC4WSLigoXwIprsZKCCLz8REjaiKNITYTNFGHJjYzOiKJhWLA3rwypkOb7JafIDt1n/uptLntjMdGt2ijM3mG+Ap98nIlAGfT1346r5IJsbsKqXLMbk+VVyulsat+A0ktDaa1tpulAAAAAElFTkSuQmCC) center center no-repeat;
    background-size:0.125rem;
}
header .inp span{
    display: block;
    width:0.52rem;
    height:0.25rem;
    font-size:0.12rem;
    line-height:0.25rem;
    color:#aaaaaa;
    margin-top:0.02rem;
    font-weight: 500;
}
</style>