import {baseLib} from "./unibase";

export const uniUe ={
    showSuccessToast(title,duration =500){
        uni.showToast({
            title: title,
            duration: duration,
            icon:'success'
        });
    },
    showErrorToast(title,duration =500){
        uni.showToast({
            title: title,
            duration: duration,
            icon:'error'
        });
    },
    showFailToast(title,duration =500){
        uni.showToast({
            title: title,
            duration: duration,
            icon:'fail'
        });
    }
};