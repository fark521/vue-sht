import http from "@utils/request";

/*
    热门搜索
*/
export const searchApi = _=>http({
    method:"get",
    url:"solr_api/hotSearchWord/",
})



