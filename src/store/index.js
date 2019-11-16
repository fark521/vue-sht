import Vue from "vue";
import Vuex from "vuex";

import city from "./city"
import cart from "./cart"
import detail from "./detail"
Vue.use(Vuex);

export default new Vuex.Store({
    modules:{
        city,
        cart,
        detail,
    }
})