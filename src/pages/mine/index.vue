<template>
    
    <div class="main">
        <Header :title="title"/>

        <div class="content">我的</div>
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
            title:"我的",
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
        .content{
            height: 100%;
        }
        
    }
</style>