<template>
    <div class="today">
        <Header :title="title"/>
        <div class="nav">
            <ul class="nav_list">
                <li class="list_item" v-for="(item,index) in tod" :key="index"><a href="#">{{item.name}}</a></li>
            </ul>
        </div>
        
        <div class="shop">
            <div class="swiper">
                 <van-swipe :autoplay="3000" indicator-color="white">
                    <van-swipe-item
                    v-for="(item,index) in todayimg" :key="index">
                    <img :src="item"/>
                    </van-swipe-item>
                </van-swipe>
            </div>

            <div class="today-buy">
                <h3 class="todaytitle">今日必买</h3>
                <div class="swiper_content">
                    <ul class="content_list">
                        <li class="today_list" v-for="(item,index) in todaybuy" :key="index">
                            <a href="#">
                                <img :src="'https://img003.mll3321.com//'+item.goods_img"/>
                            </a>
                            <h3 class="goods-title">
                                <a href="#">{{item.new_goods_name}}</a>
                            </h3>
                            <p class="goods-price">
                            ￥<span class="now">{{item.show_price}}</span>
                            <span class="orgin"></span>
                            </p>
                        </li>
                    </ul>
                </div>
        </div>



        <div class="floor-module" v-for="(item,index) in bigimg" :key="index">
            <div class="big_img">
                  <img :src=bigimg[index].img />        
            </div>
            <div class="recommed">
                <ul class="recommed_list">
                    <li class="recommed_item">
                        <a href="#" class="goods-img">
                            <img src="//img001.mll3321.com//images/small/313/width/180/height/180/mode/1/encrypt/877b658bb4b2d8beebd938d022fba79c/path/YKkxtD0+l8CT6mdTP0jUTosXyzGqRaYb484nDncYwHONm1jfRzWkc_ZfDzqdQtpqBOeBoInQss01m1_QU+p72A==.jpg"/>
                        </a>
                        <h3 class="goods-title">
                                KD排骨架 NC环保油漆1.8米双人床
                        </h3>
                        <p class="goods-price">
                                ￥<span class="now">3899</span>
                                <span class="orgin"></span>
                        </p>
                    </li>

                    <li class="recommed_item">
                        <a href="#" class="goods-img">
                            <img src="//img001.mll3321.com//images/small/313/width/180/height/180/mode/1/encrypt/877b658bb4b2d8beebd938d022fba79c/path/YKkxtD0+l8CT6mdTP0jUTosXyzGqRaYb484nDncYwHONm1jfRzWkc_ZfDzqdQtpqBOeBoInQss01m1_QU+p72A==.jpg"/>
                        </a>
                        <h3 class="goods-title">
                                KD排骨架 NC环保油漆1.8米双人床
                        </h3>
                        <p class="goods-price">
                                ￥<span class="now">3899</span>
                                <span class="orgin"></span>
                        </p>
                    </li>

                    <li class="recommed_item">
                        <a href="#" class="goods-img">
                            <img src="//img001.mll3321.com//images/small/313/width/180/height/180/mode/1/encrypt/877b658bb4b2d8beebd938d022fba79c/path/YKkxtD0+l8CT6mdTP0jUTosXyzGqRaYb484nDncYwHONm1jfRzWkc_ZfDzqdQtpqBOeBoInQss01m1_QU+p72A==.jpg"/>
                        </a>
                        <h3 class="goods-title">
                                KD排骨架 NC环保油漆1.8米双人床
                        </h3>
                        <p class="goods-price">
                                ￥<span class="now">3899</span>
                                <span class="orgin"></span>
                        </p>
                    </li>
                </ul>
            </div>

            <div class="floor-module-goods">
                <ul class="floor-module-goods-list">
                    <li>
                        <div class="goods-img">
                            <a href="#">
                                <img src="//img004.mll3321.com//images/small/175/width/280/height/280/mode/1/encrypt/01c1824b84777fe00e15252865e9455e/path/YKkxtD0+l8CT6mdTP0jUTosXyzGqRaYb484nDncYwHOrSHcPmBUkaJKVPZB1+dyFL3KbDPy3R4If0qiKAXbHmw==.jpg"/>
                            </a>
                        </div>
                        <h3 class="goods-title">
                            人气爆款 1.8米象牙白田园双人床 精美床头饰花公主床 排骨架床 
                    </h3>
                    <p class="goods-price">
                            ￥<span class="now">3899</span>
                            <span class="orgin"></span>
                    </p>
                    </li>
                    <li>
                        <div class="goods-img">
                            <a href="#">
                                <img src="//img004.mll3321.com//images/small/175/width/280/height/280/mode/1/encrypt/01c1824b84777fe00e15252865e9455e/path/YKkxtD0+l8CT6mdTP0jUTosXyzGqRaYb484nDncYwHOrSHcPmBUkaJKVPZB1+dyFL3KbDPy3R4If0qiKAXbHmw==.jpg"/>
                            </a>
                        </div>
                        <h3 class="goods-title">
                            人气爆款 1.8米象牙白田园双人床 精美床头饰花公主床 排骨架床 
                    </h3>
                    <p class="goods-price">
                            ￥<span class="now">3899</span>
                            <span class="orgin"></span>
                    </p>
                    </li>
                    <li>
                        <div class="goods-img">
                            <a href="#">
                                <img src="//img004.mll3321.com//images/small/175/width/280/height/280/mode/1/encrypt/01c1824b84777fe00e15252865e9455e/path/YKkxtD0+l8CT6mdTP0jUTosXyzGqRaYb484nDncYwHOrSHcPmBUkaJKVPZB1+dyFL3KbDPy3R4If0qiKAXbHmw==.jpg"/>
                            </a>
                        </div>
                        <h3 class="goods-title">
                            人气爆款 1.8米象牙白田园双人床 精美床头饰花公主床 排骨架床 
                    </h3>
                    <p class="goods-price">
                            ￥<span class="now">3899</span>
                            <span class="orgin"></span>
                    </p>
                    </li>
                    <li>
                        <div class="goods-img">
                            <a href="#">
                                <img src="//img004.mll3321.com//images/small/175/width/280/height/280/mode/1/encrypt/01c1824b84777fe00e15252865e9455e/path/YKkxtD0+l8CT6mdTP0jUTosXyzGqRaYb484nDncYwHOrSHcPmBUkaJKVPZB1+dyFL3KbDPy3R4If0qiKAXbHmw==.jpg"/>
                            </a>
                        </div>
                        <h3 class="goods-title">
                            人气爆款 1.8米象牙白田园双人床 精美床头饰花公主床 排骨架床 
                    </h3>
                    <p class="goods-price">
                            ￥<span class="now">3899</span>
                            <span class="orgin"></span>
                    </p>
                    </li>
                    <li>
                        <div class="goods-img">
                            <a href="#">
                                <img src="//img004.mll3321.com//images/small/175/width/280/height/280/mode/1/encrypt/01c1824b84777fe00e15252865e9455e/path/YKkxtD0+l8CT6mdTP0jUTosXyzGqRaYb484nDncYwHOrSHcPmBUkaJKVPZB1+dyFL3KbDPy3R4If0qiKAXbHmw==.jpg"/>
                            </a>
                        </div>
                        <h3 class="goods-title">
                            人气爆款 1.8米象牙白田园双人床 精美床头饰花公主床 排骨架床 
                    </h3>
                    <p class="goods-price">
                            ￥<span class="now">3899</span>
                            <span class="orgin"></span>
                    </p>
                    </li>
                    <li>
                        <div class="goods-img">
                            <a href="#">
                                <img src="//img004.mll3321.com//images/small/175/width/280/height/280/mode/1/encrypt/01c1824b84777fe00e15252865e9455e/path/YKkxtD0+l8CT6mdTP0jUTosXyzGqRaYb484nDncYwHOrSHcPmBUkaJKVPZB1+dyFL3KbDPy3R4If0qiKAXbHmw==.jpg"/>
                            </a>
                        </div>
                        <h3 class="goods-title">
                            人气爆款 1.8米象牙白田园双人床 精美床头饰花公主床 排骨架床 
                    </h3>
                    <p class="goods-price">
                            ￥<span class="now">3899</span>
                            <span class="orgin"></span>
                    </p>
                    </li>
                </ul>
            </div>
        </div>
        <Bottom/>
    </div>
    
    </div>
