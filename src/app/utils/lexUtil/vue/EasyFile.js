export default class EasyFile{
    file =null;
    reader =null;
    constructor(file =null) {
        this.file =file;
        this.reader =new FileReader();
    }

    readAsArrayBuffer(){
        return new Promise((resolve,reject)=>{
            if (null ==this.file){
                reject("文件为空");
            }
            this.reader.readAsArrayBuffer(this.file);
            this.reader.onloadend =({currentTarget})=>{
                resolve(this.getFileObj({buffer:currentTarget.result}));
            };
        });
    }

    readAsText(){
        return new Promise((resolve,reject)=>{
            if (null ==this.file){
                reject("文件为空");
            }
            this.reader.readAsText(this.file);
            this.reader.onloadend =({currentTarget})=>{
                resolve(this.getFileObj({text:currentTarget.result}));
            };
        });
    }


    readAsBinaryString(){
        return new Promise((resolve,reject)=>{
            if (null ==this.file){
                reject("文件为空");
            }
            this.reader.readAsBinaryString(this.file);
            this.reader.onloadend =({currentTarget})=>{
                resolve(this.getFileObj({binary:currentTarget.result}));
            };
        });
    }

    getFileReader(file =null){return this.reader}

    getFileObj(obj ={}){
        const {path,lastModified,name,size,type} =this.file;
        return {path,lastModified,fileName:name,size,type,...obj};
    }

    getBase64() {
        return new Promise((resolve,reject)=>{
            if (null ==this.file){
                reject("文件为空");
            }
            this.reader.readAsDataURL(this.file);
            this.reader.onloadend =({currentTarget})=>{
                resolve(this.getFileObj({b64:currentTarget.result}));
            };
        });
    }



};