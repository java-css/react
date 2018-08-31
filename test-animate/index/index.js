const app = getApp()

Page({
  data: {
    isHidden: true,
    animationCont: true,
    animationData: '',
  },
  // isLike: function(e) {
  //   var that = this;
  //   console.log(that.data.isHidden);
  //   if (that.data.isHidden) {
  //     console.log('like')
  //     that.setData({
  //       isHidden: false,
  //       animationCont: false,
  //     })
  //     //实例化一个动画
  //     // var animations = wx.createAnimation({
  //     //   duration: 1000,
  //     //   timingFunction: 'ease-in-out',
  //     //   delay: 0,
  //     // })

  //     // that.animations = animations;
  //     // animations.scale(2).step();
  //     // that.setData({
  //     //   animationData: animations.export(),
  //     // })
  //     // setTimeout(function() {
  //     //   animations.scale(0).step();
  //     //   that.setData({
  //     //     animationData: animations.export(),
  //     //     animationCont: true
  //     //   })
  //     // }.bind(that), 1000)

  //   } else {
  //     console.log('nolike')
  //     that.setData({
  //       isHidden: true,
  //     })
  //   }
  // },
  onLoad: function() {

  },
  isLike: function(e) {
    var that = this;
    if (that.data.isHidden) {
      console.log('like')
      that.setData({
        isHidden: false,
        animationCont: false,
      })
      //实例化一个动画
      var animations = wx.createAnimation({
        duration: 0,
        timingFunction: 'ease'
      })

      that.animations = animations;
      // let offsetY = 400
      let time = 0
      let timer = setInterval(function() {
        time++;
        animations.translateY(-400 * time).step()
        // timeMax--
        console.log(time)
        if (time >= 20) {
          clearInterval(timer)
          this.setData({
            animationCont: true
          })
        }
        this.setData({
          animationData: animations.export(),
        })
      }.bind(that),50)
      // animations.scale(2).step();
      // that.setData({
      //   animationData: animations.export(),
      // })
      // setTimeout(function() {
      //   animations.scale(0).step();
      //   that.setData({
      //     animationData: animations.export(),
      //     animationCont: true
      //   })
      // }.bind(that), 1000)

    } else {
      console.log('nolike')
      that.setData({
        isHidden: true,
      })
    }
  }


})