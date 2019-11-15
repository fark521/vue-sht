import {cityApi} from "@api/city";


let state ={
    hotCity:JSON.parse(sessionStorage.getItem("hotCity")) || [],
    cityList:JSON.parse(sessionStorage.getItem("cityList")) || [],
    cityId:35,
    nm:"北京"
}

let actions = {
    async handleAsyncGetCity({commit}){
        let data = await cityApi();
        console.log(data);
        commit("handleGetCity",data.city_list_json);
    }
}

let mutations ={
    handleUpdateCity(state,params){
        state.cityId = params.i;
        state.nm = params.n;
    },

    handleGetCity(state,cities){
        // let hotCity =[],cityList =[];

    //    热门城市
    //     let a = cities.length;
    //     for(let i=0;i<a;i++){
    //         if(cities[i].isHot){
    //             hotCity.push({id:cities[i].id,nm:cities[i].nm})
    //         }
    //     }
        //城市列表
        // for(let i=0;i<a;i++){
        //     let letterFirst = cities[i].py.slice(0,1).toUpperCase();
        //     if(isCityList(letterFirst)){
        //         //不存在
        //         cityList.push({index:letterFirst,list:[{id:cities[i].id,nm:cities[i].nm}]})
        //     }else{
        //         for(let j=0;j<cityList.length;j++){
        //             if(cityList[j].index == letterFirst){
        //                 cityList[j].list.push({id:cities[i].id,nm:cities[i].nm});
        //                 break;
        //             }
        //         }
        //     }
        // }

        // //判断城市标识是否在cityList中

        // function isCityList(letterFirst){
        //     let bStop =true;
        //     for(let i=0;i<cityList.length;i++){
        //         if(cityList[i].index ==letterFirst){
        //             bStop =false;
        //             break;
        //         }
        //     }
        //     return bStop;
        // }
        // //排序
        // cityList.sort((a,b)=>{
        //     if(a.index>b.index){
        //         return 1;
        //     }else{
        //         return -1;
        //     }
        // })
        let cityList=[];
        for(let key in cities.city_list){ 
            if(!cities.city_list.hasOwnProperty(key)){
                continue;
            }
            var item = []; 
            item[0] = key 
            item[1]=cities.city_list[key]; 
            cityList.push(item); 
        } 
        
        console.log(cityList)
        state.hotCity =cities.host_city_list;
        state.cityList =cityList;

        sessionStorage.setItem("cityList",JSON.stringify(cityList));
        sessionStorage.setItem("hotCity",JSON.stringify(cities.host_city_list));
    }
}

export default {
    state,
    actions,
    mutations,
    namespaced:true,
}