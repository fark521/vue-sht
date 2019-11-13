<template>
    
    <div class="main">
        <header>
            <div class="header-content">
                <img src="https://static.mll3321.com/mll/common/i/logo2.png"/>
                <v-touch tag="div" class="search" @tap="handleSearch()">
                    <i class="iconfont icon-sousuo"></i>
                    <span>搜索商品</span>
                </v-touch>
                <div class="location" @click="handlepush()">
                    <span>{{this.$store.state.city.nm}}</span>
                    <i class="iconfont icon-xiala"></i>
                </div>
            </div>
            <div class="header-nav">
                <ul>
                    <li v-for="(item,index) in arr1"
                    :key="index"
                    >{{item.name}}</li>
                </ul>
            </div>
        </header>
        <div class="content" ref="home">
            <div class="banner">
                <Banner/>
            </div>
            <div class="active-bg">
                <ul>
                    <li
                    v-for="(item,index) in arr2" 
                    :key="index">
                    <img :src="item.url"/>
                    <span>{{item.title}}</span>
                    </li>
                </ul>
            </div>
            <div class="index-groupbuy">
                <h3>
                    <span>现实抢购</span>
                    <i class="iconfont icon-you"></i>
                </h3>
                <ul>
                    <li v-for="(item,index) in tg_goods"
                    :key="index">
                        <img :src="'http://image.meilele.com/'+item.img_url"/>
                        <i>抢购中</i>
                        <div class="countdown">
                            <img src="http://static.mll3321.com/wap/dev/mpg/index/i/click.png"/>
                            <span>还剩250天20小时</span>
                        </div>
                        <p>{{item.title}}</p>
                        <div class="price">
                            <span>{{item.good_price}}</span>
                            <span>{{item.ori_price}}</span>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="index-new-product">
                <h3>
                    <span>新品首发</span>
                    <i class="iconfont icon-you"></i>
                </h3>
                <div class="new-content">
                    <div class="left">
                        <img src="http://image.meilele.com//images/upload/201908/7f63ed785cb085d0c276bd810eaaa9e8.jpg"/>
                        <div class="abso">
                            <p>清新实木餐台套装</p>
                            <i>￥4599</i>
                        </div>
                    </div>
                    <div class="right">
                        <img src="http://img004.mll3321.com//images/upload/201908/e59e3ae6094e76e963296a9228cdc6f5.jpg"/>
                        <img src="//img003.mll3321.com//images/upload/201908/61fad1da0290008ef32cc83c71025121.jpg"/>
                        <div class="abso">
                            <p>1.8米鹅掌揪实木床</p>
                            <i>￥8599</i>
                        </div>
                        <div class="abso">
                            <p>皮布沙发套装</p>
                            <i>￥24797</i>
                        </div>
                    </div>
                </div>
            </div>
            <div class="index-guess">
                <h3>
                    <span>猜你喜欢</span>
                </h3>
                <ul>
                    <li v-for="(item,index) in goodList"
                    :key="index">
                        <img :src="'http://image.meilele.com/'+item.goods_thumb_1"/>
                        <div class="price">
                            <span>￥{{item.show_price}}</span>
                            <i v-for="(icon,idx) in item.activity_search_name_List"
                            :key="idx"
                            >{{icon}}</i>
                        </div>
                        <div class="name">{{item.new_goods_name}}</div>
                        <p>已售</p>
                    </li>
                </ul>
            </div>
        </div>
         <v-touch tag="em" class="iconfont icon-shang" @tap="handleTop()"></v-touch>
        <Bottom/>
    </div>
</template>

