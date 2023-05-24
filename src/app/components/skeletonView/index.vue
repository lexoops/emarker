<template>
    <view class="skeleton-view-container position-relative wh100">
        <view class="skeleton-self-container wh100">
            <u-skeleton :loading="status===0"
                        :rowsHeight="height"
                        :rowsWidth="width"
                        :title="false"
                        :avatar="avatar"
                        :rows="rows"
                        :avatarSize="avatarSize"
                        animate>
                <slot/>
            </u-skeleton>
        </view>
        <view v-if="status!==1 &&!dontShowStatus"
              class="skeleton-holder pos-absolute wh100">
            <view class="wh100 flex-center" :class="custFailClass" :style="custFailStyle">
                <view v-if="status ===2">
                    <view class="min-128 flex-center flex-column"
                    @click="()=>{
                        if (checkLogin &&!loginStatus){
                            $emit('login');
                        } else{
                         $emit('reload');
                        }

                    }">
                        <image :src="checkLogin &&!loginStatus?plant:loadFail"
                               class="size-128"
                               style="opacity: .5"
                        />
                        <view v-if="checkLogin &&!loginStatus"
                              class="primary-btn bg-primary min-86 mar-top30"
                              style="min-width: 240rpx"
                        >
                            <text class="font-30 font-333">立即登录</text>
                        </view>
                        <text v-else
                              class="font-999 font-26 text-center mar-top20">加载失败~\n点击重新加载</text>
                    </view>
                </view>
               <!-- <view v-if="status===0">
                    <view class="min-128 flex-center">
                        <text class="font-999 font-30 text-center">正在疯狂加载中~</text>
                    </view>
                </view>-->
                <view v-if="status===3" @click="()=>{
                    $emit('custClick');
                }">
                    <view class="min-128 flex-center">
                        <view v-if="!emptyText">
                            <u-empty :mode="getEmptyType().mode"
                                     :icon="getEmptyType().icon"
                                     :width="iconSize"
                                     :height="iconSize"
                                     textSize="31"
                                     class="text-center"
                            />
                        </view>
                        <view   v-else>
                            <u-empty :mode="getEmptyType().mode"
                                     :icon="getEmptyType().icon"
                                     :width="iconSize"
                                     :height="iconSize"
                                     textSize="31"
                                     class="text-center"
                                     :text="emptyText"
                            />
                        </view>

                    </view>
                </view>
            </view>
        </view>
    </view>
</template>

<script>
    import  {emptyType} from './config/emptyType';
    import loadFail from './svg/loadFail.svg';
    import plant from './svg/plant.svg';
    export default {
        name: "index",
        props:{
            status:{
                type:Number,
                default:0,//0正在加载中 1加载成功 2加载失败, 3没有内容
            },
            height:{
                type:String,
                default:'20rpx'
            },
            width:{
                type:String,
                default:'100%'
            },
            rows:{
                type:String,
                default:'0'
            },
            dontShowStatus:{
                type:Boolean,
                default:false
            },
            avatar:{
                type:Boolean,
                default:false
            },
            avatarSize:{
                type:String,
                default:'32rpx'
            },
            emptyMode:{
                type:String,
                default:"car"
            },
            checkLogin:{
                type:Boolean,
                default:false
            },
            loginStatus:{
                type:Boolean,
                default:false
            },
            loginCall:{
                type:Function,
                default:()=>{}
            },
            emptyText:{
                type:String,
                default:null
            },
            custFailClass:{
                type:String,
                default:null
            },
            custFailStyle:{
                type:String,
                default:''
            },
            iconSize:{
                default:'256rpx',
                type:String
            }
        },
        data(){
            return {
                loadFail:loadFail,
                plant:plant,
            }
        },
        mounted(){

        },
        methods:{
            getEmptyType(key){return emptyType[this.emptyMode];}
        }
    }
</script>

<style scoped lang="scss">
    .skeleton-view-container{
        .skeleton-self-container{
            z-index: -200;
            display:flex !important;
        }
        .skeleton-holder{
            top:0;
            z-index: 200;
        }
    }

</style>