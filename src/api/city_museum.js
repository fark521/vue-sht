import http from "@utils/request";

/** 城市接口*/
// https://m.meilele.com/mll_api/api/expr_location?cid=110
//https://www.meilele.com/mll_api/api/regionData?region_id=35
export const museumApi =(cid)=>http({
    method:"get",
    url:"/mll_api/api/regionData",
    data:{
        region_id:cid
    }
})