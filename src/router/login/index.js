export default {
    path:"login",
    component:_=>import("@components/login"),
    name:"login",
    meta:{
      title:"登陆",
      tabBarFlag:false,
      requiredAuth:true,
    },
}