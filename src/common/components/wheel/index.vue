<template>
    <van-swipe :autoplay="3000" indicator-color="white">
        <van-swipe-item
        v-for="(item,index) in images" :key="index">
        <img :src="item"/>
        </van-swipe-item>
    </van-swipe>
</template>


<script>
import Vue from 'vue';
import { Swipe, SwipeItem } from 'vant';

Vue.use(Swipe).use(SwipeItem);
export default {
    data(){
        return{
            images:[
                "http://image.meilele.com/images/201911/1572835335735634646.jpg",   
                "http://image.meilele.com/images/201909/1569521035968599049.jpg",
                "http://image.meilele.com/images/201807/1531355777767220587.jpg",
            ],
           
        }
    }
}
</script>

<style lang="scss" scoped>
    .van-swipe{
      width: 100%; height: 1.55rem;
      img{
          width: 100%;
          height: 100%;
      }
    }
</style>