// pages/custom/custom.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    hasUserInfo: false,
    userName: '',
    userPassword: '',
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },

  //登陆验证
  formSubmit: function (e) {
    console.log(e.detail.value);//格式 Object {userName: "user", userPassword: "password"}

    //获得表单数据
    var objData = e.detail.value;

    if (objData.userName && objData.userPassword) {
      // 同步方式存储表单数据
      wx.setStorageSync('userName', objData.userName);
      wx.setStorageSync('userPassword', objData.userPassword);

      var userName = wx.getStorageSync('userName');
      var userPassword = wx.getStorageSync('userPassword');

      wx.request({
        url: 'http://localhost:3000/check',
        data: {
          name: userName,
          password: userPassword
        },
        success: function (res) {
          if (res.data.info.length){
            console.log(res);
            wx.navigateTo({
              url: '/pages/new_dishes/new_dishes'
            });
            wx.showToast({
              title: '登陆成功',
              icon: 'success',
              duration: 2000
            })
          }
          else {
            wx.showToast({
              title: '姓名或密码错误',
              icon: 'fail',
              duration: 2000
            })
          }
        }
      })
    }
  },

  onLoad: function (options) {
    //调用应用实例的方法获取全局数据

    // console.log(app.globalData.userInfo);
    if (!app.globalData.userInfo) {
      console.log("从全局global获取到了");
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else {
      console.log("failed");
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          console.log("首次从global对象获取失败");
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
    var userName = wx.getStorageSync('userName');
    var userPassword = wx.getStorageSync('userPassword');

    console.log(userName);
    console.log(userPassword);
    if (userName) {
      this.setData({ userName: userName });
    }
    if (userPassword) {
      this.setData({ userPassword: userPassword });
    }

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

