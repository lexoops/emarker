<template>
    <view class="flex-center"
          :style="`${disabled?'opacity: .6;':''}`"
          @click="()=>{
            const result =!status;
            change(result);
        }"
    >
        <span class="iconfont"
              v-if="!status"
              :style="'color:' +color"
        >&#xe61d;</span>
        <span class="iconfont"
              v-if="status"
              :style="'color:' +activeColor"
        >&#xe653;</span>
        <slot name="content"/>
    </view>
</template>

<script>
    export default {
        name: "index",
        props:{
            size:{
                type:String,
                default:'28rpx'
            },
            color:{
                type:String,
                default:'#333333'
            },
            activeColor:{
                type:String,
                default:'#307cfc'
            },
            status:{
                type:Boolean,
                default:false
            },
            disabled:{
                type:Boolean,
                default:false
            },
            autoBind:{
                type:Boolean,
                default:true
            },
            justReturnClick:{
                type:Boolean,
                default:false
            }
        },
        data(){
           return {

           };
        },
        methods:{
            change(result){
                if (this.justReturnClick){
                    this.$emit('click');
                }
                if (this.disabled){
                    return;
                }
                if(this.autoBind){
                    this.$emit('update:status', result);
                }else{
                    this.$emit('change',result);
                }
            }
        }

    }
</script>

<style scoped>

</style>
