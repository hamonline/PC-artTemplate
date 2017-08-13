//处理上传的功能
//引入multer
const multer = require("multer");

//设置文件名和文件的保存位置
const storage = multer.diskStorage({

	//destination 用来设置上传文件的路径 可以接收一个回调函数， 或者一个字符串
	//如果传递一个回调函数的话，则需要确保路径有效
	destination: 'public/avatars/',

	//filename 属性可以用来指定文件上传以后保存到服务器中的名字
	filename: function (req, file, cb) {
		//cb(null, file.fieldname + '-' + Date.now())
		//获取文件的扩展名
		//Chrysanthemum.jpg
		let fname = file.originalname;
		let extName = "";
		//判断文件是否具有扩展名
		if(fname.lastIndexOf(".") != -1){
			extName = fname.slice(fname.lastIndexOf("."));
		}

		//上传文件时，一般不会直接将用户的文件名直接保存的服务器中
		//一般会随机生成一个文件名
		cb(null, file.fieldname + '-' + Date.now()+extName);
	}
})


//将对象导出
module.exports = multer(
	{
		storage: storage ,
		limits:{
			//限制文件的大小为200kb
			fileSize:1024*200
		}

	}
);
