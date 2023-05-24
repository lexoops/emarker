import {LocalStorage} from "./UniLocalstorage";
import {baseLib} from "./unibase";
import {uniNavigate} from "./navigate";
import {chooseAction} from "./chooseAction";
import {fileOperation} from "./fileOperation";
import {uniPix} from "./uniPix";
import {location} from './location';
import {uniUe} from './ue';
import permission from '../permission';

export const EasyUni ={
    LocalStorage,
    baseLib,
    uniNavigate,
    chooseAction,
    fileOperation,
    uniPix,
    location,
    uniUe,
    permission,
    isIos:()=>{return plus.os.name === "iOS";}
};