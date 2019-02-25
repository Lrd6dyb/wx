var express = require('express');  // 创建web服务器
var router = express.Router();     //创建空的路由器
var pool = require("../pool")
router.post('/getShopCart',(req,res)=>{
    var userId = req.body.user_id;
    var sql = "SELECT img_url,title,num,price,pro_id,sp_id FROM mryx_shop_cart WHERE  u_id=?"
    pool.query(sql,[userId],(err,result)=>{
        if(err) throw err;
        res.send({code:0,msg:"获取成功",data:result})
    })
})                              
router.post('/addtoShopCart',(req,res)=>{  //1.查询判断购物车中是否有该商品 2.没有该商品就去商品列表查询该商品将该商品的信息插入购物车 3.购物车中有该商品num+1
    var proId = req.body.pro_id;
    var userId = req.body.user_id;
    var num = req.body.num;
    var sql = "SELECT img_url,title,num,price,sp_id FROM mryx_shop_cart WHERE pro_id=? and u_id=?"
    pool.query(sql,[proId,userId],(err,result)=>{
        if(err) throw err;
        if(result.length == 0){
            var selProsql = "SELECT img_url,title,price,p_type,pro_type FROM mryx_product WHERE id=?"
            pool.query(selProsql,[proId],(err,resultsel)=>{
                if(err) throw err;
                var title = resultsel[0].title;
                var img_url = resultsel[0].img_url;
                var price = resultsel[0].price;
                var addsql = "INSERT INTO mryx_shop_cart VALUES(null,?,?,?,?,?,?)";
                pool.query(addsql,[title,num,price,proId,img_url,userId],(err,resultadd)=>{
                    res.send({code:0,msg:"添加成功",data:resultadd})
                })
            })
        }
        else{
            var upsql = "UPDATE mryx_shop_cart SET num=? where u_id=? and pro_id=?;"
            pool.query(upsql,[num,userId,proId],(err,resultup)=>{
                res.send({code:0,msg:"更新成功",data:resultup})
            })
        }
    })
})
module.exports = router;			//导出路由