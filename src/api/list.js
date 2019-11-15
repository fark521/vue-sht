import http from "@utils/request";

export const storeListApi = _=>http({
    method:"get",
    url:"/solr_api/recommend/listpage/?userTags=k166c*k0704*r8903*r0303*k6903*k6803*k6603*k6503*k1903*k1703*k1503*k1403*k1203*k1103*k0803*k0603*k0503*k0403&pageUrl=/category-ertongfang/&pageSize=12"
})


export const storeListApi2 = _=>http({
    method:"get",
    url:"solr_api/recommend/listpage/?userTags=k1801*k166g*k0704*r8903*r0303*k6903*k6803*k6603*k6503*k1903*k1703*k1503*k1403*k1203*k1103*k0803*k0603*k0503&pageUrl=/category-ertongyigui/&pageSize=12"
})