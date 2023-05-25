<template>
    <view class="flex-column page-container bg-primary">
        <EMNavigtor title="物主代词"
                    dark-mode
                    customClass="min-96"
                    :bottom-border="false"/>
        <view class="flex1 flex-column scroll-y">
            <view v-for="(item,index) in getData()" class="pad-20 flex-column">
                <view class="flex-row">
                    <view class="border-ddd-1 flex-center pad-LR10" style="min-width: 52rpx;min-height: 52rpx">
                        <text class="font-43 font-fff">{{item.name}}</text>
                    </view>
                    <view class="flex1 flex-column mar-left20">
                        <view class="flex-row flex-align-center">
                            <text class="font-fff font-30">{{item.type}}.</text>
                            <text class="font-fff font-43">{{item.means}}</text>
                            <view class="flex-row flex-align-end mar-left20">
                                <text class="font-fff font-26 ">{{item.pos}}</text>
                            </view>
                        </view>
                        <view class="flex-row flex-align-center mar-top5">
                            <view class="flex-row flex-align-end">
                                <text class="font-999 font-22">uk</text>
                                <text class="font-fff font-30 mar-left10">{{item.markE}}</text>
                            </view>
                            <view class="flex-row flex-align-end mar-LR30">
                                <text class="font-999 font-22">us</text>
                                <text class="font-fff font-30 mar-left10">{{item.markM}}</text>
                            </view>
                        </view>
                    </view>
                </view>
                <view class="flex-column mar-left20" v-if="item.derived">

                    <view v-for="(deriveItem,i) in item.derived" class="flex-column">
                        <text class="font-fff font-30">{{deriveItem.name}}</text>
                        <text class="font-fff font-30">{{deriveItem.means}}</text>
                        <view>
                            <text class="font-fff font-30">{{deriveItem.markE}}</text>
                            <text class="font-fff font-30">{{deriveItem.markM}}</text>
                        </view>
                        <text class="font-fff font-30">{{deriveItem.type}}</text>
                        <text class="font-fff font-30">{{deriveItem.pos}}</text>
                    </view>
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
