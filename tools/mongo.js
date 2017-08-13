/*
	负责连接MongoDB数据库
 */
const mongoose = require("mongoose");

//连接数据库
mongoose.connect("mongodb://127.0.0.1/todolist");

//监听数据库连接
mongoose.connection.once("open",()=>{
	console.log("数据库已经连接");
});