export default {
    path:"register",
    component:_=>import("@components/register"),
    name:"register",
    meta:{
      title:"注册",
      tabBarFlag:false,
      requiredAuth:true,
    },
}