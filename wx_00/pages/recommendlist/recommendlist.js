// pages/recommendlist/recommendlist.js
Page({

  /**
   * 列表页面的初始数据
   * 
   */
  data: {
    list: [],     //当前页内容
    pageIndex: 0, //页码
    pageSize: 7,   //页大小  
    hasMore:true
  },
  handleJump: function (e) {
    // var id = e.target.dataset.id;
    // if (id == 1) {
       wx.navigateTo({
         url: '/pages/shopdetail/shopdetail',
       })
    // }
  },
  loadMore:function(){
    if (this.data.hasMore == false){
      wx.showLoading({
        title: '已经没有了'
      });
      setTimeout(function () {
        wx.hideLoading();
      }, 500)
      return
    };

    wx.showLoading({
      title: 'Loading...'
    });
    

    //加载下一页数据
    //1.获取两个数值 pno pagesize
    var pno = this.data.pageIndex + 1;
    var ps = this.data.pageSize;
    
    //2.发送ajax请求
    wx.request({
      
      url: 'http://127.0.0.1:3000/findshops',
      data: { pno: pno, pageSize: ps },
      success: (result) => {
        setTimeout(function () {
          wx.hideLoading();
        }, 500)
        var rows = this.data.list.concat(result.data.data);
        var pc = result.data.pageCount;
        var flag = pno < pc;
        //2.1保存返回数据 data list
        this.setData({
          list: rows,
          hasMore: flag,
          pageIndex: pno,
        });
        
        
      }
    });
    
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options){
    this.loadMore();
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
    this.setData({
      pageIndex:0,
      list:[],
      hasMore:true
    });
    this.loadMore();
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    this.loadMore();
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})