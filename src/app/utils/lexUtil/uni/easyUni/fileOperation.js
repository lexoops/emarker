export const fileOperation={
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
    saveFile(filePath){
        uni.showLoading({
            title: '正在保存文件...',
            mask: true
        });

        return new Promise( (resolve, reject)=> {
            uni.saveFile({
                tempFilePath:filePath,
                success: (res) => {
                    uni.hideLoading();
                    uni.showToast({
                        title:'文件保存成功。',
                        content:"文件默认保存在:内部存储/Android/data/io.dcloud.HBuilder/apps/HBuilder/doc/uniapp_save"
                        , icon:'none'
                    });
                    resolve(res);
                },
                fail:(err)=>{
                    uni.hideLoading();
                    reject(err);
                }
            });
        });
    },

    fileToArrayBuffer(file){
        const {path} =file;
        const getFileObj =(obj ={}) =>{
            const {path,lastModified,name,size,type} =file;
            return {path,lastModified,fileName:name,size,type,...obj};
        };
        return new Promise((resolve,reject)=>{
            if (null ===file){
                reject("文件为空");
            }
            uni.request({
                url: path,
                method: 'GET',
                responseType: 'arraybuffer',
                success: res => {
                    const {data} =res ||{};
                    data &&resolve(getFileObj({buffer:data}));
                },
                fail:reject
            });
        });

    },


};
