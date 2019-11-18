let state = {
    goodsList:[],
    selectedAll:true,
}

let actions = {
    handleActionsGet({commit},params){
        commit("handleMutationsGet",params);
    },
    handleCart({commit},params){
        commit("handleMutationsCart",params)
    }
}

let mutations = {
    handleMutationsGet(state,params){
        state.goodsList.push(params);
        localStorage.setItem("cartList",JSON.stringify(state.goodsList));
    },
    handleMutationsCart(state,params){
        state.goodsList = params;
        for(let i=0;i<state.goodsList.length;i++){
            state.goodsList[i].flag= true;
        }
    },
    handleChange(state){
        state.selectedAll = !state.selectedAll;

        state.goodsList.forEach(item =>{
            item.flag = state.selectedAll
        });
    },
    handleGoodsItemChange(state,index){
        state.goodsList[index].flag = !state.goodsList[index].flag;

        let stop = true;

        for(let i=0;i<state.goodsList.length;i++){
            if(!state.goodsList[i].flag){
                stop = false;
                break;
            }
        }

        state.selectedAll = stop;
    },
    handleReduce(state,index){
        if(state.goodsList[index].mount<=1){
            state.goodsList[index].mount=1;
            localStorage.setItem("cartList",JSON.stringify(state.goodsList));
        }else{
            state.goodsList[index].mount--;
            localStorage.setItem("cartList",JSON.stringify(state.goodsList));
        }
        
    },
    handleAdd(state,index){
        state.goodsList[index].mount++;
        localStorage.setItem("cartList",JSON.stringify(state.goodsList));
    },
    handledelete(state,index){
        state.goodsList.splice(index,1);
        localStorage.setItem("cartList",JSON.stringify(state.goodsList));
    }
    
    
}
let getters ={
    countPrice(){
        let sPrice = 0, sCount = 0;

        for(let i=0;i<state.goodsList.length;i++){
            if(state.goodsList[i].flag){
                sCount += state.goodsList[i].mount;
                sPrice += state.goodsList[i].mount * state.goodsList[i].price
            }
        }
        return {
            sCount,
            sPrice
        }
    }
}

export default {
    state,
    actions,
    mutations,
    getters,
    namespaced:true,
}
