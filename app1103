//curl -i -X POST -H "Content-Type: application/json" -d '{"title":"NodeJS Developer Required" , "description":"NodeJS Developer Required" , "location":"Sector 30, Gurgaon, India"}' http://127.0.0.1:8080/jobs

var restify = require('restify');
var mongojs = require("mongojs");
var os = require('os');
var ip = require('ip');

var MongoClient = require('mongodb').MongoClient;
var Db = require('mongodb').Db;
var Server = require('mongodb').Server;
var url = 'mongodb://localhost:40000/fluentd';

var ip_addr = ip.address();
var port    =  '8006';

var server = restify.createServer({
    name : "myapp"
});

server.listen(port ,ip_addr, function(){
    console.log('%s listening at %s ', server.name , server.url);
});

server.use(restify.queryParser());
server.use(restify.bodyParser());
server.use(restify.CORS());


var connection_string = '127.0.0.1:27017/fluentd';
var db = mongojs(connection_string, ['logs']);
var collection = db.collection("logs");


var PATH = '/logs'
server.get({path : PATH , version : '0.0.1'} , findLogs);
server.get({path : PATH +'/:oid' , version : '0.0.1'} , findLog);

function findLogs(req, res , next){
    res.setHeader('Access-Control-Allow-Origin','*');
    collection.find().limit(20).sort({postedOn : -1} , function(err , success){
        console.log('Response success '+success);
        console.log('Response error '+err);
        if(success){
            res.send(200 , success);
            return next();
        }else{
            return next(err);
        }
    });
}

function findLog(req, res , next){
    res.setHeader('Access-Control-Allow-Origin','*');
    collection.findOne({_id:mongojs.ObjectId(req.params.oid)} , function(err , success){
        console.log('Response success '+success);
        console.log('Response error '+err);
        if(success){
            res.send(200 , success);
            return next();
        }
        return next(err);
    })
}


