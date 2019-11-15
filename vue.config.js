const path = require('path');

module.exports = {
    devServer:{
        proxy:{
            "/mob_api":{
                target:"https://m.meilele.com",
                changeOrigin:true
            },
            "/dubbo_api":{
                target:"https://m.meilele.com",
                changeOrigin:true
            },
            "/mll_api":{
                target:"https://www.meilele.com",
                changeOrigin:true
            },
            "/solr_api":{
                target:"https://m.meilele.com",
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
                "@common":path.join(__dirname,"./src/common"),
                "@components":path.join(__dirname,"./src/components"),
                "@pages":path.join(__dirname,"./src/pages"),
                "@router":path.join(__dirname,"./src/router"),
                "@store":path.join(__dirname,"./src/store"),
                "@utils":path.join(__dirname,"./src/utils"),
                "@lib":path.join(__dirname,"./src/lib"),
                "@assets":path.join(__dirname,"./src/assets")
            }
            
        }
    }
}