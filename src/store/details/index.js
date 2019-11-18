
let state = {
    input:1
}

let actions = {

}

let mutations = {
    handleInputReduce(state){
        if(state.input<=1){
            state.input=1
        }else{
            state.input--
        }
    },
    handleInputAdd(state){
        state.input++
    },
    handleRecovery(state){
        state.input=1;
    }
}


export default {
    state,
    actions,
    mutations,
    namespaced:true,
}