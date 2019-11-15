import http from "@utils/request";

/** 城市接口*/
// https://www.meilele.com/mll_api/api/common_header_city
//http://39.97.33.178/api/cityList
export const cityApi =_=>http({
    method:"get",
    url:"/mll_api/api/common_header_city"
})