</template>

<script>
import Header from "@common/components/header"
import Bottom from "@common/components/bottom"
import Vue from 'vue';
import { Swipe, SwipeItem } from 'vant';
import {todaybuyApi} from "@api/today";
Vue.use(Swipe).use(SwipeItem);
export default {
    name:"today",
    components:{
        Header,
        Bottom,
    },
    data(){
        return{
            title:"每日特卖",
            todayimg:[
                "http://image.meilele.com/images/201810/1539640659545709426.jpg",
                "http://img002.mll3321.com/images/201810/1539735584317425260.jpg",
            ],
            todaybuy:[],   
            tod:[
                {
                    name:"今日特卖"
                },
                {
                    name:"日系简约"
                },
                {
                    name:"轻奢主义"
                },
                {
                    name:"真皮家具"
                },
                {
                    name:"小户专属"
                },
            ],
            bigimg:[
                {
                    img:"http://img004.mll3321.com//images/upload/201810/0ef1ce92f1133e2a2698200d7dc099db.jpg"
                },
                {
                    img:"http://img002.mll3321.com//images/upload/201810/e6fba6212f0ae9e6c757d3a739a52b14.jpg"
                },
                {
                    img:"http://img001.mll3321.com//images/upload/201901/a19c020e478cb0c714625422aa9e05a3.png"
                },
                {
                    img:"http://img001.mll3321.com//images/upload/201810/d8346665d81330208f0fe689558af115.jpg"
                },
            ]
        }
    },
    created(){
            this.handleGetTodayBuy();
    },
    methods:{
        async handleGetTodayBuy(){
            let data = await todaybuyApi();
            this.todaybuy = data.goods;
        }
    }
}
</script>

