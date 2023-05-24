import Networking from "../request";

export const ApiUser ={
  //发送验证码
  sendVerifyCode(params){return Networking.post('send_sms_code',params)},


};
