// pages/pay/pay.js
Page({
  payTap: function () {
    wx.showToast({
      title: '支付中···',
      icon: 'loading',
      duration:2000
    })
    setTimeout(function () {
      wx.hideToast();
      wx.showToast({
        title: '支付成功',
        icon: 'success',
      })
        
    }, 1900)
    setTimeout(function(){
        wx.switchTab({
            url: '/pages/cart/cart',
        })
    },2200)
    

  },
  /**
   * 页面的初始数据
   */
  data: {
    sum:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      sum:options.sum
    })
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