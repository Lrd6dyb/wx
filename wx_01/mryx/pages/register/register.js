// pages/register1/register1.js
Page({
  data: {
    phone:"",
    username: "",
    addr:"",
    password: "",
    passwordconfirm: "",
  },
  phoneinput:function(e){
    this.setData({
      phone: e.detail.value
    })
  },
  usernameinput: function (e) {
    this.setData({
      username: e.detail.value
    })
  },
  addrinput: function (e) {
    this.setData({
      addr: e.detail.value
    })
  },
  passwordinput: function (e) {
    this.setData({
      password: e.detail.value
    })
  },
  passwordconfirminput: function (e) {
    this.setData({
      passwordconfirm: e.detail.value
    })
  },
  signin: function () {
    var that = this;
    //请求的时候需要提交的参数
    var phone = that.data.phone;
    var uname = that.data.username;
    var upwd = that.data.password;
    var addr = that.data.addr;
    if (that.data.phone == "") {
      wx.showModal({
        title: "信息提示",
        content: "手机号不能为空!"
      })
      return;
    } else if (!/^1[3|4|5|6|7|8|9]\d{9}$/.test(phone)) {
      wx.showModal({
        title: "信息提示",
        content: "手机号格式不正确!"
      })
      return;
    } else if (that.data.addr == "") {
      wx.showModal({
        title: "信息提示",
        content: "地址不能为空!"
      })
      return;
    } else if (that.data.username == "") {
      wx.showModal({
        title: "信息提示",
        content: "用户名不能为空!"
      })
      return;
    } else if (that.data.password == "") {
      wx.showModal({
        title: "信息提示",
        content: "请输入密码!"
      })
      return;
    } else if (that.data.passwordconfirm == "") {
      wx.showModal({
        title: "信息提示",
        content: "请确认密码!"
      })
      return;
    } else if (that.data.passwordconfirm != that.data.password) {
      wx.showModal({
        title: "信息提示",
        content: "两次密码输入不一致!"
      });
      return;
    } 
    console.log("js中收到的用户名："+uname+"，密码："+upwd);
    //发送ajax请求将用户注册信息传递过去进行注册
    wx.request({
      url: getApp().globalData.serverIp + '/user/register',
      data: {
        uname: uname,
        upwd: upwd,
        phone:phone,
        addr:addr,
        vip:0
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded' // 默认值
      },
      method: "POST",
      dataType: "json",
      success: function (res) {
        console.log('进入到成功函数');
        console.log(res);
        
        if(res.data.code == 0){
          wx.showToast({
            title: res.data.msg,
            duration:2000
          })
          setTimeout(function(){
            wx.navigateTo({
              url: '/pages/login/login',
            })
          },1000)    
        }
        else{
          wx.showToast({
            title: res.data.msg,
            duration: 2000
          })
        }
      },
      fail: function (res) {
        wx: wx.showToast({
          title: '服务器网络错误,请稍后重试',
          icon: 'loading',
          duration: 1500,
        })
      },
      complete: function (res) {

      }
    })
    
  }
}) 

