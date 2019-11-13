<template>
    <div class="footer">
            <div class="record">
                <div class="img_btn">
                    <img src="//static.mll3321.com/wap/common/i/ft-logo-q.png">
                    <span>电脑版</span>
                </div>
                <p>深圳象限家居设计有限公司 版权所有</p>
                <p>粤公网安备44030602000294号</p>
            </div>
            <div class="qrcode">
                <img src="//static.mll3321.com/wap/common/i/ft-qrcode.png"> 
                <p>有赞商城</p>
            </div>
        </div> 
</template>
<script>
export default {
    
}
</script>

<style lang="scss" scoped>
    .footer{
            width:3.2rem;
            height:1.1rem;
            background:#414141;
            float: left;
            padding:0.2rem 0.25rem;
            .record{
                width:1.66rem;
                height:0.58rem;
                float: left;
                .img_btn{
                    width:1.65rem;
                    height:0.24rem;
                    display: flex;
                    margin-bottom:0.1rem;
                }
                img{
                    width:0.83rem;
                    height:0.22rem;
                }
                span{
                    display: block;
                    width:0.74rem;
                    height:0.23rem;
                    text-align: center;
                    line-height: 0.23rem;
                    border:0.01rem solid #6d6d6d;
                    border-radius: 0.05rem;
                    margin-left:0.1rem;
                    color:#fff;
                    font-size:0.12rem;
                }
                p{
                    font-size:0.1rem;
                    color:#aaa;
                    margin-top:0.02rem;
                    
                }
            }
            .qrcode{
                width:0.5rem;
                height:0.66rem;
                float: right;
                margin-right:0.2rem;
                color:#aaa;
                font-size:0.11rem;
                img{
                    width:0.5rem;
                    height:0.5rem;
                    margin-bottom:0.1rem;
                }
            }
        }
</style>