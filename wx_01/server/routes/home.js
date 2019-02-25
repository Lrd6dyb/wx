var express = require('express');  // 创建web服务器
var router = express.Router();     //创建空的路由器
var pool = require("../pool")
router.post('/getCarousel',(req,res)=>{
    var sql = "SELECT img_id,ctime,img_url from mryx_home_carousel"
    pool.query(sql,(err,result)=>{
        if(err) throw err;
        res.send({code:0,msg:"",data:result})
    })
})                               

module.exports = router;			//导出路由