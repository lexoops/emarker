//负责应用更新
// import {ApiSys} from "../../net/api/sys";

const state =({
    version:{},

});

const getters = {

};


const mutations = {
    setVersion(state,ver={}){state.version =ver;},



};

const actions = {
    /*获取版本信息*/
/*    getAppVersion({commit,dispatch}){
        return new Promise((resolve, reject) => {
            let platform =uni.getSystemInfoSync().platform;
            if(platform ==='ios'){
                resolve();
                return;
            }
            // #ifdef APP-PLUS
            plus.runtime.getProperty(plus.runtime.appid, function(widgetInfo) {
                let {version} = widgetInfo;
                //比对线上版本
                ApiSys.checkUpdate()
                    .then(({data})=>{
                        console.info(`${version}` ,`${data.version}`);
                        if (`${version}` !==`${data.version}`){
                            uni.setStorageSync("__package_info__", {
                                ...widgetInfo,
                                ...data
                            });
                            uni.navigateTo({
                                url:'/app/pages/comm/upgrade/index?local_storage_key=__package_info__',
                                fail: (err) => {
                                    // console.error('更新弹框跳转失败', err)
                                    uni.removeStorageSync("__package_info__");
                                }
                            });
                        }else{
                            resolve();
                        }
                    })
            });
            // #endif
            // #ifndef APP-PLUS
            resolve();
            // #endif
        });
    },*/
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};
