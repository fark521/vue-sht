<template>
    <div class="search">
            <div class="header">
                <form>
                    <input type="text" placeholder="  搜索商品"/>      
                </form>
                <div class="icon">
                    <span class="iconfont">&#xe606;</span>
                </div>
                <div class="qx">
                    <a href="#">取消</a>
                </div>
            </div>
            <div class="emss">
                <div id="history">
                    <h3>历史搜索</h3>
                    <ul>
                        <li></li>
                    </ul>
                </div>

                <div id="hot">
                    <h3>正在热搜中</h3>
                    <ul>
                        <li v-for="(item,index) in searchList" :key="index"><a :href="item.url">{{item.name}}</a></li>
                    </ul>
                </div>
            </div>
    </div>
</template>

<script>
import {searchApi} from "@api/search";
export default {
    name:"Search",
    data(){
        return{
            searchList:[]
        }
    },
    created(){
        this.handleGetSearch();
    },
    methods:{
        async handleGetSearch(){
            let data = await searchApi();
            console.log(data);
            this.searchList = data.hotSearchWordList;
        }
    }
}
</script>

<style scoped>
.search{
    position: absolute;
    top:0;
    left:0;
    right:0;
    bottom:0;
    background:#fff;
    padding-bottom:.5rem;
    -padding-top:.38rem;
}
.header{
    width:3.2rem;
    height:0.52rem;
    border-bottom: 1px solid #d8d8d8;
    padding:10px 0;
    display: flex;
    top:0;
    left:0;
}
form{
    width:2.61rem;
    height:0.32rem;

    position: relative;
    float: left;
    
}
form input{
    width:2.5rem;
    height:0.3rem;
    font-size:15px;
    margin-left:0.1rem;
    border:1px solid #c7c7c7;
    border-radius: 0.05rem;
    position: absolute;
}
.icon{
    width:0.45rem;
    height:0.3rem;
    background: #f0f0f0;
    border:1px solid #c7c7c7;
    position: absolute;
    top:0.1rem;
    right:0.6rem;
    border-top-right-radius:0.05rem;
    border-bottom-right-radius:0.05rem;
}
.icon span{
    display: block;
    width:0.155rem;
    height:0.155rem;
    background-size:0.16rem;
    margin: 7px 0 0 14px;
}
.qx{
    width:0.48rem;
    height:0.34rem;
    float: right;
    font-size:0.17rem;
    line-height:0.33rem;
    text-align: center;
    color:#999;
}
.qx a{
    color:#999;
}
.emss{
    width:3.2rem;
    max-height:5.34rem;
    background:#f4f4f4;
}
#history{
    width:3.2rem;
    min-height:1.1rem;
    display: none;
}

#hot{
    width:3.2rem;
    min-height:4.47rem;
}
#history h3,#hot h3{
    width:3.2rem;
    height:0.29rem;
    color:#999;
    background:#ebebeb;
    padding:0.06rem 0 0.05rem 0.16rem;
    font-size:0.14rem;
}
#hot ul{
    width:3.2rem;
    min-height:2.4rem;
    padding:0.15rem 0.05rem 0.065rem 0.15rem;
}
#hot ul li{
    min-width:0.66rem;
    min-height:0.28rem;
    margin-right:0.1rem;
    margin-bottom:0.085rem;
    padding:0.06rem 0.18rem;
    border:1px solid #ccc;
    border-radius: 0.05rem;
    float: left;
    font-size:0.14rem;
}
#hot ul li a{
    color:#333;
    display: block;
    width:100%;
}
</style>