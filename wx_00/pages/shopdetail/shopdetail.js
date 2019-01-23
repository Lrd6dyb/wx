// page/component/details/details.js
Page({
  data: {
    goods: {
      id: 1,
      image: 'http://127.0.0.1:3000/classics/1.jpg',
      title: '臻爱·约瑟芬',
      price: 398,
      stock: '有货',
      detail: '200多年前，马尔梅松的玫瑰盛会，是拿破仑献给约瑟芬的爱情赞歌。时光至此，玫瑰渐成爱情的同义语。',
      parameter: '1.7磅  法国淡奶油  韩国幼砂糖  新西兰黄油  巴氏杀菌鸡蛋液',
      service: '不支持退货'
    },
    num: 1,
    totalNum: 0,
    hasCarts: false,
    curIndex: 0,
    show: false,
    scaleCart: false
  },

  addCount() {
    let num = this.data.num;
    num++;
    this.setData({
      num: num
    })
  },

  addToCart() {
    const self = this;
    const num = this.data.num;
    let total = this.data.totalNum;

    self.setData({
      show: true
    })
    setTimeout(function () {
      self.setData({
        show: false,
        scaleCart: true
      })
      setTimeout(function () {
        self.setData({
          scaleCart: false,
          hasCarts: true,
          totalNum: num + total
        })
      }, 200)
    }, 300)
  },

  bindTap(e) {
    const index = parseInt(e.currentTarget.dataset.index);
    this.setData({
      curIndex: index
    })
  }
  
})