<style scoped>
.today{
    width:100%;
    height:100%;
    position: absolute;
    top:0;
    left:0;
    bottom: 0;
    right:0;
    padding-top:0.4rem;
}
.nav{
    width: 3.2rem;
    height:0.33rem;
    border-top: 1px solid #eee;
    display: flex;
    position: fixed;
    top:0.4rem;
    left:0;
    background:#fff;
    z-index: 10;
}
.nav_list{
    width:3.2rem;
    height:0.32rem;
    -white-space: nowrap;
    overflow-x: auto;
    display: flex;
    -align-items: center;
}
.list_item{
    font-size:0.13rem;
    flex-shrink: 0;
    width:0.56rem;
    height:0.32rem;
    text-align: center;
    line-height: 0.32rem;
    margin-left:0.1rem;
    float: left;
}
.list_item a{
    display: block;
    color:#666;
}

.shop{
    width:100%;
    height:100%;
    overflow-y:auto;
    padding-top:0.33rem;
}

.swiper{
    width:3.2rem;
    height:1.25rem;
}
.swiper img{
    width:100%;
    height:100%;
}
.today-buy{
    width:3.2rem;
    height:2.42rem;
}
.today-buy .todaytitle{
    width:3.2rem;
    height:0.43rem;
    text-align: center;
    line-height: 0.45rem;
    font-size:0.14rem;
}
.swiper_content{
    width:3.2rem;
    height:2rem;
    margin:0 auto;
}
.content_list{
    width:3.2rem;
    height:1.84rem;
    overflow: hidden;
    display: flex;
    overflow-x:scroll;
}
.today_list{
    width:1.25rem;
    height:1.63rem;
    margin-left:0.1rem;
    margin-right: 0.02rem;
    float: left;
}
.today_list img{
    width:1.25rem;
    height:1.25rem;
}
.goods-title{
    display: block;
    width:1.25rem;
    height:0.16rem;
    overflow: hidden;
    font-weight: normal;
    font-style: normal;
    font-size:0.12rem;
    margin-bottom: 0.08rem;
    margin-top: 0.04rem;
}
.goods-title a{
    color:#333;
}
.goods-price{
    font-size:0.13rem;
    color:#c81c28;
}

/**日系简约**/
.floor-module{
    width:3.2rem;
    height:9.24rem;
    -background:#f90;
}
.big_img{
    width:3.2rem;
    height:1.48rem;
    margin-bottom: -0.5rem;
}
.big_img img{
    width:100%;
    height:100%;
}
.recommed{
    width:3.2rem;
    height:1.7rem;
    margin:0 auto;
    padding: 0.1rem 0 0.2rem;
    box-sizing: border-box;
    box-shadow: 0 0 10px rgba(0,0,0,.15);
    z-index: 1;
    position: relative;
    overflow: hidden;
}
.recommed_list{
    width:3rem;
    height:1.5rem;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
}
.recommed_item{
    width:0.9rem;
    height:1.5rem;
    margin-left:0.02rem;
    margin-right:0.04rem;
}
.recommed_item .goods-img{
    width:0.9rem;
    height:0.9rem;
    background:red;
}
.recommed_item .goods-img img{
    width:0.9rem;
    height:0.9rem;
}
.recommed_item .goods-title{
    width:0.9rem;
    height:0.16rem;
    overflow: hidden;
    font-size:0.12rem;
}
.recommed_item .goods-price{
    color:#c81c28;
}

.floor-module-goods{
    width:3.2rem;
    height:6.65rem;
    z-index: 2;
    background: #fff;
    position: relative;
    padding:0.1rem 0.15rem 0;
}
.floor-module-goods-list{
    width:2.9rem;
    height:6.5rem;
}
.floor-module-goods-list li{
    width:1.4rem;
    height:2.01rem;
    float: left;
    margin-right:0.04rem;
}
.floor-module-goods-list li .goods-img{
    width:1.4rem;
    height:1.4rem;
    margin-bottom: 0.08rem;
}
.floor-module-goods-list li .goods-img img{
    width:1.4rem;
    height:1.4rem;
}
</style>