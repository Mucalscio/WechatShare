# 1.微信js-sdk签名
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