export const chooseAction ={
    /*@sourceType camera album*/
    chooseImage(sizeType =['original', 'compressed'],sourceType =['album']){
        return new Promise((resolve,reject)=>{
            uni.chooseImage({
                count: 6, //默认9
                sizeType: sizeType, //可以指定是原图还是压缩图，默认二者都有
                sourceType: sourceType, //从相册选择
                success: resolve,
                fail:reject
            });
        })
    },
    getPhoto(sizeType =['original', 'compressed'],sourceType =['camera']){
        return new Promise((resolve,reject)=>{
            uni.chooseImage({
                count: 1, //默认9
                crop:{
                    quality:50,
                    width:1080,
                    height:1920,
                    resize:true
                },
                sizeType: ['compressed'], //可以指定是原图还是压缩图，默认二者都有
                sourceType: sourceType, //从相册选择
                success: resolve,
                fail:reject
            });
        })
    },
    /*@sourceType camera album*/
    chooseVideo(sizeType =['original', 'compressed'],sourceType =['album']){
        return new Promise((resolve,reject)=>{
            uni.chooseVideo({
                count: 1, //默认9
                // 来源相册或者拍摄
                maxDuration: 60,
                // 设置最长时间60s
                camera: "back",
                sizeType: sizeType, //可以指定是原图还是压缩图，默认二者都有
                sourceType: sourceType, //从相册选择
                success: resolve,
                fail:reject
            });
        })
    },
    shotVideo(sizeType =['original'],sourceType =['camera']){
        return new Promise((resolve,reject)=>{
            uni.chooseVideo({
                count: 1, //默认9
                // 来源相册或者拍摄
                maxDuration: 60,
                // 设置最长时间60s
                camera: "back",
                compressed:false,
                sizeType: sizeType, //可以指定是原图还是压缩图，默认二者都有
                sourceType: sourceType, //从相册选择
                success: resolve,
                fail:reject
            });
        })
    },

    /*下载图片且保存*/
    getRemoteFile(url, savePath,showLoading =false) {
        if (showLoading){
            uni.showLoading({
                title: '正在下载文件...',
                mask: true
            });
        }
        return new Promise( (resolve, reject)=> {
            uni.downloadFile({
                url,
                xhrFields: { withCredentials: true },
                header: {
                    "Authorization": uni.getStorageSync("userInfo").tokenKey
                },
                success:(result)=>{
                    if (showLoading){uni.hideLoading();}
                    const {statusCode,tempFilePath} =result;
                    if(statusCode ===200){
                        resolve(tempFilePath);
                    }else{
                        reject(result);
                    }
                },
                fail:(err)=>{
                    if (showLoading){uni.hideLoading();}
                    reject(err);
                }
            })
        });

    },

    //选择文件
    chooseFile(count =1){
        return new Promise((resolve,reject)=> {
            uni.chooseFile({
                count, //默认100
                extension: ['.zip', '.doc', '.docx', '.xls', '.xlsx', '.docx', '.rar', '.apk', '.7z', '.gzip', '.tar.gz', '.gz', '.tar'],
                success: resolve,
                fail:reject
            })
        });
    }

};