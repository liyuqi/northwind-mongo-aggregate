//curl -i -X POST -H "Content-Type: application/json" -d '{"title":"NodeJS Developer Required" , "description":"NodeJS Developer Required" , "location":"Sector 30, Gurgaon, India"}' http://127.0.0.1:8080/jobs
//ip:3000/bulk2
var restify = require('restify');
var os = require('os');
var ip = require('ip');

var MongoClient = require('mongodb').MongoClient;
var Server = require('mongodb').Server;
var url = 'mongodb://localhost:27017/fluentd';

var Db = require('mongodb').Db;
var db = new Db('fluentd', new Server('localhost', 27017),{safe:false});
var db2 = new Db('Northwind', new Server('localhost', 27017),{safe:false});

var ip_addr = ip.address();
var port    =  '3000';

var server = restify.createServer({
    name : "myapp"
});

server.use(restify.queryParser());
server.use(restify.bodyParser());
server.use(restify.CORS());
var helloObj = {"hello":"hello"};
server.get({path:'/bulk1',version : '0.0.1'}, function(req, res, next){

		var collection = db.collection('documents');
		// Insert some documents
		collection.insert([
            helloObj
		], function(err, result) {
			if(err) console.log('bulk1 err');
			return next();
		});
 
	res.end();
});

server.get('/bulk2', function(req, res, next){
	//var db = new Db('logs', new Server('localhost', 40000));
	//MongoClient.connect(url,function(err, db) {

		var col = db.collection('logs');
		var batch = col.initializeOrderedBulkOp();
        batch.insert(helloObj)
		batch.execute(function (err, result) {
			if(err) console.log('insert err');
			return next();
		});
	res.end();
});

server.get('/agg1', function(req, res, next){
    //1. Order Subtotals  訂單小計
	// Create a collection
    var collection = db2.collection('order_details');
    // Execute aggregate, notice the pipeline is expressed as an Array

	collection.aggregate([
		{$project:{
			_id:0,
			OrderID:"$OrderID",
			Subtotal:{$multiply : ["$UnitPrice", "$Quantity"]}
		}}
		,{$group:{
			_id:"$OrderID",
			Subtotal:{$sum:"$Subtotal"}
		}}
		,{$project:{
			_id:0,
			OrderID:"$_id",
			Subtotal:"$Subtotal"
		}}
		,{$sort:{OrderID:1}}
		], function(err, result) {
            //console.log(result);//
			res.send(result);
			res.end();
    });
	
});

server.get('/agg2', function(req, res, next){
    //2. Sales by Year 年度業績
	// Create a collection
    var collection = db2.collection('northwind');
    // Execute aggregate, notice the pipeline is expressed as an Array
    
    //var startT = new Date('1996-12-24T00:00:00.000Z'); //Date(1996,12,24); 
    //var endT = new Date('1997-10-01T00:00:00.000Z'); //Date(1997,9,30);
    //console.log(startT);
    //console.log(startT.toISOString());
	
    collection.aggregate([
        {$match : {
            shippedDate:{
                $gte: new Date(new Date('1996-12-24T00:00:00.000Z').toISOString()),//$gte:ISODate("1996-12-24T00:00:00.000Z"),
                $lte: new Date(new Date('1997-10-01T00:00:00.000Z').toISOString())} //$lte:ISODate("1997-10-01T00:00:00.000Z")}
        }}
        ,{$unwind : "$orderItems"}
        ,{$project : {
            "orderId" : 1,
            "shippedDate" : 1,
            "Year" : {	$year : "$shippedDate"},
            "customer" : 1,
            "orderItems.unitPrice" : 1,
            "orderItems.quantity" : 1,
            "orderItems.lineItemTotal" : {
                $multiply : ["$orderItems.unitPrice", "$orderItems.quantity"]
            }
        }}
        ,{$group : {
            _id : {
                "Year" : "$Year",
                "orderId" : "$orderId"
            },
            "shippedDate" : {$first : "$shippedDate"},
            "SubTotal" : {	$sum : "$orderItems.lineItemTotal"}
        }} 
        ,{$sort : {"_id.shippedDate" : 1 }}
        ,{$project: {
            _id:0,
            shippedDate:1,
            orderId:"$_id.orderId",
            SubTotal:1,
            Year:"$_id.Year"
        }}], function(err, result) {
            //console.log(result);
			res.send(result);
			res.end();
    });
	
});

server.get('/agg7', function(req, res, next){
    //7. Sales by Category 產品類別業績
	// Create a collection
    var collection = db2.collection('northwind');
    // Execute aggregate, notice the pipeline is expressed as an Array
    
    var startT = new Date('1996-12-24T00:00:00.000Z').toISOString();
    var endT = new Date('1997-10-01T00:00:00.000Z').toISOString();
    //console.log(startT);
    //console.log(startT.toISOString());
	
    collection.aggregate([
        {$match : {
            shippedDate:{//var startT = new Date(1996,12,24); var startT = new Date(1997,9,30); 
                $gte: new Date(new Date('1996-12-24T00:00:00.000Z').toISOString()),//$gte:ISODate("1996-12-24T00:00:00.000Z"),
                $lte: new Date(new Date('1997-10-01T00:00:00.000Z').toISOString())} //$lte:ISODate("1997-10-01T00:00:00.000Z")}
        }}
        ,{$unwind : "$orderItems"}
        ,{$project : {
            "orderItems.categoryID":1,
            "orderItems.categoryName":1,
            "orderItems.productId":1,
            "orderItems.productName":1,
            "orderItems.lineItemTotal" : {
                $multiply : ["$orderItems.unitPrice", "$orderItems.quantity",
                {	$subtract : [(1.0).valueOf(), "$orderItems.discount"]	}]
            }
        }} 
        ,{$group : {
            _id : {
                categoryID : "$orderItems.categoryID",
                CategoryName : "$orderItems.categoryName",
                ProductName : "$orderItems.productName"
            },
            ProductSales : {$sum : "$orderItems.lineItemTotal"}
        }}
        ,{$sort : {"_id.CategoryName":1,"_id.ProductName":1}}
        ,{$project :{
            _id:0,
            CategoryName : "$_id.CategoryName",
            ProductName:"$_id.ProductName",
            ProductSales : 1
        }}
        //,{$out:"a7_SalesbyCategory"} 
    ], function(err, result) {
            //console.log(result);
			res.send(result);
			res.end();
    });
	
});

db.open(function (err) {
	if (err) throw err;

	server.listen(port ,ip_addr, function(){
		console.log('%s listening at %s ', server.name , server.url);
	});
});

db2.open(function (err) {
	if (err) throw err;

	server.listen(port ,ip_addr, function(){
		console.log('%s listening at %s ', server.name , server.url);
	});
});
