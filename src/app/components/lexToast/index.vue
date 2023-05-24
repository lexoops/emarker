<template>
    <view class="flex lextoast-container flex-column">
        <u-popup :show="vbindMode?visible:show"
                 mode="center"
                 :customStyle="'width: '+ (width)+ '!important;'"
                 @close="()=>{
                    $emit('close');
                    action(false);
                 }">
            <view class="flex-column pop-modal-container"
                  style="height:auto;">
                <view class="flex-row flex-align-center pad-LR20 min-96">
                    <view class="flex-1">
                        <text :class="'font-30 font-333 bold '+custTitleClass">{{title}}</text>
                        <slot name="title-extras"/>
                    </view>
                    <view @click="()=>{
                           $emit('close');
                           action(false)
                    }">
                        <u-icon name="close"
                                color="#333"
                                size="32"/>
                    </view>
                </view>
                <view v-if="showModalLine"
                      class="border-bottom-line1"/>
                <view :class="'flex-1 mar-top20 pad-LR20 ' +(dontScroll?'':'scroll-y')">
                    <view class="flex-row flex-center min-128">
                        <u-icon :name="uIcon"
                                size="43rpx"
                                :color="uIconColor"
                        />
                        <u-parse :class="'font-30 font-333 line-height43 '+custContentClass" :content="content"/>
                    </view>
                </view>
                <view>
                    <view class="border-bottom-line1 mar-top20"/>
                    <view class="flex-row flex-align-center min-96"
                          v-if="useDefaultBtn"
                    >
                        <view class="primary-btn pad-LR30 min-72 flex1"
                              v-if="!hideCancel"
                              @click="()=>{
                                    $emit('cancel');
                                    action(false);
                                                    $emit('close');
                                }">
                            <text class="font-30 font-333">{{cancelText ||'取消'}}</text>
                        </view>
                        <view class="min-96 bg-eee" style="width: 1rpx"/>
                        <view class="primary-btn pad-LR30 min-72 flex1"
                              style="min-width: 140rpx"
                              @click="()=>{
                                 $emit('confirm');
                                 action(false);
                          }">
                            <text class="font-30 font-333">{{confirmText ||'确认'}}</text>
                        </view>
                    </view>
                </view>
            </view>
        </u-popup>
        <view @click="()=>{action(true)}">
            <slot name="button"/>
        </view>
    </view>

</template>

<script>
    import lexPopView from '../../components/lexPopView/index.vue';
    export default {
        name: "index",
        components:{lexPopView},
        props:{
            visible:{
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
            },
            confirmText:{
                type:String,
                default:""
            },
            cancelText:{
                type:String,
                default:""
            },
            width:{
                type:String,
                default:'100%'
            },
            dontScroll:{
                type:Boolean,
                default:false
            },
            vbindMode:{//是否启用状态自管
                type:Boolean,
                default:true,
            },
            showModalLine:{
                type:Boolean,
                default:true
            },
            useDefaultBtn:{
                type:Boolean,
                default:true
            },
            hideCancel:{
                type:Boolean,
                default:false
            },
            custContentClass:{
                type:String,
                default:''
            },
            custTitleClass:{
                type:String,
                default:''
            },
            uIcon:{
                type:String,
                default:'warning'
            },
            uIconColor:{
                type:String,
                default:'#ff3355'
            }
        },
        data(){
            return {
                show:this.visible,
            };
        },
        methods:{
            action(status){
                //不需要自管模式 双绑定
                if (this.vbindMode ){
                    this.$emit('update:visible',status);
                }else{
                    this.show =status;
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    .lextoast-container{
        .pop-modal-container{
            background-color: $uni-bg-color;
            border-radius:20rpx;
            overflow: hidden;
        }
    }

    ::v-deep .u-popup__content{ border-radius:20rpx !important;}
</style>