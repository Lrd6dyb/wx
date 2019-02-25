// pages/cart/cart.js
var app = getApp();

Page({
  goclearingTap:function(){
    wx.navigateTo({
      url: '../order/order',
    })
  },

  /**
   * 页面的初始数据
   */
  data: {
    adminShow: false,//管理      
    shopcarData: [],//购物车数据      
    total: 0,//总金额      
    allsel: false,//全选      
    selarr: [],//选择的货物      
    hintText: '',//提示的内容 
    list: [],    //购物车列表     
    hintShow: "",//是否显示提示 
    server: "" 
  },
  onloadcart:function(){
    this.setData({
      server: getApp().globalData.serverIp
    })
    var user_id = getApp().globalData.u_id;//获取一个user_id传参
    //console.log(user_id);
    wx.request({
      url: getApp().globalData.serverIp + "/shopCart/getShopCart",
      data: {
        user_id: user_id
      },
      method: "POST",
      header: { 'content-type': "application/x-www-form-urlencoded" },
      success: (res) => {
        if(res.data.data.length>0){
          this.setData({
            shopcarData: res.data.data,
            hintShow:false
          })
        }
        else{
          this.setData({
            shopcarData: res.data.data,
            hintShow:true
          })
        }
      }
    })
  },
  //点击全选  
  allcheckTap: function () {
    var shopcar = this.data.shopcarData,
        allsel = !this.data.allsel,//点击全选后allsel变化
        total = 0;
    for (var i = 0, len = shopcar.length; i < len; i++) {
      shopcar[i].check = allsel;//所有商品的选中状态和allsel值一样
      if (allsel) {//如果为选中状态则计算商品的价格
        total += shopcar[i].price * shopcar[i].num;
      }
    }
    this.data.selarr = allsel ? shopcar : [];//如果选中状态为true那么所有商品为选中状态，将物品加入选中变量，否则为空    
    this.setData({
      allsel: allsel,
      shopcarData: shopcar,
      total: total,
      selarr: this.data.selarr
    });
    //点击全选按钮将所有的购物车商品信息存入到全局变量
    getApp().globalData.datalist=this.data.shopcarData;
  },
  //点击移除商品  
  deleteshopTap: function () {
    var allsel = this.data.allsel,
        shopcar = this.data.shopcarData,
        selarr = this.data.selarr;
    if (allsel) {
      shopcar = [];
      this.setData({
        allsel: false
      });
    } else {
      for (var i = 0, len = selarr.length; i < len; i++) {//将选中的商品从购物车移除        
        for (var lens = shopcar.length - 1, j = lens; j >= 0; j--) {
          if (selarr[i].id == shopcar[j].id) {
            shopcar.splice(j, 1);
          }
        }
      }
    }
    this.setData({
      shopcarData: shopcar,
      total: 0
    });
  },
  //点击加入收藏夹
  addcollectTap: function () {
    wx.showToast({
      title: '收藏成功',
      icon:'success',
      duration:1000
    })
    setTimeout(function(){
      wx.hideToast()
    },3000)
  },
  //点击管理按钮，是否显示管理的选项  
  adminTap: function () {
    this.setData({
      adminShow: !this.data.adminShow
    });
  },
  //点击单个选择按钮  
  checkTap: function (e) {
    var Index = e.currentTarget.dataset.index,
        pid = e.currentTarget.dataset.sp_id,
        shopcar = this.data.shopcarData,
        total = this.data.total,
        selarr = this.data.selarr;
    shopcar[Index].check = !shopcar[Index].check || false;
    if (shopcar[Index].check) {
      total += shopcar[Index].num * shopcar[Index].price;
      selarr.push(shopcar[Index]);
    } else {
      total -= shopcar[Index].num * shopcar[Index].price;
      for (var i = 0, len = selarr.length; i < len; i++) {
        if (shopcar[Index].id == selarr[i].id) {
          selarr.splice(i, 1);
          break;
        }
      }
    }
    getApp().globalData.datalist = selarr;
    this.setData({
      shopcarData: shopcar,
      total: total,
      selarr: selarr
    });
    this.judgmentAll();//每次按钮点击后都判断是否满足全选的条件  
  },
  //点击加减按钮  
  numchangeTap: function (e) {
    var Index = e.currentTarget.dataset.index,//点击的商品下标值        
        shopcar = this.data.shopcarData,
        types = e.currentTarget.dataset.types,//是加号还是减号        
        total = this.data.total;//总计    
    switch (types) {
      case 'add':
        shopcar[Index].num++;//对应商品的数量+1      
        shopcar[Index].check && (total += parseInt(shopcar[Index].price));//如果商品为选中的，则合计价格+商品单价      
        break;
      case 'minus':
        shopcar[Index].num--;//对应商品的数量-1      
        shopcar[Index].check && (total -= parseInt(shopcar[Index].price));//如果商品为选中的，则合计价格-商品单价      
        break;
    }
    this.setData({
      shopcarData: shopcar,
      total: total
    });
    getApp().globalData.datalist = shopcar;
  },
  //判断是否为全选  
  judgmentAll: function () {
    var shopcar = this.data.shopcarData,
        shoplen = shopcar.length,
        lenIndex = 0;//选中的物品的个数    
    for (var i = 0; i < shoplen; i++) {//计算购物车选中的商品的个数    
      shopcar[i].check && lenIndex++;
    }
    this.setData({
      allsel: lenIndex == shoplen//如果购物车选中的个数和购物车里货物的总数相同，则为全选，反之为未全选    
    });
  },
  onLoad: function (options) {
    
  },
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    //商品推荐
    wx.request({
      url: getApp().globalData.serverIp + "/interest/getInterest",
      method: "POST",
      header: { 'content-type': "application/x-www-form-urlencoded" },
      success: (res) => {
        this.setData({
          list: res.data.data
        })
      }
    });
    this.onloadcart();

    
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