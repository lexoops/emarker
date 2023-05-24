<template>
    <view class="flex lexpop-container">
        <u-popup :show="vbindMode?visible:show"
                 :mode="modalMode?'center':mode"
                 :customStyle="'width: '+ (width)+ '!important;'"
                 @close="()=>{
                    $emit('close');
                    action(false);
                 }">
            <view class="flex-column">
                <view :class="'overflow-hidden flex-column pos-relative '+(modalMode?'pop-modal-container':'pop-container') +(border?' content-border':' ') "
                      :style="'height:' +height+';background-color:'+bgColor+';padding:'+outerPadding">
                    <view class="flex-row flex-align-center pop-close-group" :style="'padding:'+(outerPadding==='0'?'20rpx':'0')"
                          v-if="showCloseBtn"
                    >
                        <view class="flex-1 flex-row">
                            <text :class="'font-30 font-333 bold  '+(titleClass)">{{title}}</text>
                            <slot name="title-extras"/>
                        </view>
                        <view v-if="!dontShowCloseButton"
                              :style="custStyleBtn"
                              @click="()=>{
                           $emit('close');
                           action(false)
                    }">
                            <u-icon name="close"
                                    :color="closeIconColor"
                                    size="36"/>
                        </view>
                    </view>
                    <view v-if="showModalLine &&modalMode"
                          class="border-bottom-line1 mar-top10"/>
                    <view :class="'flex-1  ' +(innerPadding?'pad-LR30 ':'') +(dontScroll?' ':'scroll-y ') +(contentAbsolute?'pos-absolute default-abs-layout ':contentMargin?'mar-top20 ':'')"
                          :style="contentStyle"
                    >
                        <slot name="content"/>
                    </view>
                    <view>
                        <slot name="extras"/>
                        <view v-if="useDefaultBtn" class="border-bottom-line1 mar-top20"/>
                        <view class="flex-row flex-align-center min-110"
                              v-if="useDefaultBtn"
                        >
                            <view class="primary-btn pad-LR30 min-72 flex1"
                                  @click="()=>{
                                    $emit('cancel');
                                    action(false);
                                }">
                                <text class="font-30 font-333">{{$t('lang.sysTag.cancel')}}</text>
                            </view>
                            <view class="min-86 bg-eee" style="width: 1rpx"/>
                            <view class="primary-btn pad-LR30 min-72 flex1"
                                  style="min-width: 140rpx"
                                  @click="()=>{
                                 $emit('confirm');
                                 action(false);
                          }">
                                <text class="font-30 font-link">{{confirmText?confirmText:$t('lang.sysTag.confirm')}}</text>
                            </view>
                        </view>
                    </view>
                </view>
                <u-gap height="50" v-if="enableCloseButton"/>
                <view class="flex-center" v-if="enableCloseButton" @click="()=>{
                    $emit('close');
                    action(false);
                 }">
                    <image src="./svg/del.svg" class="size-86"/>
                </view>
            </view>
        </u-popup>
        <view class="flex"
              :style="buttonStyle"
              @click="()=>{action(true)}">
            <slot name="button"/>
        </view>
    </view>
</template>

<script>
    export default {
        name: "index",
        props:{
            visible:{
                type:Boolean,
                default:false
            },
            border:{
                type:Boolean,
                default:true
            },
            content:{
                type:String,
                default:""
            },
            title:{
                type:String,
                default:""
            },
            titleClass:{
                type:String,
                default:""
            },
            height:{
                type:String,
                default:'80vh'
            },
            width:{
                type:String,
                default:'100%'
            },
            dontScroll:{
                type:Boolean,
                default:false
            },

            enableCloseButton:{
                type:Boolean,
                default:false
            },
            bgColor:{
                type:String,
                default:""
            },
            contentStyle:{
                type:String,
                default:""
            },
            vbindMode:{//是否启用状态自管
                type:Boolean,
                default:true,
            },
            mode:{
                type:String,
                default:'bottom'
            },
            modalMode:{//使用modal模式
                type:Boolean,
                default:false
            },
            showModalLine:{
                type:Boolean,
                default:true
            },
            useDefaultBtn:{
                type:Boolean,
                default:false
            },
            closeIconColor:{
                type:String,
                default:'#333'
            },
            dontShowCloseButton:{
                type:Boolean,
                default:false
            },
            outerPadding:{
                type:String,
                default:'0'
            },
            innerPadding:{
                type:Boolean,
                default:true
            },
            //以绝对布局显示content，即content会出现在close按钮下方
            contentAbsolute:{
                type:Boolean,
                default:false
            },
            custStyleBtn:{
                type:String,
                default:""
            },
            showCloseBtn:{
                type:Boolean,
                default:true
            },
            contentMargin:{
                type:Boolean,
                default:true
            },
            disableClose:{
                type:Boolean,
                default:false
            },
            buttonStyle:{
                type:String,
                default:''
            },
            confirmText:{
                type:String,
                default:''
            }
        },
        data(){
          return {
              show:this.visible,
          }
        },
        methods:{
            action(status){
                if (this.disableClose){
                    return;
                }
                //不需要自管模式 双绑定
                if (this.vbindMode ){
                    this.$emit('update:visible',status);
                }else{
                    this.show =status;
                }
            },
            dismiss(){this.show =false;},
            visibility(){this.show =true;}
        }
    }
</script>

<style scoped lang="scss">
    .lexpop-container{
        .pop-container{
            background-color: $uni-bg-color;
            overflow: hidden;
        }
        .content-border{
            border-top-left-radius: 20rpx;
            border-top-right-radius: 20rpx;
        }
        .pop-modal-container{
            background-color: $uni-bg-color;
            border-radius:20rpx;
            overflow: hidden;
        }
        .pop-close-group{
            z-index: 500;
        }

        .default-abs-layout{
            top:0;
            width: 100%;
            height: 100%;
        }
    }


</style>
