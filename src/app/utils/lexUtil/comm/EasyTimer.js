
export default class EasyTimer{

    time =60;
    isBegin =false;
    finishCallback =null;
    secCallback =null;
    keepFirstTime =0;
    timer =null;
    unit =1000;

    start(time,finishCallback=()=>{}, secCallback =()=>{}){
        if (time===''){return;}
        this.isBegin =true;
        this .time =time;
        this .keepFirstTime =time;
        this.secCallback =secCallback;
        this.finishCallback =finishCallback;
        this.counterBegin();
    }

    setUnit(unit =1000){this.unit =unit;}

    counterBegin(){
        if (this.time<=0){
            this.isBegin =false;
            if (this.finishCallback ===null){return;}
            this.finishCallback( this.time);
            return;
        }
        this.time -=1;
        try {clearTimeout(this.timer);}catch (e) {}
        this.timer =setTimeout(()=>{
            if (this.secCallback ===null){return;}
            this.secCallback(this.time);
            this.counterBegin();
        },this.unit);
    }

    getTime(){
        return this.time;
    }

    setTime(time){
        this.time =time;
    }

    //执行毫秒计数
    cacStop =false;
    endTime =0;
    text ="";
    cacTime(time){
        if (this.cacStop){
            this.endTime =0;
            console.warn(this.text +":" +time +"ms");
            return;
        }
        setTimeout( ()=>{
            time +=1;
            this.cacTime(time);
        }, 1);
    }

    stopCac(text=""){
        this.text =text;
        this.cacStop =true;
    }

    dismiss(){clearTimeout(this.timer)}





}
