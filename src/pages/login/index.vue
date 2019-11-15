<template>
    <div class="login">
        <Header :title="title">
        </Header>

        <div class="pitcure">
            <img src="//img004.mll3321.com/images/user/mll_logo.png">
        </div>

        <div class="user-nav-list">
            <router-link tag="span" to="/logins/login" >登陆</router-link>
            <router-link tag="span"  to="/logins/register">注册</router-link>
        </div>
        <router-view></router-view>
    </div>
</template>


<script>
import Header from "@common/components/header"
export default {
    name:"login",
    components:{
        Header,
    },
    data(){
        return{
            title:""
        }
    },
    methods:{
    }
}
</script>

<style lang="scss" scoped>
    .login{
        width:100%;
        height:100%;
        background: #f5f5f5;
        font-size:.14rem;
        padding-top:.4rem;
    }
    header{
        width:3.2rem;
        height:0.4rem;
        background:#f5f5f5;
    }
    .pitcure{
        width:3.2rem;
        height:1rem;
        display: flex;
        justify-content: center;
        align-items: center;
        background:#f5f5f5;
        img{
            width:1.54rem;
            height:0.5rem;
        }
    }
    .user-nav-list{
        width:3.2rem;
        height:0.45rem;
        display: flex;
        background:#f5f5f5;
       span{
            display: block;
            width:0.9rem;
            height:0.45rem;
            margin:0 0.35rem;
            line-height:0.44rem;
            font-size:0.17rem;
            color:#333;
            font-weight: bold;
            text-align: center;
        }
        .router-link-active{
            color:#da0000;
            border-bottom: 2px solid #da0000;
        }
    }
    
</style>