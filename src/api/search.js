 import http from "@utils/request";

export const searchApi = _=>http({
    method:"get",
    url:"solr_api/hotSearchWord/",
})

