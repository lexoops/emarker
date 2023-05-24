<template>
    <view>
        <view class="flex-row min-86 flex-align-center" style="padding: 20rpx 30rpx" @click="()=>{$emit('click')}">
            <view v-if="icon &&!useCustIcon" :style="`background-color:${bgColor}`" class="size-64 flex-center border-8">
                <u--image width="30" height="30" radius="18"
                          lazy-load
                          :src="icon" v-if="useImage">
                    <template v-slot:loading>
                        <u-loading-icon color="red"/>
                    </template>
                </u--image>
                <u-icon v-else :name="icon" size="43" color="#fff"/>
            </view>
            <view v-else-if="useCustIcon" :style="`background-color:${bgColor}`" class="size-64 flex-center border-8">
                <slot name="custIcon"/>
            </view>
            <view class="flex-1 flex-row flex-align-center">
                <view class="mar-left20 flex-1 flex-column">
                    <text class="font-nowrap overflow-hidden font-30 bold font-fff">{{title}}</text>
                    <text class="font-24 font-999 mar-top5 font-nowrap overflow-hidden">{{content}}</text>
                </view>
                <view class="flex-column">
                    <view class="flex-center" v-if="useArrow">
                        <u-icon name="arrow-right" size="32" color="#fff"/>
                    </view>
                    <view class="flex-center" v-else>
                        <slot/>
                    </view>
                </view>
            </view>
        </view>
        <view class="border-bottom-line1" v-if="showBottomLine" :style="`margin-left: ${left}rpx;border-width:5rpx;border-color:rgba(255,255,255,.1)`"/>
    </view>
</template>

<script>
    export default {
        name: "index",
        props:{
            bgColor:{
                type:String,
                default:null
            },
            icon:{
                type:String,
                default:null
            },
            iconSize:{
                type:String,
                default:'43rpx'
            },
            title:{
                type:String,
                default:null
            },
            content:{
                type:String,
                default:null
            },
            useArrow:{
                type:Boolean,
                default:true
            },
            showBottomLine:{
                type:Boolean,
                default:true
            },
            useImage:{
                type:Boolean,
                default:false
            },
            useCustIcon:{
                type:Boolean,
                default:false
            },
            left:{
                type:Number,
                default:80
            },

        }
    }
</script>

<style scoped>

</style>
