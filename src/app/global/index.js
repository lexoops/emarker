/*
* @class Global 全局对象存储器
* */
export default class Global {
    static globaIns =null;
    static Cache =null;
    objects ={};

    static getIns(){
        if (null ==Global.globaIns){
            Global.globaIns =new Global();
        }
        return Global.globaIns;
    }

    /*@method addObject 添加对象*/
    addObject(key,object){this.objects[key] =object;}

    /*@method getObject 根据Key获取对象*/
    getObject(key){return (this.objects[key]) ||null;}

    setClear(key){this.objects[key] =null;}

}
