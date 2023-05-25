import Vue from 'vue';
import App from './App';
import VueI18n from 'vue-i18n';
import uView from 'uview-ui';
import store from './app/store';
import Global from "./app/global";
import animate from 'animate.css';
import AppProfile from "./app/profile";
import {EasyUni} from "./app/utils/lexUtil/uni/easyUni";
import {SystemFlags} from "./app/config/systemFlags";
import CommUtil from "./app/utils/commUtil";
import EMNavigtor from './app/components/navigator/index.vue';
import lexInput from './app/components/lexInput/index.vue';
import webpage from './app/components/webpage/index.vue';
import lexRadio from './app/components/lexRadio/index.vue';
import lexToast from './app/components/lexToast/index.vue';
import lexButton from './app/components/lexButton/index.vue';
import lexPopView from './app/components/lexPopView/index.vue';
import skeletonView from './app/components/skeletonView/index.vue';
import ItemContainer from './app/moudules/itemContainer/index.vue';
import UniTable from './app/components/uni-table/components/uni-table/uni-table.vue';
import Networking from "./app/net/request";
import './app/assets/iconfont/iconfont.css';
import {EasyCode} from "./app/utils/lexUtil/comm/EasyCode";


Vue.config.productionTip = false;
App.mpType = 'app';

AppProfile.setStore(store);
const profile =AppProfile.getProFile();

//配置uview
Vue.use(uView);
profile.initUview();

//配置i18n
Vue.use(VueI18n);
profile.getI18n();

//使用animate.css
Vue.use(animate);


//挂载工具包
Vue.prototype.$easyUni = EasyUni;
Vue.prototype.$easyCode = EasyCode;
Vue.prototype.$Global =Global.getIns();
Global.getIns().addObject(SystemFlags.storeKey,store);

//挂载公用方法类
Vue.prototype.$commUtil =new CommUtil(store);

//挂载全局组件
Vue.component('EMNavigtor',EMNavigtor);
Vue.component('lexInput',lexInput);
Vue.component('lexToast',lexToast);
Vue.component('lexPopView',lexPopView);
Vue.component('skeletonView',skeletonView);
Vue.component('lexRadio',lexRadio);
Vue.component('webPage',webpage);
Vue.component('lexButton',lexButton);
Vue.component('ItemContainer',ItemContainer);
Vue.component('UniTable',UniTable);


//字体大小设置，需要在每个页面顶部注册
Vue.prototype.$getRootFontSize =()=>{
  if (Object.keys(EasyUni.LocalStorage.getItem(SystemFlags.FONT_SIZE_TAG)).length>0){
    let {label} =EasyUni.LocalStorage.getItem(SystemFlags.FONT_SIZE_TAG);
    return label ||'1rem';
  }
  return '1rem';
};


Global.getIns().addObject("store",store);



const app = new Vue({
  ...App,
  i18n:profile.getI18n(),
  store
});

Networking.setStore(store);

app.$mount();
