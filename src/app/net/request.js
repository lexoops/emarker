import axios from 'axios';
import {EasyCode} from "../utils/lexUtil/comm/EasyCode";
import '../interceptor/netCeptor';
import {MyFormData} from "../utils/lexUtil/uni/MyFormdata";
import {md5} from '../utils/lexUtil/lib/md5';
import {EasyType} from "../utils/lexUtil/comm/EasyType";
import _ from 'lodash';
import {AppConfig} from "../config/AppConfig";

export const makeParams ={

    //网址拼接
    urlString(params={}){
        let base ='';
        if (params != null) {
            for (let key in params) {
                const curt =params[key ||0];
                const value =EasyType.isFile(curt)?'file':curt;
                base +=
                    (EasyCode.IsNotEmpty(base)?'&':'')
                    + key + '=' + value;
            }
        }
        return `${base&&'?'+base ||''}`;
    },

    jsonObj(params={}){return JSON.stringify(params);},

    formData(params={}){
        const formData =new MyFormData();
        for (let key in params){
            const curt =params[key];
            const {isFile,buff} =curt ||{};
            if (isFile){
                buff &&formData.appendFile(key,buff);
            } else{
                formData.append(key,curt);
            }

        }
        return formData.getData();
    }

};

export let storeStatic =null;
//制作header
export const makeHeader ={
    applicationJson(){return {'Content-Type': 'application/json;charset=UTF-8'};},
    multipartFormData(formdata){return { 'Content-Type': `${formdata.contentType}`,}},
    multipart(){return {'Content-Type':'multipart/form-data'}}
};

//请求
export const request= (url,method,params =null,isFormData=false,header={})=>{
    return new Promise((resolve,reject)=>{
        let headers =header ||{};
        const {sign} =headers;
        //如果Params为formdata,那么使用Muit
        if ((params ||{}).uploadFile){
            //headers =makeHeader.multipart();
        } else if (isFormData){
            headers =makeHeader.multipartFormData(params);
            params =params.buffer;
        }
        else if (EasyCode.isJSON(JSON.stringify(params))){
            headers =makeHeader.applicationJson();
            // params =JSON.stringify(params);
        }
        headers.token =storeStatic.state.user.userDefault.token ||'';
        url =(url ||'').substring(0, 4) === 'http' ? url : (AppConfig.rootUrl +AppConfig.apiUrl) + url;

        const p ={
            url,
            method: method,
            headers: headers || {},
        };
        //添加签名到头部
        if (sign){
            headers['sign'] =sign;
        }
        if (EasyCode.IsNotEmpty(params)){
            p.data =params;
        }
        if ((params ||{}).uploadFile){
            const {file,name,filePath} =params;
            const form2 =_.cloneDeep(params);
            delete form2['file'];
            delete form2['uploadFile'];
            // #ifdef APP-PLUS
            delete form2['name'];
            // #endif
            const p2 ={
                url,
                name,
                // #ifdef APP-PLUS
                filePath:file.path,
                // #endif
                // #ifndef APP-PLUS
                file:file,
                // #endif
                formData:form2,
                header:headers
            };
            uni.uploadFile({
                ...p2,
                success: (response) => {
                    try {
                        const {data,code,status} =response ||{};
                        resolve(data ||response);
                    }catch (e) {
                        const {data} =response ||{};
                        reject(data ||response);
                    }
                },
                fail:(response)=>{
                    const {data} =response ||{};
                    reject(data ||response);
                }
            });
        }else{
            axios(p)
                .then((response) => {
                    try {
                        const {data,code,status} =response ||{};
                        resolve(data ||response);
                    }catch (e) {
                        const {data} =response ||{};
                        reject(data ||response);
                    }
                })
                .catch((err)=>{
                    const {data} =err ||{};
                    reject(data ||err);
                });
        }
    });
};

export const signTool ={
    getSign(params ={},stamp){
        params.timestamp =stamp;
        const p2 =[];
        for (let key in params){
            const curt =params[key];
            const {isFile,buff} =curt ||{};
            p2.push(`${key}=${isFile?key:params[key]}`);
        }
        p2.sort();
        const str =p2.join("&");
        let lower =md5(str)||"";
        console.info(str);
        return md5(lower.toUpperCase()).toUpperCase();
    }
};

