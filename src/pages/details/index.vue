<template>
  <div class="detail">
    <Header :title="title" />
    <main>
      <div class="pit">
        <img
          :src="'https://img003.mll3321.com//'+this.list1.goods_img"
        />
      </div>
      <div class="inform">
        <ul class="goods-sell">
          <li>
            <span>￥</span>
            <span>{{this.list1.show_price}}</span>
          </li>
          <li></li>
          <li>已售{{this.list1.total_sold_yes_count}}</li>
        </ul>
        <h2>
          {{this.list1.style_name}}+{{this.list1.new_goods_name}}
        </h2>
      </div>

      <ul class="val">
        <li class="val_yx">
          <span>数量:</span>
          <div class="set">
                <v-touch class="set_submit" @tap="handleReduce()">-</v-touch>
                <span class="set_input">{{this.$store.state.details.input}}</span>
                <v-touch class="set_push" @tap="handlePush()">+</v-touch>
          </div>
        </li>
        <li class="val_ps">
          <span>送至:</span>
          <div class="region">
            <span class="iconfont">&#xe502;</span>
            <div>北京丰台区</div>
          </div>
        </li>
      </ul>

      <ul class="opt">
        <li>保障:</li>
        <li>
          <span class="iconfont">&#xe68f;</span>
          <p>30天退货</p>
        </li>
        <li>
          <span class="iconfont">&#xe68f;</span>
          <p>质保三年</p>
        </li>
        <li>
          <span class="iconfont">&#xe68f;</span>
          <p>贵就赔</p>
        </li>
      </ul>

      <div class="museum">
        <img src="//image.meilele.com/images/expr/1538531507594.jpg" />
        <div class="info_text">
          <div class="ityg">
            美乐乐
            <span>北京</span>
            <p>3</p>家体验馆
          </div>
          <div class="info_content">
            <img src="//image.meilele.com/images/201703/1488842263960810402.jpg" />
            <div class="content_text">
              <p>体验实物品质</p>
              <p>免费搭配设计</p>
            </div>
          </div>
          <button>预约高级顾问</button>
        </div>
      </div>

      <div class="gifys">
        <img src="//img003.mll3321.com/images/201908/1565588323157916080.png" />
      </div>

      <div class="comment">
        <dl>
          <dt>
            <div class="key">商品评价</div>
            <div>共251个评价</div>
          </dt>
          <dd>
            <div class="leave">
              <div class="star">
                <span class="star_list"></span>
                <span class="star_list"></span>
                <span class="star_list"></span>
                <span class="star_list"></span>
                <span class="star_list"></span>
              </div>
              <div>13853727389</div>
              <div>2018-10-30</div>
            </div>
            <p class="pl">睡了那么久，现在才来评价，蛮好的、第二套房子的家具也是这边买</p>
            <ul class="pl_pit">
              <li>
                <img
                  src="//image.meilele.com/images/small/990/width/150/height/96/mode/1/encrypt/0c5d7a8d960511e8560a902e74cc4497/path/YKkxtD0+l8CT6mdTP0jUTosXyzGqRaYb484nDncYwHOMAGzA8zvvGzzUhX7vB2IZUP3fXJkwKCk4bTODX_oEBg==.jpg"
                />
              </li>
              <li>
                <img
                  src="//image.meilele.com/images/small/990/width/150/height/96/mode/1/encrypt/0c5d7a8d960511e8560a902e74cc4497/path/YKkxtD0+l8CT6mdTP0jUTosXyzGqRaYb484nDncYwHOMAGzA8zvvGzzUhX7vB2IZUP3fXJkwKCk4bTODX_oEBg==.jpg"
                />
              </li>
            </ul>
          </dd>
        </dl>
      </div>

      <div class="good_extent">
        <ul class="head">
          <li>
            <a href="#">图文详情</a>
          </li>
          <li>
            <a href="#">规格参数</a>
          </li>
          <li>
            <a href="#">相似推荐</a>
          </li>
        </ul>
        <div class="pitcure">
          <img src="//image.meilele.com/images/201911/1572570601435245943.jpg" />
          <img src="//image.meilele.com/images/201402/1392193292331461534.jpg" />
          <img src="//image.meilele.com/images/201402/1392193292888626710.jpg" />
          <img src="//image.meilele.com/images/201603/1457934679343019153.jpg" />
          <img src="//image.meilele.com/images/201402/1392193292228866300.jpg" />
          <img src="//image.meilele.com/images/201402/1392193292278681674.jpg" />
          <img src="//image.meilele.com/images/201603/1457934679531550036.jpg" />
          <img src="//image.meilele.com/images/201402/1392193292278092354.jpg" />
        </div>

        <div class="hottj">
          <p class="hot_tit">
            <span>爆款推荐</span>
            <i>
              更多
              <em></em>
            </i>
          </p>
          <ul class="cont_list">
            <li v-for="(item,index) in look" :key="index">
              <img :src="'https://img003.mll3321.com//'+item.goods_img" />
              <p> {{item.style_name}}+{{item.new_goods_name}}</p>
              <span>￥{{item.show_price}}</span>
            </li>
          </ul>
        </div>
      </div>

      <div class="look_agin">
        <h3>
          <div class="line"></div>
          <div class="text">
            <span>看了又看</span>
          </div>
        </h3>

        <ul class="good_list">
          <li v-for="(item,index) in look" :key="index">
            <img :src="'https://img003.mll3321.com//'+item.goods_img" />
            <span class="good_price">￥{{item.shop_price}}</span>
            <p class="good_title">{{item.brand_name+'&nbsp;'+item.new_goods_name}}</p>
            <span class="good_sales">已售{{item.total_sold_yes_count}}</span>
          </li>
        </ul>
      </div>

      <Bottom/>
      <footer>
        <div class="sc">
          <span class="iconfont">&#xe68a;</span>
          <em>收藏</em>
        </div>
        <div class="kf">
          <span class="iconfont">&#xe642;</span>
          <em>客服</em>
        </div>
        <router-link tag="div" :to="'/cart'" class="addcart">
          <span >查看购物车</span>
        </router-link>
        <v-touch tag="div" @tap="handleClick()" class="address" >
          <span>加入购物车</span>
        </v-touch>
      </footer>
    </main>
  </div>
