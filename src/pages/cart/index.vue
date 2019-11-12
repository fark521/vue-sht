<template>
    
    <div class="main">
        <Header :title="title"/>
        <div class="cart_list">购物车</div>

    </div>
</template>

<script>
import Header from "@common/components/header"
export default {
    name:"cart",
    components:{
        Header,
    },
    data(){
        return{
            title:"购物车",
        }
    }
}
</script>

<style lang="scss" scoped>
    .main{
        position: absolute;
        top:0;
        left: 0;
        bottom:0;
        right:0;
        padding-top:.4rem;
        padding-bottom:.5rem;
        font-size:.14rem;
        .cart_list{
            height: 100%;
        }
        
    }
</style>