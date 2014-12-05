northwind-mongo-aggregate
==========

### 開啟mongod

```$ mongod --config /etc/mongod.conf --fork --rest```

### 開啟node app.js

```bash
$ git clone https://github.com/liyuqi/BTnoderest
$ cd BTnoderest
$ sudo npm install
$ node app3.js
```

### 瀏覽器測試 

http://<yourip>:3000/agg2

```myapp lisenting at http://192.168.0.190:3000```

目前可用方法agg1,agg2,agg7

### 回傳樣本

```js
[{"shippedDate":"1997-09-29T16:00:00.000Z","SubTotal":1768,"orderId":"10684","Year":1997},
{"shippedDate":"1997-09-30T16:00:00.000Z","SubTotal":375.5,"orderId":"10682","Year":1997},
{"shippedDate":"1997-09-25T16:00:00.000Z","SubTotal":1682.5,"orderId":"10680","Year":1997},
{"shippedDate":"1997-09-18T16:00:00.000Z","SubTotal":412.35,"orderId":"10673","Year":1997},
{"shippedDate":"1997-09-23T16:00:00.000Z","SubTotal":920.1,"orderId":"10671","Year":1997},
```

### 特別注意`new Date()`轉型
