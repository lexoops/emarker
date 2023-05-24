<template>
    <view class="page-container flex-column table-container">
        <swiper :current="currentTab"
                @change="({detail})=>{currentTab =detail.current;}"
                :style="`height: 100vh !important;width:100%`"
                class="wh100 flex1 deep">
            <swiper-item class="overflow-hidden mark-container flex-column table-container"
                         v-for="(item,index) in cards"
                         :key="item.name">
                <view class="flex-row deep border-bottom-line1-light-primary bg-light-primary">
                    <view class="flex1 table-content space-between flex-row">
                        <view class="flex-center flex1 flex-row voice-tag" @click="()=>{play(item,index)}">
                            <text class="font-fff font-52">{{item.name}}</text>
                            <view :class="`vp-bg audio-icon-in ${item.play?'voice-play':''}`"/>
                        </view>
                        <view class="flex-center flex1 flex-row voice-tag" v-if="$easyCode.IsNotEmpty(cards[index +1])"
                              @click="()=>{play(cards[index +1],index +1)}">
                            <text class="font-fff font-52">{{cards[index +1].name}}</text>
                            <view :class="`vp-bg audio-icon-in ${cards[index +1].play?'voice-play':''}`"/>
                        </view>
                    </view>
                </view>
                <view class="flex-column scroll-y">
                    <view class="flex-row deep">
                        <text class="table-header flex-center font-fff">类型</text>
                        <view class="flex1 table-content flex-row space-between flex-align-center">
                            <view class="flex1  mar-right5">
                                <text class="font-green font-26 flex-wrap flex-just-start">{{item.type}}</text>
                            </view>
                            <view class="flex1 mar-right5">
                                <text class="font-green font-26 flex-wrap flex-just-start"
                                      v-if="$easyCode.IsNotEmpty(cards[index +1])">{{cards[index +1].type}}</text>
                            </view>
                        </view>
                    </view>
                    <view class="flex-row light">
                        <text class="table-header flex-center font-fff">舌位</text>
                        <view class="flex1 table-content flex-row space-between flex-align-start">
                            <view class="flex1 mar-right5">
                                <text class="font-green font-26 flex-wrap flex-center">{{item.mouth}}</text>
                            </view>
                            <view class="flex1 mar-right5">
                                <text class="font-green font-26 flex-wrap flex-center"
                                      v-if="$easyCode.IsNotEmpty(cards[index +1])">{{cards[index +1].mouth}}</text>
                            </view>
                        </view>
                    </view>
                    <view class="flex-row deep">
                        <text class="table-header flex-center font-fff">唇形</text>
                        <view class="flex1 table-content flex-row space-between">
                            <view class="flex1 mar-right5">
                                <text class="font-green font-26 flex-wrap flex-center">{{item.shape}}</text>
                            </view>
                            <view class="flex1 mar-right5">
                                <text class="font-green font-26 flex-wrap flex-center"
                                      v-if="$easyCode.IsNotEmpty(cards[index +1])">{{cards[index +1].shape}}</text>
                            </view>
                        </view>
                    </view>
                    <view class="flex-row light">
                        <text class="table-header flex-center font-fff">声带</text>
                        <view class="flex1 table-content flex-row space-between">
                            <view class="flex1 mar-right5">
                                <text class="font-green font-26 flex-wrap flex-center">{{item.vocalCord}}</text>
                            </view>
                            <view class="flex1 mar-right5">
                                <text class="font-green font-26 flex-wrap flex-center"
                                      v-if="$easyCode.IsNotEmpty(cards[index +1])">{{cards[index +1].vocalCord}}</text>
                            </view>
                        </view>
                    </view>
                    <view class="flex-row deep">
                        <text class="table-header flex-center font-fff">口型图</text>
                        <view class="flex1 table-content flex-row space-between">
                            <view class="flex1 mar-right5">
                                <image :src="item.img" style="width: 290rpx;height: 290rpx;"/>
                            </view>
                            <view class="flex1 mar-right5"
                                  v-if="$easyCode.IsNotEmpty(cards[index +1])">
                                <image :src="cards[index +1].img" style="width: 290rpx;height: 290rpx;"/>
                            </view>
                        </view>
                    </view>
                    <view class="flex-row light">
                        <text class="table-header flex-center font-fff">技巧</text>
                        <view class="flex1 table-content flex-row space-between flex-align-start">
                            <view class="flex1 mar-right5">
                                <text class="font-green font-26 flex-wrap flex-center">{{item.skill}}</text>
                            </view>
                            <view class="flex1 mar-right5">
                                <text class="font-green font-26 flex-wrap flex-center"
                                      v-if="$easyCode.IsNotEmpty(cards[index +1])">{{cards[index +1].skill}}</text>
                            </view>
                        </view>
                    </view>
                </view>
            </swiper-item>
        </swiper>
    </view>
