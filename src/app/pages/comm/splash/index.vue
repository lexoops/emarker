<template>
    <page-meta :root-font-size="$getRootFontSize()"/>
    <view class="content">
        <image class="logo" src="/static/logo.png"/>
        <view>
            <text class="title font-30">EMarker2</text>
        </view>
        <text></text>
    </view>
</template>

<script>
    export default {
        mounted(){
            this.timer =setTimeout(()=>{
                this.$easyUni.uniNavigate.navigateTo('/app/pages/tabbar/index/index');
            },1000);
        },
        beforeDestroy(){
            clearTimeout(this.timer);
        },
        methods: {

        }
    }
</script>

<style>
    .content {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .logo {
        height: 128rpx;
        width: 128rpx;
        margin: 200rpx auto 50rpx auto;
    }

    .text-area {
        display: flex;
        justify-content: center;
    }

    .title {
        font-size: 36rpx;
        color: #8f8f94;
    }
</style>
