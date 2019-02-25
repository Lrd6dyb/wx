var express = require('express');  // 创建web服务器
var router = express.Router();     //创建空的路由器
var pool = require("../pool")
router.post('/login',(req,res)=>{
    var phone = req.body.phone;
    var upwd = req.body.upwd;
    if(!phone||!upwd){
        res.send({code:1,msg:"参数错误"})
    }
    else{
        var sql = "SELECT u_id,upwd,uname,addr,vip,phone  FROM mryx_user WHERE phone = ?"
        pool.query(sql,[phone],(err,result)=>{
            if(err) throw err;
            if(result.length > 0 && result[0].upwd ==  upwd){
                res.send({code:0,msg:"登陆成功",data:result})
            }
            else{
                res.send({code:1,msg:"账号或密码错误",data:result})
            }
        })
    }
})                               
router.post('/register',(req,res)=>{
    var phone = req.body.phone;
    var upwd = req.body.upwd;
    var addr = req.body.addr;
    var uname = req.body.uname;
    var vip = req.body.vip;
    if(!phone||!upwd||!addr||!uname||!vip){
        res.send({code:1,msg:"参数错误"})
    }
    else{
        var sql = "SELECT upwd,uname,addr  FROM mryx_user WHERE phone = ?"
        pool.query(sql,[phone],(err,result)=>{
            if(err) throw err;
            if(result.length>0){
                res.send({code:1,msg:"该账户已存在，请重试"})
            }
            else{
                var sqlr = "INSERT INTO mryx_user VALUES(null,?,?,?,?,?)"
                pool.query(sqlr,[uname,upwd,addr,phone,vip],(err,resultr)=>{
                    if(err) throw err;
                    
                        res.send({code:0,msg:"注册成功"})
                    
                })
            }
        })
    }
})
module.exports = router;			//导出路由