var logmsg0 = {"level" : "WARN" ,"host" : {"process" : "6516@server","name" : os.hostname(),"ip" : ip.address()},"message" : "***** warn  *****",
"thread" : "508936546@qtp-1705442767-5","loggerName" : {"fullyQualifiedClassName" : "com.springsourcery.helloWorld.HelloWorldController","package" : ["com", "springsourcery", "helloWorld", "HelloWorldController"],"className" : "HelloWorldController"},"fileName" : "HelloWorldController.java","method" : "showHello","lineNumber" : "23","class" : {"fullyQualifiedClassName" : "com.springsourcery.helloWorld.HelloWorldController","package" : ["com", "springsourcery", "helloWorld", "HelloWorldController"],"className" : "HelloWorldController"}};
var logmsg1 = {"level" : "ERROR","host" : {"process" : "6516@server","name" : os.hostname(),"ip" : ip.address()},"message" : "***** error *****",
"thread" : "508936546@qtp-1705442767-5","loggerName" : {"fullyQualifiedClassName" : "com.springsourcery.helloWorld.HelloWorldController","package" : ["com", "springsourcery", "helloWorld", "HelloWorldController"],"className" : "HelloWorldController"},"fileName" : "HelloWorldController.java","method" : "showHello","lineNumber" : "23","class" : {"fullyQualifiedClassName" : "com.springsourcery.helloWorld.HelloWorldController","package" : ["com", "springsourcery", "helloWorld", "HelloWorldController"],"className" : "HelloWorldController"}};
var logmsg2 = {"level" : "INFO" ,"host" : {"process" : "6516@server","name" : os.hostname(),"ip" : ip.address()},"message" : "***** info  *****",
"thread" : "508936546@qtp-1705442767-5","loggerName" : {"fullyQualifiedClassName" : "com.springsourcery.helloWorld.HelloWorldController","package" : ["com", "springsourcery", "helloWorld", "HelloWorldController"],"className" : "HelloWorldController"},"fileName" : "HelloWorldController.java","method" : "showHello","lineNumber" : "23","class" : {"fullyQualifiedClassName" : "com.springsourcery.helloWorld.HelloWorldController","package" : ["com", "springsourcery", "helloWorld", "HelloWorldController"],"className" : "HelloWorldController"}};
var logmsg3 = {"level" : "TRACE","host" : {"process" : "6516@server","name" : os.hostname(),"ip" : ip.address()},"message" : "***** warn  *****",
"thread" : "508936546@qtp-1705442767-5","loggerName" : {"fullyQualifiedClassName" : "com.springsourcery.helloWorld.HelloWorldController","package" : ["com", "springsourcery", "helloWorld", "HelloWorldController"],"className" : "HelloWorldController"},"fileName" : "HelloWorldController.java","method" : "showHello","lineNumber" : "23","class" : {"fullyQualifiedClassName" : "com.springsourcery.helloWorld.HelloWorldController","package" : ["com", "springsourcery", "helloWorld", "HelloWorldController"],"className" : "HelloWorldController"}};
var logmsg4 = {"level" : "LOGIN","host" : {"process" : "6516@server","name" : os.hostname(),"ip" : ip.address()},"message" : "***** login *****",
"thread" : "508936546@qtp-1705442767-5","loggerName" : {"fullyQualifiedClassName" : "com.springsourcery.helloWorld.HelloWorldController","package" : ["com", "springsourcery", "helloWorld", "HelloWorldController"],"className" : "HelloWorldController"},"fileName" : "HelloWorldController.java","method" : "showHello","lineNumber" : "23","class" : {"fullyQualifiedClassName" : "com.springsourcery.helloWorld.HelloWorldController","package" : ["com", "springsourcery", "helloWorld", "HelloWorldController"],"className" : "HelloWorldController"}};
var logmsg5 = {"level" : "DEBIG","host" : {"process" : "6516@server","name" : os.hostname(),"ip" : ip.address()},"message" : "***** warn  *****",
"thread" : "508936546@qtp-1705442767-5","loggerName" : {"fullyQualifiedClassName" : "com.springsourcery.helloWorld.HelloWorldController","package" : ["com", "springsourcery", "helloWorld", "HelloWorldController"],"className" : "HelloWorldController"},"fileName" : "HelloWorldController.java","method" : "showHello","lineNumber" : "23","class" : {"fullyQualifiedClassName" : "com.springsourcery.helloWorld.HelloWorldController","package" : ["com", "springsourcery", "helloWorld", "HelloWorldController"],"className" : "HelloWorldController"}};
var logmsg6 = {"level" : "ERROR","host" : {"process" : "6516@server","name" : os.hostname(),"ip" : ip.address()},"message" : "***** error *****",
"thread" : "508936546@qtp-1705442767-5","loggerName" : {"fullyQualifiedClassName" : "com.springsourcery.helloWorld.HelloWorldController","package" : ["com", "springsourcery", "helloWorld", "HelloWorldController"],"className" : "HelloWorldController"},"fileName" : "HelloWorldController.java","method" : "showHello","lineNumber" : "23","class" : {"fullyQualifiedClassName" : "com.springsourcery.helloWorld.HelloWorldController","package" : ["com", "springsourcery", "helloWorld", "HelloWorldController"],"className" : "HelloWorldController"}};
var logmsg7 = {"level" : "WARN" ,"host" : {"process" : "6516@server","name" : os.hostname(),"ip" : ip.address()},"message" : "***** warn  *****",
"thread" : "508936546@qtp-1705442767-5","loggerName" : {"fullyQualifiedClassName" : "com.springsourcery.helloWorld.HelloWorldController","package" : ["com", "springsourcery", "helloWorld", "HelloWorldController"],"className" : "HelloWorldController"},"fileName" : "HelloWorldController.java","method" : "showHello","lineNumber" : "23","class" : {"fullyQualifiedClassName" : "com.springsourcery.helloWorld.HelloWorldController","package" : ["com", "springsourcery", "helloWorld", "HelloWorldController"],"className" : "HelloWorldController"}};
var logmsg8 = {"level" : "FATAL","host" : {"process" : "6516@server","name" : os.hostname(),"ip" : ip.address()},"message" : "***** warn  *****",
"thread" : "508936546@qtp-1705442767-5","loggerName" : {"fullyQualifiedClassName" : "com.springsourcery.helloWorld.HelloWorldController","package" : ["com", "springsourcery", "helloWorld", "HelloWorldController"],"className" : "HelloWorldController"},"fileName" : "HelloWorldController.java","method" : "showHello","lineNumber" : "23","class" : {"fullyQualifiedClassName" : "com.springsourcery.helloWorld.HelloWorldController","package" : ["com", "springsourcery", "helloWorld", "HelloWorldController"],"className" : "HelloWorldController"}};
var logmsg9 = {"level" : "LOGIN","host" : {"process" : "6516@server","name" : os.hostname(),"ip" : ip.address()},"message" : "***** login *****",
"thread" : "508936546@qtp-1705442767-5","loggerName" : {"fullyQualifiedClassName" : "com.springsourcery.helloWorld.HelloWorldController","package" : ["com", "springsourcery", "helloWorld", "HelloWorldController"],"className" : "HelloWorldController"},"fileName" : "HelloWorldController.java","method" : "showHello","lineNumber" : "23","class" : {"fullyQualifiedClassName" : "com.springsourcery.helloWorld.HelloWorldController","package" : ["com", "springsourcery", "helloWorld", "HelloWorldController"],"className" : "HelloWorldController"}};



