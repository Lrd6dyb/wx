// pages/message/message.js
Page({


    /**
     * 页面的初始数据
     */
    data: {
      list: [],			//当前页内容
      pageIndex: 0,	//页码
      hasMore: true,  //是否有下一页
      pageSize: 2    //页大小
    },
    loadMore: function () {
      // 1.如果没有下一页停止函数执行
      if (this.data.hasMore == false){
        wx.showLoading({
          title: '已经没有了'
        });
        setTimeout(function () {
          wx.hideLoading();
        }, 500)
        return
      };
      // 2.获取两个参数 pno pageSize
      var pno = this.data.pageIndex + 1;
      var pageSize = this.data.pageSize;
      // 3.创建ajax请求
      wx.request({
        url: 'http://127.0.0.1:3000/getMessage',
        data: { pno: pno, pageSize: pageSize },
        success: (result) => {
          // 4.接收返回的数据
          console.log(result.data);
          // 5.拼接数组
          var rows = this.data.list.concat(result.data.data);
          // 6.获取总页数判断是否有下一页
          var pageCount = result.data.pageCount;
          var flag = pno < pageCount;
          // 7.将返回数据保存data属性 rows hasMore pageIndex
          this.setData({
            list: rows,
            hasMore: flag,
            pageIndex: pno
          })
          // 8.添加动态效果 加载动画
          this.setData({ list: rows, pageIndex: pno });
        }
      }); 
      wx.showLoading({
        title: '正在努力加载数据....',
      });
      // 9.加载动画隐藏
      setTimeout(function () {
        wx.hideLoading();
      }, 1000)
  
    },


    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
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