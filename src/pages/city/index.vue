<template>
    
    <div class="main">
        <header>
            <v-touch tag="i" class="iconfont icon-icon-left" @tap="handleSwitch()"></v-touch>
            <span>切换城市</span>
        </header>
        <div class="city">
            <h3>当前城市</h3>
            <p></p>
            <h3>当前城市</h3>
            <p></p>
        </div>
    </div>

</template>

<script>
export default {
    name:"city",
    methods:{
        handleSwitch(){
            this.$router.push("/home")
        }
    },
    created(){
        this.$store.dispatch("city/handleGetCity");
    }
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
        background:#f4f4f4;
        font-size: .14rem;
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
            i{
                width: 25%;
                 padding-left:.15rem;
                 font-size:.2rem;
            }
            span{
                width: 75%;
                padding-left:.55rem;
                font-size:.16rem;
            }
        }
        .city{
            width: 100%;
            min-height:0 ;
        }
    }
</style>