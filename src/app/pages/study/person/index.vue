<template>
    <view class="flex-column page-container bg-primary">
        <EMNavigtor title="物主代词"
                    dark-mode
                    customClass="min-96"
                    :bottom-border="false"/>
        <view class="flex1 flex-column scroll-y">
            <view v-for="(item,index) in getData()" class="pad-20 flex-column">
                <view class="flex-row flex-align-end">
                    <view class="flex-column flex-align-start">
                        <view class="border-ddd-1 flex-center pad-LR10" style="min-width: 52rpx;min-height: 52rpx">
                            <text class="font-43 font-green">{{item.name}}</text>
                        </view>
                        <view class="border-ddd-1 flex-center pad-LR10" style="min-width: 52rpx;min-height: 52rpx;margin-top: -1rpx">
                            <text class="font-fff font-26 ">{{item.pos}}</text>
                        </view>
                    </view>
                    <view class="flex1 flex-column mar-left20">
                        <view class="flex-row flex-align-center flex-align-end">
                            <text class="font-fff font-30">{{item.type}}.</text>
                            <text class="font-fff font-43">{{item.means}}</text>
                        </view>
                        <view class="flex-row flex-align-center mar-top5">
                            <view class="flex-row flex-align-end">
                                <text class="font-999 font-22">uk.</text>
                                <text class="font-fff font-30 mar-left10 font-green line-height30">{{item.markE}}</text>
                            </view>
                            <view class="flex-row flex-align-end mar-LR30">
                                <text class="font-999 font-22">us.</text>
                                <text class="font-fff font-30 mar-left10 font-green line-height30" >{{item.markM}}</text>
                            </view>
                        </view>
                    </view>
                </view>
                <view class="mar-top20" v-if="item.derived">
                    <uni-table class="" border>
                        <uni-tr class="bg-light-primary">
                            <uni-td class="">
                                <text class="font-999">w</text>
                            </uni-td>
                            <uni-td>
                                <text class="font-999">m</text>
                            </uni-td>
                            <uni-td>
                                <text class="font-999">v</text>
                            </uni-td>
                            <uni-td>
                                <text class="font-999">t</text>
                            </uni-td>
                            <uni-td>
                                <text class="font-999">p</text>
                            </uni-td>
                        </uni-tr>
                        <uni-tr v-for="(deriveItem,i) in item.derived">
                            <uni-td>
                                <text class="font-fff font-30">{{deriveItem.name}}</text>
                            </uni-td>
                            <uni-td>
                                <text class="font-fff font-30">{{deriveItem.means}}</text>
                            </uni-td>
                            <uni-td>
                                <view>
                                    <view class="flex-row flex-align-end">
                                        <text class="font-999 font-22">uk.</text>
                                        <text class="font-fff font-30 mar-left10">{{deriveItem.markE}}</text>
                                    </view>
                                    <view class="flex-row flex-align-end">
                                        <text class="font-999 font-22">us.</text>
                                        <text class="font-fff font-30 mar-left10">{{deriveItem.markM}}</text>
                                    </view>
                                </view>
                            </uni-td>
                            <uni-td>
                                <text class="font-fff font-30">{{deriveItem.type}}</text>
                            </uni-td>
                            <uni-td>
                                <text class="font-fff font-30">{{deriveItem.pos}}</text>
                            </uni-td>
                        </uni-tr>
                    </uni-table>

                </view>
            </view>
        </view>
    </view>
</template>

<script>
    import _ from 'lodash';
    import {possessives} from "../../../assets/marks";
    export default {
        name: "index",
        data(){
            return {
                possessives:possessives
            }
        },
        mounted(){

        },
        methods:{
            getData(){return _.values(possessives);}
        }
    }
</script>

<style scoped>

</style>
