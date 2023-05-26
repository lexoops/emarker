<template>
    <view class="flex-column page-container bg-primary">
        <u-toast ref="uToast"/>
        <EMNavigtor title="词性介绍"
                    dark-mode
                    customClass="min-96"
                    :bottom-border="false"/>
        <view class="flex1 flex-column scroll-y ">
            <view v-for="(item,index) in wordClass"
                  class="flex-row flex-align-center border-bottom-line1-light-primary" style="padding: 0 0 0 10rpx;">
                <view style="min-width: 120rpx" class="flex-center">
                    <text class="font-43 font-fff">{{index}}.</text>
                </view>
                <view class="flex-column flex1 mar-left20">
                    <view class="flex-row flex-align-center pad-20  bg-primary">
                        <text class="font-grey font-30">类型 </text>
                        <text class="font-green font-30 mar-left20">{{item.type}}/{{item.fullName}}</text>
                    </view>
                    <view class="flex-row flex-align-center pad-20 bg-light-primary ">
                        <text class="font-grey font-30">说明 </text>
                        <text class="font-green font-30 mar-left20">{{item.means}}</text>
                    </view>
                    <view class="flex-align-start bg-primary flex-column mar-top20 " >
                        <view v-if="Object.keys(item.children).length >0" v-for="(meansItem,i) in item.children"
                              :class="'flex-column '+(i>= item.children.length?' ':'mar-bottom20 ')">
                            <text class="font-26 font-light-grey bg-light-primary">-{{meansItem.title}}  {{meansItem.text}}</text>
                            <view v-for="(t,ci) in meansItem.example.length" v-if="meansItem.example.length>0"
                                  :class="' '+(ci>= meansItem.example.length?' ':'mar-bottom10 ')">
                                <view class="flex-row flex-align-center">
                                    <text class="font-26 font-fff">{{meansItem.example[ci]}}.</text>
                                    <text class="font-26 font-light-grey mar-left20">{{meansItem.explain[ci]}}</text>
                                </view>
                            </view>
                        </view>
                    </view>
                </view>
            </view>
        </view>
    </view>
</template>

<script>
    import {wordClass} from "../../../assets/marks";

    export default {
        name: "index",
        data(){
            return {
                wordClass:wordClass,
            }
        },
        mounted(){

        },
        methods:{

        }
    }
</script>

<style scoped lang="scss">
    .bg-pri{background-color: $uni-color-primary}
    .bg-light{background-color:  $uni-light-primary }
</style>
