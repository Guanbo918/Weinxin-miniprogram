//index.js
//鑾峰彇搴旂敤瀹炰緥
const app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
  },
  //浜嬩欢澶勭悊鍑芥暟
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    var that = this;
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 鐢变簬 getUserInfo 鏄綉缁滆姹傦紝鍙兘浼氬湪 Page.onLoad 涔嬪悗鎵嶈繑鍥�      // 鎵�互姝ゅ鍔犲叆 callback 浠ラ槻姝㈣繖绉嶆儏鍐�      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 鍦ㄦ病鏈�open-type=getUserInfo 鐗堟湰鐨勫吋瀹瑰鐞�      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  //鑾峰彇鍩庡競淇℃伅
  cityInput:function(e){
    var that = this;
    var city = e.detail.value;
    console.log(city);
    that.setData({
      inputValue:""
    })
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