</template>

<script>
import Header from "@common/components/header";
import Bottom from "@common/components/bottom";
import {storeListApi2} from "@api/list";
import {mapState,mapMutations} from "vuex";
export default {
  name: "Details",
  data() {
    return {
      title: "商品详情",
      list1:[],
      look:[],
      id:"",
      // goodsList:{}
    }
  },
  components: {
    Header,
    Bottom
  },
  created(){
    this.id=this.$route.params.id;
    if(this.id<=11){
          this.list1=(JSON.parse(sessionStorage.getItem("this.storeList")))[this.id];    
    }else{
          this.list1=(JSON.parse(sessionStorage.getItem("this.storeList2")))[this.id-12];
    }
    this.handleGetlook();
  },
  methods:{
    async handleGetlook(){
      let data = await storeListApi2();
      this.look = data.goods;
    },
    handlePush(){
      this.$store.commit("details/handleInputAdd")
    },
    handleReduce(){
      this.$store.commit("details/handleInputReduce")
    },
    handleClick(){
      this.$toast('加入成功')
      // goodsList ={
      //     price:this.list1.shop_price,
      //     name:this.list1.new_goods_name,
      //     imgage:this.list1.goods_img,
      // }
      this.$store.dispatch("cart/handleActionsGet",{
          price:this.list1.shop_price,
          name:this.list1.new_goods_name,
          imgage:this.list1.goods_img,
          mount:this.$store.state.details.input,
      });
      this.$store.commit("details/handleRecovery")
    },


    
  },
  computed:{
    ...mapState({
       input:state=>state.detail.input
    })
   
  }
};
</script>

