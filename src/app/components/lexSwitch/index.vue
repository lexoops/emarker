<template>
   <view>
       <view class="switch-container flex-row position-relative" id="mySwitcher"
             @click="onSwitch"
             :style="`height:${height}rpx;background-color:${value?onBgColor:offBgColor};width:${width};${border?'':'border:none !important'};${borderStyle};`">
           <view class="switch-slider animate__animated flex-center"
                 id="mySlider"
                 :animation="animationData"
                 :style="`height:${height -2}rpx;background-color:${value?onSliderColor:offSliderColor};`">
               <text class="mar-LR20">{{value?onText:offText}}</text>
           </view>
           <view class="slider-text pad-LR20 flex-center" id="onSlider">
               <text class="font-26 font-fff font-nowrap" :style="value?offTextStyle:onTextStyle">{{onText}}</text>
           </view>
           <view class="slider-text pad-LR20 flex-center font-nowrap" id="offSlider">
               <text class="font-26 font-fff" :style="value?onTextStyle:offTextStyle">{{offText}}</text>
           </view>
       </view>
   </view>
</template>

<script>
    export default {
        name: "index",
        props:{
            value:{
                type:Boolean,
                default:false
            },
            width:{//建议设置该值
                type:String,
                width:'120rpx'
            },
            height:{
                type:Number,
                default:54
            },
            onText:{
                type:String,
                default:'on'
            },
            offText:{
                type:String,
                default:'off'
            },
            onBgColor:{
                type:String,
                default:'#fff'
            },
            offBgColor:{
                type:String,
                default:'#fff'
            },
            onSliderColor:{
                type:String,
                default:'#DC3538',
            },
            offSliderColor:{
                type:String,
                default:'#DC3538',
            },
            onTextStyle:{
                type:String,
                default:''
            },
            offTextStyle:{
                type:String,
                default:''
            },
            borderStyle:{
                type:String,
                default:''
            },
            border:{
                type:Boolean,
                default:true
            }
        },
        model:{
          prop:'value',
          event:'switch'
        },
        data(){
          return {
              animationData: {}
          }
        },
        created(){
            this.animation = uni.createAnimation({
                duration: 1000,
                timingFunction: 'ease',
            });
        },
        mounted(){
            this.onSwitch(false);
        },
        methods:{
            getMaxSlider(){return this.onText.length> this.offText.length;},
            onSwitch(changeVal =true){
                // this.$emit('switch', !this.value);
                changeVal &&this.$emit('update:value', !this.value);
                this.$nextTick(()=>{
                    //测量container宽度
                    const query =uni.createSelectorQuery().in(this);
                    const mySwitcher =query.select("#mySwitcher");
                    const mySlider =query.select("#mySlider");
                    let switcherData =null;
                    mySwitcher &&mySwitcher.boundingClientRect((data)=>{switcherData =data})
                        .exec(()=>{
                            let containerRight =0;
                            mySlider &&mySlider.boundingClientRect((sliderData)=>{
                                containerRight =switcherData.width -sliderData.width -4;
                            })
                                .exec(()=>{
                                    let pos =this.value?containerRight:0;
                                    this.animation.translate(pos,0).step({duration:400});
                                    this.animationData = this.animation.export();
                                });
                        });
                });
            },
        }
    }
</script>

<style scoped lang="scss">
    .switch-container{
        background-color: #ffffff;
        min-width: 104rpx;
        height: 54rpx;
        border:solid 1rpx #ddd;
        border-radius: 40rpx;
        padding: 1rpx;
    }
    .switch-slider{
        background-color: $uni-color-primary;
        height: 52rpx;
        min-width: 52rpx;
        border-radius: 40rpx;
        position: absolute;
        z-index: 1;
        left:2rpx;
        top:2rpx;
        text{
            visibility: hidden;
        }
    }
    .slider-text{
        z-index: 2;
    }
</style>