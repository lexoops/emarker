<template>
    <lexTopHolder :class="'width-100 '+(fixed?'pos-fixed':'')"
                  :style="'background-color:' +bgColor"
                  z-index="200">
        <template>
            <view v-if="useCustom">
                <slot name="customContent"/>
            </view>
            <view v-else :class="'navigator-container min-72 flex-column width-100 '+customClass">
                <view class="flex-row flex-align-center flex1">
                    <!--                         :style="(showLeft?'':'visibility: hidden') +';margin-left:20rpx;'+(leftStyle)">-->
                    <view :class="'menu-container flex-row flex-align-center '+leftClass" @click="back"
                          v-if="showLeft"
                          :style="'margin-left:20rpx;'+(leftStyle)">
                        <text v-if="leftText" :class="'font-30 ' +(darkMode?' font-fff':'font-333')">{{leftText}}</text>
                        <u-icon v-else name="arrow-left" size="43" :color="darkMode?'#fff':'#333'"/>
                    </view>
                    <view v-if="!showLeft" :class="'menu-container flex-row flex-align-center '+leftClass" @click="back"
                          :style="'margin-left:20rpx;'+(leftStyle)">
                        <slot name="left"/>
                    </view>
                    <view class="flex1 flex-center height-100">
                        <text v-if="title" :class="'text-center font-32 bold ' +(darkMode?' font-fff':'font-666')">{{title}}</text>
                        <slot name="content"/>
                    </view>
                    <view class="menu-container flex-align-center flex-just-end flex-row mar-right20">
                        <slot name="forward"/>
                    </view>
                </view>
                <view v-if="bottomBorder" class="border-bottom-line1-f5 width-100"/>
            </view>
        </template>
    </lexTopHolder>
</template>

<script>
    import lexTopHolder from '../lexTopHolder/index.vue';
    import {EasyUni} from "../../utils/lexUtil/uni/easyUni";
    export default {
        name: "QDNavigtor",
        components:{lexTopHolder},
        props:{
            darkMode:{
                default:false,
                type:Boolean
            },
            bgColor:{
                default:'#2F3A54',
                type:String
            },
            title:{
                default:'',
                type:String
            },
            leftText:{
                default:null,
                type:String
            },
            bottomBorder:{
                default:true,
                type:Boolean
            },
            autoBack:{
                default:true,
                type:Boolean
            },
            showLeft:{
                default:true,
                type:Boolean
            },
            fixed:{
                type:Boolean,
                default:false
            },
            leftClass:{
                type:String,
                default:''
            },
            leftStyle:{
                type:String,
                default:''
            },
            useCustom:{
                type:Boolean,
                default:false
            },
            customClass:{
                type:String,
                default:""
            }

        },
        mounted(){

        },
        methods:{
            back(){
                this.$emit('onBack');
                this.autoBack &&EasyUni.uniNavigate.getBack();
            }
        }
    }
</script>

<style scoped lang="scss">
    .navigator-container{
        .menu-container{
            min-width: 52rpx;
            height: 100%;
        }
    }

    .dark{background-color: $uni-color-primary !important;}

    .white{background-color: $uni-white !important;}

</style>
