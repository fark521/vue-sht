<template>
    <div class="main" ref="cityContent">
        <header ref="header">
            <v-touch tag="i" class="iconfont icon-icon-left" @tap="handleSwitch()"></v-touch>
            <span>切换城市</span>
        </header>
        <div class="city">
            <h3>当前城市</h3>
            <p>{{this.$store.state.city.nm}}</p>
            <h3>热门城市</h3>
            <div class="hot">
                <v-touch tag="span" @tap="handleCityTo(item)"
                v-for="item in hotCity" :key="item.id">{{item.nm}}</v-touch>
            </div>
            <h3>更多城市</h3>
            <div class="more">
                <v-touch tag="span" @tap="handleTo(index)" v-for="(item,index) in cityList" :key="item.id">{{item.index}}</v-touch>
            </div>
            <div class="city_list" ref="city_list">
                <div class="citylist" v-for="(items,index) in cityList" :key="index+'i'">{{items.nm}}
                    <h3 class="title_letter">{{items.index}} (以{{items.index}}开头的城市)</h3>
                    <div class="list_name">
                        <v-touch tag="div" @tap="handleCityTo(child)"
                        class="list_name_item" v-for="child in items.list" :key="child.id">{{child.nm}}</v-touch>    
                    </div>
                </div>
            </div>
        </div>
         <Bottom/>  
        <v-touch tag="em" class="iconfont icon-shang" @tap="handleTop()"></v-touch>
    </div>

</template>

<script>
import {mapState} from "vuex";
import Bottom from "@common/components/bottom";
export default {
    components:{
        Bottom,
    },
    name:"city",
    methods:{
        handleCityTo(child){
            this.$router.back();
            this.$store.commit("city/handleUpdateCity",child);
        },
        handleTop(){
            let _me=this;
            let time=setInterval(_=>{
                _me.$refs.cityContent.scrollTop -= 1000;
                if(_me.$refs.cityContent.scrollTop<=0){
                    _me.$refs.cityContent.scrollTop =0;
                    clearInterval(time);
                }
            },50);
        },
        handleSwitch(){
            this.$router.back();
        },
        handleTo(index){
            let icon=this.$refs.city_list.querySelectorAll(".title_letter")[index].offsetTop;
            this.$refs.cityContent.scrollTop = icon-this.$refs.header.offsetHeight;
        }
    },
    created(){
        if(!(sessionStorage.getItem("cityList")&&sessionStorage.getItem("hotCity"))){
            this.$store.dispatch("city/handleAsyncGetCity");
        }
    },
    computed:{
        ...mapState({
            cityList:state=>state.city.cityList,
            hotCity:state=>state.city.hotCity,
        })
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
        font-size: .14rem;
        color:#333;
        overflow: auto;
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
            background:#f4f4f4;
            h3{
                width: 100%;
                height: .33rem;
                padding-left:.1rem;
                line-height: .33rem;
                font-weight: bold;
            }
            p{
                width: 100%;
                height: .42rem;
                line-height: .42rem;
                padding-left: .22rem;
                font-weight: bold;
                color:red;
                background: #fff;
                font-size: .18rem;
                border-top:1px solid #ccc;
                border-bottom:1px solid #ccc;
            }
            .hot,.more{
                display: flex;
                flex-wrap: wrap;
                border-top:1px solid #ccc;
                background: #fff;
                 span{
                    width: 33.3%;
                    height: .4rem;
                    display:flex;
                    justify-content: center;
                    align-items: center;
                    border-right:1px solid #ccc;
                    border-bottom:1px solid #ccc;
                }
            }
           .more span{
               width: 25%;
           }
           .city_list{
               width: 100%;
               min-height: 0;
            .citylist{
                width: 100%;
                min-height: 0;
                .list_name{
                    display: flex;
                    flex-wrap: wrap;
                    border-top:1px solid #ccc;
                    background: #fff;
                    .list_name_item{
                        width: 33.3%;
                        height: .4rem;
                        display:flex;
                        justify-content: center;
                        align-items: center;
                        border-right:1px solid #ccc;
                        border-bottom:1px solid #ccc;
                    }
                }
            }
           }
        }
        em{  
            width: .3rem;
            height: .3rem;
            border-radius: 50%;
            background: #fff;
            position: fixed;
            bottom:0.4rem;
            right:.1rem;
            font-size: .3rem;
            color:#aaa;
        }
    }
</style>