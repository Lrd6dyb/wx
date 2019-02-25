var QQMapWX=require("../../utils/qqmap-wx-jssdk.js");
var qqmapsdk;
Page({
	getUserLoaction(){
		wx.getSetting({
			success:(res)=>{
				if(res.authSetting["scope.userLocation"] !=undefined && res.authSetting["scope.userLocation"] !=true){
					wx.showModal({
						title: '请求授权当前位置',
						content: '需要获取您的地理位置，请确认授权',
						success:(res)=>{
							if(res.cancel){
								wx.showToast({
									title: '拒绝授权',
									icon:"none",
									duration:1000
								})
							}else if(res.confirm){
								wx.openSetting({
									success:(dataAu)=>{
										if(dataAu.authSetting["scope.userLocation"]==true){
											wx.showToast({
												title: '授权成功',
												icon:"success",
												duration:1000
											})
											//再次授权，调用wx.getLocation的API
											this.getLocation();
										}else{
											wx.showToast({
												title: '授权失败',
												icon:"none",
												duration:1000
											})
										}
									}
								})
							}
						}
					})
				}else if(res.authSetting["scope.userLocation"]==true){
					this.getLocation();
				}else{
					this.getLocation();
				}
			}
		})
	},
	//获取微信经纬度
	getLocation:function(){
		wx.getLocation({
			type:"wgs84",
			success: (res)=> {
				var latitude=res.latitude;
				var longitude=res.longitude;
				var speed=res.speed;
				var accuracy=res.accuracy;
				this.getLocal(latitude,longitude)
			},
			fail : function(res){
				// console.log("fail" + JSON.stringify(res))
			}
		})
	},
	//获取当前地理位置
	getLocal:function(latitude,longitude){
		qqmapsdk.reverseGeocoder({
			location:{
				latitude:latitude,
				longitude:longitude
			},
			success:(res)=>{
				// console.log(JSON.stringify(res));
				let city=res.result.ad_info.city;
				this.setData({
					city:city,
					latitude:latitude,
					longitude:longitude
				})
			},
			fail:function(res){
				// console.log(res)
			}
		})
	},
	//获取搜索内容
	searchVal(e){
		this.setData({
			value:e.detail.value
		})
	},
	// 加入购物车
	addCart(e) {
		console.log(e)
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
			// console.log(e.target.dataset.id)
			wx.request({
				url: getApp().globalData.serverIp + '/shopCart/addtoShopCart',
				method: "POST",
				data: {
					pro_id: e.target.dataset.id,
					user_id: user_id,
					num: 1,
				},
				header: { 'content-type': "application/x-www-form-urlencoded" },
				success: (res) => { 
					// console.log(res)
					wx.showToast({
						title: '添加成功',
						icon:"success",
						duration:2000,
						success:function(){
							setTimeout(()=>{
								wx.hideToast();
							},2000)
						}
					})
				}	
			})
		}
	},
	// 跳转详情页
	jump(e){
		// console.log(e)
		wx.navigateTo({
			url: '/pages/detail/detail?id='+e.currentTarget.dataset.id
		})
	},
	//请求搜索查询的数据
	searchProduct(){
		var val=this.data.value;
		wx.request({
			url: getApp().globalData.serverIp + '/index/getProductByKey',
			method: "POST",
			data: {
				keyword:val
			},
			header: { 'content-type': "application/x-www-form-urlencoded" },
			success: (res) => {
				// console.log(res);
				if(res.data.data.length==0){
					this.setData({
						searchData:false
					})
				}else{
					this.setData({
						products: res.data.data,
						searchData:true
					})
				}
			}
		})
	},
	//下拉按钮显示隐藏
	showclassify(){
		this.setData({
			show:!this.data.show
		})
	},
	//点击商品小类查询信息
	sel_classify(e){
		var pro_type=e.target.dataset.pro_type;
		var p_type=e.target.dataset.p_type;
		wx.request({
		url: getApp().globalData.serverIp + '/index/getProductBytype',
		method: "POST",
		data: {
			pro_type,
			p_type
		},
		header: { 'content-type': "application/x-www-form-urlencoded" },
		success: (res) => {
			// console.log(res);
			this.setData({
			products: res.data.data,
			searchData:true
			})
		}
		});
	},
	sel(a){
		wx.request({
		url: getApp().globalData.serverIp + '/index/getProductBytype',
		method: "POST",
		data: {
			pro_type: a
		},
		header: { 'content-type': "application/x-www-form-urlencoded" },
		success: (res) => {
			// console.log(res)
			this.setData({
			products: res.data.data,
			searchData:true
			})
		}
		});
		wx.request({
		url: getApp().globalData.serverIp + '/index/getXptype',
		method: "POST",
		data: {
			pro_type: a
		},
		header: { 'content-type': "application/x-www-form-urlencoded" },
		success: (res) => {
			this.setData({
			list_son: res.data.data
			})
		}
		});
	},
	handle(e){
		this.setData({
			num:e.currentTarget.dataset.pro_type
		})
    	this.sel(this.data.num);
	},
	//加载页面信息
  loadInfo(){
    var pid = getApp().globalData.pid
    if(pid==0){
      pid++;
    }
    this.setData({
      num: pid
    });
    wx.request({
      url: getApp().globalData.serverIp + '/index/getNav',
      method: "POST",
      header: { 'content-type': "application/x-www-form-urlencoded" },
      success: (res) => {
        this.setData({
          list: res.data.data.slice(0,-4)
        })
		  if (pid > 9) {
			  this.setData({
				  scrollTop: 84
			  })
		  }
      }
    });
    this.sel(pid)
  },
  /**
   * 页面的初始数据
   */
  data: {
    list: [],
    server: "",
	list_son:[],
	products:[],
  	num:0,
	show:false,
	value:"",
	scrollTop:84,
	city:"哈尔滨市",
	latitude:"",
	longitude:"",
	searchData:true
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
	  qqmapsdk=new QQMapWX({
		  key:"XMYBZ-DYE6O-CYDWV-SWXYP-CIVH5-YZBWM"
	  });
    this.setData({
      server:getApp().globalData.serverIp
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
    this.loadInfo();
	this.getUserLoaction();
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