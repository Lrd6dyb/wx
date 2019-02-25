//1:加载模块 express pool
const express = require("express");
const pool = require("./pool");


//2:创建express对象
var app = express();
//2.1:加载跨域访问组件
const cors = require('cors');
//2.2:配置允许脚手架访问程序
app.use(cors({
    origin:["http://127.0.0.1:3001",
    "http://localhost:3001"],
    credentials:true
}));

//7.1:node.js app.js
//   加载第三方模块 express-session
const session = require("express-session");

//7.2:对模块配置   
app.use(session({
  secret:"128位随机字符",    //安全字符串
  resave:false,             //请求保存
  saveUninitialized:true,   //初始化保存
  cookie:{
    maxAge:1000 * 60 * 60 * 24 
  }
}));

//3.监听端口3000
app.listen(3000);
//4.指定静态目录 public
//__dirname 当前程序所属目录绝对路径
//app.js vue_app_server
app.use(express.static(__dirname+'/public'));

//功能八 用户登录
app.get("/login",(req,res)=>{
  //1:获取参数 uname,upwd
  var uname = req.query.uname;
  var upwd = req.query.upwd;
  //2:创建正则表达式验证
  //3:创建sql
  var sql = "SELECT uid,count(uid) as c FROM pro_login WHERE uname = ? AND upwd = md5(?)";
  pool.query(sql,[uname,upwd],(err,result)=>{
    if(err)throw err;
    
    var c = result[0].c;
    var uid = result[0].uid;
    //var obj = result[0].c;
    if(c == 1){
      req.session.uid = uid;
      req.session.uname = uname;
      //console.log(req.session.uid+':'+req.session.uname);
      res.send({code:1,msg:'登录成功',uid:uid});
    }else{
      res.send({code:-1,msg:'用户名过密码错误'});
    }
  });
  //4:返回结果
});


//功能一：首页轮播图
app.get('/imagelist',(req,res)=>{
  var obj = [
    {id:1,img_url:"http://127.0.0.1:3000/img/banner1.png"},
     {id:2,img_url:"http://127.0.0.1:3000/img/banner2.png"},
     {id:3,img_url:"http://127.0.0.1:3000/img/banner4.png"},
     {id:4,img_url:"http://127.0.0.1:3000/img/banner5.png"}
  ];
  res.send(obj);
})

//功能二：新闻分页显示
app.get("/newslist",(req,res)=>{
  //1:获取参数
  var pno = req.query.pno;
  var pageSize = req.query.pageSize;
  //2:设置默认值 1 7
  if(!pno){pno = 1}
  if(!pageSize){pageSize=7}
  //3:创建正则表达式验证用户输入验证
  var reg = /^[0-9]{1,3}$/;
  //4:如果错出停止函数运行
  if(!reg.test(pno)){
    res.send({code:-1,msg:"页编格式不正确"});
    return;
  }
  if(!reg.test(pageSize)){
     res.send({code:-2,msg:"页大小格式不正确"});
     return;
  }
 
  var progress = 0;
  var obj = {code:1};
  //5:创建sql1 查询总记录数   严格区分大小写
  var sql = "SELECT count(p_nid) AS c FROM pro_news";
  pool.query(sql,(err,result)=>{
    if(err)throw err;
    var pageCount = Math.ceil(result[0].c/pageSize);
    progress+=50;
    obj.pageCount = pageCount;
    //obj.pageNumber = pageNumber;
    if(progress==100){
      res.send(obj);
    }
  });
  //6:创建sql2 查询当前页内容 严格区分大小写
  var sql =" SELECT p_nid,title,ctime,img_url,point,content FROM pro_news LIMIT ?,?";
  var offset = parseInt((pno-1)*pageSize);
    pageSize = parseInt(pageSize);

  pool.query(sql,[offset,pageSize],(err,result)=>{
    if(err)throw err;
    progress+=50;
    obj.data=result;
    if(progress==100){
      res.send(obj);
    }
  })
  //7:返回结果
 });  


