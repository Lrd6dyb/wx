//index.js
//获取应用实例
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[],
    hasUserInfo: true,
    uname:'',
    server:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      server: getApp().globalData.serverIp
    })
    if (app.globalData.isLogin)
    {
      this.setData({
        hasUserInfo:false,
        uname: app.globalData.userInfo.uname
      })
    }

    /**ajax 请求 */
    wx.request({
      url: getApp().globalData.serverIp + "/interest/getInterest",
      method: "POST",
      header: { 'content-type': "application/x-www-form-urlencoded" },
      success: (res) => {
        this.setData({
          list: res.data.data
        })
        // console.log(this.data.list)
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
      this.setData({
          server: getApp().globalData.serverIp
      })
      if (app.globalData.isLogin) {
          console.log(this.data.hasUserInfo)
          this.setData({
              hasUserInfo: false,
              uname: app.globalData.userInfo.uname
          })
      }
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
    
  },
  getUserInfo: function (e) {
    // console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