<script>
import Bottom from "@common/components/bottom"
import Banner from "@common/components/wheel";
import {homegoods,homelists} from "@api/home";
export default {
    name:"home",
    components:{
        Banner,
        Bottom,
    },
    created(){
        this.handleGetGoods();
        this.handleGetGoodList();
    },
    data(){
        return{
            arr1:[
                {
                    name:"首页"
                },
                {
                    name:"新品"
                },
                {
                    name:"每日特卖"
                },
                {
                    name:"沙发"
                },
                {
                    name:"床"
                },
                {
                    name:"床垫"
                },
                {
                    name:"实木家具"
                },
                {
                    name:"地板"
                },
            ],
            arr2:[
                {
                    title:"体验馆",
                    url:"http://image.meilele.com/images/201907/1563130946587908766.jpg"
                },
                {
                    title:"排行榜",
                    url:"http://image.meilele.com/images/201907/1563130976630267490.jpg"
                },
                {
                    title:"每日特卖",
                    url:"http://image.meilele.com/images/201907/1563131021896383462.jpg"
                },
                {
                    title:"阅木",
                    url:"http://image.meilele.com/images/201907/1563131064221658082.jpg"
                },
                {
                    title:"实木家具",
                    url:"http://image.meilele.com/images/201907/1563131080096635544.jpg"
                },
                {
                    title:"沙发",
                    url:"http://image.meilele.com/images/201907/1563131093521181710.jpg"
                },
                {
                    title:"床",
                    url:"http://image.meilele.com/images/201907/1563131115705453289.jpg"
                },
                {
                    title:"床垫",
                    url:"http://image.meilele.com/images/201907/1563131129464675923.jpg"
                },
                
            ],
            tg_goods:[],
            goodList:[]
        }
    },
    methods:{
        async handleGetGoods(){
            let data = await homegoods();
            this.tg_goods=(data.result["2018Msy_tg"].goods_info)
        },
        async handleGetGoodList(){
            let data = await homelists();
            this.goodList=data.result;
        },
        handlepush(){
            this.$router.push("/city");
        },
        handleTop(){
            console.log(this.$refs.home.scrollTop);
            let _me=this;
            let time=setInterval(_=>{
                _me.$refs.home.scrollTop -= 100;
                if(_me.$refs.home.scrollTop<=0){
                    _me.$refs.home.scrollTop =0;
                    clearInterval(time);
                }
            },50);
        },
        handleSearch(){
            this.$router.push('./search');
        }
    }
}
</script>

