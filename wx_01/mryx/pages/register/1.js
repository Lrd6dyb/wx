/*
//创建函数
function printHello(){
  console.log('hello');
}
//调用函数
printHello();
function fn(){
  console.log(10+20);
}
fn();
fn();
fn();
function getSum(){
   var sum=0;
   for(var i=0;i<=100;i++){
     sum+=i;
   }
   console.log(sum);
}
getSum();

//创建带有参数的函数
function addNum(num1,num2){
  console.log('参数1:'+num1);
  console.log(num1+num2);
}
addNum(10,30);

function getSum(num){
   var sum=0;
   for(var i=1;i<=num;i++){
     sum+=i;
   }
   console.log(sum);
}
getSum(100);


function getRun(start,end){
  var count=0;
  for(var i=start;i<=end;i++){
    if(i%4==0 && i%100!=0 || i%400==0){
	  count++
	}
  }
  console.log(count);
}
getRun(2000,2100);
//带有返回值的函数
function getSum(num1,num2,num3){
  //console.log(num1+num2+num3);
  return num1+num2+num3;
}
var sum=getSum(2,4,8);
console.log(sum);

function getJC(num){
  var sumJC=1;
  for(var i=1;i<=num;i++){
    sumJC*=i;
  }
  return sumJC;
}
var b=getJC(10);
console.log(b);

//递归获取第n个月的个数
function fib(n){
  //跳转条件 ：当第一个月、第二月的结果是1
  if(n==1 || n==2){
    return 1;
  }
  return fib(n-1)+fib(n-2);
}
var rb=fib(10);
console.log(rb);

//匿名函数
//函数表达式
var fn=function (num1,num2){
  return num1+num2;
}
var sum=fn(2,6);
console.log(sum)

//全局污染：在程序中使用变量，创建函数

function fun(){
  var num=1;
  function fn(){
    console.log(123);
  }
}
function fun(){
  var num=1;
  function fn(){
    console.log(123);
  }
}

//避免全局污染：创建函数作用域 不适用变量，也不是函数名称
//匿名函数自调用
(function(){
   function fn(){
	  console.log(123);
   }
   var num1=1
   console.log(num1);
   fn();
})()


(function(){
  function fn(){
	  console.log(123);
	}
   var num1=1
   console.log(num1);
   fn();
})()


//回调函数
//把匿名函数以实参形式传递
function fn(a,b){
	//匿名函数创建 函数（函数表达式）
  a();
  b();
}
fn(function(){
  console.log('匿名函数1')
},function(){
  console.log('匿名函数2')
});

function fn(a,b){
  a();
  b();
  return a()+b();
}
var res=fn(function(){
  return 1;
},function(){
  return 2;
});
console.log(res);

//全局函数
var url="http://www.codeboy.com/sreach?kw=智能手机";
console.log(url);
//编码URL
url=encodeURI(url);
console.log(url);
url=decodeURI(url)
console.log(url);
//第六天 下午视频

//自定义对象

//创建电脑对象
var computer={
  color:'白色',
  size:23,
  'come-from':'China',
  cpu:'i5'
}
console.log(computer);

//使用new object 创建对象
var book=new Object();
//添加属性
book.bid=1501;//.添加属性 值
book.title='三国演义';
book.price='15';
book.author='罗贯中';
book['pubTime']='2000-10-10';//中括号添加属性 值
console.log(book);
var phone=new Object();
phone['lid']=1;
phone['brand']='小米6';
console.log(phone);
//获取属性
console.log(phone.brand);
console.log(phone['lid']);
var person={
  name:'tom',
  age:30 
}
console.log(person.age);

//遍历（循环）属性

var emp={
  eid:8,
	  ename:'tom',
	  sex:0,
	  birthday:'1988-4-6',
	  salary:5000,
	  phone:'13966558822'
}
//遍历属性
//key表示要遍历的所有属性名
//in后表示要遍历的对象
//emp[key] 获取所有的属性值
for(var key in emp){
	console.log(key+'----'+emp[key]);
}
var computer={
  color:'白色',
  size:23,
  'come-from':'China',
  cpu:'i5'
}
for(var key in computer){
  console.log(key+'....'+computer[key]);
}
//检测对象是否含有某个属性
var person={
  name:'tom',
  age:20,
  sex:1,
  isMember:null
}
  //1        name  在 存在person
console.log('name' in person);
  //2   是否有 hasOwnProperty
console.log(person.hasOwnProperty('salary'));

  //3判断是否为undefined
console.log(person.isMember===undefined);
var n=3;
console.log(n++ + ++n + n++);

var person={
  //属性
  name:'tom',
  age:30,
  //方法
  say:function(){
     return '我是Tom'
  }
}
//调用对象中的方法
var res=person.say();
console.log(res);

var phone={
  lid:1,
  price:9999,
  brand:'小米6',
  msg:function(){
    return '编号:'+this.brand+' 价格是:'+this.price;
  }
}
var res=phone.msg();
console.log(res);

//方法中调用属性
//this.属性名称
var person={
  name:'tom',
  age:'20'
}
//把person对象的地址赋值给了p
//person和p两个指向同一个对象
var p=person;
p.name='jerry';
console.log(p);
console.log(person);
//对象属于引用类型 地址改变

//数组
//索引数组  遍历用for循环
//关联数组  遍历使用fo-in 循环
var arr=['tom','jerry','kate','king','cris'];
console.log(arr.splice(2,3));//删除
console.log(arr.splice(2,2,'lucy'))//替换
console.log(arr);

var arr=['推荐','热点','娱乐','科技'];
 console.log(arr.splice(1,1));
 console.log(arr.splice(2,0,'新闻','体育'));
 console.log(arr.splice(0,1,'汽车'))
 console.log(arr)

var arr=['tom','jerry','kate','king','cris'];
console.log(arr.reverse());//翻转数组

var arr=['tom','jerry','kate','king','cris'];
var newArr=[];
for(var i=0;i<arr.length;i++){
   newArr[i]=arr[arr.length-1-i]
}
   console.log(newArr);

//二维数组
var arr=['北京','天津','河北'];
var city=[
   ['海淀区','东城区','西城区'],
   ['河东区','和平区','蓟县'],
   ['石家庄','邯郸','唐山']
];
console.log(city[0][2]);

//字符串操作
var str='hello';
//查看数据类型
console.log(typeof(str));
//包装成字符串对象
var str2=new String('hello');//错
console.log(str2);
console.log(typeof(str2));
console.log(str2+'world');
var str3=String('hello');
console.log(str3);

//\n换行 \t制表符
var  str='hello\n world\t it';
console.log(str)
//获取字符串长度
console.log(str.length);
console.log('welcome to chi\na')

//大小写转换
var str="how are YOU";
console.log(str.toUpperCase());//大写
console.log(str.toLowerCase());//小写

var code='HOwe';
do{
	var str=prompt('请输入4个字符');
	code=code.toLowerCase();
	str=str.toLowerCase()
    if(str==code){
	  break;
	}
}while(true);

var str='welcome';
console.log(str.length);
//获取下表为3 的字符
console.log(str.charAt(str.length-1));
//使用for遍历字符串
for(var i=0;i<str.length;i++){
 console.log(str.charAt(i));
}

var  str='welcome';
console.log(str.indexOf('o',2));


do{
  var email=prompt('input a email');
   email=email.toLowerCase();
if(email.indexOf('@')<0){
  console.log("邮箱格式不正确")
}else if(email.indexOf('.')<0){
  console.log('邮箱格式不正确')  
}else{
  console.log('邮箱格式正确')
}
}while(true)

//截取字符串
 //slice
 var str='javascript';
 console.log(str.slice(4,7));

 //将身份证号中的年月日取出来
 //打印年月日
 var id='140222199604081526';
 var sex=id.slice(-2,-1);
 var year=id.slice(6,10);
 var month=id.slice(10,12);
 var date=id.slice(12,14);
 console.log(year+'年'+month+'月'+date+'日');
 if(sex%2==0){
   console.log('女');

 }else{
   console.log('男');
 }

 

 var str='jerry@sina.com.cn';
 //查找到@的下标
 var index=str.indexOf('@');
 var uname=str.slice(0,index);
 console.log('用户名：'+uname);
 //截取域名：从@下标的下一位
 var domain=str.slice(index+1);
 console.log('域名：'+domain);
  var word='heLLo';
  var first=word.charAt(0)
  var second=word.slice(1)
  console.log(first.toUpperCase()+second.toLowerCase());
  
  var str= 'javascript';
  console.log(str.substring(4,8))

//数组转为字符串
var  arr=['tom','jerry','kate'];
//转为字符串
console.log(arr.toString());
//用|拼接
console.log(arr.join('|'));
//字符串转为数组
var str='tom,jerry,kate';
//按照逗号（，）将字符串切割为3部分  返回数组
var arr=str.split(',');
console.log(arr);
var email='jerry@sohu.com';
//按照@符剪切字符串
var str=email.split('@');
//按照下标获取字符串
console.log('用户名：'+str[0]+'域名'+str[1]);

var str='wE aRe faMily';
//字符串转为数组
//按照空格切割字符串返回数组split
var arr=str.split(' ');
//遍历数组，获取每一个元素
for(var i=0;i<arr.length;i++){
	//arr[i] 代表每一个元素的单词
	var first=arr[i].slice(0,1).toUpperCase();
	//首字母转为大写，其余转为小写
	var last=arr[i].slice(1).toLowerCase();
	//把转换的结果替换当前的元素
	arr[i]=first+last;
}
//使用join拼接返回字符串
console.log(arr)
console.log(arr.join(' '));

var arr='china截取字符串 China start开始的下标CHINA，end结束的下标，cHINa不包括本身，如果end为空，截取到最后，允许使用负值'
//替换
//console.log(arr.replace('china','中国'));
//console.log(arr.replace(/china/gi,'中华'))
//查找China出现的次数
var str=arr.match(/china/ig)
console.log(str.length);

var str2='tom@163.com';
var res=str2.search(/@/);//类似于indexOf
//sreach搜索返回字符的下标 找不到返回-1
console.log(res);

//获取圆周率
console.log(Math.PI);
//绝对值 abs
console.log(Math.abs(-1));
//parseInt
//四舍五入取整
//向上取整
console.log(Math.round(3.9));
//向下取整
console.log(Math.floor(3.5));

//比较多个数，获取最大值
console.log(Math.max(7,3,6));
//比较多个数，获取最小值
console.log(Math.min(9,6,5,4));
//获取数的几次方
console.log(Math.pow(8,2));
//随机
console.log(Math.random()*50);

var str=['aa','bb','cc','dd','ee','ff','gg','hh','ii','jj','kk','ll',]
//获取下标的随机数
var num=Math.random()*10;
num=Math.floor(num);
console.log(str[num])

//随机获取四个，放入数组中
//定义一个数组
var arr=['a','b','c','d','e','f','g','h','i','j','k'];
//使用for循环遍历数组
for (var i=0;i<10;i++){
    //push加入到arr中
	arr.push(i);
}
//定义一个新的空数组
var newArr=[];
//随机取4个字符
//使用遍历循环四次
for(var i=0;i<4;i++){
	//随机获取一个数字
    var num=Math.random()*arr.length;
	//向下取整
    num=Math.floor(num);
	//获取的数字添加到新的数组中
	newArr.push(arr[num]);
}	
//打印新数组
console.log(newArr);

var arr=[];
for(var i=0;i<30;i++){
  arr.push(i);
};
//创建一个空数组
var newArr=[]
for(var i=0;i<7;i++){
  //获取随机数
  var num=Math.random()*arr.length;
  //向下取整
  num=Math.floor(num);
  //将获取的元素添加到新数组中
  newArr.push(arr[num]);
  //取完后。删除这个元素的下标
  //删除的元素下标num 1删除的个数
  arr.splice(num,1);
}
console.log(newArr);

//实例化date对象
var d1=new Date(2018,8,18,4,0,0);
var d2=new Date('2018-9-18 10:23:30');
var d3=new Date();//获取当前时间
var d4=new Date(1000*60*60*24);//计算机元年
console.log(d4);

var d1=new Date(2019,0,1,0,0,0);
console.log(d1.toLocaleString())//本地各式

var arr=['日','一','二','三','四','五']
for(hours>=12){
  
}
console.log('今天是'+year+'年'+month+'月'+date+'日'+hour+'时'+'分'+'秒'+arr[day]+str)


var d=new Date(2018,11,25,0,0,0);
d.setFullYear(2019);
console.log(d.toLocaleString());

var d=new Date('2018-10-1');
//复制
var d2=new Date(d);
var date2=d2.getDate()+10;
d2.setDate(date2);
console.log(d2.toLocaleString());
console.log(d2.getDay());

var b1=true;
var b2=new Boolean(NaN);
console.log(b2);
console.log(typeof(b2))

var b3=!!0.0;
var b4=!!null;
console.log(b4);

console.log(1);
//遇到可能出现的错误代码，尝试执行
try
{
  console.log(a);	
}
catch (err)
{
	console.log(err)//开发过程中使用
}
console.log(2); 

//创建块级作用域  {}是块级作用域
{
  //let 声明的变量是局部的 var是全局的
  let a =1;
}
console.log(a)

var i=0;
while (i<5)
{
	let a=5;
	console.log()
}

var arr=[4,18,29,8];
//匿名函数一参数传递是匿名函数自调用
//console.log(arr.sort(function(a,b){
//   return a-b;
//}))
//ES6简化代码
console.log(arr.sort(a,b)=>a-b;);

function fn(a,b,c){
  console.log(a+b+c);

}
fn(2,3);
fn(3,8,9);

var year=2018;
var month=9;
var data=18;
var hour=17;
var minute=56;
//模板字符串
console.log(`
  //使用变量时 y  使用${}
  ${year}年${month}月
  es6新特征
  块级作用域
`);

var d1=new Date('2015/6/10');
var d2=new Date(d1); 
//3年后到期
//获取年份后加3 设置年份
d2.setFullYear(d2.getFullYear()+3);
//复制到期时间
var d3=new Date(d2);
//提前一个月
d3.setMonth(d3.getMonth()-1);
console.log(`入职时间为:${d1.toLocaleString()}`);
console.log(`合同到期时间为：${d2.toLocaleDateString()}`);
console.log(`续签时间为：${d3.toLocaleDateString()}`);

 

//node.js
*/
/*
function createXhr(){
	var xhr=null;
	if(window.XMLHttpRequest){
	  xhr=new XMLHttpRequest();
	}else{
	   xhr=new ActiveXObject("Microsoft.XMLHttp");
	}
}
*/
//创建一个函数  xhr 可扩展标记语言 协议 请求   
function createXhr(){
  //创建一个变量
  var xhr=null;
  //判断
  if(window.XMLHttpRequest){
    xhr=new XMLHttpRequest;
  }else{
    xhr=new ActiveXObject("Microsoft.XMLHttp");
  }
}

//封装一个函数
//创建函数  
function createXhr(){
  //声明一个变量 
  var xhr=null;
  //判断
  if(window.XMLHttpRequest){
    xhr=new XMLHttpRequest;
  }else{
    xhr=new ActiveXObject("Microsoft.XMLHttp");
  }
  //返回变量
  return xhr;
}
















































