<style scoped>
.detail {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  padding-top: 0.4rem;
  padding-bottom: 0.45rem;
}
main {
  width: 100%;
  height: 100%;
  background: #f5f5f5;
  overflow: auto;
}
main .pit {
  width: 3.2rem;
  height: 2.2rem;
}
main .pit img {
  width: 100%;
  height: 100%;
}
.inform {
  width: 3.2rem;
  height: 1.31rem;
  background: #fff;
  padding: 0.15rem 0.15rem 0;
}
.goods-sell {
  width: 100%;
  height: 0.51rem;
  padding: 10px 0 15px;
  display: flex;
  justify-content: space-between;
  font-size:0.14rem;
}
.goods-sell li span:nth-child(1) {
  color: #cf000e;
  font-size: 15px;
}
.goods-sell li span:nth-child(2) {
  color: #cf000e;
  font-size: 22px;
  font-weight: 400;
}
.goods-sell li:nth-child(3) {
  color: #aaa;
  font-size: 12px;
  margin-top: 0.1rem;
}
.inform h2 {
  width: 3rem;
  height: 0.4rem;
  color: #333;
  font-size: 0.16rem;
  font-weight: normal;
}
.val {
  width: 3.2rem;
  height: 1.05rem;
  background: #fff;
  margin-top: 0.1rem;
  padding-left: 0.1rem;
}
.val .val_yx {
  width: 3.1rem;
  height: 0.48rem;
  padding: 15px 0 15px;
  color: #666;
  font-size: 0.14rem;
  display: flex;
 
}
.val .set{
  width:0.95rem;
  height:0.28rem;
  border: solid 1px #ccc;
  border-radius:0.04rem;
  margin-left:0.1rem;
  margin-top:-0.04rem;
  display: flex;
}
.val .set .set_submit{
  display: block;
  border-right: solid 1px #ccc;
  padding-left: 0.1rem;
  padding-right: 0.1rem;
  font-size: 0.19rem;
  width:0.32rem;
  height:0.26rem;
  text-align: center;
  line-height:0.22rem;
}
.val .set .set_input{
  width:0.28rem;
  height:0.26rem;
  display: block;
  line-height: 0.26rem;
  text-align: center;
  font-size: 15px;
 
  color: #333;
}
.val .set .set_push{
  display: block;
  width:0.32rem;
  height:0.26rem;
  padding-left: 0.1rem;
  padding-right: 0.1rem;
  font-size: 0.19rem;
  border-left: solid 1px #ccc;
  text-align: center;
  line-height:0.22rem;
}
.val .val_ps {
  width: 3.1rem;
  height: 0.57rem;
  border-top: solid 1px #d8d8d8;
  color: #666;
  font-size: 0.14rem;
  padding: 15px 0 15px;
  display: flex;
}
.region {
  width: 2.49rem;
  height: 0.18rem;
  display: flex;
}
.opt {
  width: 3.2rem;
  height: 0.44rem;
  padding: 0.1rem;
  background: #fff;
  margin-top: 0.1rem;
  line-height: 0.24rem;
  font-size: 0.12rem;
  display: flex;
}
.opt > li {
  min-width: 0.45rem;
  height: 0.24rem;
  display: flex;
  margin-left: 0.1rem;
}

