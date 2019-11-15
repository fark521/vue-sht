import axios from "axios";
import loading from "@lib/loading/index.js"
const server = axios.create({
    timeout:5000,
    //baseUrl:"",
    withCredentials:true
})

//请求拦截器
server.interceptors.request.use((config)=>{
    if(config.method == "get"){
        config.params = {...config.data}
    }
    loading.loadingMount();
    // config.headers["content-type"] = "applicetion/json";
    // config.headers["token"] = "";

    return config;
},(err)=>{
    return Promise.reject(err);
})


//响应拦截
server.interceptors.response.use((res)=>{
    if(res.status == 200){
        loading.loadingDestory();
        return res.data;
    }
    
},(e)=>{
    return Promise.reject(err);
})

export default server;