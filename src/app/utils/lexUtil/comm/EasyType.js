/*@Objects EasyType
* @description 用于判断js变量类型
* author lexoops
* date 20220407
* */

export const EasyType ={
    isString(o){return getObjectType(o).indexOf('String') !==-1;},
    isNumber(o){return getObjectType(o).indexOf('Number') !==-1;},
    isObject(o){return getObjectType(o).indexOf('Object') !==-1;},
    isArray(o){return getObjectType(o).indexOf('Array') !==-1;},
    isDate(o){return getObjectType(o).indexOf('Date') !==-1;},
    isBoolean(o){return getObjectType(o).indexOf('Boolean') !==-1;},
    isFunction(o){return getObjectType(o).indexOf('Function') !==-1;},
    isFile(o){
        let result =false;
        //#ifdef H5
        result = o instanceof File;
        //#endif
        //#ifndef H5
        result = (o.isFile) ||false;
        //#endif
        return result;
        },
};

export const getObjectType =(o)=>{return Object.prototype.toString.call(o)};