export const uniPix ={


    //获取小程序胶囊
    getMpCapsule(){
        let menuButtonInfo ={width:0};
        // #ifdef MP
        menuButtonInfo= uni.getMenuButtonBoundingClientRect() ||{width:0};
        // #endif
        return menuButtonInfo;
    },

    //获取状态栏高度
    getStatusBarHeight(){
        return uni.getSystemInfoSync();
    },

    //px转rpx
    px2rpx(px){return px/uni.getSystemInfoSync().windowWidth*750},

    //rpx转px
    rpx2px(rpx){return uni.upx2px(rpx);}
};