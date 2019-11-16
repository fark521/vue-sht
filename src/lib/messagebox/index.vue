<template>
    <div class="messageBox">
        <div class="message">
            <div class="messageBox_content">检测到你当前城市为{{city}}，是否切换</div>
            <div class="messageBox_btn">
                <v-touch tag="div" @tap="handleClose()" class="x">取消</v-touch>
                <v-touch tag="div" @tap="handleOk()">切换</v-touch>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"messageBox",
    methods:{
    }
}
</script>


<style lang="scss" scoped>
    .messageBox{
        background: rgba(0, 0, 0, .4);
        position: fixed;
        width: 100%;
        height: 100%;
        top:0;
        left:0;
        right:0;
        bottom:0;
        z-index:40;
        font-size: .14rem;
        .message{
            width: 2.88rem;
            height: 1.45rem;
            background: #fff;
            position: absolute;
            left:0;
            top:0;
            bottom: 0;
            right: 0;
            margin:auto;
            .messageBox_content{
                padding:.4rem .2rem;
                text-align: center;
                border-bottom: 1px solid #d8d8d8;
            }
            .messageBox_btn{
                height:.44rem;
                width: 100%;
                background: #fff;
                display: flex;
                justify-content: space-around;
                align-items: center;
                color:#c33;
                div{
                    width: 50%;
                    height: 100%;
                    text-align: center;
                    line-height: .44rem;
                }
                .x{
                    border-right: 1px solid #d8d8d8;
                }
            }
        }
    }
</style>