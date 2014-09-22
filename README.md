BTnoderest
==========

### 開啟mongod

```$ mongod --config /etc/mongod.conf --fork --rest```

### 開啟node app3.js

```bash
$ git clone https://github.com/liyuqi/BTnoderest
$ cd BTnoderest
$ sudo npm install
$ node app3.js
```

### 瀏覽器測試 

http://127.0.0.1:8006/events

```myapp lisenting at http://127.0.0.1:8006```



## CURL測試

https://wiki.duraspace.org/display/DURACLOUDDOC/REST+API+Examples+Using+curl

curl參數| 說明
---|---
curl 常用參數-X/--request [GET|POST|PUT|DELETE|… ] | 使用指定的 http method 發出 http request
-H/--header | 設定 request 裡的header
-i/--include| 顯示 response 的header
-d/--data   | 設定 http parameters
-v/--verbose| 輸出比較多的訊息
-u/--user   | 使用者帳號、密碼
-b/--cookie | cookie 
  
** 以下ip:port為預設，需更換為自訂的ip

curl -X GET http://127.0.0.1:8006/events

curl -X GET http://127.0.0.1:8006/events/id

curl -X GET http://127.0.0.1:8006/events.page/3

curl -X GET http://127.0.0.1:8006/events.count

curl -X GET http://127.0.0.1:8006/events.agg

curl -X POST -H "Content-Type: application/json" http://127.0.0.1:8006/events -d '{"level":"info" , "ip":"0.0.0.0"}'

curl -X DELETE http://127.0.0.12:8006/events/```id```


### RCurl 測試

library(jsonlite)
library(RJSONIO)
library(plyr);
events <- getURL("http://127.0.0.1:8006/events", httpheader = "Content-Type: application/json")

json_file <- fromJSON(events)

** 轉型測試中...
