<template>
    <view class="flex webpage-container">
        <u-popup :show="visible"
                 mode="bottom"
                 @close="dismiss">
            <view class="flex-column pop-container">
                <view class="flex-row flex-align-center">
                    <view class="flex-1">
                        <text class="font-30 font-333 bold">{{title}}</text>
                    </view>
                    <view @click="dismiss">
                        <u-icon name="close"
                                color="#333"
                                size="32"/>
                    </view>
                </view>
                <view class="flex-1 mar-top20 scroll-y">
                    <u-parse :content="content "
                             class="font-30"/>
                </view>
                <view>
                    <slot name="extras"/>
                </view>
            </view>
        </u-popup>
        <view class="flex"
              @click="show">
            <slot name="button"/>
        </view>
    </view>
</template>

<script>

    export default {
        name: "index",
        props:{
            defaultShow:{
                type:Boolean,
                default:false
            },
            content:{
                type:String,
                default:""
            },
            title:{
                type:String,
                default:""
            }
        },
        data(){
          return {
              visible:this.defaultShow
          }
        },
        mounted(){

        },
        methods:{
            dismiss(){this.visible =false;},
            show(){this.visible =true;},
        }
    }
</script>

<style scoped lang="scss">
    .webpage-container{
        .pop-container{
            background-color: $uni-white;
            height: 80vh;
            border-top-left-radius: 20rpx;
            border-top-right-radius: 20rpx;
            overflow: hidden;
            padding: 30rpx;
        }
    }


</style>