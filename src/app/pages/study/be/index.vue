<template>
    <view class="flex-column page-container bg-primary">
        <EMNavigtor title="Be动词"
                    dark-mode
                    customClass="min-96"
                    :bottom-border="false">

        </EMNavigtor>
        <view class="flex1 flex-column flex-align-center">

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
                    size: 180,
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

<style scoped>

</style>
