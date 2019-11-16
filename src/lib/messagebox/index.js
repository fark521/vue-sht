import MessageBox from "./index.vue";
import Vue from "vue";


export default (function(){
    var defaultVal = {
        city:"北京"
    }
    let MessageBoxFn = Vue.extend(MessageBox);

    return (options)=>{
        for(var key in options){
            defaultVal[key] = options[key]
        }

        let MessageBoxVm = new MessageBoxFn({
            el:document.createElement("div"),
            data:{
                city:defaultVal.city,
            },
            methods:{
                handleOk(){
                    document.body.removeChild(MessageBoxVm.$mount().$el);
                },
                handleClose(){
                    document.body.removeChild(MessageBoxVm.$mount().$el);
                }
            }
        })

        document.body.appendChild(MessageBoxVm.$mount().$el);
    }
})()


