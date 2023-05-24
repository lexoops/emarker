export const EasyRequest = {
  IsRequestSuccess: function (code) {
    if (code === 0
        || code === 200
        || code === "ok"
        || code === "OK"
        || code === "success"
        || code == 200
        || code == 20000
    ) {
      return true;
    }
    return false;
  },


};
