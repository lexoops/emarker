import {baseLib} from './unibase';

export const LocalStorage ={
  setItem(key ='',value =''){
      if (key &&value){
          return new Promise((resolve, reject) => {
              baseLib.setStorage({
                  key: key,
                  data: value &&JSON.stringify(value),
                  success: resolve,
                  fail:reject
              });
          });
      }else{
          console.info(`localstorage存储问题：${key}=${value}~`)
      }
  },
    getItem(key =''){
        const str =baseLib.getStorageSync(key)||"{}";
        if (!str){
            console.info(`localstorage取值问题:${key}=${str}`)
        }
        return str &&JSON.parse(str);
    }
};