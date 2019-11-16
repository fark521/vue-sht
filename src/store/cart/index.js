let state = {
    goodsList:[]
}

let actions = {
    handleActionsGet({commit},params){
        commit("handleMutationsGet",params);
    },
}

let mutations = {
    handleMutationsGet(state,params){
        //console.log(params);
        state.goodsList.push(params);
        console.log(params)

        localStorage.setItem("cartList",JSON.stringify(state.goodsList));

        // if(state.goodsList == JSON.parse(sessionStorage.getItem(cartList))){

        // }
    },
    
    
}


export default {
    state,
    actions,
    mutations,
    namespaced:true,
}
