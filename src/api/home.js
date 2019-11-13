import http from "@utils/request";


/** */
export const homegoods = _=>http({
    method:"get",
    url:"/mob_api/app_tg_goods",
    
})
/** */
export const homelists = _=>http({
    method:"get",
    url:"/dubbo_api/mll/articleAd/getLikeProducts?userTags=k0506*k0106*k6803*k1603*k0803*k1102*k0202*r8901*r0301*k6901*k6601*k6501*k1901*k1701*k1501*k1401*k1201*k0701&pagSize=50&cid=bbbk2v35z9t_3516617",
    
})

