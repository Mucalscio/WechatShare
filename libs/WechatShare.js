var WeChatShare=(function ($){

    var getSignatureInfo=function(url,data){
      $.get(url,data,callback,'json');
    }

    var callback=function(json){
        wx.config({
        debug: false,
        appId: json.data.appId,
        timestamp:json.data.timestamp,
        nonceStr: json.data.nonceStr,
        signature: json.data.signature,
        jsApiList: ['onMenuShareTimeline','onMenuShareAppMessage']
      });

      wx.ready(function(){
        wx.onMenuShareTimeline({
          title: '分享的标题',
          link: '分享的链接',
          imgUrl: '分享的图片链接',
          success: function () {},
          cancel: function () {}
        });

        wx.onMenuShareAppMessage({
          title: '分享的标题',
          desc: '描述',
          link: '分享的链接',
          imgUrl: '分享的链接',
          type: '',
          dataUrl: '',
          success: function () {},
          cancel: function () {}
        });
      });
    }
    
    return{
        getSignatureInfo:getSignatureInfo
    }
})(jQuery);
