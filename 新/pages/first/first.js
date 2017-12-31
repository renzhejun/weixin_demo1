// pages/first/first.js
var app = getApp()
Page({
  /**
  * 页面的初始数据
  */
  data: {
    movies: [
      { src: '../image/b1.jpg' },
      { src: '../image/b2.jpg' },
      { src: '../image/b3.jpg' },
      { src: '../image/b4.jpg' }
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.request({
      url: 'http://localhost:3000/showdishes',
      method: 'GET',
      success: function (res) {
        console.log(res);
        that.setData({
          dishesType: res.data.dishesType  // 美食菜单
        });
      },
      fail: function (res) {
        console.log("fail!!!")
      },

      complete: function (res) {
        console.log("end")
      }
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
    var that = this;
    wx.request({
      url: 'http://localhost:3000/showdishes',
      method: 'GET',
      success: function (res) {
        console.log(res);
        that.setData({
          dishesType: res.data.dishesType  // 美食菜单
        });
      },
      fail: function (res) {
        console.log("fail!!!")
      },

      complete: function (res) {
        console.log("end")
      }
    })
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
    wx.showToast({
      title: '刷新中',
      icon: 'loading',
      duration: 3000
    });
    var that = this;
    wx.request({
      url: 'http://localhost:3000/showdishes',
      method: 'GET',
      success: function (res) {
        console.log(res);
        that.setData({
          dishesType: res.data.dishesType  // 美食菜单
        });
      },
      fail: function (res) {
        console.log("fail!!!")
      },

      complete: function (res) {
        console.log("end")
      },
    });
    setTimeout(function () {
      wx.showToast({
        title: '刷新成功',
        icon: 'success',
        duration: 2000
      })
    }, 3000)
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})