//=================================================================================//
server.get({path:'/bulk1',version : '0.0.1'}, function(req, res, next){
	//var db = new Db('fluentd', new Server('localhost', 27017));
	MongoClient.connect(url,function(err, db) {
		
		var logmsg0 = {"level" : "WARN" ,"host" : {"process" : "6516@server","name" : os.hostname(),"ip" : ip.address()},"message" : "***** warn  *****",
		"thread" : "508936546@qtp-1705442767-5","loggerName" : {"fullyQualifiedClassName" : "com.springsourcery.helloWorld.HelloWorldController","package" : ["com", "springsourcery", "helloWorld", "HelloWorldController"],"className" : "HelloWorldController"},"fileName" : "HelloWorldController.java","method" : "showHello","lineNumber" : "23","class" : {"fullyQualifiedClassName" : "com.springsourcery.helloWorld.HelloWorldController","package" : ["com", "springsourcery", "helloWorld", "HelloWorldController"],"className" : "HelloWorldController"}};
		var logmsg1 = {"level" : "ERROR","host" : {"process" : "6516@server","name" : os.hostname(),"ip" : ip.address()},"message" : "***** error *****",
		"thread" : "508936546@qtp-1705442767-5","loggerName" : {"fullyQualifiedClassName" : "com.springsourcery.helloWorld.HelloWorldController","package" : ["com", "springsourcery", "helloWorld", "HelloWorldController"],"className" : "HelloWorldController"},"fileName" : "HelloWorldController.java","method" : "showHello","lineNumber" : "23","class" : {"fullyQualifiedClassName" : "com.springsourcery.helloWorld.HelloWorldController","package" : ["com", "springsourcery", "helloWorld", "HelloWorldController"],"className" : "HelloWorldController"}};
		var logmsg2 = {"level" : "INFO" ,"host" : {"process" : "6516@server","name" : os.hostname(),"ip" : ip.address()},"message" : "***** info  *****",
		"thread" : "508936546@qtp-1705442767-5","loggerName" : {"fullyQualifiedClassName" : "com.springsourcery.helloWorld.HelloWorldController","package" : ["com", "springsourcery", "helloWorld", "HelloWorldController"],"className" : "HelloWorldController"},"fileName" : "HelloWorldController.java","method" : "showHello","lineNumber" : "23","class" : {"fullyQualifiedClassName" : "com.springsourcery.helloWorld.HelloWorldController","package" : ["com", "springsourcery", "helloWorld", "HelloWorldController"],"className" : "HelloWorldController"}};
		var logmsg3 = {"level" : "TRACE","host" : {"process" : "6516@server","name" : os.hostname(),"ip" : ip.address()},"message" : "***** warn  *****",
		"thread" : "508936546@qtp-1705442767-5","loggerName" : {"fullyQualifiedClassName" : "com.springsourcery.helloWorld.HelloWorldController","package" : ["com", "springsourcery", "helloWorld", "HelloWorldController"],"className" : "HelloWorldController"},"fileName" : "HelloWorldController.java","method" : "showHello","lineNumber" : "23","class" : {"fullyQualifiedClassName" : "com.springsourcery.helloWorld.HelloWorldController","package" : ["com", "springsourcery", "helloWorld", "HelloWorldController"],"className" : "HelloWorldController"}};
		var logmsg4 = {"level" : "LOGIN","host" : {"process" : "6516@server","name" : os.hostname(),"ip" : ip.address()},"message" : "***** login *****",
		"thread" : "508936546@qtp-1705442767-5","loggerName" : {"fullyQualifiedClassName" : "com.springsourcery.helloWorld.HelloWorldController","package" : ["com", "springsourcery", "helloWorld", "HelloWorldController"],"className" : "HelloWorldController"},"fileName" : "HelloWorldController.java","method" : "showHello","lineNumber" : "23","class" : {"fullyQualifiedClassName" : "com.springsourcery.helloWorld.HelloWorldController","package" : ["com", "springsourcery", "helloWorld", "HelloWorldController"],"className" : "HelloWorldController"}};
		var logmsg5 = {"level" : "DEBIG","host" : {"process" : "6516@server","name" : os.hostname(),"ip" : ip.address()},"message" : "***** warn  *****",
		"thread" : "508936546@qtp-1705442767-5","loggerName" : {"fullyQualifiedClassName" : "com.springsourcery.helloWorld.HelloWorldController","package" : ["com", "springsourcery", "helloWorld", "HelloWorldController"],"className" : "HelloWorldController"},"fileName" : "HelloWorldController.java","method" : "showHello","lineNumber" : "23","class" : {"fullyQualifiedClassName" : "com.springsourcery.helloWorld.HelloWorldController","package" : ["com", "springsourcery", "helloWorld", "HelloWorldController"],"className" : "HelloWorldController"}};
		var logmsg6 = {"level" : "ERROR","host" : {"process" : "6516@server","name" : os.hostname(),"ip" : ip.address()},"message" : "***** error *****",
		"thread" : "508936546@qtp-1705442767-5","loggerName" : {"fullyQualifiedClassName" : "com.springsourcery.helloWorld.HelloWorldController","package" : ["com", "springsourcery", "helloWorld", "HelloWorldController"],"className" : "HelloWorldController"},"fileName" : "HelloWorldController.java","method" : "showHello","lineNumber" : "23","class" : {"fullyQualifiedClassName" : "com.springsourcery.helloWorld.HelloWorldController","package" : ["com", "springsourcery", "helloWorld", "HelloWorldController"],"className" : "HelloWorldController"}};
		var logmsg7 = {"level" : "WARN" ,"host" : {"process" : "6516@server","name" : os.hostname(),"ip" : ip.address()},"message" : "***** warn  *****",
		"thread" : "508936546@qtp-1705442767-5","loggerName" : {"fullyQualifiedClassName" : "com.springsourcery.helloWorld.HelloWorldController","package" : ["com", "springsourcery", "helloWorld", "HelloWorldController"],"className" : "HelloWorldController"},"fileName" : "HelloWorldController.java","method" : "showHello","lineNumber" : "23","class" : {"fullyQualifiedClassName" : "com.springsourcery.helloWorld.HelloWorldController","package" : ["com", "springsourcery", "helloWorld", "HelloWorldController"],"className" : "HelloWorldController"}};
		var logmsg8 = {"level" : "FATAL","host" : {"process" : "6516@server","name" : os.hostname(),"ip" : ip.address()},"message" : "***** warn  *****",
		"thread" : "508936546@qtp-1705442767-5","loggerName" : {"fullyQualifiedClassName" : "com.springsourcery.helloWorld.HelloWorldController","package" : ["com", "springsourcery", "helloWorld", "HelloWorldController"],"className" : "HelloWorldController"},"fileName" : "HelloWorldController.java","method" : "showHello","lineNumber" : "23","class" : {"fullyQualifiedClassName" : "com.springsourcery.helloWorld.HelloWorldController","package" : ["com", "springsourcery", "helloWorld", "HelloWorldController"],"className" : "HelloWorldController"}};
		var logmsg9 = {"level" : "LOGIN","host" : {"process" : "6516@server","name" : os.hostname(),"ip" : ip.address()},"message" : "***** login *****",
		"thread" : "508936546@qtp-1705442767-5","loggerName" : {"fullyQualifiedClassName" : "com.springsourcery.helloWorld.HelloWorldController","package" : ["com", "springsourcery", "helloWorld", "HelloWorldController"],"className" : "HelloWorldController"},"fileName" : "HelloWorldController.java","method" : "showHello","lineNumber" : "23","class" : {"fullyQualifiedClassName" : "com.springsourcery.helloWorld.HelloWorldController","package" : ["com", "springsourcery", "helloWorld", "HelloWorldController"],"className" : "HelloWorldController"}};

		
		var collection = db.collection('logs');
		collection.insert([{insertMany:[
			logmsg0,
			logmsg1,
			logmsg2,
			logmsg3,
			logmsg4,
			logmsg5,
			logmsg6,
			logmsg7,
			logmsg8,
			logmsg9,
			]}],{ordered:true,w:1},function(err, result) {
			if(err) console.log('bulk1 err')
			return next();
		});
	});
	res.end();
});

