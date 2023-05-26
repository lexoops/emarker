import {EasyUni} from "./lexUtil/uni/easyUni";

export default class CommUtil {
    storeIns;
    constructor(store) {
        this.storeIns =store;
    }

    navigateV2(url='',check=true,params){
        let imTimer =setTimeout(()=>{
            let isLogin =this.storeIns.state.user.isLogin;
            if (check){
                EasyUni.uniNavigate.navigateTo(isLogin?url:`/app/pages/user/login/index`,params);
            } else{
                EasyUni.uniNavigate.navigateTo(url,params);
            }
            clearTimeout(imTimer);
        },60);
    };

    checkloginRedirect(params){
        let isLogin =this.storeIns.state.user.isLogin;
        if (isLogin){return true;}
        EasyUni.uniNavigate.navigateTo(isLogin?url:`/app/pages/user/login/index`,params);
        return false;
    };

    isNotLogin(){return !this.storeIns.state.user.isLogin};

    setCopy(ref,text){
        uni.setClipboardData({
            showToast:false,
            data:text,//要被复制的内容
            success:()=>{//复制成功的回调函数
                ref.uToast.show({ message: `复制成功~`,type: 'success',duration:500});
            }
        },true);
    }

}
