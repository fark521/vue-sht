<template>
    
    <div class="storeList">
        <header>
            <v-touch tag="div" @tap="handleListback()" class="jt iconfont">&#xe715;</v-touch>
            <div class="middle">
                <p class="serinp iconfont">&#xe606;搜索商品</p>
            </div>
            <div class="menu iconfont">&#xe611;</div>
        </header>
    
        <ul id="toolbar">
            <li class="sort">
                <v-touch tag="a" href="#" @tap="upChange()">价格升序</v-touch>
                <i class="iconfont">&#xe67b;</i>
            </li>
            <li class="price">
                <v-touch tag="a" href="#" @tap="downChange()">降序</v-touch>
                <i class="iconfont">&#xe67b;</i>
            </li>
            <li class="style">
                <v-touch tag="a" href="#" @tap="updata()">销量升序</v-touch>
                <i class="iconfont">&#xe67b;</i>
            </li>
            <li class="choose">
                <v-touch tag="a" href="#" @tap="downdata()">降序</v-touch>
                <i class="iconfont">&#xe67b;</i>
            </li>
        </ul>
        
            <div class="store_list">
                <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
                <ul>
                    <router-link tag="li" :to="'/details/'+index"  class="goodsli" v-for="(item,index) in storeList" :key="index">
                        <img :src="'https://img003.mll3321.com//'+item.goods_img" />
                        <div class="goodsdata">
                            <p>{{item.brand_name+'&nbsp;'+item.goods_name}}</p>
                            <div class="extra">
                                <i>￥{{item.shop_price}}</i>
                                <span>已售{{item.total_sold_yes_count}}</span>
                            </div>
                        </div>
                    </router-link >
                    <li class="style_list">
                        <div class="style_item" v-for="(item,index) in style" :key="index">
                            <a href="#">
                                <img :src="item.img" />
                            </a>
                        </div>
                    </li>
                    <router-link tag="li" :to="'/details/'+(Number(index)+Number(12))" class="goodsli" v-for="(item,index) in storeList2" :key="'info2-'+index">
                        <img :src="'https://img003.mll3321.com//'+item.goods_img" />
                        <div class="goodsdata">
                            <p>{{item.brand_name+'&nbsp;'+item.new_goods_name}}</p>
                            <div class="extra">
                                <i>￥{{item.shop_price}}</i>
                                <span>已售{{item.total_sold_yes_count}}</span>
                            </div>
                        </div>
                    </router-link>
                </ul>
                </van-pull-refresh>
                <Bottom/>
            </div>
        
    </div>
</template>

<script>
import {storeListApi,storeListApi2} from "@api/list";
import Bottom from "@common/components/bottom";
import Vue from 'vue';
import { PullRefresh } from 'vant';
Vue.use(PullRefresh);
export default {
    name:"storeList",
    components:{
        Bottom
    },
    data(){
        return{
          isLoading: false,
          storeList:[],
          storeList2:[],
          style:[
              {
                  img:"//img004.mll3321.com//images/upload/201811/22ceb0a4d29d5859167cc2e0c43aa977.jpg"
              },
              {
                  img:"//img002.mll3321.com//images/upload/201811/9713431b43d00c157fd6babd1ddd9f88.jpg"
              },
              {
                  img:"//img004.mll3321.com//images/upload/201811/60b4808f202b169e0ee831701a095768.jpg"
              },
              {
                  img:"//img002.mll3321.com//images/upload/201811/65389a5179307b7486bcf1404246e65d.jpg"
              },
              {
                  img:"//img002.mll3321.com//images/upload/201811/bc1217a9583fc06dd9582a1127d32352.jpg"
              },
              {
                  img:"//image.meilele.com//images/upload/201811/341500d6395facce760cf02d0781541f.jpg"
              },
              {
                  img:"//image.meilele.com//images/upload/201811/a3436c89dd4620e545b395b2b4cb8997.jpg"
              },
              {
                  img:"//image.meilele.com//images/upload/201811/8825315aa456f1ab3406ab7f7a64dd71.jpg"
              },
          ]
        }
    },
    created(){
        this.handleGetList();
        this.handleGetList2();
    },
    methods:{
        onRefresh() {
            setTimeout(() => {
                this.isLoading = false;
            }, 500);
        },
        handleListback(){
            this.$router.back();
        },
        upChange(){
            this.storeList.sort((a,b) =>{
                return a.shop_price - b.shop_price;
            })
            this.storeList2.sort((a,b) =>{
                return a.shop_price - b.shop_price;
            })
        },
        downChange(){
            this.storeList.sort((a,b) =>{
                return b.shop_price - a.shop_price;
            })
            this.storeList2.sort((a,b) =>{
                return b.shop_price - a.shop_price;
            })
        },
        updata(){
            this.storeList.sort((a,b) =>{
                return a.total_sold_yes_count - b.total_sold_yes_count;
            })
            this.storeList2.sort((a,b) =>{
                return a.total_sold_yes_count - b.total_sold_yes_count;
            })
        },
        downdata(){
            this.storeList.sort((a,b) =>{
                return b.total_sold_yes_count - a.total_sold_yes_count;
            })
            this.storeList2.sort((a,b) =>{
                return b.total_sold_yes_count - a.total_sold_yes_count;
            })
        },
        async handleGetList(){
            let data = await storeListApi();
            
            //console.log(this.storeList)
            sessionStorage.setItem("this.storeList",JSON.stringify(data.goods));
            //console.log(this.storeList);
            if(sessionStorage.getItem(this.storeList)){
                this.storeList = JSON.parse(sessionStorage.getItem(this.storeList))
            }else{
                this.storeList = data.goods;
            }
        },
        async handleGetList2(){
            let data = await storeListApi2();
            this.storeList2 = data.goods;
            //console.log(this.storeList2);
            sessionStorage.setItem("this.storeList2",JSON.stringify(this.storeList2));

            if(sessionStorage.getItem(this.storeList2)){
                this.storeList2 = JSON.parse(sessionStorage.getItem(this.storeList2))
            }else{
                this.storeList2 = data.goods;
            }
        },

    }
}
</script>