server.get('/bulk2', function(req, res, next){
	//var db = new Db('logs', new Server('localhost', 27017));
	MongoClient.connect(url,function(err, db) {

		var logmsg0 = {"level" : "WARN" ,"host" : {"process" : "6516@server","name" : os.hostname(),"ip" : ip.address()},"message" : "***** warn  *****",
		"thread" : "508936546@qtp-1705442767-5","loggerName" : {"fullyQualifiedClassName" : "com.springsourcery.helloWorld.HelloWorldController","package" : ["com", "springsourcery", "helloWorld", "HelloWorldController"],"className" : "HelloWorldController"},"fileName" : "HelloWorldController.java","method" : "showHello","lineNumber" : "23","class" : {"fullyQualifiedClassName" : "com.springsourcery.helloWorld.HelloWorldController","package" : ["com", "springsourcery", "helloWorld", "HelloWorldController"],"className" : "HelloWorldController"}};
		var logmsg1 = {"level" : "ERROR","host" : {"process" : "6516@server","name" : os.hostname(),"ip" : ip.address()},"message" : "***** error *****",
		"thread" : "508936546@qtp-1705442767-5","loggerName" : {"fullyQualifiedClassName" : "com.springsourcery.helloWorld.HelloWorldController","package" : ["com", "springsourcery", "helloWorld", "HelloWorldController"],"className" : "HelloWorldController"},"fileName" : "HelloWorldController.java","method" : "showHello","lineNumber" : "23","class" : {"fullyQualifiedClassName" : "com.springsourcery.helloWorld.HelloWorldController","package" : ["com", "springsourcery", "helloWorld", "HelloWorldController"],"className" : "HelloWorldController"}};
		var logmsg2 = {"level" : "INFO" ,"host" : {"process" : "6516@server","name" : os.hostname(),"ip" : ip.address()},"message" : "***** info  *****",
		"thread" : "508936546@qtp-1705442767-5","loggerName" : {"fullyQualifiedClassName" : "com.springsourcery.helloWorld.HelloWorldController","package" : ["com", "springsourcery", "helloWorld", "HelloWorldController"],"className" : "HelloWorldController"},"fileName" : "HelloWorldController.java","method" : "showHello","lineNumber" : "23","class" : {"fullyQualifiedClassName" : "com.springsourcery.helloWorld.HelloWorldController","package" : ["com", "springsourcery", "helloWorld", "HelloWorldController"],"className" : "HelloWorldController"}};
		var logmsg3 = {"level" : "TRACE","host" : {"process" : "6516@server","name" : os.hostname(),"ip" : ip.address()},"message" : "***** warn  *****",
		"thread" : "508936546@qtp-1705442767-5","loggerName" : {"fullyQualifiedClassName" : "com.springsourcery.helloWorld.HelloWorldController","package" : ["com", "springsourcery", "helloWorld", "HelloWorldController"],"className" : "HelloWorldController"},"fileName" : "HelloWorldController.java","method" : "showHello","lineNumber" : "23","class" : {"fullyQualifiedClassName" : "com.springsourcery.helloWorld.HelloWorldController","package" : ["com", "springsourcery", "helloWorld", "HelloWorldController"],"className" : "HelloWorldController"}};
		var logmsg4 = {"level" : "LOGIN","host" : {"process" : "6516@server","name" : os.hostname(),"ip" : ip.address()},"message" : "***** login *****",
		"thread" : "508936546@qtp-1705442767-5","loggerName" : {"fullyQualifiedClassName" : "com.springsourcery.helloWorld.HelloWorldController","package" : ["com", "springsourcery", "helloWorld", "HelloWorldController"],"className" : "HelloWorldController"},"fileName" : "HelloWorldController.java","method" : "showHello","lineNumber" : "23","class" : {"fullyQualifiedClassName" : "com.springsourcery.helloWorld.HelloWorldController","package" : ["com", "springsourcery", "helloWorld", "HelloWorldController"],"className" : "HelloWorldController"}};
		var logmsg5 = {"level" : "DEBIG","host" : {"process" : "6516@server","name" : os.hostname(),"ip" : ip.address()},"message" : "***** warn  *****",
		"thread" : "508936546@qtp-1705442767-5","loggerName" : {"fullyQualifiedClassName" : "com.springsourcery.helloWorld.HelloWorldController","package" : ["com", "springsourcery", "helloWorld", "HelloWorldController"],"className" : "HelloWorldController"},"fileName" : "HelloWorldController.java","method" : "showHello","lineNumber" : "23","class" : {"fullyQualifiedClassName" : "com.springsourcery.helloWorld.HelloWorldController","package" : ["com", "springsourcery", "helloWorld", "HelloWorldController"],"className" : "HelloWorldController"}};
		var logmsg6 = {"level" : "ERROR","host" : {"process" : "6516@server","name" : os.hostname(),"ip" : ip.address()},"message" : "***** error *****",
		"thread" : "508936546@qtp-1705442767-5","loggerName" : {"fullyQualifiedClassName" : "com.springsourcery.helloWorld.HelloWorldController","package" : ["com", "springsourcery", "helloWorld", "HelloWorldController"],"className" : "HelloWorldController"},"fileName" : "HelloWorldController.java","method" : "showHello","lineNumber" : "23","class" : {"fullyQualifiedClassName" : "com.springsourcery.helloWorld.HelloWorldController","package" : ["com", "springsourcery", "helloWorld", "HelloWorldController"],"className" : "HelloWorldController"}};
		var logmsg7 = {"level" : "WARN" ,"host" : {"process" : "6516@server","name" : os.hostname(),"ip" : ip.address()},"message" : "***** warn  *****",
		"thread" : "508936546@qtp-1705442767-5","loggerName" : {"fullyQualifiedClassName" : "com.springsourcery.helloWorld.HelloWorldController","package" : ["com", "springsourcery", "helloWorld", "HelloWorldController"],"className" : "HelloWorldController"},"fileName" : "HelloWorldController.java","method" : "showHello","lineNumber" : "23","class" : {"fullyQualifiedClassName" : "com.springsourcery.helloWorld.HelloWorldController","package" : ["com", "springsourcery", "helloWorld", "HelloWorldController"],"className" : "HelloWorldController"}};
		var logmsg8 = {"level" : "FATAL","host" : {"process" : "6516@server","name" : os.hostname(),"ip" : ip.address()},"message" : "***** warn  *****",
		"thread" : "508936546@qtp-1705442767-5","loggerName" : {"fullyQualifiedClassName" : "com.springsourcery.helloWorld.HelloWorldController","package" : ["com", "springsourcery", "helloWorld", "HelloWorldController"],"className" : "HelloWorldController"},"fileName" : "HelloWorldController.java","method" : "showHello","lineNumber" : "23","class" : {"fullyQualifiedClassName" : "com.springsourcery.helloWorld.HelloWorldController","package" : ["com", "springsourcery", "helloWorld", "HelloWorldController"],"className" : "HelloWorldController"}};
		var logmsg9 = {"level" : "LOGIN","host" : {"process" : "6516@server","name" : os.hostname(),"ip" : ip.address()},"message" : "***** login *****",
		"thread" : "508936546@qtp-1705442767-5","loggerName" : {"fullyQualifiedClassName" : "com.springsourcery.helloWorld.HelloWorldController","package" : ["com", "springsourcery", "helloWorld", "HelloWorldController"],"className" : "HelloWorldController"},"fileName" : "HelloWorldController.java","method" : "showHello","lineNumber" : "23","class" : {"fullyQualifiedClassName" : "com.springsourcery.helloWorld.HelloWorldController","package" : ["com", "springsourcery", "helloWorld", "HelloWorldController"],"className" : "HelloWorldController"}};
	
		var col = db.collection('logs');
		var batch = col.initializeOrderedBulkOp();
		//batch.insert({b:1, a:1},{ordered:true,w:1});
		//batch.insert({b:1, a:1});
		batch.insert(logmsg0);
		batch.insert(logmsg1);
		batch.insert(logmsg2);
		batch.insert(logmsg3);
		batch.insert(logmsg4);
		batch.insert(logmsg5);
		batch.insert(logmsg6);
		batch.insert(logmsg7);
		batch.insert(logmsg8);
		batch.insert(logmsg9);
		
		batch.execute(function (err, result) {
			if(err) console.log('insert err');
			return next();
			//assert.equal(null, err);
		});
	});
	res.end();
});

