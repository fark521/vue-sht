import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const router = new VueRouter({
  mode:"hash",
  routes:[
    {
      path:"/",
      redirect:"/home"
    },
    {
      path:"/home",
      component:_=>import("@pages/home"),
      name:"home",
      meta:{
        title:"首页",
        tabBarFlag:true,
        requiredAuth:false
      },
    },
    {
      path:"/classify",
      component:_=>import("@pages/classify"),
      name:"classify",
      meta:{
        title:"分类",
        tabBarFlag:true,
        requiredAuth:false
      },
    },
    {
      path:"/cart",
      component:_=>import("@pages/cart"),
      name:"cart",
      meta:{
        title:"购物车",
        tabBarFlag:false,
        requiredAuth:false
      },
    },
    {
      path:"/mine",
      component:_=>import("@pages/mine"),
      name:"mine",
      meta:{
        title:"我的",
        tabBarFlag:true,
        requiredAuth:false
      },
    },
    {
      path:"/city",
      component:_=>import("@pages/city"),
      name:"city",
      meta:{
        title:"定位",
        tabBarFlag:false,
        requiredAuth:false
      },
    },
    {
      path:"/search",
      component:_=>import("@pages/search"),
      name:"search",
      meta:{
        title:"搜索",
        tabBarFlag:false,
        requiredAuth:false
      },
    },
    {
      path:"/experience",
      component:_=>import("@pages/experience"),
      name:"experience",
      meta:{
        title:"体验馆列表",
        tabBarFlag:false,
        requiredAuth:false
      },
    },
  ]
})


export default router;