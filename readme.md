# 微信分享代码段
本代码段只是前端代码，有一个WechatShare.js和一个index.html
主页里面只是调用。具体分享内容在js里面设置就可以。
如果分享内容是后台动态设置的，可以在index.html里面设置几个变量，在js引用变量即可。

### 需要用到后端接口：微信js-sdk签名（自己实现，有空再分享微信中控的实现）
``````
适用:前台
提交方式:GET
URL : Domain/wechat/js_sdk_sign
``````
``````
参数：{"url":""}
``````
|参数|类型|描述|临界值
|----|----|----|----
|url|string|需要请求签名的url|
``````
结果：{"status":"","data":""}
``````
|status|data
|----|----
|1|成功并返回数据。格式：{"appId":"" , "nonceStr":"" , "timestamp": , "signature":"" }
|-1|签名失败及原因
|-2|参数校验失败

