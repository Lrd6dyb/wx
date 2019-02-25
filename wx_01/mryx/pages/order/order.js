// pages/order/order.js
Page({
  gotopayTap: function () {
    wx.navigateTo({
      url: '../pay/pay?sum='+(this.data.total+10),
    })
  },

  /**
   * 页面的初始数据
   */
  data: {
    shop_selarr: [],
    total: 0,//总金额 
    server:"",
    userinfo: { uname: '未登录',  addr: '', vip: '',phone:"" }
  },
  attached(){

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      total:0
    });
    var app=getApp()
    if (getApp().globalData.datalist){//判断是否有结算商品
      this.setData({
      shop_selarr: getApp().globalData.datalist,
      server: getApp().globalData.serverIp
      })
    }
    if (getApp().globalData.userInfo) {//判断是否有用户登录
        this.setData({
            userinfo: getApp().globalData.userInfo
        })
    }
    var sum = 0;
    if (this.data.shop_selarr){
      for (var i = 0; i < this.data.shop_selarr.length;i++){
        sum += this.data.shop_selarr[i].price * this.data.shop_selarr[i].num;
        console.log(this.data.shop_selarr[i].price);
      }
      this.setData({
        total:sum
      })
      console.log(this.data.total);
    }
    
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