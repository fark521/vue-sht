<template>
    

    <div class="header">
        <v-touch  tag="i" class="iconfont icon-icon-left" @tap="handleback()"></v-touch>
        <p>{{title}}</p>
        <slot name="i"></slot>
    </div>

</template>
<script>
export default {
    props:{
        title:{
            type:String,
            default:""
        }
    },
    methods:{
        handleback(){
            this.$router.back();
        }
    }

}
</script>

<style lang="scss" scoped>
    .header{
        position: fixed;
        top:0;
        left:0;
        display: flex;
        align-items: center;
        width: 100%;
        height: .4rem;
        border-bottom:2px solid #e5e5e5;
        font-size:.18rem;
        padding:0 .15rem;
        background: #fff;
        z-index: 20;
        i{
            display: flex;
            align-items: center;
            justify-content: center;
            width: .25rem;
            height: 100%;
            &:nth-of-type(1){
                font-size: .25rem;
            }
        }
        p{
            width: 2.3rem;
            height: 100%;
            text-align: center;
            line-height: .4rem;
            
        }
    }
</style>