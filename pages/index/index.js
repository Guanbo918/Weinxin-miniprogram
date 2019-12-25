//index.js
// 引用百度地图微信小程序JSAPI模块 
var app = getApp()
var bmap = require('../../libs/bmap-wx.js');
var wxMarkerData = [];
Page({
  data: {
    markers: [],
    latitude: '',
    longitude: '',
    placeData: {}
  },
  makertap: function (e) {
    var that = this;
    var id = e.markerId;
    that.showSearchInfo(wxMarkerData, id);
    that.changeMarkerColor(wxMarkerData, id);
  },
  onLoad: function () {
    var that = this;
    // 新建百度地图对象 
    var BMap = new bmap.BMapWX({
      ak: 'qXO7k1V4o6dDwlw1WO7uMTVN4Q83nMaY'
    });
    var fail = function (data) {
      console.log(data)
    };
    var success = function (data) {
      wxMarkerData = data.wxMarkerData;
      that.setData({
        markers: wxMarkerData
      });
      that.setData({
        latitude: wxMarkerData[0].latitude
      });
      that.setData({
        longitude: wxMarkerData[0].longitude
      });
    }
    // 发起POI检索请求 
    BMap.search({
      "query": '酒店',
      fail: fail,
      success: success,
      // 此处需要在相应路径放置图片文件 
      iconPath: '../../img/marker_red.png',
      // 此处需要在相应路径放置图片文件 
      iconTapPath: '../../img/marker_red.png'
    });
  },
  showSearchInfo: function (data, i) {
    var that = this;
    that.setData({
      placeData: {
        title: '名称：' + data[i].title + '\n',
        address: '地址：' + data[i].address + '\n',
        telephone: '电话：' + data[i].telephone
      }
    });
  },
  changeMarkerColor: function (data, i) {
    var that = this;
    var markers = [];
    for (var j = 0; j < data.length; j++) {
      if (j == i) {
        // 此处需要在相应路径放置图片文件 
        data[j].iconPath = "../../img/marker_yellow.png";
      } else {
        // 此处需要在相应路径放置图片文件 
        data[j].iconPath = "../../img/marker_red.png";
      }
      markers[j](data[j]);
    }
    that.setData({
      markers: markers
    });
  }
})
/*var app = getApp()
//用于保存BMap.search接口返回的数据
Page({
  data: {
    height: 'auto',
    markers: [],
    latitude: '',
    longitude: ''
  },
  onLoad: function () {
    //保证wx.getSystemInfo的回调函数中能够使用this
    var that = this
    //构造百度地图api实例
    BMap = new bmap.BMapWX({
      ak: 'qXO7k1V4o6dDwlw1WO7uMTVN4Q83nMaY'
    })
    //调用wx.getSystemInfo接口，然后动态绑定组件高度
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          height: res.windowHeight
        })
      }
    })
  },
  //查询当前位置的poi信息
  //官方文档上说可以查询指定位置的周边信息
  //然而当前源码中却存在一个bug导致不能查询指定位置的周边信息

  search: function (e) {
    var that = this
    //查询失败，直接打印log
    var fail = function (data) {
      console.log(data)
    }
    //查询成功后将结果数据动态绑定到页面上
    var success = function (data) {
      wxMarkerData = data.wxMarkerData;
      that.setData({
        markers: wxMarkerData
      })
      that.setData({
        latitude: wxMarkerData[0].latitude
      })
      that.setData({
        longitude: wxMarkerData[0].longitude
      })
    }
    //使用百度api查询周边信息
    //其中使用到了dataset属性
    BMap.search({
      query: e.target.dataset.type,
      success: success,
      fail: fail
    })
  }
})*/