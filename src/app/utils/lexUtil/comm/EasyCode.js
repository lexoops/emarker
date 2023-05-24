export const EasyCode ={
  /**
   * @return {boolean}
   */
  IsPhone:function( phoneNumber){
    return true;
    let pwdReg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/;//8到16位数字与字母组合
    let pwdReg3 = /^1([38][0-9]|5[0-35-9]|6[6]|7[0135678]|9[89])\d{8}$/;//用户名要是手机号
    if( !pwdReg3.exec(phoneNumber) ) {
      return false;
    }else return true;
  },
  /**
   * @return {boolean}
   */
  IsIDCard:function( IsIDCard){
    let reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
    return  !reg.exec(IsIDCard);
  },

  /**
   * @return {boolean}
   */
  IsNotEmpty:function ( value) {
    return value!=="" &&value!=="undefined" &&value!=="null"&&value!==undefined && value!==null &&value.length!==0 && value!== [] &&value!== {};
  },
  /**
   * @return {boolean}
   */
  EmptyFromData:function(value){
    if (typeof value != 'object') {
      return value;
    }else {
      let arr = Object.values(value);
      let isNotEmpty = arr.every((item)=>{
        return this.IsNotEmpty(item)
      });
      return isNotEmpty
    }
  },
  //是否为小数
  IsDot:function ( value) {
    let result = (value.toString()).indexOf(".");
    if(result != -1) {
      return true
    } else return false;
  },

  //是否超过指定字符，否则截断回来
  IsThenB:function (value, length) {
    if (value.length >=length){
      return value.substring(0, length);
    }
    return value;
  },

  // 距离转换
  distanceConvert(value){
    let distance = parseInt(value);
    if (distance < 1000) {
      return {
        distance:distance,
        type:'米'
      }
    }else {
      return {
        distance:(distance/1000).toFixed(2),
        type:'公里'
      }
    }
  },

  //是否包含指定字符
  /**
   * @return {boolean}
   */
  IsHaveStr:function(str, target){
    return str.indexOf(target)!==-1;
  },

  stamp2Time(stamp){
    let stamp2 =new Date(stamp);
    let date =stamp2.getFullYear() + '-'
      +(stamp2.getMonth().toString().length>9?+stamp2.getMonth():'0' +stamp2.getMonth())
      + '-'
      +(stamp2.getDay().toString().length>9?+stamp2.getDay():'0' +stamp2.getDay()) ;
    let time =stamp2.getHours() + ':'+stamp2.getMinutes();
    return stamp2.getDate() + ' '+stamp2.getTime();
  },


  num2hundred(num){
    num =parseInt( num);
    return num- num%100;
  },


  //批量替去除指定字符
  removeAllStrOfStr(str ,target){
    return str.split(target).join("");
  },


  //批量替换指定字符
  replaceAllStrOfStr(str ,target, tostr){
    return str.split(target).join(tostr);
  },


  //替换非数字
  getNum(str){
    return str.replace(/[^\d]+/, '');
  },


  getNotEmptyString(str) {
    if (this.IsNotEmpty(str)) {
      return str;
    }
    return '';
  },

  dateStampFormatter(stamp, formatter) {
    if (!this.IsNotEmpty(stamp) || isNaN(parseInt(stamp)) ) return "";
    let date =new Date(parseInt(stamp));
    return this.dateFtt(formatter, date)
  },

  dateFtt(fmt,date) { //author: meizz
    let o = {
      "Y+" : date.getFullYear(),     //年份
      "M+" : date.getMonth()+1,     //月份
      "D+" : date.getDate(),     //日
      "h+" : date.getHours(),     //小时
      "m+" : date.getMinutes(),     //分
      "s+" : date.getSeconds(),     //秒
      "q+" : Math.floor((date.getMonth()+3)/3), //季度
      "S" : date.getMilliseconds()    //毫秒
    };
    if(/(y+)/.test(fmt))
      fmt=fmt.replace(RegExp.$1, (date.getFullYear()+"").substr(4 - RegExp.$1.length));
    for(let k in o)
      if(new RegExp("("+ k +")").test(fmt))
        fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));
    return fmt;
  },
  time2Stamp(time){
    return new Date(time).getTime();
  },
  // 字符串是否在某区间
  dateCompareHour(t1, t2) {
    let date = new Date();
    let dangqian=date.toLocaleTimeString('chinese',{hour12:false});
    let dq=dangqian.split(":");
    let a = t1.split(":");
    let b = t2.split(":");

    let dqdq=date.setHours(dq[0],dq[1]);
    let aa=date.setHours(a[0],a[1]);
    let bb=date.setHours(b[0],b[1]);
    return aa<dqdq && dqdq < bb;
  },

  //安全截取字符想要的最大长度
  getStringSafeSub(str, length, putStr ="..."){
    if (str===""){return ""}
    if ( (str+"").length>length){
      return str.toString().substring( 0, length) +putStr;
    }
    return str;
  },

  getStringSafeSubNotPoint(str, length){
    if (str===""){return ""}
    if ( (str+"").length>length){
      return str.toString().substring( 0, length) ;
    }
    return str;
  },

  //去除富文本标签
  replaceStr(str){
    if(this.IsNotEmpty(str)){
      return str.replace(/<[^>]+>/g,"")
    } else {
      return;
    }
  },

  getUrlParams(str ,targetName) {
    let urlSearch = str;
    let urlValue="";
    //以？*&来拆分
    let params = urlSearch.split(/[?*&]/);
    for(let i=0;i<params.length;i++){
      //如果url参数里包含传递过来names字段，则取=后面的部分
      if(params[i].indexOf(targetName) >= 0 ){
        urlValue=params[i].split("=")[1];
        return urlValue;
      }
    }

    return urlValue;
  },

  formatLog(str){
    console.info(JSON.stringify(str,undefined,2))
  },

  subStrByStr(str, flag, asc=true){
    let index =0;
    for (let count =0;count<str.length;count++) {
      if (str[count] ===flag){
        index =asc?count +1:count-1;
        break;
      }
    }
    return asc?str.substring(index, str.length):str.substring(0, index+1);
  },

  //匹配字符串，找到位置
  findLinkResort(sourceStr='', toHtml =false, otherStr ='http://',thirdStr ='https://'){
    sourceStr +=" ";
    let result =[];
    let prevIndex =0;
    let prevLength =0;
    for (let count =0;count <sourceStr.length;count++){
      //第一个字符匹配
      if (otherStr [0] ===sourceStr[count] ||thirdStr [0] ===sourceStr[count]) {
        //匹配整串
        if (sourceStr.substring(count, count +otherStr.length) ===otherStr ||sourceStr.substring(count, count +thirdStr.length) ===thirdStr){
          for (let key =count;key< sourceStr.length;key++){
            //
            if (new RegExp(/\s+/g).test(sourceStr[key])){
              //推入之前字符段
              result.push(sourceStr.substring(prevIndex +prevLength, count));
             /* result.push(` ${sourceStr.substring(count, key)} `);*/
              result.push({
                isLink:true,
                value:` ${sourceStr.substring(count, key)} `
              });
              prevIndex =count;
              prevLength =sourceStr.substring(count, key).length;
              break;
            }
          }

        }
      }
      //到达末尾，推入末尾字符段
      else if (count >=sourceStr.length -1){
        result.push(sourceStr.substring(prevLength +prevIndex ,sourceStr.length));
      }
    }
    if (toHtml){
      let str ='';
      result.map((item,index)=>{
        if (EasyCode.IsHaveStr(item,"http://") ||EasyCode.IsHaveStr(item,"https://")) {
          str += ` <a href="${item}" style="font-weight: bold">${item}</a> `;
        }else{
          str +=item;
        }
      });
      return str;
    }
    return result;
  },

  isJSON(str) {
    if (typeof str == 'string') {
      try {
        let obj=JSON.parse(str);
        if(typeof obj == 'object' && obj ){
          return true;
        }else{
          return false;
        }

      } catch(e) {
        return false;
      }
    }
    return false;
  },

  concatJsonObj(json1,json2){
    for (const key2 in json2){
      json1[key2] =json2[key2];
    }
    return json1;
  },

  //秒转时间
  sec2time(s,needH =true,needMs =false){
    // s 为传入方法的秒数s
    let m  =  Math.floor(s/60);
    let h  =  Math.floor(s/60/60);
    let ms  =  Math.floor(s *60);
    //计算秒
    //算法：取得秒%60的余数，既得到秒数
    s  =  Math.floor(s % 60);
    m = needH ?Math.floor(m %60) :m;
    //将变量转换为字符串
    m+= '';
    s+= '';
    h+= '';
    //如果只有一位数，前面增加一个0
    m = (m.length ===1)? '0'+m : m ;
    s = (s.length ===1)? '0'+s : s;
    h = (h.length ===1)? '0'+h : h;
    ms = (ms.length ===1)? '0'+ms : ms;
    return `${needH?h +':' :''}${m}:${s}${needMs?'.':''}${needMs?ms:''}`;
  },

  sec2timV2(sec){
    let theTime = sec;//秒
    let middle = 0;//分
    let hour = 0;//小时
    if (theTime > 59){
      middle = parseInt(theTime / 60);
      theTime = parseInt(theTime % 60);
    }
    if (middle > 59) {
      hour = parseInt(middle / 60);
      middle = parseInt(middle % 60);
    }
    theTime < 10 ? theTime = '0' + theTime : theTime = theTime;
    middle < 10 ? middle = '0' + middle : middle = middle;
    hour < 10 ? hour = '0' + hour : hour = hour;
    return hour + ':' + middle + ':' + theTime;
  },

  /*获取传入时间戳与现在的时间的间隔天数*/
  getDaySpanByStamp(stamp) {
    if (!EasyCode.IsNotEmpty(stamp)) {
      return 0;
    }
    const dateNow = new Date();
    const ampNow = parseInt(dateNow.getTime()/1000);
    const ampSpan = ampNow - stamp;
    const dateSpan =new Date(ampSpan);
    const daySpan = Math.round(ampSpan / (24 * 60 * 60));
    const hourMin =dateSpan.getHours() +":" +dateSpan.getMinutes();
    if (daySpan ===1){
      return '昨天 '+hourMin +' ';
    }else if (daySpan ===2) {
      return '前天 ' +hourMin +' ';
    }else if (daySpan<10) {
      return daySpan +'天前 ' +hourMin+' ';
    }else if (daySpan<300) {
      const date =new Date(stamp);
      return (date.getMonth() +1)
        +'-'+date.getDate()
        +'  '+date.getHours()
        +':'+date.getMinutes() +' ';
    }else{
      const date =new Date(stamp);
      return (date.getFullYear())
        +'-'+(date.getMonth() +1)
        +'-'+date.getDate()
        +'  '+date.getHours()
        +':'+date.getMinutes() +' ';
    }
  },

  //去除无用空格
  trim(sText){return sText.replace(new RegExp("(^[\\s]*)|([\\s]*$)", "g"), "");},
  //json字符型序列化
  makeJson(str){return (new Function("return " + str))();},

  //金额加数字
  numFormat(num) {
    let c = (num.toString().indexOf ('.') !== -1) ? num.toLocaleString() : num.toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,');
    return c;
  },

  //去除特殊符号
  palindrome(str) {return str.replace(/[`:_.~!@#$%^&*() \+ =<>?"{}|, \/ ;' \\ [ \] ·~！@#￥%……&*（）—— \+ ={}|《》？：“”【】、；‘’，。、]/g, '');},
};
