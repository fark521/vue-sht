<template>
    <div class="main">
        <Header :title="title">
            <i slot="i">· · ·</i>
        </Header>
        <div class="content" v-for="(item,index) in details" :key="index">
            <div class="message" >
                <h3>{{item.expr_name}}</h3>
                <p>{{item.addr}}</p>
                <span>时间：{{item.sale_time}}</span>
                <span>电话：{{item.phone}}</span>
                <i class="iconfont icon-icon_community_line">咨询</i>
                <i class="iconfont icon-daohang">导航</i>
            </div>
            <div class="vivid">
                <div class="head">
                    <h3>体验馆形象</h3>
                    <span>更多</span>
                    <i class="iconfont icon-you"></i>
                </div>
                <ul>
                    <li>
                        <img :src="'https://img001.mll3321.com/'+item.expr_img"/>
                    </li>
                    <li>
                         <img :src="'https://img001.mll3321.com/'+item.map_img"/>
                    </li>
                </ul>
                <div class="server">
                    <i class="iconfont icon-duihao">免费量房</i>
                    <i class="iconfont icon-duihao">免费设计</i>
                    <i class="iconfont icon-duihao">到店有礼</i>
                </div>
            </div>
        </div>
        <div class="footer">
            <div class="left">
                <i class="iconfont icon-icon_community_line"></i>
                <span>在线咨询</span>
            </div>
            <div class="right">
                <i class="iconfont icon-location"></i>
                <span>获取地址</span>
            </div>
        </div>
    </div>
</template>

<script>
import {museumApi} from "@api/city_museum";
import Header from "@common/components/header"
export default {
    name:"hall",
    components:{
        Header,
    },
    data(){
        return{
            title:"品牌体验馆",
            details:[],
            id:"",
        }
    },
    created(){
        this.handleLocation(this.$store.state.city.cityId);
        this.id = this.$route.query.id;
    },
    methods:{
        async handleLocation(cid){
            let data = await museumApi(cid);
            this.details.push(data.data[this.id]);
            console.log(this.details);
        }
    },
}
</script>

<style lang="scss" scoped>
    .main{
        font-size: .14rem;
        position: absolute;
        top:0;
        left:0;
        right:0;
        bottom:0;
        width: 100%;
        padding-top:.4rem;
        padding-bottom:.6rem;
        overflow: auto;
        background: #f5f5f5;
        .content{
            width: 100%;
            min-height:0;
            .message{
                width: 100%;
                min-height:1.28rem;
                padding:.15rem;
                margin-bottom:.1rem;
                background:#fff;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                position: relative;
                h3{
                    width:100%;
                    height:.2rem;
                    color:#333;
                }
                p{
                    width: 100%;
                    height: .3rem;
                    margin-bottom:.14rem;
                    font-size:.12rem;
                    color:#666;
                }
                span{
                    display: block;
                    width: 100%;
                    min-height:.15rem;
                    font-size: .12rem;
                    color:#666;
                }
                i{
                    width: .41rem;
                    height: .41rem;
                    border-radius: 50%;
                    background: #ff6e6d;
                    opacity: .8;
                    font-size:.14rem;
                    color:#fff;
                display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    position: absolute; 
                }
                i:nth-of-type(1){
                    bottom:.08rem;
                    right:.8rem;
                }
                i:nth-of-type(2){
                    bottom:.08rem;
                    right:.3rem;
                }
            }
            .vivid{
                width: 100%;
                height: 1.94rem;
                display: flex;
                flex-direction: column;
                margin-bottom:.1rem;
                background: #fff;
                .head{
                    display: flex;
                    justify-content: space-around;
                    align-items: center;
                    width: 100%;
                    height: .5rem;
                    h3{
                        width: 80%;
                        padding-left:.2rem;
                    }
                    span,i{
                        width: 10%;
                        color:#666;
                        font-size: .13rem;
                    }
                }
                ul{
                    width: 100%;
                    height: 1rem;
                    display: flex;
                    justify-content: space-around;
                    li{
                        width: 1.3rem;
                        height: 1rem;
                        img{
                            height: 1rem;
                            width: 1.3rem;
                            border:1px solid #e5e5e5;
                            border-radius: .1rem;
                        }
                    }
                }
                .server{
                    width: 100%;
                    height:.44rem;
                    display: flex;
                    align-items: center;
                    padding-left:.15rem;
                    i{
                        color:red;
                        font-size: .14rem;
                        margin-right:.1rem;
                    }
                }
            }
        }
        .footer{
            width: 100%;
            height: .6rem;
            display: flex;
            justify-content: space-around;
            align-items: center;
            background: #fff;
            position:fixed;
            bottom: 0;
            left: 0;
            .left,.right{
                background: #f95656;
                width:1.4rem;
                height: .4rem;
                border-radius: .05rem;
                color:#fff;
                font-size: .18rem;
                display: flex;
                padding:0 .1rem;
                justify-content: space-around;
                align-items: center;
                i{
                    font-size: .22rem;
                }
            }
            .right{
                background: #ff893b;
            }
        }
    }
</style>