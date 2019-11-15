<template>
    
    <div class="main">
        <Header :title="title">
            <i slot="i">· · ·</i>
        </Header>
        <div class="mine">
            <div class="Head-portrait">
                <v-touch @tap="handleLofin()" class="img" tag="div">点击登陆</v-touch>
            </div>
            <ul class="head-nav">
                <li>
                    <span>收藏</span>
                    <span>0</span>
                </li>
                <li>
                    <span>红包卡卷</span>
                    <span>0</span>
                </li>
                <li>
                    <span>足迹</span>
                    <span>0</span>
                </li>
            </ul>
        </div>
        <div class="order">
            <div class="top">
                <div class="left">
                    <i class="iconfont icon-wenben"></i>
                    <span>我的订单</span>
                </div>
                <div class="right">
                    <span>查看全部订单</span>
                    <i class="iconfont icon-you"></i>
                </div>
            </div>   
            <ul>
                <li v-for="(item,index) in arr1" :key="index">
                    <i class="iconfont" v-html="item.icon"></i>
                    <span>{{item.name}}</span>
                </li>
            </ul>
        </div>
        <div class="wallet">
            <div class="top">
                <div class="left">
                    <i class="iconfont icon-daifukuan"></i>
                    <span>我的钱包</span>
                </div>
                <div class="right">
                    <span>更多</span>
                    <i class="iconfont icon-you"></i>
                </div>
            </div>   
            <ul>
                <li v-for="(item,index) in arr2" :key="index">
                    <i class="iconfont" v-html="item.icon"></i>
                    <span>{{item.name}}</span>
                </li>
            </ul>
        </div>
        <div class="server">
            <div class="top">
                <div class="left">
                    <i class="iconfont icon-zixunfuwu"></i>
                    <span>客户服务</span>
                </div>
            </div>   
            <ul>
                <li v-for="(item,index) in arr3" :key="index">
                    <i class="iconfont" v-html="item.icon"></i>
                    <span>{{item.name}}</span>
                </li>
            </ul>
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
            arr1:[
                {
                    name:"待付款",
                    icon:"&#xe60b;",
                },
                {
                    name:"待发货",
                    icon:"&#xe669;",
                },
                {
                    name:"待收货",
                    icon:"&#xe604;",
                },
                {
                    name:"待评价",
                    icon:"&#xe642;",
                },
                {
                    name:"售后服务",
                    icon:"&#xe631;",
                }
            ],
            arr2:[
                {
                    name:"0张优惠卷",
                    icon:"&#xe7ee;",
                },
                {
                    name:"0个红包",
                    icon:"&#xe644;",
                },
                {
                    name:"0个乐币",
                    icon:"&#xe60d;",
                },
                {
                    name:"0个金币",
                    icon:"&#xe60c;",
                },
            ],
            arr3:[
                {
                    name:"退款明细",
                    icon:"&#xe624;",
                },
                {
                    name:"申请保价",
                    icon:"&#xe65c;",
                },
                {
                    name:"纠纷投诉",
                    icon:"&#xe642;",
                },
                {
                    name:"在线服务",
                    icon:"&#xe64d;",
                }
            ],
        }
    },
    methods:{
        handleLofin(){
            this.$router.push("/logins");
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
        .mine{
            width: 100%;
            height: 1.35rem;
            background:url('http://image.meilele.com/wap/images/user/user-head-bg.gif') 0 -.84rem;
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        .Head-portrait{
            width: 100%;
            height: .9rem;
             text-align: center;
             line-height: 1rem;
             color:#c33;
            padding:0 .12rem;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: .12rem;
            .img{
                border-radius: 50%;
                width: .66rem;
                height: .66rem;
                background: red;
                background: url('http://image.meilele.com/wap/images/user/m-user-ico.png') 2.65rem -7.8rem;
            }
        }
        .head-nav{
            display: flex;
            width: 100%;
            height:.45rem;
            background: rgba(103,63,97,.8);
            color:#fff;
            li{
                width: 33.3%;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: space-around;
            }
        }
    }


    .order,.wallet,.server{
        width: 100%;
        height: 1rem;
        margin-top:.1rem;
        background: #fff;
        border-top:1px solid #e1e1e1;
        border-bottom:1px solid #e1e1e1;
        color:#666;
        .top{
            width: 100%;
            height: .45rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 1px solid #e5e5e5;
            .left{
                width: 50%;
                padding-left:.15rem;
                i{
                    color:#fff;
                    background:#f90;
                    font-size:.26rem;
                    margin-right:.1rem;
                }
                span{
                    font-size: .16rem;
                }
            }
            .right{
                padding-right:.1rem;
            }
        }
        ul{
            width: 100%;
            height: .6rem;
            display: flex;
            justify-content: center;
            align-items: center;
            li{
                display: flex;
                flex-direction: column;
                justify-content: space-around;
                align-items: center;
                padding:0 .1rem;
                i{
                    font-size: .25rem;
                }
                span{
                    font-size: .13rem;
                }
            }
        }
    }
    .wallet .top .left i{
        background:purple;
    }
    .server .top .left i{
        background:#0af;
    }
</style>