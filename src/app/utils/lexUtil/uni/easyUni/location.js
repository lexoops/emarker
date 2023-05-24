export const location ={
  getLocation(){
      return new Promise((resolve, reject) => {
          uni.getLocation({
              type: 'gcj02', //返回可以用于uni.openLocation的经纬度
              success: resolve,
              fail:reject
          });
      });
  }
};