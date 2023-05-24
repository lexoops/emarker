<template>
    <view class="tabber-container flex-column flex1">
        <swiper :current="current"
                v-if="useSwiper"
                @change="onSwiperChange"
                class="tabbar-swiper flex1">
            <swiper-item v-for="(item,index) in tabs"
                class="tabber-swiper-item flex1 overflow-hidden">
                <view v-if="current ===index" >
                    <slot name="page"
                          v-bind:item="item"
                          v-bind:index="index"
                          v-bind:isActive="index===current"/>
                </view>
            </swiper-item>
        </swiper>
        <view :class="' flex-row flex-align-center overflow-hidden scroll-x flex-nowrap  '+ (gapLine?'tab-btn-group ':' ') +(spaceBetween?'space-between ':' ')">
            <view v-for="(item,index) in tabs"
                  class="flex1 flex-center flex-column height-100"
                  @click="onClick(item,index)"
                  :style="tabStyle"
            >
                <slot name="button"
                      v-bind:item="item"
                      v-bind:index="index"
                      v-bind:isActive="index===current"
                />
                <view v-if="index===current &&activeLine"
                      :style="activeLineStyle"
                      :class="'tabber-active-bottom '+activeLineClass"/>
                <view v-else class="tabber-active-bottom bg-transparent flex-just-end" :style="activeLineStyle"/>
            </view>
        </view>
        <view class="border-bottom-line1" v-if="bottomLine"/>
    </view>
</template>

<script>

    export default {
        name:'index',
        props:{
            tabs:{
                type:Array,
                default:[]
            },
            current:{
                type:Number,
                default: 0
            },
            useSwiper:{
                type:Boolean,
                default:true
            },
            gapLine:{
                type:Boolean,
                default:true
            },
            bottomLine:{
                type:Boolean,
                default:false
            },
            activeLine:{
                type:Boolean,
                default:false
            },
            activeLineClass:{
                type:String,
                default:''
            },
            activeLineStyle:{
                type:String,
                default:''
            },
            tabStyle:{
                type:String,
                default:''
            },
            spaceBetween:{
                type:Boolean,
                default:true
            }
        },
        data(){
          return {

          }
        },
        mounted(){

        },
        methods:{
            onSwiperChange({detail}){
                const {current} =detail ||{};
                this.onClick(this.tabs[current],current);
            },
            onClick(item,index){this.$emit('change',{item,index});}
        }
    }
</script>

<style scoped lang="scss">
    .tabber-container{
        .tab-btn-group{
            border-top: 1px solid $uni-f5
        }
    }
    .tabbar-swiper{
        .tabber-swiper-item{
        }
    }
    .tabber-active-bottom{
        width: 60rpx;
        height: 5rpx;
        background-color: $uni-color-primary;
    }

</style>