MongoClient.connect('mongodb://localhost:27017/fluentd',function(err,db){
	server.get('/bulk11',function(req,res){
		/*
		logmsg0 = {level: "warn",	timestamp : new Date(), message: "*****0*****",	host:{ip: ip.address()}};
		logmsg1 = {level: "error",timestamp : new Date(), message: "*****1*****",	host:{ip: ip.address()}};
		logmsg2 = {level: "info",	timestamp : new Date(), message: "*****2*****",	host:{ip: ip.address()}};
		logmsg3 = {level: "warn",	timestamp : new Date(), message: "*****3*****",	host:{ip: ip.address()}};
		logmsg4 = {level: "login",timestamp : new Date(), message: "*****4*****",	host:{ip: ip.address()}};
		*/
		
		var collection = db.collection('logs');
		collection.insert([{insertMany:[
			logmsg0,
			logmsg1,
			logmsg2,
			logmsg3,
			logmsg4,
			logmsg5,
			logmsg6,
			logmsg7,
			logmsg8,
			logmsg9,
			]}],{ordered:true,w:1},function(err, result) {
			if(err) console.log('bulk11 err')
			return next();
		});
		res.end();
	});
	
	server.get('/bulk12',function(req,res){
		/*
		logmsg0 = {level: "warn",	timestamp : new Date(), message: "*****0*****",	host:{ip: ip.address()}};
		logmsg1 = {level: "error",timestamp : new Date(), message: "*****1*****",	host:{ip: ip.address()}};
		logmsg2 = {level: "info",	timestamp : new Date(), message: "*****2*****",	host:{ip: ip.address()}};
		logmsg3 = {level: "warn",	timestamp : new Date(), message: "*****3*****",	host:{ip: ip.address()}};
		logmsg4 = {level: "login",timestamp : new Date(), message: "*****4*****",	host:{ip: ip.address()}};
		*/
		var collection = db.collection('logs').initializeOrderedBulkOp();
		collection.insert(logmsg0);
		collection.insert(logmsg1);
		collection.insert(logmsg2);
		collection.insert(logmsg3);
		collection.insert(logmsg4);
		collection.insert(logmsg5);
		collection.insert(logmsg6);
		collection.insert(logmsg7);
		collection.insert(logmsg8);
		collection.insert(logmsg9);
		
		collection.execute(function(err, result){
			if(err) console.log('insert err');
		});
		res.end();
	});
});