//功能三:查找一条新闻详情
app.get('/newsinfo',(req,res)=>{
  //1.参数
  var p_nid = req.query.p_nid;
  //2.sql
  var sql='SELECT p_nid,title,ctime,point,img_url,content FROM `pro_news` WHERE p_nid = ?';
  //3.json
  pool.query(sql,[p_nid],(err,result)=>{
    if(err) throw err;
    res.send({code:1,data:result});
  });
});


//功能四: 分页查找指定
app.get("/getcomment",(req,res)=>{
  //1:获取参数
  var pno = req.query.pno;
  var pageSize = req.query.pageSize;
  var nid = req.query.nid;
  //2:设置默认值 1 7
  if(!pno){pno = 1}
  if(!pageSize){pageSize=7}
  //3:创建正则表达式验证用户输入验证
  var reg = /^[0-9]{1,3}$/;

  //4:如果错出停止函数运行
  if(!reg.test(pno)){
     res.send({code:-1,msg:"页编格式不正确"});
     return;
  }
  if(!reg.test(pageSize)){
     res.send({code:-2,msg:"页大小格式不正确"});
     return;
  }
  var progress = 0;
  var obj = {code:1};
  obj.uname = req.session.uname;

  //5:创建sql1 查询总记录数   严格区分大小写
  var sql = "SELECT count(id) AS c FROM pro_comment WHERE nid=?";
  nid = parseInt(nid);
  pool.query(sql,[nid],(err,result)=>{
    if(err)throw err;
    var pageCount = Math.ceil(result[0].c/pageSize);
    var pageNumber = result[0].c; 
    progress+=50;
    obj.pageCount = pageCount;
    obj.pageNumber = pageNumber;
    if(progress==100){
      //console.log(obj);
      res.send(obj);
    }
  });

  //6:创建sql2 查询当前页内容 严格区分大小写
  var sql =" SELECT id,user_name,ctime,content FROM pro_comment WHERE nid = ? ORDER BY id DESC LIMIT ?,?";
  var offset = parseInt((pno-1)*pageSize);
      pageSize = parseInt(pageSize);
   
  pool.query(sql,[nid,offset,pageSize],(err,result)=>{
    if(err)throw err;
    progress+=50;
    obj.data=result;
    if(progress==100){
      res.send(obj);
    }
  })
  //7:返回结果
});  


//功能五:发表评论
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));
app.post('/addComment',(req,res)=>{
  //1。获取3个参数
  var nid = req.body.nid;
  var content = req.body.content;
  var user_name = req.session.uname;
  var uid = req.session.uid;
  if(user_name==undefined){
    res.send({code:-1});
    return;
  }
  if(uid == undefined){
    res.send({code:-2});
    return;
  }
  if(!nid){
    res.send({code:-3});
    return;
  }
  if(!content){
    res.send({code:-4});
    return;
  }
  //2创建sql语句
  var sql = 'INSERT INTO `pro_comment`(`id`, `nid`, `user_name`, `ctime`, `content`) VALUES (null,?,?,now(),?)';
  nid = parseInt(nid);
  pool.query(sql,[nid,user_name,content],(err,result)=>{
    if(err) throw err;
    res.send({code:1,msg:'评论发表成功'});
  });
  //3返回添加结果
 });

//功能六：查询商品列表
app.get('/goodslist',(req,res)=>{
  var sql = 'SELECT * FROM pro_laptop';
  pool.query(sql,(err,result)=>{
    if(err) throw err;
    res.send(result);
  });
});

 //功能七：商品详情页
 app.get('/goodsinfo',(req,res)=>{
  var lid=parseInt(req.query.lid); 
  if(!lid){
    res.send({code:-1});
    return ;
  }
  var sql = 'SELECT  lid,old,price,img_url,lname FROM pro_laptop WHERE lid=?' ;
  pool.query(sql,[lid],(err,result)=>{
    if(err) throw err;
    res.send({code:1,data:result[0]});
  });
});


