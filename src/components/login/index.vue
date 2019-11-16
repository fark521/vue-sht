<template>
     <div class="user-login">
            <div class="name">
                <i class="iconfont icon-xiaolian"></i>
                <input type="text" placeholder="请输入用户名" ref="name">
            </div>
            <div class="password">
                <i class="iconfont icon-suo"></i>
                <input type="password" placeholder="请输入密码" ref="pwd">
            </div>
            <router-link tag="b" to="/logins/register">还没账号，去注册 >></router-link>
             <v-touch tag="span" @tap="handlelogin()">登陆</v-touch>
        </div>
</template>

<script>
import Vue from 'vue';
import { Toast } from 'vant';
Vue.use(Toast);

import {loginApi} from "@api/login";
export default {
    name:"login",
    data(){
        return{
            username:"",
            password:"",
        }
    },

    created(){
        
    },
    methods:{
        async handlelogin(){
            this.username = this.$refs.name.value;
            this.password = this.$refs.pwd.value;
            let data = await loginApi(this.username,this.password);
            if(data.data.code == 0){
                this.$toast(data.data.info);
            }else{
                this.$toast(data.data.info);
                if(this.$cookies.get("token")){
                    this.$cookies.set("name",data.data.list.name)
                    this.$cookies.set("urlPic",data.data.list.urlPic);
                    this.$store.commit("login/handleToken");
                    this.$router.push("/mine");
                }
            }
            
        },
    },

}
</script>

<style lang="scss" scoped>
    .user-login{
        width: 100%;
        height: 2.34rem;
        background: #fff;
        display: flex;
        flex-direction: column;
        align-items: center;
        .password,.name{
            width: 100%;
            height: .48rem;
            display: flex;
            justify-content: space-around;
            align-items: center;
            border-bottom:1px solid #e1e1e1;
            i{
                width: 20%;
                height: 100%;
                padding-left:.2rem;
                line-height: .48rem;
                font-size: .25rem;
            }
            input{
                width: 80%;
                height: 100%;
                font-size: .16rem;
            }
        }
        b{
            width: 100%;
            height: .2rem;
            margin-top:.1rem;
            padding-left:.2rem;
            line-height: .2rem;
            color:#c33;
        }
        span{
            width: 90%;
            height: .4rem;
            margin-top:.15rem;
            background: #ccc;
            color: #fff;
            font-size: .18rem;
            text-align: center;
            line-height: .4rem;
            border-radius: .05rem;
        }
    }
</style>