export const stampTool ={
    getStamp(){return (Math.ceil(new Date().getTime()))||"";},
};


export default class Networking {

    static setStore(store){storeStatic =store;}

    static get(url, params ={}){
        let stamp =stampTool.getStamp();
        const header ={sign:signTool.getSign(_.cloneDeep(params),stamp)};//附加sign
        params =makeParams.urlString(params);
        const isEmpty =Object.keys(params).length<=0;
        url +=`${params ||'?'}${isEmpty?'':'&'}timestamp=${stamp}`; //附加时间戳
        return request(url,'GET',null,false,header);
    }

    static post(url, params){
        let stamp =stampTool.getStamp();
        const header ={sign:signTool.getSign(_.cloneDeep(params),stamp)};//附加sign
        url +=`?timestamp=${stamp}`;//附加时间戳
        return request(url,'POST',params,false,header);
    }
    static postGet(url, params){
        let stamp =stampTool.getStamp();
        const header ={sign:signTool.getSign(_.cloneDeep(params),stamp)};//附加sign
        params =makeParams.urlString(params);
        const isEmpty =Object.keys(params).length<=0;
        url +=`${params ||'?'}${isEmpty?'':'&'}timestamp=${stamp}`; //附加时间戳
        return request(url,'POST',null,false,header);
    }
    static postFormData(url, params){
        let stamp =stampTool.getStamp();
        const header ={sign:signTool.getSign(_.cloneDeep(params),stamp)};//附加sign
        params =makeParams.formData(params);
        url +=`?timestamp=${stamp}`;//附加时间戳
        return request(url,'POST',params, true,header);
    }
    static postFile(url,params){
        let stamp =stampTool.getStamp();
        const header ={sign:signTool.getSign(_.cloneDeep(params),stamp)};//附加sign
        url +=`?timestamp=${stamp}`;//附加时间戳
        params.uploadFile =true;
        return request(url,'POST',params,false,header);
    }

    static put(url, params={}){
        let stamp =stampTool.getStamp();
        url +=`?timestamp=${stamp}`;//附加时间戳
        const header ={sign:signTool.getSign(_.cloneDeep(params),stamp)};//附加sign
        return request(url,'PUT',params,false,header);
    }
    static putGet(url, params ){
        let stamp =stampTool.getStamp();
        const header ={sign:signTool.getSign(_.cloneDeep(params),stamp)};//附加sign
        params =makeParams.urlString(params);
        const isEmpty =Object.keys(params).length<=0;
        url +=`${params ||'?'}${isEmpty?'':'&'}timestamp=${stamp}`; //附加时间戳
        return request(url,'PUT',null,false,header);
    }
    static putFormData(url, params){
        let stamp =stampTool.getStamp();
        url +=`?timestamp=${stamp}`;//附加时间戳
        params =makeParams.formData(params);
        const header ={sign:signTool.getSign(_.cloneDeep(params),stamp)};//附加sign
        return request(url,'PUT',params,true,header);
    }

    static delete(url, params){
        let stamp =stampTool.getStamp();
        const header ={sign:signTool.getSign(_.cloneDeep(params),stamp)};//附加sign
        url +=`?timestamp=${stamp}`;//附加时间戳
        return request(url,'DELETE',params,false,header);
    }

    static deleteGet(url, params){
        let stamp =stampTool.getStamp();
        const header ={sign:signTool.getSign(_.cloneDeep(params),stamp)};//附加sign
        params =makeParams.urlString(params);
        const isEmpty =Object.keys(params).length<=0;
        url +=`${params ||'?'}${isEmpty?'':'&'}timestamp=${stamp}`; //附加时间戳
        return request(url,'DELETE',null,false,header);
    }

    static deleteFormData(url, params){
        let stamp =stampTool.getStamp();
        params =makeParams.formData(params);
        const header ={sign:signTool.getSign(_.cloneDeep(params),stamp)};//附加sign
        url +=`?timestamp=${stamp}`;//附加时间戳
        return request(url,'DELETE',params,false,header);
    }

}
