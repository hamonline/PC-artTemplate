const mongoose = require("mongoose");


/*
	代办事项 item
		需要将item也保存到数据库中

		user 和 item 的关系？
			一对多

		方式一：
			创建一个新的items集合，在集合中保存的代办事项
				同时还需要保存一个用户的id
			{_id:.... , title:"吃饭" , user_id:...}

		方式二：
			直接在user文档中添加一个新的属性items，它是一个数组，
				在items可以同时保存多个代办事项
 */

//定义item的Schema对象
const itemSchema = new mongoose.Schema({
	/*_id:{
		type:mongoose.Schema.Types.ObjectId,
		default:new mongoose.Types.ObjectId
	}*/
	id:mongoose.Schema.ObjectId,
	title:String,
	status:{
		type:Number, //0删除  1未完成  2完成
		default:1 //默认状态 1 未完成
	},
	date:{
		type:Date,
		default:new Date()
	}

});


//创建模式对象
const userSchema = new mongoose.Schema({

	username:{
		type:String,
		unique:true,
		index:1
	},
	password:String,
	email:String,
	avatar:{
		type:String,
		// 默认头像路径
		default:"/avatars/default_avatar_2.png"
	},
	items:[itemSchema]
});

//导出模型对象
module.exports = mongoose.model("user" , userSchema);