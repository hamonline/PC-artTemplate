const express = require('express');
const router = express.Router();
//加载UserModel
const UserModel = require("../models/user");
//引入sha1 加密密码
const sha1 = require("sha1");
var data = require('../data.json');
//短信验证
var sms = require('../sms/sms_util.js')

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   // res.send('respond with a resource');
//   res.render('index', { title: 'Express' });
// });
/* GET home page. */
router.get('/daowei', function(req, res, next) {
  res.send(data)
});
router.get('/detail', function(req, res, next) {
  res.send(data)
});

router.get('/page', function(req, res, next) {
  let rows = req.query.rows//每页条数
  let page = req.query.page//当前页
    // (page-1)*rows, rows
  // data = data.service[page-1].goods[rows]
  // data = data.service
  let count = 0
  for(;rows<data.service.length;rows++){
    let result = []
    count++
    result.push(data.service[rows])
    if(count>5){
      return
    }
    data = result

  }

  let total = 6
  let result = (data == null)?false:true;
  res.send({data:data,total:total,result:result})
});



//发送验证码 4位
let code = null //定义一个变量保存验证码
router.get('/sms',function(req, res, next){
    //get请求 在query对象中
    let tel = req.query.tel.trim()
    code = sms.randomCode(4)
    sms.sendCode(tel,code,function (success) {
      console.log(success,code);
    })
   // sms.sendCode('18302268983', sms.randomCode(6), function (success) {
   //    console.log(success);
   // })
})
//注册
router.post('/regist',function (req,res,next) {
  let num = req.body.num.trim()
  let tel = req.body.tel.trim()
  let pwd = req.body.pwd.trim()
  console.log(num)
  if(num===code){
    res.send({type:1})
  }else {
    res.send({type:0})
    //不能存储
    // localStorage.setItem('tel',tel)
    // localStorage.setItem('pwd',pwd)
  }
})
//登录
// let user = [{id:18302261111,tel:18302261111,pwd:123}]
// router.post('/login',function (req,res,next) {
//   let _id = req.body.id.trim()
//   let val = req.body.val.trim()
//   if (_id===val){
//     res.send({msg:1})
//   }
//   res.send(_id)
// })
//登录
// router.get('/login',function (req,res,next) {
//   let num = req.body.num.trim()
//   let tel = req.body.tel.trim()
//   let pwd = req.body.pwd.trim()
//   if(code!==tel||!pwd || !tel){
//     res.send(1)
//   }else {
//     res.send(0)
//     localStorage.setItem('tel',tel)
//     localStorage.setItem('pwd',pwd)
//   }
// })



// router.get('/regist',function(req, res, next){
//   router.post('/api/regist', (req, res) => {
//     let phone = req.body.number.trim()
//     let code2 = req.body.code.trim()
//     let psw = req.body.psw.trim()
//     if (code2 !== code){
//       res.render('regist.ejs', {msg:'手机验证码错误！'})
//     }
//     if (!psw || !phone){
//       res.render('regist.ejs',{msg:'请正确输入！！'})
//     }else {
//       console.log(1111)
//       cjsj.create({
//         phone,
//         password: psw
//       },(err)=>{
//         if(!err){
//           res.render('login.ejs',{msg: '注册成功请登录'})
//         }else {
//           res.render('regist.ejs',{msg:'该用户已存在！'})
//         }
//       })
//     }
//
//   })
// })
// //判断用户名
// router.get("/checkUsername" , (req , res)=>{
//   //获取用户填写的用户名
//   let username = req.query.tel;
//
//   //去数据检查用户名是否存在
//   UserModel.findOne({username:username} , (err , user)=>{
//     if(!err && user == null){
//       //用户名可用
//       res.send({status:"ok"});
//     }else{
//       //用户名不可用
//       res.send({status:"error"});
//     }
//   })
//
// })
//

module.exports = router;
