<template>
    <div class="main">
        <header ref="header">
            <v-touch tag="i" class="iconfont icon-icon-left" @tap="handleSwitch()"></v-touch>
            <span>体验馆列表</span>
            <div class="location" @click="handlepush()">
                <span>{{this.$store.state.city.nm}}</span>
                <i class="iconfont icon-xiala"></i>
            </div>
        </header>
        <div class="expr">
            <div class="expr_banner">
                <img src="https://img004.mll3321.com//images/upload/201901/9c24c1673afb0b47a3380acd6462f537.jpg"/>
            </div>   
            <router-link tag="div" class="expr_content" v-for="(item,index) in list" :key="index" 
            :to="'/hall/?id='+index">
                <div class="list">
                    <div class="title">
                        <div class="left">
                            <div class="L_top">
                                <span>{{item.expr_name}}</span>
                                <i class="iconfont icon-location"></i>
                                <span>9.17km</span>
                            </div>
                            <p>{{item.addr}}</p>
                        </div>
                        <i class="iconfont icon-you" ></i>
                    </div>
                    <div class="staff">
                        <span><img :src="item.image_url == '' ? 'https://static.mll3321.com/wap/mpg/expr/i/guide-img-default.png' : 'https://img001.mll3321.com/'+item.image_url"></span>
                        <span>联系他</span>
                        <i class="iconfont icon-icon_community_line"></i>
                    </div>
                    <div class="icon">
                        <span>满5000减200</span>
                        <span>满3000减100</span>
                        <span>满1000减50</span>
                        <span>到店有礼</span>
                    </div>
                    <div class="detail">
                        <p>
                            <i class="iconfont icon-location"></i>
                            <span>获取地址</span>
                        </p>
                        <p>
                            <i class="iconfont icon-daohang"></i>
                            <span>地图导航</span>
                        </p>
                    </div>
                </div>
  
            </router-link> 
        </div>
        <div class="err_server">
            <img src="//static.mll3321.com/wap/mpg/expr/i/expr-info.png">
            <img src="//static.mll3321.com/wap/mpg/expr/i/expr-service.png">
        </div>
        <Bottom/>
    </div>
</template>

<script>
import {museumApi} from "@api/city_museum";
import Bottom from "@common/components/bottom";
export default {
    name:"museum",
    components:{
        Bottom,
    },
    data(){
        return{
            list:[],
        }
    },
    created(){
        this.handleLocation(this.$store.state.city.cityId);
    },
    methods:{
        handleSwitch(){
            this.$router.back();
        },
        handlepush(){
            this.$router.push("/city");
        },
        async handleLocation(cid){
            let data = await museumApi(cid);
            this.list = data.data;
        }
    },
    
}
</script>

<style lang="scss" scoped>
    .main{
        position: absolute;
        top:0;
        left:0;
        right:0;
        bottom:0;
        padding-top:.4rem;
        font-size: .14rem;
        color:#333;
        overflow: auto;
        header{
            width: 100%;
            height: .4rem;
            background: #fff;
            display: flex;
            justify-content: space-around;
            align-items: center;
            position: fixed;
            top:0;
            left:0;
            z-index: 10;
            i{
                width: 25%;
                 padding-left:.15rem;
                 font-size:.2rem;
            }
            span{
                width: 50%;
                text-align: center;
                font-size:.16rem;
            }
            .location{
                width: 25%;
                height: .25rem;
                display: flex;
                justify-content: center;
                align-items: center;
                i{
                    padding-left: 0;
                }
                span{
                    font-size: .14rem;
                }
            }
        }
        .expr{
            width: 100%;
            min-height:0;
            background: #f5f5f5;
            .expr_banner{
                height:1.3rem;
                width: 100%;
                margin-bottom:-.4rem;
                img{
                    width: 100%;
                }
            }
            .expr_content{
                width: 100%;
                min-height:0;
                margin-top:.15rem;
                padding:0 .1rem 0.05rem .1rem;
                position: relative; 
                .list{
                    width: 3rem;
                    height: 2.07rem;
                    background: #fff;
                    margin-bottom: .15rem;
                    border-radius: .1rem;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    align-items: center;
                    .title{
                        width: 2.7rem;
                        height: .36rem;    
                        padding-top:.15rem ;
                        display: flex;
                        .left{
                            width: 90%;
                            height: .36rem;
                            display: flex;
                            flex-direction: column;
                            justify-content: space-between;
                            font-size:.12rem;
                            .L_top{
                                width: 100%;
                                height: .2rem;
                                line-height: .2rem;
                                span{
                                    margin-right:.05rem;
                                    font-size:.14rem;
                                    &:nth-of-type(2){
                                        margin-left:.05rem;
                                        font-size:.12rem;
                                        color:#999;
                                    }
                                }
                                i{
                                    font-size: .12rem;
                                }
                            }
                            P{
                                width: 100%;
                                height: .16rem;
                                color:#999;
                                line-height: .16rem;
                                overflow: hidden;
                                white-space: nowrap;
                                text-overflow: ellipsis;
                            }
                        }
                        i{
                            width: 5%;
                            font-size: 0.18rem;
                             margin-top:.08rem;
                        }
                    }
                    .staff{
                        width: 2.7rem;
                        height: .45rem;
                        padding:0 .15rem;
                        display: flex;
                        align-items: center;
                        margin-top:.15rem;
                        span{
                            display: flex;
                            margin-right:.2rem;
                            &:nth-of-type(1){
                                width: .45rem;
                                height: .45rem;
                                border-radius: 50%;
                                img{
                                    width: .45rem;
                                    height: .45rem;
                                    border-radius: 50%;
                                }
                            }
                        }
                        
                    }
                    .icon{
                        width: 100%;
                        height: .42rem;
                        padding:.05rem;
                        display: flex;
                        flex-wrap: wrap;
                        span{
                            display: flex;
                            width: .58rem;
                            height: .15rem;
                            font-size: .09rem;
                            padding:.005rem;
                            justify-content: center;
                            margin-left: .1rem;
                            margin-bottom: .06rem;
                            border:1px solid #fb745a;
                            color:#fb745a;
                            &:nth-of-type(3){
                                margin-right:.4rem;
                            }
                            &:nth-of-type(4){
                                border:1px solid #ff9d11;
                                color:#ff9d11;
                            }
                        }
                        
                    }
                    .detail{
                        width: 90%;
                        height: .4rem;
                        padding-top:.05rem;
                        display: flex;
                        border-top:1px solid #f5eeee;
                        P{
                            width: 50%;
                            height: 100%;
                            display: flex;
                            justify-content: center;
                            font-size:.16rem;
                            align-items: center;
                            i{
                                margin-right: .05rem;
                            }
                        }
                    }
                }
            }
        }
        .err_server{
            width: 100%;
            img{
                width: 100%;
            }
        }
    }
</style>