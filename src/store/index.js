import Vue from "vue";
import Vuex from "vuex";

import city from "./city"
import details from "./details"
import cart from "./cart"
<<<<<<< HEAD
import detail from "./detail"
=======
import login from "./login"
>>>>>>> d0db86f17cb18960c1ff4a7f84763a02376d8f35
Vue.use(Vuex);

export default new Vuex.Store({
    modules:{
        city,
<<<<<<< HEAD
        cart,
        detail,
=======
        details,
        cart,
        login
>>>>>>> d0db86f17cb18960c1ff4a7f84763a02376d8f35
    }
})