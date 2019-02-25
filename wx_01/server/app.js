//1.加载express pool模块
const express = require("express");
//引入cors模块，解决发送ajax请求出现的跨域情况
const cors = require("cors");
//引入bodyParser，获取post请求的body
const bodyParser = require('body-parser');
//7.1：加载第三方模块 express-session
const session = require("express-session")
//2.创建express对象
var app = express();
app.use(session({
    secret:"128位随机字符",  //安全字符串
    resave:false,           //请求保存
    saveUninitialized:true,  //初始化保存
    cookie:{
        maxAge:1000 * 60 * 60 * 24 
    }
}));
app.use(bodyParser.urlencoded({
	extended:false
}));
//3.指定监听对象:3000
app.listen(3000);
//4.指定静态目录public,写绝对路径
//__dirname 当前程序所属目录绝对路径
app.use(express.static(__dirname + "/public"));
//配置程序跨域访问
app.use(cors({
    origin:"*",
    credentials:true
}))
var homeRouter = require('./routes/home.js')
app.use('/home',homeRouter);

var userRouter = require('./routes/user.js')
app.use('/user',userRouter);

var indexRouter = require('./routes/index.js')
app.use('/index',indexRouter);

var interestRouter = require('./routes/interest.js')
app.use('/interest',interestRouter);

var shopcartRouter = require('./routes/shopCart.js')
app.use('/shopCart',shopcartRouter);

var userRouter = require('./routes/user.js')
app.use('/user',userRouter);