<style lang="scss" scoped>
.styleList{
    position: absolute;
    top:0;
    left: 0;
    bottom:0;
    right:0;
    padding-top:.4rem;
    padding-bottom:.5rem;
    font-size:.14rem;        
}
header{
    width:3.2rem;
    height:0.4rem;
    padding:0.08rem 0.1rem;
    display: flex;
    justify-content: space-between;
    position: fixed;
    top:0;
    left:0;
    background:#fff;
}
.jt{
    width:0.23rem;
    height:0.23rem;
    background-size:0.1rem;
    text-align: center;
    line-height: 0.23rem;
}
.middle{
    width:2.29rem;
    height:0.25rem;
    text-align: center;
    background:#f0f0f0;
    border-radius: 0.05rem;
}
.middle .serinp{
    display: block;
    font-size:0.13rem;
    width:0.9rem;
    height:0.25rem;
    background-size: 0.15rem 0.15rem;
    line-height:0.25rem;
    margin-left:0.78rem;
    color:#aaa;
}
.menu{
    width:0.23rem;
    height:0.23rem;
    background-size: 0.14rem;
    margin-top:0.04rem;
}
.new_list{
    width:1.1rem;
    height:2.15rem;
    position: absolute;
    top:0.55rem;
    right:0.06rem;
    display: none;
}
.new_list .tran{
    display: block;
    position: absolute;
    border-style:solid;
    width:0;
    height:0;
    border-width:0  0.08rem 0.08rem 0.08rem;
    top:-0.07rem;
    right:0.08rem;
    border-color:transparent transparent rgba(0,0,0,.8) transparent ;
    display: none;
}
#toolbar{
    width:3.2rem;
    height:0.32rem;
    padding:0.08rem 0.15rem 0;
    display: flex;
    justify-content: space-between;
    font-size:0.12rem;
    position: fixed;
    top:0.4rem;
    left:0;
    background:#fff;
}
#toolbar li{
    width:0.72rem;
    height:0.23rem;
    line-height: 0.2rem;
    text-align: center;
}
#toolbar li a{
    color:#333;
}

.store_list{
    background:#fff;
    overflow:auto;
    padding-top:0.72rem;
}

.store_list .goodsli{
    width:1.56rem;
    height:2.1rem;
    background:#fff;
    padding-top:0.15rem;
    float: left;
    margin-left:0.04rem;
    margin-bottom:0.1rem;
}
.goodsli img{
    width:1.52rem;
    height:1.52rem;
}
.goodsdata{
    width:1.52rem;
    height:0.4rem;
    padding-left:0.06rem;
}
.goodsdata p{
    display: block;
    width:1.47rem;
    height:0.16rem;
    overflow: hidden;
    white-space:nowrap;
    text-overflow: ellipsis;
    color:#333;
    margin-top:0.08rem;
    font-size:0.12rem;
}
.extra{
    width:1.47rem;
    height:0.15rem;
    display: flex;
    margin-top:0.04rem;
}
.extra i{
    color:red;
    font-size:0.12rem;
    font-style: normal;
}
.extra span{
    color:#aaa;
    font-size:0.11rem;
    margin-left:0.1rem;
}
.style_list{
    width:3.16rem;
    min-height:1.3rem;
    float: left;
    padding-top:0.1rem;
}
.style_item{
    width:0.73rem;
    height:0.6rem;
    margin-left:0.05rem;
    margin-top:0.05rem;
    float: left;
}
.style_item img{
    width:0.73rem;
    height:0.6rem;
    border-radius: 0.05rem;
}
.pit{
    width:3.2rem;
    height:1.5rem;
    margin-top:0.1rem;
    float: left;
}
.pit img{
    width:3.2rem;
    height:1.5rem;
}


</style>