<template>
    
    <div id="footer">
        <ul>
            <router-link 
            v-for="item in navs" :key="item.id"
            :to="item.path"
            tag="li">
            <i class="iconfont" v-html="item.icon"></i>
            <span>{{item.text}}</span>
            </router-link>
        </ul>
    </div>

</template>

<script>
export default {
    name:"TabBar",
    data(){
        return {
            navs:[
                {
                    id:0,
                    text:"首页",
                    icon:"&#xe61a;",
                    path:"/home"
                },
                {
                    id:1,
                    text:"分类",
                    icon:"&#xe613;",
                    path:"/classify"
                },
                {
                    id:2,
                    text:"购物车",
                    icon:"&#xe501;",
                    path:"/cart"
                },
                {
                    id:3,
                    text:"我的",
                    icon:"&#xe68a;",
                    path:"/mine"
                },
            ]
        }
    }
}
</script>

<style>
    #footer{
        width:100%;
        height:.5rem;
        position:fixed;
        left:0;
        bottom:0;
        border-top:1px solid #aaa;
    }

    #footer ul,footer ul li{
        width:100%;
        height: 100%;
    }

    #footer ul{
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    #footer ul .router-link-active{
        color:#c33;
    }
    #footer ul li{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    #footer ul li i{
        font-size:.2rem;
    }
    #footer ul li span{
        font-size: .12rem;
    }
</style>