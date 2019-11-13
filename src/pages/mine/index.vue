<template>
    
    <div class="main">
        <Header :title="title"/>
        <div id="mine">
        <div class="mll-user-banner">
            <a href="#" class="set"></a>
            <a href="#" class="message"></a>
            <a href="#" class="mll-login-banner">
                <div class="mll-login">
                    <div>
                        <img src="//img002.mll3321.com/zximages/images/upload/201906/1e2f37a24b9a9f2d5d6c7964f955b60b.png">
                    </div>
                </div>
                <div class="mll-user-info">
                    <p class="mll-user-name">mll_15035034766</p>
                    <p class="mll-user-lv">注册会员</p>
                </div>
            </a>
            <ul class="mll-header-list">
                <li>
                    <a href="#">
                        <p>收藏</p>
                        <p>0</p>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <p>红包卡券</p>
                        <p>0</p>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <p>足迹</p>
                        <p>0</p>
                    </a>
                </li>
            </ul>
        </div>

        <div class="mll-content-list1">
            <div class="mll-content-header">
                <span class="mll-content-header-span"></span>
                    <p class="mll-content-header-title">我的订单</p>
                    <span class="more">查看全部订单</span>
                    <i class="mll-content-header-ico"></i>
            </div>
            <ul class="content-ul2">
                <li class="mll-content-ul-one">
                    <a href="#">
                        <i></i>
                        <p>待付款</p>
                    </a>
                </li>
                <li class="mll-content-ul-two">
                    <a href="#">
                        <i></i>
                        <p>代发货</p>
                    </a>
                </li>
                <li class="mll-content-ul-three">
                    <a href="#">
                        <i></i>
                        <p>待收货</p>
                    </a>
                </li>
                <li class="mll-content-ul-four">
                    <a href="#">
                        <i></i>
                        <p>待评价</p>
                    </a>
                </li>
                <li class="mll-content-ul-five">
                    <a href="#">
                        <i></i>
                        <p>售后服务</p>
                    </a>
                </li>
            </ul>
        </div>

        <div class="mll-content-list1">
            <div class="mll-content-header">
                <span class="mll-content-header-span"></span>
                    <p class="mll-content-header-title">我的钱包</p>
                    <span class="more">更多</span>
                    <i class="mll-content-header-ico"></i>
            </div>
            <ul class="content-ul2">
                <li class="mll-content-ul-one">
                    <a href="#">
                        <i></i>
                        <p>待付款</p>
                    </a>
                </li>
                <li class="mll-content-ul-two">
                    <a href="#">
                        <i></i>
                        <p>代发货</p>
                    </a>
                </li>
                <li class="mll-content-ul-three">
                    <a href="#">
                        <i></i>
                        <p>待收货</p>
                    </a>
                </li>
                <li class="mll-content-ul-four">
                    <a href="#">
                        <i></i>
                        <p>待评价</p>
                    </a>
                </li>
                <li class="mll-content-ul-five">
                    <a href="#">
                        <i></i>
                        <p>售后服务</p>
                    </a>
                </li>
            </ul>
        </div>

        <div class="mll-content-list1">
            <div class="mll-content-header">
                <span class="mll-content-header-span"></span>
                    <p class="mll-content-header-title">客户服务</p>
                   
            </div>
            <ul class="content-ul2">
                <li class="mll-content-ul-one">
                    <a href="#">
                        <i></i>
                        <p>待付款</p>
                    </a>
                </li>
                <li class="mll-content-ul-two">
                    <a href="#">
                        <i></i>
                        <p>代发货</p>
                    </a>
                </li>
                <li class="mll-content-ul-three">
                    <a href="#">
                        <i></i>
                        <p>待收货</p>
                    </a>
                </li>
                <li class="mll-content-ul-four">
                    <a href="#">
                        <i></i>
                        <p>待评价</p>
                    </a>
                </li>
                <li class="mll-content-ul-five">
                    <a href="#">
                        <i></i>
                        <p>售后服务</p>
                    </a>
                </li>
            </ul>
        </div>
    </div>
    </div>
</template>

<script>
import Header from "@common/components/header"
export default {
    name:"mine",
    components:{
        Header,
    },
    data(){
        return{
            title:"我的美乐乐",
        }
    }
}
</script>