//功能九 将商品信息添加购物车
app.get("/addCart",(req,res)=>{
  var uid = req.session.uid;
  //console.log(uid);
  if(uid==undefined){
    res.send({code:-1});
    return;
  }
  var pid = parseInt(req.query.pid);
  var c = parseInt(req.query.count);
  var price = parseFloat(req.query.price);
  console.log(pid,c,price);
  if(!pid){
    res.send({code:-1});
    return;
  }
  if(!c){
    res.send({code:-2});
    return;
  }
  if(!price){
    res.send({code:-3});
    return;
  }
  //sql1
  var sql  =" INSERT INTO pro_shoppingcart_item (iid, user_id, product_id,price,count,is_checked) VALUES (null,?,?,?,?,0)"
  pool.query(sql,[uid,pid,price,c],(err,result)=>{
    if(err)throw err;
    if(result.affectedRows > 0){
      res.send({code:1,msg:"购物车添加成功"});
    }else{
      res.send({code:-1,msg:"购物车添加失败"});
    }
  });
})

//功能十：查询购物车详细信息
app.get('/getCarts',(req,res)=>{
  var uid = req.session.uid;
  if(!uid){
    res.send({code:-1});
    return;
  }
  var sql = 'SELECT c.iid,c.user_id,c.count,p.price,p.lname,p.img_url FROM pro_laptop p,pro_shoppingcart_item c WHERE p.lid = c.product_id AND c.user_id = ?';
  uid = parseInt(uid);
  pool.query(sql,[uid],(err,result)=>{
    if(err) throw err;
    res.send({code:1,data:result});
  });
});

//功能十一：更新购物数量
app.get("/updateCart",(req,res)=>{
  //1:参数 iid/count
  var iid = req.query.iid;
  var count = req.query.count;
  //2:sql  
  var sql = " UPDATE pro_shoppingcart_item SET count = ? WHERE iid = ?";
  iid = parseInt(iid);
  count = parseInt(count);
  pool.query(sql,[count,iid],(err,result)=>{
    if(err)throw err;
    if(result.affectedRows>0){
      res.send({code:1,msg:"数量修改成功"});
    }else{
      res.send({code:-1,msg:"数量修改失败"});
    }
    
  })
  //3:json {code:1,msg:"数量修改成功"}
})

//功能十二：搜索商品
app.get("/search",(req,res)=>{
  //商品名称关键字
  var keyword = req.query.keyword;
  var low = req.query.low;
  var high = req.query.high;
  console.log(keyword,low,high);
  if(keyword == ''){
    res.send({code:-1,msg:"请输入你要搜索的商品"});
    return ; 
  }
  var sql = "SELECT lid,lname,price,img_url FROM pro_laptop WHERE lname LIKE ? AND price>=? AND price<=?";
  low = parseFloat(low);
  high = parseFloat(high);
  pool.query(sql,[`%${keyword}%`,low,high],(err,result)=>{
    if(err)throw err;
    if(result.length == 0){
      res.send({code:-2,msg:"您搜索商品不存在噢!"});
    }else{
      res.send({code:1,data:result})
    }
  })  
});

//功能十三：用户注册
app.post('/register',(req,res)=>{
  var uname = req.body.uname;
  var upwd = req.body.upwd;
  var reg = /^[a-z0-9_]{2,12}$/i;
  if(!reg.test(uname)){
    res.send({code:-1,msg:'用户格式不正确'});
    return ;
  }
  var sql = 'INSERT INTO pro_login VALUES (null,?,md5(?))';
  pool.query(sql,[uname,upwd],(err,result)=>{
    if(err) throw err;
    if(result.affectedRows > 0){
      res.send({code:1,msg:'注册成功'})
    }else{
      res.send({code:-1,msg:'注册失败'})
    }
  });
});

//功能十四： 用户名是否存在
app.post('/exissName',(req,res)=>{
  var uname = req.body.uname;
  var sql = 'SELECT count(uid) as c FROM pro_login WHERE uname = ?';
  pool.query(sql,[uname],(err,result)=>{
    if(err) throw err;
    if(result[0].c > 0){
      res.send({code:-1,msg:'该用户名已存在'});
    }else{
      res.send({code:1,msg:'用户名可用'})
    }
  });
});

             
/**
 * 功能十五：微信轮播
 */
