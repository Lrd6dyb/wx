var express = require('express');  // 创建web服务器
var router = express.Router();     //创建空的路由器
var pool = require("../pool")
router.post('/getNav',(req,res)=>{
    var sql = "SELECT in_id,title,img_url,pro_type  FROM mryx_index_nav "
    pool.query(sql,(err,result)=>{
        if(err) throw err;
        res.send({code:0,msg:"",data:result})
        
    })
})                               
router.post('/getProductBytype',(req,res)=>{
    var proType = req.body.pro_type;
    var pType = req.body.p_type;
    proType = parseInt(proType);
    pType = parseInt(pType);
    if(proType){
        var sql = "SELECT id,title,img_url,price,p_type,pro_type  FROM mryx_product WHERE pro_type=?"
        if(pType){
            sql+=' AND p_type=?'
            pool.query(sql,[proType,pType],(err,result)=>{
                if(err) throw err;
                res.send({code:0,msg:"",data:result})
            })
        }
        else{
            pool.query(sql,[proType],(err,result)=>{
                if(err) throw err;
                res.send({code:0,msg:"",data:result})
            })
        }
    }
    else{
        res.send({code:1,msg:"参数错误",data:""})
    }
})   
router.post('/getProduct',(req,res)=>{
        var sql = "SELECT id,title,img_url,price,p_type,pro_type  FROM mryx_product"
        pool.query(sql,(err,result)=>{
            if(err) throw err;
            res.send({code:0,msg:"",data:result})
        })
})   
router.post('/getXptype',(req,res)=>{
    var pro_type =req.body.pro_type;
    var sql = "SELECT id,title,p_type,pro_type  FROM mryx_type WHERE pro_type=?"
    pool.query(sql,[pro_type],(err,result)=>{
        if(err) throw err;
        res.send({code:0,msg:"",data:result})
    })
})

router.post('/getProductByKey',(req,res)=>{
    var keyword = req.body.keyword;
    if(!keyword){
        res.send({code:0,msg:"请输入查询条件"})
    }
    else{
        var sql = "SELECT id,title,img_url,price,p_type,pro_type  FROM mryx_product WHERE title LIKE ?"
        pool.query(sql,[`%${keyword}%`],(err,result)=>{
            if(err) throw err;
            res.send({code:0,msg:"",data:result})
        })
    }
}) 

router.post('/getProductDetails',(req,res)=>{
    var id = req.body.id;
    var sql = "SELECT title,img_url,price,p_type,pro_type  FROM mryx_product WHERE id=?"
    pool.query(sql,[id],(err,result)=>{
        if(err) throw err;
        if (result.length >0) {
            res.send({code:0,msg:"",data:result})
        }
        else{
            res.send({code:1,msg:"参数错误，该id没有对应的数据",data:""})
        }
    })
    
})   

module.exports = router;			//导出路由