.museum {
  width: 3.2rem;
  height: 1.35rem;
  background: #fff4e0;
  margin-top: 0.1rem;
  padding: 15px 10px;
  display: flex;
  justify-content: space-between;
}
.museum img {
  width: 1.4rem;
  height: 1.05rem;
}
.info_text {
  width: 1.48rem;
  height: 1.04rem;
  font-size: 0.14rem;
  display: flex;
  flex-direction: column;
}
.info_text .ityg {
  display: flex;
  width: 1.48rem;
  height: 0.14rem;
}
.info_text .ityg p {
  color: #da0000;
  font-weight: 700;
}
.info_content {
  width: 1.48rem;
  height: 0.4rem;
  margin-top: 0.1rem;
  display: flex;
}
.info_content img {
  width: 0.4rem;
  height: 0.4rem;
}
.content_text {
  width: 0.72rem;
  height: 0.4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: 0.1rem;
}
.content_text p {
  font-size: 0.12rem;
  color: #777;
  margin-top: 0.06rem;
}
.info_text button {
  width: 1.48rem;
  height: 0.3rem;
  border: none;
  border-radius: 0.05rem;
  outline: 0;
  line-height: 0.3rem;
  text-align: center;
  font-size: 14px;
  color: #fff;
  background-color: #da0000;
  margin-top: 0.1rem;
}
.gifys {
  width: 3.2rem;
  height: 0.44rem;
  margin-top: 0.1rem;
}
.gifys img {
  width: 3.2rem;
  height: 0.44rem;
}
.comment {
  width: 3.2rem;
  height: 2.14rem;
  background: #fff;
  margin-top: 0.1rem;
}
.comment dl {
  width: 3.2rem;
  min-height: 2.14rem;
}
.comment dt {
  width: 3.2rem;
  height: 0.51rem;
  padding: 0.15rem 0.15rem 0.10rem 0.10rem;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #d8d8d8;
  font-size: 0.14rem;
}
.comment dt .key {
  font-size:0.15rem;
}
.comment dd {
  width: 3.2rem;
  min-height: 1.63rem;
  padding: 0.15rem 0.15rem 0.15rem 0.10rem;
  font-size:0.12rem;
}
.leave {
  width: 2.94rem;
  height: 0.15rem;
  display: flex;
  justify-content: space-between;
  color: #aaa;
  font-size:0.12rem;
}
.leave .star {
  width: 1.14rem;
  height: 0.15rem;
  display: flex;
}
.leave .star .star_list {
  display: block;
  margin-left: 0.04rem;
  width: 0.115rem;
  height: 0.115rem;
  background: url(data:image/gif;base64,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)
    center center no-repeat;
  background-size: cover;
}
.pl {
  width: 2.95rem;
  min-height: 0.36rem;
  font-size: 0.14rem;
  color: #666;
  margin-top: 0.12rem;
}
.pl_pit {
  width: 2.95rem;
  height: 0.58rem;
  display: flex;
}
.pl_pit img {
  width: 0.87rem;
  height: 0.58rem;
  margin-right: 0.1rem;
  margin-top: 0.1rem;
}
.good_extent {
  width: 3.2rem;
  min-height: 3.6rem;
  margin-top: 0.1rem;
  background: #fff;
}
.head {
  width: 3.2rem;
  height: 0.55rem;
  padding: 20px 10px 0;
  display: flex;
  text-align: center;
  border-bottom: 0.005rem solid #efefef;
}
.head li {
  width: 0.99rem;
  height: 0.35rem;
  line-height: 0.35rem;
}
.head li a {
  display: block;
  font-size: 0.15rem;
  color: #aaa;
}
.pitcure {
  padding: 0 10px 10px 20px;
}
.pitcure img {
  width: 100%;
  height: auto;
  margin-top: 0.1rem;
}
.hottj {
  width: 3.2rem;
  height: 2.04rem;
  background: #fff;
  margin-top: 0.1rem;
}
.hottj .hot_tit {
  width: 3.2rem;
  height: 0.5rem;
  padding: 0 10px;
  display: flex;
  justify-content: space-between;
  line-height: 0.5rem;
  font-size: 0.12rem;
}
.hottj span {
  display: block;
  font-size: 0.15rem;
}
.hottj i {
  font-size: 0.13rem;
  font-style: normal;
  width: 0.38rem;
  height: 0.13rem;
  display: block;
  margin-left: 10px;
  position: relative;
  color: #777;
}
.hottj i em {
  display: block;
  width: 0.07rem;
  height: 0.12rem;
  background-size: contain;
  position: absolute;
  top: 0.18rem;
  right: 0;
}
.cont_list {
  min-width: 3.2rem;
  height: 1.54rem;
  padding-left: 0.1rem;
  overflow-x: scroll;
  display: flex;
  overflow-y: hidden; 
}
.cont_list li {
  width: 1.3rem;
  height: 1.56rem;
  margin-right: 0.1rem;
}
.cont_list li img {
  width: 1.3rem;
  height: 0.86rem;
}
.cont_list li p {
  width: 1.3rem;
  height: 0.34rem;
  margin-bottom: 0.13rem;
  margin-top: 0.04rem;
  font-size: 0.14rem;
  color: #333;
  overflow: hidden;
}
.cont_list li span {
  color: #c00;
  font-weight: 600;
}
.look_agin {
  width: 3.2rem;
  min-height: 3.2rem;
}
.look_agin h3 {
  width: 3.2rem;
  height: 0.36rem;
  background: #f4f4f4;
  position: relative;
}
.look_agin h3 .line {
  width: 1.17rem;
  height: 0.17rem;
  margin: 0 auto;
  border-bottom: 1px solid #979797;
}
.look_agin h3 .text {
  width: 3.2rem;
  height: 0.36rem;
  position: absolute;
  top: 0;
  left: 0;
  line-height: 0.36rem;
  text-align: center;
  font-size: 0.14rem;
  font-weight: 400;
  color: #333;
}
.look_agin h3 .text span {
  padding: 0 10px;
  background-color: #f4f4f4;
}
.good_list {
  width: 3.2rem;
  min-height: 3.2rem;
  font-size:0.12rem;
}
.good_list li {
  width: 1.57rem;
  height: 1.77rem;
  background: #fff;
  float: left;
  margin-right: 0.03rem;
  margin-bottom: 0.08rem;
}
.good_list li img {
  width: 1.57rem;
  height: 1.04rem;
  margin-bottom: 0.08rem;
}
.good_list li .good_price {
  color: #dd2727;
  font-size: 0.14rem;
  padding: 0 10px;
  width: 1.57rem;
  height: 0.14rem;
  display: block;
  font-weight: 400;
  margin-bottom: 0.08rem;
}
.good_list .good_title {
  width: 1.57rem;
  height: 0.14rem;
  display: block;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  padding: 0 10px;
  margin-bottom: 0.08rem;
}
.good_list .good_sales {
  width: 1.57rem;
  height: 0.12rem;
  color: #ababab;
  padding: 0 10px;
}


