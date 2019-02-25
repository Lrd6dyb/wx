// pages/register/register.js
const app=getApp();

Page({
  data: {
    phone: "",
    upwd: "",
  },
  usernameinput: function (e) {
    this.setData({
      phone: e.detail.value
    })
  },
  passwordinput: function (e) {
    this.setData({
      upwd: e.detail.value
    })
  },
  //点击登陆的时候触发的事件
  signin: function () {
    var that = this;
    //登陆的时候要传过来的参数
    var phone = that.data.phone
    var upwd = that.data.upwd
    if (that.data.phone == "") {
      wx.showModal({
        title: "信息提示",
        content: "账号不能为空!"
      })
    } else if (that.data.upwd == "") {
      wx.showModal({
        title: "信息提示",
        content: "请输入密码!"
      })
    }
    // console.log("用户名：" + phone + "密码：" + upwd)
    //发送ajax请求到服务器-登录
    wx.request({
      url: getApp().globalData.serverIp+'/user/login',
      data: {
        phone: phone,
        upwd: upwd,
      },
      header: {
        'Content-Type': 'application/x-www-form-urlencoded' // 默认值
      },
      method: 'POST',
      dataType: 'json',
      success: function (res) {
        var status = JSON.stringify(res.data.code);
        var msg = JSON.stringify(res.data.msg);
        //弹出提示···
        wx.showToast({
          icon:'none',
          title:msg
        })
        if (status == 0) {
            app.globalData.isLogin = true;//登录成功修改登录状态变量
            app.globalData.u_id=res.data.data[0].u_id;//登录成功修改登录状态变量
            app.globalData.userInfo = {
                uname: res.data.data[0].uname, upwd: res.data.data[0].upwd, addr: res.data.data[0].addr, vip: res.data.data[0].vip, phone
                    : res.data.data[0].phone};//保存用户信息
          // console.log(status)
          // wx.navigateTo({
          //   url: '/pages/home/home'
          // })
          //跳转到index页面
          wx.switchTab({
            url: '/pages/home/home',
          })
        }
      },
      fail: function (res) {
        wx.showToast({
          title: '服务器网络错误,请稍后重试',
          icon: 'loading',
          duration: 1500
        })
      },
      complete: function (res) {
           
      },
    })
  },
  
  //点击注册的时候触发的事件
  register: function () {
    wx.navigateTo({
      url: "/pages/register/register"
    })
  }
})   