app.get('/getImages',(req,res)=>{
  var obj = [
    {id:1,img_url:"http://127.0.0.1:3000/img/banner1.png"},
    {id:2,img_url:"http://127.0.0.1:3000/img/banner2.png"},
    {id:3,img_url:"http://127.0.0.1:3000/img/banner3.png"},
    {id:4,img_url:"http://127.0.0.1:3000/img/banner4.png"},
    {id:5,img_url: "http://127.0.0.1:3000/img/banner5.png" }
  ]
  res.send(obj);
})

/**
 * 功能十六：微信九宫格
 */
app.get('/getNavImages',(req,res)=>{
  var list = [
    { id: 1, title:"推荐", img_url: "http://127.0.0.1:3000/icons/grid-01.png" },
    { id: 2, title:"打折" , img_url: "http://127.0.0.1:3000/icons/grid-02.png" },
    { id: 3, title:"新品" , img_url: "http://127.0.0.1:3000/icons/grid-03.png" },
    { id: 4, title:"经典" , img_url: "http://127.0.0.1:3000/icons/grid-04.png" },
    { id: 5, title:"儿童" , img_url: "http://127.0.0.1:3000/icons/grid-05.png" },
    { id: 6, title:"冰淇淋" , img_url: "http://127.0.0.1:3000/icons/grid-06.png" },
    { id: 7, title:"软点" , img_url: "http://127.0.0.1:3000/icons/grid-07.png" },
    { id: 8, title:"礼盒" , img_url: "http://127.0.0.1:3000/icons/grid-08.png" },
    { id: 9, title:"更多" , img_url: "http://127.0.0.1:3000/icons/grid-09.png" }
  ];
  res.send(list);
})

/**微信
 * 功能十七：推荐分页显示
 */
app.get("/findshops",(req,res)=>{
  //参数: pno 当前页码1 2 pageSize 每个大小
  //sql: 
  //  -总记录数->总页数
  //  -当前页内容
  //json
 //1:获取参数
 var pno = req.query.pno;          //页码
 var pageSize = req.query.pageSize;//页大小

 //2:设置默认值 1 7
 if(!pno){pno = 1}
 if(!pageSize){pageSize=7}
 //3:创建正则表达式验证用户输入验证
 var reg = /^[0-9]{1,3}$/;
 //4:如果错出停止函数运行
 if(!reg.test(pno)){
    res.send({code:-1,msg:"页编格式不正确"});
    return;
 }
 if(!reg.test(pageSize)){
    res.send({code:-2,msg:"页大小格式不正确"});
    return;
 }
 var progress = 0;
 var obj = {};
 //5:创建sql1 查询总记录数   严格区分大小写
 var sql = "SELECT count(id) AS c FROM pro_shop";
 pool.query(sql,(err,result)=>{
   if(err)throw err;
   var pageCount = Math.ceil(result[0].c/pageSize);
   progress+=50;
   console.log(pageCount);
   obj.pageCount = pageCount;
   if(progress==100){
    console.log(obj);
    res.send(obj);
    
   }
 });
 //6:创建sql2 查询当前页内容 严格区分大小写
 var sql ="SELECT id,img_url,yname,name,addr1,tel,price,addr2,mtime,star FROM pro_shop LIMIT ?,?"
 var offset = parseInt((pno-1)*pageSize);
     pageSize = parseInt(pageSize);
 pool.query(sql,[offset,pageSize],(err,result)=>{
   if(err)throw err;
   progress+=50;
   obj.data=result;
   if(progress==100){
    console.log(obj);
    res.send(obj);
   }
 });
});