footer {
  width: 3.2rem;
  height: 0.45rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  bottom:0;
  left:0;
}
.sc {
  width: 0.45rem;
  height: 0.45rem;
  text-align: center;
  border-top: solid 1px #d8d8d8;
  border-right: solid 1px #d8d8d8;
}
.sc span {
  display: block;
  width: 0.18rem;
  background-size: cover;
  margin-top: 0.05rem;
  margin-left: 0.14rem;
}
.sc em {
  font-size: 0.1rem;
  display: block;
  font-style: normal;
  margin-top: 0.06rem;
}
.kf em {
  font-size: 0.1rem;
  display: block;
  font-style: normal;
  margin-top: 0.01rem;
}
.kf {
  width: 0.45rem;
  height: 0.45rem;
  border-top: solid 1px #d8d8d8;
  text-align: center;
  border-right: solid 1px #d8d8d8;
}
.kf span {
  display: block;
  width: 0.23rem;
  height: 0.23rem;
  background-size: 0.16rem;
  margin-top: 0.05rem;
  margin-left: 0.12rem;
  background-blend-mode: #ccc;
}
.addcart{
    width:1.02rem;
    height:0.45rem;
    background:#ff9402;
    color:#fff;
    font-size:0.14rem;
    text-align: center;
    line-height: 0.45rem;
}
.address{
    width:1.27rem;
    height:0.45rem;
    background:#da0000;
    color:#fff;
    font-size:0.14rem;
    text-align: center;
    line-height: 0.45rem;
}
</style>