import {EasyCode} from "../../utils/lexUtil/comm/EasyCode";
import {createInnerAudioContext} from "./index";

export default class AudioServer {
    audioUrl ='';
    static serverIns =null;
    audioIns =null;
    volume =0;
    isPlaying =false;
    static onPlay =()=>{};
    static onPause =()=>{};
    static onStop =()=>{};
    static onEnded =()=>{};
    static onTimeUpdate =()=>{};
    constructor() {
        //#ifdef H5
        this.audioIns =createInnerAudioContext();
        //#endif
        //#ifndef H5
        this.audioIns =uni.createInnerAudioContext();
        //#endif
        this.regEvents();
    }

    static getIns(){
        if (null ==AudioServer.serverIns){
            AudioServer.serverIns =new AudioServer();
        }
        return AudioServer.serverIns;
    }

    setUrl(url){
        if (!EasyCode.IsNotEmpty(url)){
            return;
        }
        if (url ===this.audioUrl){
            return;
        }
        this.audioUrl =url;
        this.audioIns.src =url;
    }

    regEvents(){
        //#ifdef H5
        this.audioIns._events.onPlay =[()=>{AudioServer.onPlay();}];
        this.audioIns._events.onPause =[()=>{AudioServer.onPause()}];
        this.audioIns._events.onStop =[()=>{AudioServer.onStop()}];
        this.audioIns._events.onEnded =[()=>{AudioServer.onEnded()}];
        this.audioIns._events.onTimeUpdate=[(time)=>{AudioServer.onTimeUpdate(this.audioIns.currentTime);}];
        //#endif

        //#ifndef H5
        this.audioIns._callbacks.play =[()=>{AudioServer.onPlay();}];
        this.audioIns._callbacks.pause =[()=>{AudioServer.onPause()}];
        this.audioIns._callbacks.stop =[()=>{AudioServer.onStop()}];
        this.audioIns._callbacks.ended =[()=>{AudioServer.onEnded()}];
        this.audioIns._callbacks.timeupdate=[(time)=>{AudioServer.onTimeUpdate(this.audioIns.currentTime);}];
        //#endif

    }

    play(){
        this.isPlaying =true;
        this.audioIns.play();
    }

    stop(){
        this.isPlaying =false;
        this.audioIns.stop();
    }

    pause(){
        this.isPlaying =false;
        this.audioIns.pause();
    }

    seek(sec){this.audioIns.seek(sec);}

    speedRate(speed =1){
        //#ifdef H5
        this.audioIns.setSpeedRate(speed);
        //#endif
        //#ifndef H5
        this.audioIns.playbackRate =speed;
        //#endif
    }

    destroy(){
        this.audioIns.stop();
        this.audioIns.destroy();
        AudioServer.serverIns =null;
    }

    volumeControl(volume =1){
        this.volume =volume;
        this.audioIns.volume =volume;
    }

    getVolume(){return this.audioIns.volume;}

    getCurrentTime(){return this.audioIns.currentTime;}

    getDuration(){return this.audioIns.duration;}



}
