import appChooseFileUtils from './utils.js'

/**
 * app选择本地文件 （目前只开放doc、docx、pdf、ppt）
 * @param { Object } params
 * */
export default function appChooseFile() {
	return new Promise((resolve, reject) => {
		// #ifndef APP-PLUS
		uni.showToast({ title: '仅支持app' })
		reject({ message: '仅支持app', status: 0 });
		// #endif
		// #ifdef APP-PLUS
		const platform = plus.os.name.toLowerCase();
		if (platform === 'android') {
			appChooseFileUtils.openFileAndroid().then(path=>{
				resolve(path);
			}).catch(err=>{
				if (!err || !err.cancel) {
					uni.showModal({ content: '选择文件失败，请联系客服！' })
				}
				reject(err);
			})
		} else if (platform === 'ios') {
			appChooseFileUtils.openFileIos().then(path=>{
				resolve(path);
			}).catch(err=>{
				reject(err);
				uni.showModal({ content: '选择文件失败，请联系客服！' });
			})
		} else {
			reject();
			console.log(platform);
			uni.showModal({ content: '请使用android或ios手机！' });
		}
		// #endif
	})
}