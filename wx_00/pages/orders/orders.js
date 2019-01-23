// pages/orders/orders.js
Page({
  data: {
    address: {},
    hasAddress: false,
    total: 0,
    orders: [
      {
        id: 1, title: "L'amour ·Joséphine 臻爱·约瑟芬", image: 'http://127.0.0.1:3000/classics/1.jpg', num: 1, price: 398
      },
      { id: 2, title: "Napoléon aux fraises 拿破仑莓恋", image: 'http://127.0.0.1:3000/classics/2.jpg', num: 1, price: 318 }
    ]
  },

  onReady() {
    this.getTotalPrice();
  },

  onShow: function () {
    const self = this;
    wx.getStorage({
      key: 'address',
      success(res) {
        self.setData({
          address: res.data,
          hasAddress: true
        })
      }
    })
  },

  /**
   * 计算总价
   */
  getTotalPrice() {
    let orders = this.data.orders;
    let total = 0;
    for (let i = 0; i < orders.length; i++) {
      total += orders[i].num * orders[i].price;
    }
    this.setData({
      total: total
    })
  },

  toPay() {
    wx.showModal({
      title: '提示',
      content: '本系统只是测试，支付已屏蔽',
      text: 'center',
      complete() {
        wx.switchTab({
          url: '/pages/proflie/proflie'
        })
      }
    })
  }
})