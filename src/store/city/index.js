import {cityApi} from "@api/city";

let state ={

}

let actions = {
    async handleGetCity(){
        let data = await cityApi();
        console.log(data);
    }
}

let mutations ={

}

export default {
    state,
    actions,
    mutations,
    namespaced:true,
}