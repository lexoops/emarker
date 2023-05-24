<template>
    <view class="flex-column" @click="()=>{
        $emit('click');
    }">
        <view :class="customClass?customClass:'lex-input-default' +' flex-row flex-align-center min-86 '">
            <view class="flex"  v-if="usePrefix">
                <slot name="prefix"/>
            </view>
            <view class="flex1 mar-left20 position-relative">
                <input :value="content"
                       :placeholder="placeholder"
                       @input="change"
                       @focus="(data)=>{
                            focusAction(data,true);
                            isFirstLoad =false;
                        }"
                       @blur="(data)=>{
                            focusAction(data,false)
                       }"
                       :type="type"
                       :focus="focus"
                       :placeholder-style="placeholderStyle"
                       :placeholder-class="placeholderClass +' font-26'"
                       :disabled="disabled"
                       :maxlength="maxlength"
                       :password="passwordMode"
                       :class="inputClass +' font-30 width-100'"
                       :style="inputStyle"
                />
                <view v-if="disabled"
                      class="pos-absolute wh100 bg-transparent"
                      @click="()=>{$emit('click');}"
                />
            </view>
            <view class="flex mar-left20">
                <slot name="suffix"/>
                <view v-if="password &&focus">
                    <view @click="()=>{
                        showPassword =!showPassword;
                        passwordMode =!passwordMode;
                        focusAction(null,true,true);
                    }"
                          class="primary-btn"
                    >
                        <u-icon  size="40"
                                 :name="showPassword?'eye-off':'eye'"
                                 color="#333"/>
                    </view>
                </view>
                <view v-if="clearable &&focus" class="mar-left20">
                    <view class="primary-btn"
                            @click="()=>{
                               change({detail:{value:''}})
                               focusAction(null,true,true);
                    }">
                        <u-icon  size="36" name="close" color="#333333"/>
                    </view>
                </view>
            </view>
        </view>
        <view class="default-bottom-line" v-if="bottomLine" :style="defaultLineStyle">
            <view v-if="focus"
                  class="border-bottom-line1  custom-bottom-line animate__animated animate__zoomIn"
                  style="animation-duration:.3s;"
            />
            <view v-else-if="!isFirstLoad"
                  class="border-bottom-line1  custom-bottom-line animate__animated animate__zoomOut"
                  style="animation-duration:.6s;"
            />
        </view>

    </view>
</template>

<script>
    export default {
        name: "index",
        props:{
            placeholder:{
                default:'',
                type:String
            },
            content:{
                default:'',
                type:String
            },
            type:{
                default:'',
                type:String
            },
            defaultValue:{
                default:'',
                type:String
            },
            placeholderStyle:{
                default:'',
                type:String
            },
            placeholderClass:{
                default:'',
                type:String
            },
            disabled:{
                default:false,
                type:Boolean
            },
            maxlength:{
                default:-1,
                type:Number
            },
            password:{
                default:false,
                type:Boolean
            },
            customClass:{
                type:String,
                default:''
            },
            bottomLine:{
                type:Boolean,
                default:true
            },
            inputClass:{
                type:String,
                default:""
            },
            inputStyle:{
                type:String,
                default:""
            },
            clearable:{
                type:Boolean,
                default:false
            },
            disableClick:{
                type:Boolean,
                default:false
            },
            usePrefix:{
                type:Boolean,
                default:true
            },
            defaultLineStyle:{
                type:String,
                default:""
            }
        },
        data(){
            return {
                focus:false,
                isFirstLoad:true,
                showPassword:false,
                passwordMode:this.password
            }
        },
        created(){

        },
        mounted(){

        },
        beforeDestroy(){
          clearTimeout(this.timer);
        },
        methods:{
            change(data){
                const {detail} =data ||{};
                const {value} =detail ||{};
                this.$emit('update:content',value);
                this.$emit('change',value);
            },
            focusAction(data,status, needWait =false){
                //检测是否循环获取焦点
                this.foucusTestStop =false;
                if (this.foucusTestStop){
                    return;
                }
                this.timer1 =setTimeout(()=>{
                    if (!this.foucusTestStop){
                        this.foucusTestStop =true;
                        this.focus =status;
                    }
                },150);
                this.$nextTick(()=>{
                   this.timer =setTimeout(()=>{
                       this.focus =status;
                       data &&this.$emit('blur',data);
                   },needWait ?100:0);
                })
            }
        }
    }
</script>

<style scoped lang="scss">
    .lex-input-default{

    }
    .custom-bottom-line{
        height: 2rpx;
        background-color: $uni-color-primary;
    }

    .default-bottom-line{
        height: 1rpx;
        background-color: $uni-eee;
    }
</style>