//功能十八：打折分页显示
app.get("/discountshops",(req,res)=>{
  //参数: pno 当前页码1 2 pageSize 每个大小
  //sql: 
  //  -总记录数->总页数
  //  -当前页内容
  //json
  //1: 获取参数
  var pno = req.query.pno;          //页码
  var pageSize = req.query.pageSize;//页大小

  //2:设置默认值 1 7
  if(!pno){pno = 1}
  if(!pageSize){pageSize=7}
  //3:创建正则表达式验证用户输入验证
  var reg = /^[0-9]{1,3}$/;
  //4:如果错出停止函数运行
  if(!reg.test(pno)){
    res.send({code:-1,msg:"页编格式不正确"});
    return;
  }
  if(!reg.test(pageSize)){
    res.send({code:-2,msg:"页大小格式不正确"});
    return;
  }
  var progress = 0;
  var obj = {};
  //5:创建sql1 查询总记录数   严格区分大小写
  var sql = "SELECT count(id) AS c FROM pro_discount";
  pool.query(sql,(err,result)=>{
  if(err)throw err;
  var pageCount = Math.ceil(result[0].c/pageSize);
  progress+=50;
  console.log(pageCount);
  obj.pageCount = pageCount;
  if(progress==100){
    console.log(obj);
    res.send(obj);
    }
  });
  //6:创建sql2 查询当前页内容 严格区分大小写
  var sql ="SELECT id,img_url,name,old,new,surplus,star FROM pro_discount LIMIT ?,?";

  var offset = parseInt((pno-1)*pageSize);
     pageSize = parseInt(pageSize);
 
  pool.query(sql,[offset,pageSize],(err,result)=>{
  if(err)throw err;
  progress+=50;
  obj.data=result;
  if(progress==100){
    console.log(obj);
    res.send(obj);
    }
  });
});


//第十九个功能:消息分页显示
app.get("/getMessage",(req,res)=>{
  var pno = req.query.pno;          //页码
  var pageSize = req.query.pageSize;//页大小

 //2:设置默认值 1 7
 if(!pno){pno = 1}
 if(!pageSize){pageSize=2}
 //3:创建正则表达式验证用户输入验证
 var reg = /^[0-9]{1,3}$/;
 //4:如果错出停止函数运行
 if(!reg.test(pno)){
    res.send({code:-1,msg:"页编格式不正确"});
    return;
 }
 if(!reg.test(pageSize)){
    res.send({code:-2,msg:"页大小格式不正确"});
    return;
 }
 var progress = 0;
 var obj = {code:1};
 obj.uname = req.session.uname;
 //5:创建sql1 查询总记录数   严格区分大小写
 var sql = "SELECT count(id) AS c FROM pro_message";
 pool.query(sql,(err,result)=>{
   if(err)throw err;
   var pageCount = Math.ceil(result[0].c/pageSize);
   progress+=50;
   obj.pageCount = pageCount;
   if(progress==100){
     res.send(obj);
   }
 });
 //6:创建sql2 查询当前页内容 严格区分大小写
 var sql =" SELECT id,title,desc1,";
     sql+=" ctime,content,img_url";
     sql+=" FROM pro_message";
     sql+=" LIMIT ?,?";
 var offset = parseInt((pno-1)*pageSize);
     pageSize = parseInt(pageSize);
 pool.query(sql,[offset,pageSize],(err,result)=>{
   if(err)throw err;
   progress+=50;
   obj.data=result;
   if(progress==100){
     res.send(obj);
   }
 })
});


//功能二十：订单信息
app.get('/orders',(req,res)=>{
  var sql = "SELECT number,thumb,name,count,status,money FROM pro_orders";
  pool.query(sql,(err,result)=>{
    if(err) throw err;
    console.log(result)
    res.send(result);
  });
})


/*
//十七上传商品的图片与商品参数
//1.创建对象upload
var upload = multer({dest:'upload/'});
//2.接受客户请求
app.post('/upload',upload.single("mypic"),(req,res)=>{
  //3.判断大小
  var size = req.file.size/1024/1024;
  if(size>2){
    res.send({code:1,msg:"上传图片过大 超过2MB"});
    return;
  };
  //4.判断类型
  var type= req.file.mimetype;
  var i2 = type.indexOf("image");
  if(i2==-1){
    res.send({code:-2,msg:"只能上传图片"});
    return;
  }
  //5.创建新文件名
  var src = req.file.originalname;
  var t = new Date().getTime();
  var r = Math.floor(Math.random()*9999);
  var i3 = src.lastIndexOf(".");
  var suff = src.substring(i3);
  var newFile = "./upload/"+t+r+suff;
  console.log(newFile);
  //6.降临时文件移动upload目录下
  fs.renameSync(req.file.path,newFile);
  //7.返回上传成功信息
  res.send({code:2,msg:"图片上传成功"});
})*/
