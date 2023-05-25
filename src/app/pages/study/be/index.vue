<template>
    <view class="flex-column page-container bg-primary">
        <EMNavigtor title="Be动词"
                    dark-mode
                    customClass="min-96"
                    :bottom-border="false"/>
        <view class="flex1 flex-column scroll-y ">
            <view v-for="(item,index) in beVerbs"
                  class="flex-row flex-align-center border-bottom-line1-light-primary" style="padding: 0 0 0 10rpx;">
                <view style="min-width: 120rpx" class="flex-center">
                    <text class="font-43 font-fff">{{index}}</text>
                </view>
                <view class="flex-column flex1 mar-left20">
                    <view class="flex-row flex-align-center pad-20 bg-primary">
                        <text class="font-grey font-30">类型 </text>
                        <text class="font-green font-30 mar-left20">{{item.type}}</text>
                    </view>
                    <view class="flex-row flex-align-center pad-20 bg-light-primary">
                        <text class="font-grey font-30">时态 </text>
                        <text class="font-green font-30 mar-left20">{{item.level}}</text>
                    </view>
                    <view class="flex-row flex-align-center pad-20 bg-primary">
                        <text class="font-grey font-30">英式 </text>
                        <text class="font-green font-30 mar-left20">{{item.markE}}</text>
                    </view>
                    <view class="flex-row flex-align-center pad-20 bg-light-primary">
                        <text class="font-grey font-30">美式 </text>
                        <text class="font-green font-30 mar-left20">{{item.markM}}</text>
                    </view>
                    <view class="flex-row flex-align-center pad-20 bg-primary">
                        <text class="font-grey font-30"> </text>
                        <text class="font-green font-30 mar-left20">{{item.markE}}</text>
                    </view>
                </view>
            </view>
        </view>
    </view>
</template>

<script>
    import {beVerbs} from "../../../assets/marks";

    export default {
        name: "index",
        data(){
            return {
                beVerbs:beVerbs,
            }
        },
        mounted(){

        },
        methods:{

        }
    }
</script>

<style scoped lang="scss">
    .border-primary{border-bottom: solid $uni-color-primary 1rpx}
    .light-border{border-bottom: solid $uni-light-primary 1rpx}
</style>
