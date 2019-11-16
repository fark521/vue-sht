<template>
    
    <div class="main">
        <Header :title="title">
            <i slot="i">· · ·</i>
        </Header>
        <div class="cart_list">
            <div class="head">
                <input type="checkbox">
                <p>美乐乐</p>
            </div>
            <div class="list">
                <div class="top">
                    <i>满减</i>
                    <p>以买满111</p>
                    <span>(已减111)</span>
                </div>
                <div class="product">
                    <h3>满减></h3>
                    <div class="content">
                        <input type="checkbox" class="single"/>
                        <img />
                        <div class="right">
                            <p>{{list.goods_name}}</p>
                            <span>￥1223.00</span>
                            <div class="bottom">
                                <div class="lt">
                                    <i>-</i>
                                    <input type="text" value="1"/>
                                    <i>+</i>
                                </div>
                                <i class="iconfont icon-lajitong"></i>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
        <Bottom/>
        <footer>
            <input type="checkbox"/>
            <span>全选</span>
            <div>
                <p>合计：￥2222</p>
                <span>不含运费</span>
            </div>
        </footer>
    </div>
</template>

<script>
import Header from "@common/components/header"
import Bottom from "@common/components/bottom"
export default {
    name:"cart",
    components:{
        Header,
        Bottom
    },
    data(){
        return{
            title:"购物车",
            id:"",
            list:[]
        }
    },
    created(){
        console.log(this);
        this.id=this.$route.query.id;;
        //console.log(this.id);
        if(this.id<=11){
          this.list=(JSON.parse(sessionStorage.getItem("this.storeList")))[this.id];    
        }else{
            this.list=(JSON.parse(sessionStorage.getItem("this.storeList2")))[this.id-12];
        }
        //console.log(this.list);
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
        background: #f5f5f5;
        .cart_list{
            width: 100%;
            min-height:0;
            margin-top:.1rem;
            margin-bottom:.1rem;
            border-top:1px solid #e5e5e5;
            border-bottom:1px solid #e5e5e5;
            padding-left:.1rem;
            padding-bottom:.1rem;
            min-height: 0;
            background: #fff;
            .head{
                width: 100%;
                height:.43rem;
                display: flex;
                align-items: center;
                input{
                    margin-right:.2rem;
                    width: .2rem;
                    height: .2rem;
                }
            }
            .top{
                width: 100%;
                height: .45rem;
                line-height: .45rem;
                display: flex;
                i{
                    width: .44rem;
                    height:.2rem;
                    line-height: .2rem;
                    margin-top: .12rem;
                    padding:0 .05rem;
                    background: #ff8b00;
                    color:#fff;
                }
                span{
                    color:red;
                }
                P{
                    margin-left:.1rem;
                    &p:nth-of-type(2){
                        color:red;
                    }
                }
            }
            .list{
                width: 100%;
                min-height: 0;
                border-top:1px solid #e5e5e5;
                .product{
                    width: 100%;
                    height: 1.26rem;
                    border-top:1px dotted #e1e1e1;
                    h3{
                        width: 100%;
                        height: .4rem;
                        line-height: .4rem;
                        color:red;
                        text-align: right;
                        padding-right: .2rem;
                        font-size: .13rem;
                    }
                    .content{
                        width: 100%;
                        height: .86rem;
                        display: flex;
                        justify-content: space-around;
                        align-items: center;
                        .single{
                            width: .2rem;
                            height: .2rem;
                        }
                        img{
                            width: 1.15rem;
                            height: .76rem;
                        }
                        .right{
                            width: 1.5rem;
                            height: .86rem;
                            padding-bottom: .1rem;
                            span{
                                color:red;
                                font-weight: bold;
                            }
                            p{
                                width: 100%;
                                font-size:.13rem;
                            }
                            .bottom{
                                width: 100%;
                                height: .26rem;
                                display: flex;
                                justify-content: space-between;
                                .lt{
                                    width: .78rem;
                                    height: .26rem;
                                    display: flex;
                                    i,input{
                                        width: .26rem;
                                        line-height: .26rem;
                                        border:1px solid #ccc;
                                        text-align: center;
                                    }
                                    input{
                                        border-left:none;
                                        border-right:none;
                                    }
                                }
                                .iconfont{
                                    font-size:.22rem;
                                }
                            }
                        }
                    }
                }
            }
        }
        footer{
            position: fixed;
            padding-left:.1rem;
            bottom:0;
            left:0;
            width: 100%;
            height: .5rem;
            display: flex;
            background: #fff;
            align-items: center;
            input{
                width: .2rem;
                height: .2rem;
            }
            span{
                margin-left:.1rem;
            }
            div{
                margin-left:.5rem;
                p{
                    color:red;
                    font-weight: bold;
                }
            }
        }
    }
</style>