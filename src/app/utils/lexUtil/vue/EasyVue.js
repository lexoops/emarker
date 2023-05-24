export const EasyVue ={
    goTop () {
        cancelAnimationFrame(this.timer);
        const self = this;
        self.timer = requestAnimationFrame(function fn () {
            const oTop = document.body.scrollTop || document.documentElement.scrollTop;
            if (oTop > 0) {
                document.body.scrollTop = document.documentElement.scrollTop = oTop - 500;
                self.timer = requestAnimationFrame(fn);
            } else {
                cancelAnimationFrame(self.timer);
            }
        })
    },
    getWidth(){

    },




};
