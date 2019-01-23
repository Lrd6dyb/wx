//index.js
//获取应用实例
const app = getApp()

Page({
  getImages:function(){
    wx.request({
      url: 'http://127.0.0.1:3000/getImages',
      success: (res)=>{
        var data = res.data;
        this.setData({
          list:data
        })
      }
    })
  },
  getNavImages:function(){
    wx.request({
      url: 'http://127.0.0.1:3000/getNavImages',
      success: (res) => {
        var data = res.data;
        this.setData({
          navlist: data
        })
      }
    })
  },

  handleJump1:function(e){
    var id=e.target.dataset.id;
    console.log(id);
    if(id==1){
        wx.navigateTo({
          url: '/pages/recommendlist/recommendlist' ,
        })
    }else if(id==2){
      wx.navigateTo({
        url: '/pages/discount/discount',
      })
    } else if (id == 3) {
      wx.navigateTo({
        url: '/pages/recommendlist/recommendlist',
      })
    } else if (id == 4) {
      wx.navigateTo({
        url: '/pages/recommendlist/recommendlist',
      })
    } else if (id == 5) {
      wx.navigateTo({
        url: '/pages/recommendlist/recommendlist',
      })
    } else if (id == 6) {
      wx.navigateTo({
        url: '/pages/recommendlist/recommendlist',
      })
    } else if (id == 7) {
      wx.navigateTo({
        url: '/pages/recommendlist/recommendlist',
      })
    } else if (id == 8) {
      wx.navigateTo({
        url: '/pages/recommendlist/recommendlist',
      })
    } else if (id == 9) {
      wx.navigateTo({
        url: '/pages/recommendlist/recommendlist',
      })
    }
  },
  handleJump2: function (e) {
    var id = e.target.dataset.id;
    if (id == 1) {
      wx.navigateTo({
        url: '/pages/recommendlist/recommendlist',
      })
    }
    if (id == 2) {
      wx.navigateTo({
        url: '/pages/discount/discount',
      })
    }
  },
  

  /**
   * 页面的初始数据
   */
  data: {
    list:[
    ],
    navlist:[
    ],
    btnlist:[
      { id: 1, img_url: "http://127.0.0.1:3000/img/link-01.png"},
      { id: 2, img_url: "http://127.0.0.1:3000/img/link-02.png" }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getImages();
    this.getNavImages();
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
