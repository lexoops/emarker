<template>
    <view class="flex-column page-container bg-primary">
        <EMNavigtor title="捐赠我们"
                    dark-mode
                    customClass="min-96"
                    :bottom-border="false">

        </EMNavigtor>
        <view class="flex1 flex-column flex-align-center">
            <view class="flex-center">
                <view class="flex-center border-ddd-1 overflow-hidden" style="width: 400rpx;height:360rpx;margin-top: 100rpx;padding-top: 60rpx;border-radius: 6px">
                    <canvas canvas-id="qrcode" style="width: 360rpx;height:420rpx;margin: 0 auto;" class="flex-center" width="360rpx" height="420rpx"/>
                </view>
            </view>
            <view style="height: 100rpx"/>
            <view class="pad-LR40 flex-column flex1">
                <text class="font-fff font-30">如果您愿意捐赠10元给我们以帮助我们开发更好的应用，我们将感激不尽。</text>
                <view style="height: 30rpx"/>
                <text class="font-fff font-26">捐赠成功后</text>
                <view style="height: 20rpx"/>
                <text class="font-fff font-26">* 您的界面将不会再有广告出现。</text>
                <view style="height: 10rpx"/>
                <text class="font-fff font-26">* 您将会得到一封我们的感谢邮件。</text>
                <view style="height: 10rpx"/>
                <text class="font-fff font-26">* 您将获得一个key，用于使用我们以后提供的各类工具。</text>
            </view>
            <view class="pad-bottom20 flex-column flex-center ">
                <text class="font-999 font-26">Author:Lexoops / fa / flant</text>
                <text class="font-999 font-26 mar-left20">contact QQ:376844995</text>
                <text class="font-999 font-26">Apache license 2.0</text>
            </view>
        </view>
    </view>
</template>

<script>
    import uQRCode from '../../../utils/lexUtil/lib/uqrcode.js'
    export default {
        name: "index",
        mounted(){
            this.makeQrCode("");
        },
        methods:{
            makeQrCode(data){
                uQRCode.make({
                    canvasId: 'qrcode',
                    componentInstance: this,
                    text: JSON.stringify(""),
                    size: uni.upx2px(360),
                    margin: 0,
                    backgroundColor: '#31696A',
                    foregroundColor: '#ffffff',
                    fileType: 'jpg',
                    errorCorrectLevel: uQRCode.errorCorrectLevel.H,
                    success: res => {}
                });
            }
        }
    }
</script>

<style scoped lang="scss">
</style>
