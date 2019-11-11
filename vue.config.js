const path = require('path');

module.exports = {
    devServer:{
        proxy:{
            "/":{
                target:"",
                changeOrigin:true
            }
        }
    },

    //别名配置

    configureWebpack:{
        resolve:{
            alias:{
                "@":path.join(__dirname,"./src"),
                "@api":path.join(__dirname,"./src/api"),
                "@common":path.join(__dirname,"./common"),
                "@assets":path.join(__dirname,"./src/assets"),
                "@components":path.join(__dirname,"./src/components"),
                "@lib":path.join(__dirname,"./src/lib"),
                "@router":path.join(__dirname,"./src/pages/router"),
                "@store":path.join(__dirname,"./src/pages/store"),
                "@utils":path.join(__dirname,"./src/pages/utils"),
            }
        }
    }
}