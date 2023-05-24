<template>
    <view class="flex-column page-container bg-primary">
        <EMNavigtor title="给我们提建议"
                    dark-mode
                    customClass="min-96"
                    :bottom-border="false">
        </EMNavigtor>
        <view class="flex-column flex1">
            <view class="input-area-box pad-LR40 mar-top50">
                <u--textarea v-model="value"
                             class="input-area-box"
                             maxlength="600"
                             height="400"
                             count
                             placeholder="请输入建议，您可以提功能建议，或者对我们的建议，也可以发送合作恰当邮件给我们。"
                />
            </view>
            <view style="min-height: 100rpx"/>
            <view class="primary-btn bg-link min-86 mar-LR40">
                <text class="font-fff">发表建议</text>
            </view>
        </view>
    </view>
</template>

<script>
    export default {
        name: "index",
        data(){
            return {
                value:""
            }
        }
    }
</script>

<style scoped lang="scss">
    .input-area-box{
        min-height: 400rpx;
    }
</style>
