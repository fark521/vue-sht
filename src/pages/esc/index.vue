<template>
    <div class="main">

        <div class="esc">
            <v-touch tag="div" @tap="handleEsc()" >退出登陆</v-touch>
        </div>
    </div>
</template>

<script>
export default {
    name:"center",
    data(){
        return{

        }
    },
    methods:{
        handleEsc(){
            this.$cookies.remove("token");
            this.$cookies.remove("name");
            this.$cookies.remove("urlPic");
            this.$store.commit("login/handleEsc");
            this.$router.push("/mine");
        }
    }
}
</script>


<style lang="scss" scoped>
    .main{
        position: absolute;
        top:0;
        right:0;
        bottom:0;
        left:0;
        background: #f5f5f5;
        font-size: .14rem;

        .esc{
            width: 100%;
            height: .4rem;
            display: flex;
            justify-content: center;
            align-items: center;
            div{
            width: 85%;
            background: red;
            color:#fff;
            text-align: center;
            line-height: .4rem;
            font-size: .17rem;
            border-radius: .07rem;
            }
        }
    }
</style>