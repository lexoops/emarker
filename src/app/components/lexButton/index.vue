<template>
    <view @touchstart="LongPress()"
          @touchend="onClick()"
          @touchmove="tomove()">
        <slot name="default"/>
    </view>
</template>

<script>
    export default {

        data() {
            return {
                timer: 0,//长按标识
                isMove: false,//滑动标识
                isEnd: false,//手指抬起标识
                isLong: false,//解决长按进入问题
                isClick: false,//点击标识
            }
        },

        methods:{

            /*
             * 长按触发
             * @return void
             */
            LongPress() {
                this.isEnd = false;
                if(!this.isMove){
                    this.timer = setTimeout(() => {
                        this.timer = 0;
                        if(!this.isMove && !this.isEnd)
                        {
                            uni.vibrateLong({
                                success: function () {
                                    // console.log('success');
                                }
                            });
                            // 【这里写长按事件】
                            this.$emit('onLongPress');

                            this.isLong = true
                        }

                        else
                        {
                            this.isLong = false
                        }
                    }, 300)//长按多少秒触发
                }
            },


            /*
             * 点击触发
             * @return void
             */
            onClick() {
                if(!this.isMove){
                    clearTimeout(this.timer);
                    if(this.timer !== 0){
                        if(this.isClick === false){
                            // 【这里写点击事件】
                            this.$emit('onClick');

                        }
                    }
                }
                this.isMove = false;
                this.isEnd = true;
                this.isLong = false;
            },




            /*
             * 手指滑动时触发
             * 这里不用管
             * return void
             */
            tomove() {
                this.isMove = true;
            }

        }

    }
</script>