var express = require('express');  // 创建web服务器
var router = express.Router();     //创建空的路由器
var pool = require("../pool")
router.post('/getInterest',(req,res)=>{
    var sql = "SELECT id,title,img_url,price,p_type,pro_type  FROM mryx_product"
    pool.query(sql,(err,result)=>{
        if(err) throw err;
        var resdata = [];
        var resid = [];
        for(var i = 0 ; i < 4 ; i++){
            var pid = Math.floor(Math.random()*result.length);
            for(var j = 0 ; j < resid.length ; j++){
                if(resid[j] == pid){
                    var pid = Math.floor(Math.random()*result.length);
                    j=0;
                }
            }
            resid.push(pid);
        }
        for(var i = 0 ; i < 4 ; i++){
            resdata.push(result[resid[i]])
        }
        res.send({code:0,msg:"",data:resdata})
        
    })
})                               

module.exports = router;			//导出路由