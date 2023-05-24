<script>
    import {mapState} from "vuex";
    import {EasyUni} from "./app/utils/lexUtil/uni/easyUni";
	export default {
        computed:mapState({
            userDefault:state=>state.user.userDefault,
            isLogin:state=>state.user.isLogin
        }),
        beforeDestroy(){

        },
        created(){

        },
        mounted() {

        },
        methods:{

        }
    }
</script>

<style lang="scss">
    @import "~uview-ui/index.scss";
    @import "app/assets/iconfont/iconfont.css";
    text {
        font-family: "PingFang SC", serif;
        white-space: pre-wrap;
    }

</style>
