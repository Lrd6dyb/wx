//logs.js
const util = require('../../utils/util.js')

Page({
  handle1:function(){
    wx.showToast({
      title: '添加成功',
      icon:'success',
      duration:1000
    })
  },
  addCart(e) {
    // console.log(e)
    var user_id = getApp().globalData.u_id;
    // console.log(user_id);
    if (user_id == -1) {
      wx.showModal({
        title: '您还没有登录哦！',
        content: '点击去登录',
        showCancel: false,
        confirmText: "去登录",
        success: function () {
          wx.redirectTo({
            url: '/pages/login/login',
          })
        }
      })
    } else {
      wx.request({
        url: getApp().globalData.serverIp + '/shopCart/addtoShopCart',
        method: "POST",
        data: {
          pro_id: this.data.u_id,
          user_id: user_id,
          num: 1,
        },
        header: { 'content-type': "application/x-www-form-urlencoded" },
        success: (res) => {
        //   console.log(res)
          wx.showToast({
            title: '添加成功',
            icon: "success",
            duration: 2000,
            success: function () {
              setTimeout(() => {
                wx.hideToast();
              }, 2000)
            }
          })
        }
      })
    }
  },
  /**
   * 页面的初始数据
   */
  data: {
  list: [],//轮播
  list1:[],//推荐商品
  count:0,
  u_id:0,
  server: ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      server: getApp().globalData.serverIp
    })
    //console.log(options);
    this.setData({
      u_id:options.id
    })
    wx.request({
      url: getApp().globalData.serverIp + "/index/getProductDetails",
      method: "POST",
      data: {
        id:options.id
      },
      header: { 'content-type': "application/x-www-form-urlencoded" },
      success: (res) => {
        this.setData({
          list:res.data.data[0],
          count: Math.ceil(Math.random()*1000)
        })
        //console.log(this.data.list)
      }
    });
    wx.request({
      url: getApp().globalData.serverIp + "/interest/getInterest",
      method: "POST",
      header: { 'content-type': "application/x-www-form-urlencoded" },
      success: (res) => {
        // console.log(res)
        this.setData({
          list1: res.data.data
        })
        // console.log(this.data.list1)
      }
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})