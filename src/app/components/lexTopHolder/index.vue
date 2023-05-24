<template>
   <view :class="'flex-column width-100 ' +(absolute?'pos-absolute':'')"
         :style="'z-index:'+zIndex "
   >
       <!--#ifndef H5-->
       <u-status-bar/>
       <!--#endif-->
       <!--#ifdef H5-->
       <view style="height: 20rpx"/>
       <!--#endif-->
       <view class="flex-row flex-align-center width-100">
           <view class="flex1">
               <slot name="default"/>
           </view>
           <!--  #ifdef  MP-WEIXIN -->
           <view :style="'width: '+ getCapsule().width+'px;height:' + getCapsule().height +'px'" />
           <!--#endif-->
       </view>
   </view>

</template>

<script>

    export default {
        name: 'index',
        props:{
            absolute:{
                type:Boolean,
                default:false
            },
            zIndex:{
                type:String,
                default:"0"
            },
        },
        data() {
            return {

            }
        },
        mounted(){

        },
        methods: {
            getCapsule(){return uni.getMenuButtonBoundingClientRect();}
        }
    }
</script>

<style lang="scss" scoped>

</style>
