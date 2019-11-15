// import LoadingView from "./index.vue";
// import Vue from "vue"; 

// console.log(LoadingView);
// class JSloading{
//     constructor(){
//         let LoadingFn = Vue.extend(LoadingView);
//         console.log(Vue);
//         console.log(LoadingFn);
//         this.loadingVm = new LoadingFn({
//             el:document.createElement("div"),
//         })
//     }
//     loadingMount(){
//         document.body.appendChild(this.loadingVm.$mount().$el);
//     }
//     loadingDestroy(){
//         document.body.removeChild(this.loadingVm.$mount().$el);
//     }

// }


// export default new JSloading();
// /* Vue.extend :继承 */
import LoadingView from "./index.vue";
import Vue from "vue"
class JsLoading{
    constructor(){
        let LoadingFn = Vue.extend(LoadingView);
    this.loadingVm=   new LoadingFn({
           el:document.createElement("div"),
       })
      
    }   
    loadingMount(){
        document.body.appendChild(this.loadingVm.$mount().$el)
    }
    loadingDestory(){
        document.body.removeChild(this.loadingVm.$mount().$el)
    }
}
export default new JsLoading();