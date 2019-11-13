import http from "@utils/request";

/** 城市接口*/
//http://39.97.33.178/api/cityList
export const cityApi =_=>http({
    method:"get",
    url:"./api/cityList"
})