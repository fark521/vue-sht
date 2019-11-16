
import http from "@utils/request";

/** 注册接口*/
export const registerApi =(username,password)=>http({
    type:"get",
    url:"/users/register",
    data:{
        username,
        password
    },
})


/** 登陆接口*/
export const loginApi =(username,password)=>http({
    type:"get",
    url:"/users/login",
    data:{
        username,
        password
    },
})
