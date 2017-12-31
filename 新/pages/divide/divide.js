// pages/divide/divide.js
Page({

  data: {
    post: []
  },
refresh:function(){
  var that = this;
  console.log('request start');
  wx.request({
    url: 'https://api.heclouds.com/devices/23077870/datapoints?datastream_id=Number&limit=1',
    method: 'GET',
    header: {
      'content-type': 'application/json',
      'api-key': 'zrvXs0iXlBQ=wkZ8z8oZc1HwlFY='
    },
    success: (res) => {

      console.log(res);

      var convert = [];
      var length = res.data.data.datastreams[0].datapoints.length;
      for (var i = 0; i < length; i++) {
        convert.push(res.data.data.datastreams[0].datapoints[i].value);
      };

      this.setData({
        post: convert
      });
    },
  });
},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    setInterval(
      () => this.refresh(),
      1000
    )
    var that = this;
    console.log('request start');
    wx.request({
      url: 'https://api.heclouds.com/devices/23077870/datapoints?datastream_id=Number&limit=1',
      method: 'GET',
      header: {
        'content-type': 'application/json',
        'api-key': 'zrvXs0iXlBQ=wkZ8z8oZc1HwlFY='
      },
      success: (res) => {

        console.log(res);

        var convert = [];
        var length = res.data.data.datastreams[0].datapoints.length;
        for (var i = 0; i < length; i++) {
          convert.push(res.data.data.datastreams[0].datapoints[i].value);
        };

        this.setData({
          post: convert
        });
      },
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