<style lang="scss" scoped>
.main{
    font-size:.14rem;
    position: absolute;
    top:0;
    left: 0;
    bottom:0;
    right:0;
    padding-top:.4rem;
    padding-bottom: 0.5rem;
    background:#efefef;
    overflow: auto;
}
#mine{
    width:100%;
    height:100%;
    overflow:auto;
}
.mll-user-banner{
    width:3.2rem;
    height:1.35rem;
    background:red;
    background:url("//image.meilele.com/wap/images/user/user-head-bg.gif");
    background-size: cover;
    position: relative;
}
.mll-user-banner .set{
    display: inline-block;
    width: 0.18rem;
    height: 0.18rem;
    background-image: url(//image.meilele.com/wap/images/user/m-user-ico3.png);
    background-size: 0.25rem 1.45rem;
    background-position: 0 -0.14rem;
    position: absolute;
    right: 0.47rem;
    top: 0.15rem;
}
.mll-user-banner .message{
    display: inline-block;
    width: 0.18rem;
    height: 0.14rem;
    background-image: url(//image.meilele.com/wap/images/user/m-user-ico3.png);
    background-size: 0.25rem 1.45rem;
    background-position: 0 0;
    position: absolute;
    right: 0.15rem;
    top: 0.18rem;
}
.mll-login-banner{
    width: 70%;
    display: inline-block;
    position: absolute;
    top: 50%;
    margin-top: -0.55rem;
    display: flex;
}
.mll-login-banner .mll-login{
    box-sizing: border-box;
    width: 0.66rem;
    height: 0.66rem;
    margin-left: 0.10rem;
    padding: 0.03rem;
    border-radius: 50%;
    background-color: rgba(255,255,255,0.1);
}
.mll-login-banner .mll-login div{
    width: 0.60rem;
    height: 0.60rem;
    border-radius: 50%;
    overflow: hidden;
}
.mll-login-banner .mll-login div img{
    width: 100%;
    height: 100%;
    border-radius: 0.60rem;
    background-color: #fff;
}
.mll-user-info{
    margin-left: 0.12rem;
    color: #fff;
}
.mll-user-info .mll-user-name{
    font-size: 0.16rem;
    color:#fff;
    height: 0.14rem;
    line-height: 0.14rem;
    margin: 0.18rem 0 0.08rem;
}
.mll-user-info .mll-user-lv{
    font-size: 0.12rem;
    height: 0.12rem;
    line-height: 0.12rem;
    color:#fff;
}
.mll-header-list{
    width: 3.2rem;
    height: 45px;
    background: rgba(103,63,97,.8);
    position: absolute;
    bottom: 0;
    padding: 0 0.14rem;
}
.mll-header-list li{
    width: 33.33%;
    height: 100%;
    float: left;
    text-align: center;
    color: #fff;
    padding-top: 0.1rem;
}
.mll-header-list li a{
    color: #333;
    text-decoration: none;
    outline: 0;
}
.mll-header-list li a p{
    font-size: 0.12rem;
    color: #fffefe;
    margin-top: -1px;
}
.mll-content-list1{
    width: 100%;
    background: #fff;
    position: relative;
    margin-top:0.1rem;
}
.mll-content-header{
    height: 0.45rem;
    margin-left: 0.10rem;
    line-height: 0.45rem;
    position: relative;
}
.mll-content-header-span{
    display: inline-block;
    width: 0.25rem;
    height: 0.25rem;
    background-image: url(//image.meilele.com/wap/images/user/m-user-ico.png);
    background-size:  1.50rem 1.50rem;
    background-repeat: no-repeat;
    margin: 0.10rem 0.01rem;
    float: left;
    background-position: 0 -0.19rem;
}
.mll-content-header-title{
    float: left;
    color: #333;
    font-size: 0.16rem;
    margin-left: 0.09rem;
}
.mll-content-header .more {
    float: right;
    margin-right: 0.28rem;
    color: #999;
}
.mll-content-header .mll-content-header-ico {
    position: absolute;
    top: 50%;
    right: 0.15rem;
    display: block;
    width: 0.0rem;
    height: 0.13rem;
    background-image: url(//image.meilele.com/wap/images/user/m-user-ico.png);
    background-position: -1.42rem -0.13rem;
    background-size: 1.5rem 1.5rem;
    margin-top: -0.07rem;
    background-repeat: no-repeat;
}
.content-ul2{
    padding: 0 0.13rem;
    position: relative;
    height: 0.59rem;
}
.content-ul2 li{
    width: 20%;
    height: 100%;
    float: left;
    text-align: center;
    position: relative;
    left: 0;
}
.content-ul2 li i{
    width: 23px;
    height: 19px;
    background-position: -127px -133px;
    display: inline-block;
    margin-top: 14px;
    position: relative;
    background-image: url(//image.meilele.com/wap/images/user/m-user-ico.png?v1);
    background-size: 150px 150px;
    background-repeat: no-repeat;
}
.content-ul2 li p{
    font-size: 12px;
    margin-top: -1px;
    color: #666;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
}
</style>