

export const EasyArray ={
  pushToHead:function (arr, item) {
      //将arr数组复制给a
      let a = arr.slice(0);
      //使用unshift方法向a开头添加item
      a.unshift(item);
      return a;
  },

    //将数组插入顶部
    pushArrToArrHead:function (yoursArr, target) {
        //将arr数组复制给a
        let a = target.slice(0);
        //使用unshift方法向a开头添加item
        a =a.concat(yoursArr);
        return a;
    },

    //将数组插入指定位置
    insertArrToArrIndex:function (arr, index, target) {
        let a =[];
        let b =[];
        if (target.length<=0){
            return [];
        }else if (index ===0){
            b =target.slice(0);
        }else{
            a =target.slice(0, index);
            b =target.slice(index, target.length);
        }
        let end =[];
        end.concat( a, arr, b);
        console.warn("end", a.concat(arr, b))
        return end;
    },

    //将数组插入尾部
    pushArrToArr:function (yoursArr, target) {
        let a= yoursArr.concat(target);
        return a;
    },


    //删除数组的一个
    delItemOfArr:function(index, arr){
        let end = [];
        try {
            if (arr.length<=0)return [];
            if (index ===0){
                end= arr.slice(1);
            }else{
                let arr1 =arr.slice( 0, index);
                let arr2 =arr.slice( index +1, arr.length);
                end =arr1.concat( arr2);
            }
        }catch (e) {
            return [];
        }
        return end;
    },



    removeByItem(arr, val) {
        for(var i = 0; i < arr.length; i++) {
            if(arr[i] == val) {
                arr.splice(i, 1);
                break;
            }
        }
},


    subStr(list, groupSize =1){
        let length = list.length;
        let num = ( length + groupSize - 1 )/groupSize ;
        let newList = [];
        for (let i = 0; i < num; i++) {
            let fromIndex = i * groupSize;
            let toIndex = (i+1) * groupSize < length ? ( i+1 ) * groupSize : length ;
            let waitPush =list.slice(fromIndex,toIndex);
            if (waitPush.length>0){ newList.push(waitPush) ;}
        }
        return newList;
    },




};
