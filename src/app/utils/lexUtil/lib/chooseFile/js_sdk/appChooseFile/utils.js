// app选择文件
export default class appChooseFileUtils {
	/**
	 * @description apple document-types 文件类型参数 https://developer.apple.com/library/archive/documentation/Miscellaneous/Reference/UTIRef/Articles/System-DeclaredUniformTypeIdentifiers.html
	 * */ 
	static openFileIos() {
		return new Promise((resolve, reject) => {
			try {
				const plugin_key = 'YangChuan-YCiOSFileSelect';
				const iOSFileSelect = uni.requireNativePlugin(plugin_key);
				// 文件类型参数
				let params = { "document-types":["com.adobe.pdf", "com.microsoft.word.doc", "com.microsoft.excel.xls", "com.microsoft.powerpoint.ppt", "com.microsoft.word.rtf"], "isBase64":0 } 
				// let params = { "document-types":["public.text","public.zip","public.data","com.adobe.pdf", "com.microsoft.word.doc","com.adobe.postscript", "com.microsoft.excel.xls","com.adobe.encapsulated- postscript", "com.microsoft.powerpoint.ppt","com.adobe.photoshop- image", "com.microsoft.word.rtf","com.microsoft.advanced- systems-format", "com.microsoft.advanced- stream-redirector"], "isBase64":0 } 
				iOSFileSelect.show(params, result => { 
					let status = parseInt(result.status); 
					// 状态200选取成功
					if(status == 200){ 
						let url = result.url; 
						uni.downloadFile({ url,
							success: function(res){ 
								if(res.statusCode == 200){ 
									let filePath = res.tempFilePath;  // filePath 可用于 uni.uploadFile 上传的路径
									resolve(filePath);
								} else {
									reject(res);
								}
							},
							fail: function(err) {
								reject(err);
							}
						}); 
					} else {
						reject(result);
					}
				}); 
			} catch(err) {
				reject(err);
			}
		})
	}
	
	/**
	 * android选择文件
	 * */
	static openFileAndroid() {
		const _this = this;
		return new Promise((resolve, reject) => {
			try {
				let main = plus.android.runtimeMainActivity();
				let Intent = plus.android.importClass("android.content.Intent");

				let fileIntent = new Intent(Intent.ACTION_GET_CONTENT)
				fileIntent.setType("image/*");//选择图片
				fileIntent.setType("audio/*"); //选择音频
				fileIntent.setType("video/*"); //选择视频 （mp4 3gp 是android支持的视频格式）
				//fileIntent.setType("video/*;image/*");//同时选择视频和图片

				//设置doc,docx,ppt,pptx,pdf 5种类型
				fileIntent.setType("application/msword|application/vnd.openxmlformats-officedocument.wordprocessingml.document|application/vnd.ms-powerpoint|application/vnd.openxmlformats-officedocument.presentationml.presentation|application/pdf");
				fileIntent.setType("*/*"); //无类型限制
				fileIntent.addCategory(Intent.CATEGORY_OPENABLE);
				main.startActivityForResult(fileIntent, 1); // 文件数量
				// 获取回调
				main.onActivityResult = function(requestCode, resultCode, data) {
					let Activity = plus.android.importClass("android.app.Activity");
					let ContentUris = plus.android.importClass("android.content.ContentUris");
					let Cursor = plus.android.importClass("android.database.Cursor");
					let Uri = plus.android.importClass("android.net.Uri");
					let Build = plus.android.importClass("android.os.Build");
					let Environment = plus.android.importClass("android.os.Environment");
					let DocumentsContract = plus.android.importClass("android.provider.DocumentsContract");
					let MediaStore = plus.android.importClass("android.provider.MediaStore");
					// 给系统导入 contentResolver
					let contentResolver = main.getContentResolver()
					plus.android.importClass(contentResolver);
					// 返回路径
					let path = '';
					if (resultCode === Activity.RESULT_OK) {
						let uri = data.getData()
						if ("file" == uri.getScheme().toLowerCase()) { //使用第三方应用打开
							path = uri.getPath(); // 直接从第三方获取路径
						}
						if (Build.VERSION.SDK_INT > Build.VERSION_CODES.KITKAT) { //4.4以后
							path = _this.android_getPath({ context: this, uri, Build, DocumentsContract, Environment, MediaStore, contentResolver });
						} else { //4.4以下下系统调用方法
							path = _this.android_getRealPathFromURI({ uri, MediaStore, contentResolver })
						}

						// 回调
						resolve(`file:/${path}`)
					} else if (resultCode == 0) {
						reject({ cancel: true });
					} else {
						reject();
					}
				}
			} catch(err) {
				reject(err);
			}
		})
	}

