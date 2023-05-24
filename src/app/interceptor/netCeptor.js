import axios from "axios";
import {EasyRequest} from "../utils/lexUtil/comm/EasyRequest";
import Global from "../global";
import {SystemFlags} from "../config/systemFlags";

//截击机一些设置 by lexoops 20211129

//请求头
// axios.defaults.headers.post["Content-Type"] ="application/x-www-form-urlencoded;charset=UTF-8";

//设置超时
axios.defaults.timeout = 10000;

//请求前分发
axios.interceptors.request.use(
    config => {
        uni.showLoading({title:'加载中...'});
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);
//请求后处理
axios.interceptors.response.use(
    response => {
        uni.hideLoading();
        try {
            const {data,status} =response ||{};
            const {code} =data ||{};
            if (EasyRequest.IsRequestSuccess(code)) {
                return Promise.resolve(response);
            } else {
                rejectGlobalExec(code);
                return Promise.reject(response);
            }
        }catch (e) {
            console.info(e)
            return Promise.reject(response);
        }
    },
    error => {
        console.info(error)
        uni.hideLoading();
        return Promise.reject(error);
    }
);


const rejectGlobalExec =(code)=>{
    if (code ===33000) {
        //被迫下线，从store实例中清除用户信息
        const store =Global.getIns().getObject(SystemFlags.storeKey);
        store.dispatch('user/userLogout')
            .then(res=>{
                console.info("here1")
                uni.showToast({
                    title:'强迫下线',
                    content:"当前账号已在其他设备登录，请检查账号密码是否泄露。",
                    icon:'none'
                });
            })
            .catch(err=>{
                console.info(err);
            });
    }
};