<style lang="scss" scoped>
    .main{
        font-size: .14rem;
        position: absolute;
        top:0;
        left:0;
        right:0;
        width: 100%;
        padding-top:.62rem;
        padding-bottom:.5rem;
        overflow: auto;
        header{
            width: 100%;
            height:.62rem;
            position: fixed;
            top:0;
            left:0;
            background:#fff;
            z-index: 10;
            .header-content{
                width: 100%;
                height: .35rem;
                padding: .05rem .1rem;
                display: flex;
                justify-content: space-between;
                align-items: center;
                img{
                    width: .72rem;
                    height: .25rem;
                }
                .search{
                    width: 1.65rem;
                    height: 0.25rem;
                    background:#eee;
                    color:#aaa;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    border-radius: .05rem;
                    i{
                        margin-right:.05rem;
                    }
                }
                .location{
                    width: .5rem;
                    height: .25rem;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
            }
            .header-nav{
                width: 100%;
                height: .27rem;
                display: flex;
                ul{
                    height: 100%;
                    white-space: nowrap;
                    overflow-x: auto;
                    display: flex;
                    align-items: center;
                    li{
                        padding:0 .04rem;
                        margin-right:.14rem;
                        &:first-child{
                            margin-left:.1rem;
                        }
                        &:last-child{
                            padding-right:.14rem;
                        }
                    }
                    router-link-active{
                        color:red;
                        border-bottom:1px solid #c33;
                    }
                }
                ul::-webkit-scrollbar {
                        display: none;
                    }
            }
        }
        .content{
            width: 100%;
            min-height:0;
            background:#eee;
            .banner{
                width: 100%;
                height: 1.55rem;
                background: skyblue;
            }
            .active-bg{
                width: 100%;
                height: 1.4rem;
                display: flex;
                margin-bottom:.05rem;
                padding:0.05rem 0.06rem 0.13rem 0.06rem;
                background:#fff;
                ul{
                    width: 100%;
                    height: 100%;
                    display: flex;
                    flex-wrap: wrap;
                    font-size: .12rem;
                     li{
                         width: 25%;
                         height: 0.56rem;
                         flex-direction: column;
                         display: flex;
                         justify-content: space-around;
                         align-items: center;
                         margin-bottom:.05rem;
                        img{
                            width:0.47rem;
                            height: 0.45rem;
                        }
                     }
                }
            }
            .index-groupbuy{
                width: 100%;
                height: 2.68rem;
                padding-bottom:0.25rem;
                margin-bottom:0.05rem;
                background: #fff;
                h3{
                    width: 100%;
                    height: .52rem;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-size: .16rem;
                    span{
                        margin-right:.1rem;
                    }
                }
                ul{
                    height: 1.96rem;
                    display: flex;
                    overflow-x: auto;
                    flex-wrap: nowrap;
                    font-size:0.12rem;
                    padding-right:0.15rem;
                    li{
                        width: 1.25rem;
                        height: 100%;
                        margin-right:.1rem;
                        position: relative;
                        &:first-child{
                            margin-left:.15rem;
                        }
                        &:last-child{
                            margin-right:.15rem;
                        }
                        i{
                            position:absolute;
                            top:0;
                            left:0;
                            width:.38rem;
                            height: .16rem;
                            padding:.03rem .04rem;
                            background:#ff7a6a;
                            border-radius: 0.02rem;
                            color:#fff;
                            font-size: 0.10rem;
                        }
                        img{
                            width: 1.25rem;
                            height: 1.25rem;
                            margin-bottom: .1rem;
                        }
                        .countdown{
                            height: .16rem;
                            width:100%;
                            margin-bottom:0.06rem;
                            display: flex;
                            justify-content: space-around;
                            color: #bf915a;
                            background: #fff4e6;
                            border-radius: 0.05rem;
                            img{
                                height:0.12rem;
                                width: 0.12rem;
                                margin-top:0.02rem;
                            }
                        }
                        p{
                            width: 100%;
                            height: 0.14rem;
                            padding:0 0.05rem;
                            margin-bottom: 0.03rem;
                            overflow: hidden;
                            white-space: nowrap;
                            text-overflow: ellipsis;
                        }
                        .price{
                            width: 100%;
                            height: 0.12rem;
                            padding:0 0.05rem;
                            span:nth-child(1){
                                margin-right:0.05rem;
                                color:red;
                            }
                            span:nth-child(2){
                                color:#aaa;
                                text-decoration: line-through;
                            }
                        
                        }
                    }
                }
                ul::-webkit-scrollbar {
                        display: none;
                }
            }
            .index-new-product{
                font-size: 0.12rem;
                width: 100%;
                height: 2.87rem;
                padding-bottom:.25rem;
                margin-bottom:0.05rem;
                background:#fff;
                h3{
                    width: 100%;
                    height: .52rem;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-size: .16rem;
                    span{
                        margin-right:.1rem;
                    }
                }
                .new-content{
                    width: 100%;
                    height:2.1rem;
                    padding:0 0.15rem;
                    display: flex;
                    justify-content: space-around;
                    .right,.abso{
                        display: flex;
                        flex-direction: column;
                        justify-content: space-around;
                    }
                    .left,.right{
                        width: 1.425rem;
                        height: 100%;
                        position: relative;
                        img{
                            width: 100%;
                        }
                        .abso{
                            position:absolute;
                            i{
                            color:red;
                        }
                        }
                    }
                    .left .abso{
                        top:.1rem;
                        left:.1rem;
                    }
                    .right {
                        .abso:nth-of-type(1){
                            top:.1rem;
                            left:.1rem;
                        }
                        .abso:nth-of-type(2){
                            top:1.2rem;
                            left:.1rem;
                        }
                    }
                }
            }
            .index-guess{
                width: 100%;
                min-height: 0;
                margin-bottom:0.05rem;
                background: #fff;
                h3{
                    width: 100%;
                    height: .52rem;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-size: .16rem;
                }
                ul{
                    width: 100%;
                    min-height: 0;
                    display: flex;
                    flex-wrap: wrap;
                    padding:0 0.05rem 0 0.15rem;
                    li{
                        width:1.4rem;
                        height: 1.49rem;
                        margin-right:0.1rem;
                        margin-bottom:0.22rem;
                        img{
                            width:100%;
                            height: .92rem;
                            margin-bottom: 0.05rem;
                        }
                        .name{
                            width: 100%;
                            white-space: nowrap;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            font-size: .13rem;
                        }
                        .price {
                            display: flex;
                            align-items: center;
                            color:red;
                            i{
                                margin-left:0.1rem;
                                background:#ff7a6a;
                                color: #fff;
                                font-size: 0.09rem;
                                padding:.02rem .05rem;
                            }
                        }
                    }
                }
            }
        }
        em{  
            width: .3rem;
            height: .3rem;
            border-radius: 50%;
            background: #fff;
            position: fixed;
            bottom:0.7rem;
            right:.1rem;
            font-size: .3rem;
            color:#aaa;
        }
    }
</style>
