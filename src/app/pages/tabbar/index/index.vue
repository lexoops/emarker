<template>
    <page-meta :root-font-size="$getRootFontSize()"/>
    <u-toast ref="uToast"/>
    <view class="page-container flex-column">
  <!--      <view class="bottom-tab-container pos-fixed width-100 flex-row" style="top:0;">
            <lexTabar :tabs="tabarData"
                      class="flex1"
                      :current="currentTab ||0"
                      @change="changeTab"
                      :use-swiper="false"
                      :gap-line="false"
            >
                <template v-slot:button="{item,isActive,index}">
                    <view class="flex-column flex-center pad-bottom10 position-relative" style="height: 98rpx">
                        <view class="flex-center flex-column mar-top15">
                            <view class="flex mar-bottom10">
                                <text class="font-24 font-999">{{ $t(item.title) }}</text>
                            </view>
                        </view>
                    </view>
                </template>
            </lexTabar>
        </view>-->
<!--        <view class="talk-container flex1 flex-column">
            <swiper :current="currentTab"
                    @change="({detail})=>{currentTab =detail.current;}"
                    :style="`height: 100vh !important;width:100%`"
                    class="wh100 flex1">
                <swiper-item class="flex1 overflow-hidden">
                    <home class="flex1"/>
                </swiper-item>
            </swiper>
        </view>-->
        <home class="flex1"/>
    </view>
</template>

<script>
    import home from '../home/index.vue';
    import lexTabar from '../../../components/lexTabar/index.vue';
    import {mapState} from "vuex";
    export default {
        name: "index",
        components:{lexTabar,home},
        data(){
            return {
                tabarData: [
                    {
                        title: 'lang.pages.tabbar.a1',
                        icon: '\ue61b',
                        svg:true,
                        intent: '',
                        isFunc:true
                    },
                ],
                currentTab:0,
                voiceCount:0,
                messageCount:0,
                containerHeight:0,
                info:null
            }
        },
        computed:mapState({

        }),
        watch:{},
        mounted(){
        },
        onLoad(){

        },
        onBackPress(options) {
            uni.showModal({
                title: this.$t("lang.sysTag.notice"),
                content: this.$t("lang.sysTag.exit"),
                success: function (res) {
                    if (res.confirm) {
                        plus.runtime.quit();
                    } else if (res.cancel) {
                        console.log('用户点击取消');
                    }
                }
            });
            return true;
        },
        methods:{
            changeTab({item, index}){this.currentTab = index;},

        }
    }
</script>

<style scoped lang="scss">
    .bottom-tab-container {
        border-top-left-radius: 30rpx;
        border-top-right-radius: 30rpx;
        background: rgba(255,255,255, .9);
        backdrop-filter: blur(30px);
        border-bottom: 1rpx solid $uni-f5;
        height: 110rpx;
        overflow: hidden;
    }
</style>