</template>

<script>
    import AudioServer from "../../../components/uniAudio/audioServer";
    import {CardPics} from "../../../assets/marks";
    export default {
        name: "index",
        data(){
            return {
                cards:CardPics,
                currentTab:0,
                currentPlay:0
            }
        },
        onLoad(){
            this.audioServices =AudioServer.getIns();
            AudioServer.onStop =()=>{
                this.cards[this.currentPlay].play =false;
                this.$forceUpdate();
            };
            AudioServer.onEnded =()=>{
                this.cards[this.currentPlay].play =false;
                this.$forceUpdate();
            };
        },
        methods:{
            onCardChanged(){

            },
            clickCard(){

            },
            play(item,index){
                this.currentPlay =index;
                if (!item.hasOwnProperty("play")) {
                    item.play =false;
                    this.$forceUpdate();
                }
                if (item.play){
                    this.audioServices.stop();
                    item.play =false;
                    this.$forceUpdate();
                }
                item.play =true;
                this.$forceUpdate();
                this.audioServices.setUrl(item.sound);
                this.audioServices.play();
            }
        }
    }
</script>

<style scoped lang="scss">
    .mark-container{}

    .table-container{
        .deep{background-color: $uni-color-primary;}
        .light{background-color: $uni-light-primary;}
    }
    .table-header{
        min-width: 120rpx;
        min-height: 100rpx;
    }
    .table-content{
        padding: 30rpx 0 30rpx 0;
    }
    .voice-tag{
        .vp-bg {
            background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAAAYCAYAAAFy7sgCAAAACXBIWXMAAAsTAAALEwEAmpwYAAAHHGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNy4xLWMwMDAgNzkuZWRhMmIzZiwgMjAyMS8xMS8xNC0xMjozMDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIzLjEgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyMy0wNS0yNFQwOTo0MjowMSswODowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjMtMDUtMjRUMDk6NDQ6MDMrMDg6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjMtMDUtMjRUMDk6NDQ6MDMrMDg6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiBwaG90b3Nob3A6SGlzdG9yeT0iMjAyMy0wNS0yNFQwOTo0Mjo0OCswODowMCYjeDk75paH5Lu2IHJlc3VsdC5wbmcg5bey5omT5byAJiN4QTvmiZPlvIAmI3g5O0ZBTFNFJiN4QTtUUlVFJiN4QTtDOlxVc2Vyc1xUVUZcRG93bmxvYWRzXHJlc3VsdC5wbmcmI3hBOzIxOSYjeEE7JiN4QTvlm77lsYLmoLflvI8mI3hBO+WcqOW9k+WJjeWbvuWxguS4reiuvue9riDlm77lsYLmoLflvI8mI3g5O+S4ujog5Zu+5bGC5qC35byPJiN4QTvnvKnmlL46IDEwMCUmI3hBO+minOiJsuWPoOWKoDog6aKc6Imy5Y+g5YqgJiN4QTvlkKvigJzlkK/nlKjigJ0mI3hBO1RSVUUmI3hBO1RSVUUmI3hBO+aooeW8jzog5q2j5bi4JiN4QTvpopzoibI6IFJHQiDpopzoibImI3hBO+e6ouiJsjogMTg3Ljk5NyYjeEE757u/6ImyOiAyNTUmI3hBO+iTneiJsjogMTA1LjAwMiYjeEE75LiN6YCP5piO5bqmOiAxMDAlJiN4QTsmI3hBOzIwMjMtMDUtMjRUMDk6NDQ6MDMrMDg6MDAmI3g5O+aWh+S7tiBDOlxVc2Vyc1xUVUZcRG93bmxvYWRzXHJlc3VsdC5wbmcg5bey5a2Y5YKoJiN4QTvlrZjlgqgmI3g5OyYjeEE7IiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjM4NmU5YzdmLTZkOWYtYTI0My05YzUxLTNjOGFiNzk3YzAwYyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDozODZlOWM3Zi02ZDlmLWEyNDMtOWM1MS0zYzhhYjc5N2MwMGMiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDozODZlOWM3Zi02ZDlmLWEyNDMtOWM1MS0zYzhhYjc5N2MwMGMiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjM4NmU5YzdmLTZkOWYtYTI0My05YzUxLTNjOGFiNzk3YzAwYyIgc3RFdnQ6d2hlbj0iMjAyMy0wNS0yNFQwOTo0MjowMSswODowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIzLjEgKFdpbmRvd3MpIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pr/1pzMAAAPDSURBVGiBzZo9aBRBFMd/e3pCTCHxg6iVmtZ0ES1UkBMhsY2dET8ao2AhBOQatTBamCbKaREUSaGFKY0pIohYKBGxiBZCYqMkEYSAH0WCWYvZuZtdZ2dn5jZ3ec2+e/zvP2/ezJt9b+6CMAx5wQVspZBiDxS9VdXTvrBe0Y+pejAZ9uvYw0hvBxakXqKyUACGFPAQsKLo80m9AGxUvpCpBxZRKgODBntIPEhVe4lKoAZpOGWA7dRioLMHJrvNDFqB3wZ7cpCqvUQlsBnAJGeAh2n2EpXYfkmTWWCPr10OoIulrd2oy0Ue0ztftXf42uUAn4nnIIq9D5gx2P+a7DJE5ZQZlIEdkSMrGvsI8bz/zx6EodjidewkXykgZnkIeO2KL1GpGm0HM0lIepTT8FcQG+4+cM8RP5Lm2B+gV0OworGp+AC4gX4fZuH3Aucd8efSJtACPM9wwoTXnYirik9OILAgTeKT7wTduWXCh0CnL942B0wyQ9xp3YtPh+9RHJv2xTfzFBoGLvniXU+h1ZAi2auVibeZgGlPE5EWHRyR+H5gERitB28zgawodQJLFjw6fBtwsh68OoEQkSi2IvHTiII760Vmwh/0xSeTOK18MzkVRIQvEfWJ2obY4EeBX4gtYo0vUemH/JL4K7DOE/8d2OaLVyeg9mc2Sanie4GPnvjDwHtfvLqFfLeP1HcCcx74ENgALLvgS1SWIb4CLs6r+DngS/Q0FXM6/P7IlnTeGp9HDpSpNXk2dZSKfwNsrQefxwR0bbENPgSuAT/qwVdzQEoTaqKkJNvLPCUAuoFn0eezuC9AlvSY+GUNJ6WZtZyUAnCU2smdd/BV/hAYRyzEBPAA0fS5lHImflz581wA10NYyj6Es0vAVE6cNvzdwHFE07oE7GoGv24BBhFvjIueDmVJkv8tokIbALoQu1S+DV1LA1f+ceBUpH/CbkPmyq8bsAxMAndxS0/b1jCN/zbiJQWibHbl9eUfBd4hdurlRvOnrXgf4ha4Bbhl4ZSrpPE/ip5dxG+lXbPAlf9V9DzQaH5Tyh2Jnh8s8a6i429X9HnqExf+TdFzsdH8aUdQCGxGlFFZFzauYuJ/HD1vUmsqXHe/K38ROB3pTxrNn9YHbCHeMJiuSHwkyd8OfEPcONwhfldaRN9q5sU/hTgyxtD/JpIrv20fkOzu8gx+kv8qIl1/In4CqDf4LvyziOBMYB/8XPnXQiN2HZFhbdT+AyGPHZ/g2/DLY2Q3cAJRszeFfy0sgE7yzjhVOhCXSwOIwD1tJv8/MpmCoMbOIxkAAAAASUVORK5CYII=) right 0 no-repeat;
            width: 40rpx;
            height: 40rpx;
            background-size: 400%;
        }
        .vp-out{
            transform: rotate(0deg);
        }
        .voice-play {
            animation-name: voice-play;
            animation-duration: 1s;
            animation-direction: normal;
            animation-iteration-count: infinite;
            animation-timing-function: steps(3);
        }
        @keyframes voice-play {
            0% {
                background-position: 0;
            }
            100% {
                background-position: 100%;
            }
        }
    }
</style>
