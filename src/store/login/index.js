
let state = {
    show1:true,
    show2:false
}

let actions = {

}

let mutations = {
    handleToken(state){
        state.show1 = false;
        state.show2 = true;
    },
    handleEsc(state){
        state.show1 = true;
        state.show2 = false;
    }
}


export default {
    state,
    actions,
    mutations,
    namespaced:true,
}