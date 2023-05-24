import {baseLib} from "./unibase";
import {EasyCode} from "../../comm/EasyCode";

export const uniNavigate ={
    navigateTo(url,paramsJson={}) {
        const parStr =uniNavigate.urlString(paramsJson);
        const finalStr =`${url}${parStr}`;
        baseLib.navigateTo({
            url:finalStr,
            fail:(err)=>{console.info(err)}
        });
    },
    relaunch(url,paramsJson={}) {
        const parStr =uniNavigate.urlString(paramsJson);
        const finalStr =`${url}${parStr}`;
        baseLib.reLaunch({
            url:finalStr,
        });
    },
    goBack(){uni.navigateBack({});},
    getBack(delta){uni.navigateBack({delta: delta});},
    urlString(params={}){
        let base ='';
        if (params != null) {
            for (let key in params) {
                base +=
                    (EasyCode.IsNotEmpty(base)?'&':'')
                    + key + '=' + params[key ||0];
            }
        }
        return base&&'?'+base ||'';
    }
};