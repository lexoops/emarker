<template>
    <view class="flex-column page-container bg-primary">
        <EMNavigtor title="EMarker" use-custom class="min-96 flex-align-center ">
            <template #customContent>
                <view class="width-100vw">
                    <view class="flex-row flex-align-center pad-LR20 min-86">
                        <view class="flex-row flex-align-center" @click="()=>{showMenu =true;}">
                            <view style="margin-top: 5rpx">
                                <u-icon name="list-dot" size="43" color="#fff"/>
                            </view>
                            <text class="text-center font-36 bold font-green">EMarker</text>
                        </view>
                        <view class="flex1 mar-left20 flex-just-end">
                            <view class="flex-row flex-align-center" @click="()=>{$easyUni.uniNavigate.navigateTo('/app/pages/other/donate/index')}">
                                <text class="font-999">捐赠</text>
                            </view>
                            <text class="font-ddd mar-LR10">/</text>
                            <view class="flex-row flex-align-center" @click="()=>{$easyUni.uniNavigate.navigateTo('/app/pages/other/suggestion/index')}">
                                <text class="font-999">建议</text>
                            </view>
                        </view>
                    </view>
                </view>
            </template>
        </EMNavigtor>
        <view class="flex-column scroll-y">
            <view class="flex-row flex-wrap main-container">
                <view v-for="(item,index) in soundMarks">
                    <view v-if="item.dump" class="min-64 pad-left20 flex-align-center mar-top20 mar-bottom5 space-between flex-row holder">
                        <text class="font-fff font-26">{{item.title}}</text>
                        <view class="flex-row flex-center" @click="()=>{$easyUni.uniNavigate.navigateTo('/app/pages/detail/pick/index')}">
                            <text class="font-26" style="color: #769EA0">查看详解</text>
                            <u-icon name="arrow-right" size="26"/>
                        </view>
                    </view>
                    <view v-else class="bg-light-primary mark-container flex-center box-shadow-3-light"
                          @click="()=>{playMarks(item)}">
                        <text class="font-green font-36">{{item.name ||""}}</text>
                    </view>
                </view>
            </view>
            <view class="min-43"/>
        </view>
        <u-popup :show="showMenu"
                 @close="()=>{showMenu =false;}"
                 mode="left"
                 closeable
                 @open="()=>{}">
            <view class="bg-light-primary flex-column" style="height: 100vh;width: 65vw;">
                <view class="min-96"/>
                <view class="flex1 flex-column">
                    <ItemContainer title="Be动词" icon="weixin-fill"
                                   useArrow
                                   bg-color="#31696A"
                                   :show-bottom-line="false"
                                   use-cust-icon
                                   @click="()=>{$easyUni.uniNavigate.navigateTo('/app/pages/study/be/index')}">
                        <template #custIcon>
                            <text class="font-fff bold">Be</text>
                        </template>
                    </ItemContainer>
                    <ItemContainer title="物主代词" icon="weixin-fill"
                                   useArrow
                                   class="bg-primary"
                                   :show-bottom-line="false"
                                   bg-color="#397072"
                                   use-cust-icon
                                   @click="()=>{$easyUni.uniNavigate.navigateTo('/app/pages/study/person/index')}">
                        <template #custIcon>
                            <text class="font-fff bold">P</text>
                        </template>
                    </ItemContainer>
                    <ItemContainer title="词性介绍" icon="weixin-fill"
                                   useArrow
                                   class="bg-light-primary"
                                   :show-bottom-line="false"
                                   bg-color="#31696A"
                                   use-cust-icon
                                   @click="()=>{$easyUni.uniNavigate.navigateTo('/app/pages/study/posIntro/index')}">
                        <template #custIcon>
                            <text class="font-fff bold">I</text>
                        </template>
                    </ItemContainer>
                </view>
                <ItemContainer title="捐赠我们" icon="rmb-circle-fill"
                               useArrow
                               bg-color="#31696A"
                               :show-bottom-line="false"
                               @click="()=>{$easyUni.uniNavigate.navigateTo('/app/pages/other/donate/index')}"/>
                <ItemContainer title="输入KEY" icon="integral-fill"
                               useArrow
                               class="bg-primary"
                               bg-color="#397072"
                               :show-bottom-line="false"
                               @click="()=>{$easyUni.uniNavigate.navigateTo('/app/pages/other/donate/index')}"/>
                <ItemContainer title="提建议" icon="email-fill"
                               useArrow
                               bg-color="#31696A"
                               :show-bottom-line="false"
                               @click="()=>{$easyUni.uniNavigate.navigateTo('/app/pages/other/suggestion/index')}"/>
            </view>
        </u-popup>
    </view>
</template>

<script>
    import _ from 'lodash';
    import lexToolTip from "../../../components/lexToolTip/index.vue";
    import {mapState} from "vuex";
    import {SoundMarks} from '../../../assets/marks';
    import AudioServer from "../../../components/uniAudio/audioServer";
    export default {
        name: "index",
        components: {lexToolTip},
        computed:mapState({

        }),
        watch:{

        },
        data() {
            return {
                soundMarks:SoundMarks,
                showMenu:false
            }
        },

        mounted() {
            console.info(this.soundMarks)
        },
        methods:{
            playMarks(item){
                const audioServices =AudioServer.getIns();
                audioServices.setUrl(item.sound);
                audioServices.play();
            },
        }
    }
</script>
<style lang="scss" scoped>
    .mark-container{
        min-width: calc(100vw / 5.5);
        min-height: 80rpx;
        margin:0 0 5rpx 5rpx;
    }
    .main-container{
        margin-left: calc((100vw - 20% * 4.82) );
    }
    .holder{
        width: 90vw;
    }
</style>