	// android 4.4 以下 获取 绝对路径
	static android_getRealPathFromURI({ uri, MediaStore, contentResolver }) {
		let res = null
		let proj = [MediaStore.Images.Media.DATA]
		let cursor = contentResolver.query(uri, proj, null, null, null);
		if (null != cursor && cursor.moveToFirst()) {;
			let column_index = cursor.getColumnIndexOrThrow(MediaStore.Images.Media.DATA);
			res = cursor.getString(column_index);
			cursor.close();
		}
		return res;
	}

	/**
	 * android 4.4 以上 从Uri 获取文件绝对路径
	 * */
	static android_getPath({ context, uri, Build, DocumentsContract, Environment, MediaStore, contentResolver }) {
		const _this = this;
		let isKitKat = Build.VERSION.SDK_INT >= Build.VERSION_CODES.KITKAT;
		let scheme = uri.getScheme().toLowerCase()
		if (isKitKat && DocumentsContract.isDocumentUri(context, uri)) {
			if (_this.android_isExternalStorageDocument(uri)) { // ExternalStorageProvider
				let docId = DocumentsContract.getDocumentId(uri);
				let split = docId.split(":");
				let type = split[0];
				// 如果是手机内部存储
				if ("primary" == type.toLowerCase()) {
					return Environment.getExternalStorageDirectory() + "/" + split[1];
				} else {
					return '/storage/' + type + "/" + split[1];
				}
			} else if (_this.android_isDownloadsDocument(uri)) { // DownloadsProvider
				let id = DocumentsContract.getDocumentId(uri);
				let split = id.split(":");
				return split[1]
				// console.log(id)
				// let contentUri = ContentUris.withAppendedId(Uri.parse("content://downloads/public_downloads"), id);
				// return _this.android_getDataColumn(context, contentUri, null, null);
			} else if (_this.android_isMediaDocument(uri)) { // MediaProvider 媒体文档
				let docId = DocumentsContract.getDocumentId(uri);
				let split = docId.split(":");
				let type = split[0];
				let contentUri = null;
				if ("image" == type.toLowerCase()) {
					contentUri = MediaStore.Images.Media.EXTERNAL_CONTENT_URI;
				} else if ("video" == type.toLowerCase()) {
					contentUri = MediaStore.Video.Media.EXTERNAL_CONTENT_URI;
				} else if ("audio" == type.toLowerCase()) {
					contentUri = MediaStore.Audio.Media.EXTERNAL_CONTENT_URI;
				}
				let selection = "_id=?";
				let selectionArgs = [split[1]];
				return _this.android_getDataColumn({ context, uri: contentUri, contentResolver, selection, selectionArgs });
			}
		} else if ("content" == scheme) { // MediaStore (and general)
			return _this.android_getDataColumn({ context, uri, contentResolver, selection: null, selectionArgs: null });
		} else if ("file" == scheme) { // File
			return uri.getPath();
		}
	}

	/**
	 * android 通过uri 查找出绝对路径
	 * */
	static android_getDataColumn({ context, uri, contentResolver, selection, selectionArgs }) {
		let cursor = null;
		let column = "_data";
		let projection = [column];
		cursor = contentResolver.query(uri, projection, selection, selectionArgs, null);
		if (cursor != null && cursor.moveToFirst()) {
			let column_index = cursor.getColumnIndexOrThrow(column);
			return cursor.getString(column_index);
		}
	}

	// android 判断是外部存储文档
	static android_isExternalStorageDocument(uri) {
		return "com.android.externalstorage.documents" == uri.getAuthority() ? true : false
	}
	// android 判断是下载文档
	static android_isDownloadsDocument(uri) {
		return "com.android.providers.downloads.documents" == uri.getAuthority() ? true : false
	}
	// android 判断是媒体文件
	static android_isMediaDocument(uri) {
		return "com.android.providers.media.documents" == uri.getAuthority() ? true : false
	}

	// 下载base64图片
	static base64DowImg(base64){
		// 创建一个Bitmap是原生图片对象
		const bitmap = new plus.nativeObj.Bitmap("test");
		return new Promise((resolve,reject)=>{
			// 使用loadBase64Data将base64字符串转换为bitmap文件对象
			bitmap.loadBase64Data(base64,()=>{
				const url = "_doc/" + new Date().getTime() + ".png";  // url为时间戳命名方式
				// 再调用bimap.save方法，将图片文件存入手机存储
				bitmap.save(url,{
					overwrite: true,  // 是否覆盖
				},(i)=>{
					//在这里使用文档说的保存到手机相册的方法
					uni.saveImageToPhotosAlbum({
						filePath: url,
						success: function() {
							resolve({
								code: 0,
								msg: '图片保存成功',
								filePath: url
							});
							bitmap.clear()
						},
						fail: function (err) {
						   resolve({
								code: 1,
								msg: '图片保存失败',
								filePath: ''
						   });
						}
					})
				},(e)=>{
					resolve({
						code: 2,
						msg: '图片保存失败',
						filePath: ''
					});
					bitmap.clear()
				})
			})
		})
	}
}
