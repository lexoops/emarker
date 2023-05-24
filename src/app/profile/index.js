/*
* by lexoops
* 本文件用于加载所有存储于LocalStorage用户默认配置，
* 1，默认主题 theme
* spec.png，默认语言 lang
* */
import {SystemFlags} from "../config/systemFlags";
import {EasyCode} from "../utils/lexUtil/comm/EasyCode";
import zh_cn from '../assets/i18n/lang/zh_cn';
import en_us from '../assets/i18n/lang/en_us';

import {EasyUni} from "../utils/lexUtil/uni/easyUni";
import VueI18n from "vue-i18n";
import * as axios from "axios";


export default class AppProfile {
    static proFileStatic =null; //静态实例
    static storeStatic =null; //静态实例
    static i18nIns =null;

    userDefaultConfig ={
        lang:{
            code:SystemFlags.langEnums.chinese,
            title:'简体中文'
        },
    };
    constructor(store){
        this.initAxios();
        const userConfig =EasyUni.LocalStorage.getItem(SystemFlags.appSettings);
        if (!EasyCode.IsNotEmpty(userConfig)){return;}
        this.userDefaultConfig =userConfig?userConfig :{};
    }

    static getProFile(){
        if (null ==AppProfile.proFileStatic){
            AppProfile.proFileStatic =new AppProfile();
            return new AppProfile();
        }
        return AppProfile.proFileStatic;
    }

    static setStore(store){AppProfile.storeStatic =store;}

    //加载默认语言
    getI18n(){
        const Language ={
            zh_cn,
            en_us
        };

        const {lang} =this.userDefaultConfig;
        const {code} =lang ||{};
        AppProfile.i18nIns = new VueI18n({
            fallbackLocale: 'zh_cn',
            globalInjection:true,
            legacy: false,
            locale: code, // 设置语言环境
            messages: Language
        });
        return AppProfile.i18nIns;
    }

    setI18Lang(lang ={code:'zh_cn',title:'简体中文'}){
        const {code} =lang ||{};
        AppProfile.i18nIns.locale = code;
        this.userDefaultConfig.lang =lang;
        EasyUni.LocalStorage.setItem(SystemFlags.appSettings,this.userDefaultConfig);
    }


    //主题 未完成
    setTheme(theme){
        this.userDefaultConfig.theme =theme;
        EasyUni.LocalStorage.setItem(SystemFlags.appSettings,this.userDefaultConfig);
    }

    loadDefaultTheme(){const {theme} =this.userDefaultConfig;}


    //uview配置
    initUview(){
        uni.$u.setConfig({
            config: {unit: 'rpx'},
            props: {
                radio: {
                    size: 15
                }
            }
        })
    }

    initAxios(){
        axios.defaults.adapter = function(config) {
            return new Promise((resolve, reject) => {
                const settle = require('axios/lib/core/settle');
                const buildURL = require('axios/lib/helpers/buildURL');
                uni.request({
                    method: config.method.toUpperCase(),
                    url: buildURL(config.url, config.params, config.paramsSerializer),
                    header: config.headers,
                    data: config.data,
                    dataType: config.dataType,
                    responseType: config.responseType,
                    sslVerify: config.sslVerify,
                    complete: function complete(response) {
                        response = {
                            data: response.data,
                            status: response.statusCode,
                            errMsg: response.errMsg,
                            header: response.header,
                            config: config
                        };
                        settle(resolve, reject, response);
                    }
                })
            })
        }
    }



}
