/**
 * Created by licanming on 14-9-4.
 */
var express = require("express");
var jade = require('jade');
var lessMiddleware = require('less-middleware');
var fs = require('fs');

var app = module.exports = express();
app.set("pageTitle","剑三数据库");
app.use( lessMiddleware(__dirname +'/',{
    "force":true
}));
app.use(express.static(__dirname + '/public'));
app.use("/assets",express.static(__dirname + '/assets'));
app.get('/', function(req, res){
    res.end(output("index"));
});
app.get('/search', function(req, res){
    res.end(output("search"));
});
app.get('/equips', function(req, res){
    res.end(output("wupin"));
});
app.get('/iterm', function(req, res){
    res.end(output("iterm"));
});
app.get('/role', function(req, res){
    res.end(output("role"));
});
app.listen(3000,function(){
    console.log("sever at :3000")
});
function output($fs){
    var _html = jade.renderFile('./'+$fs+'.jade', {"pageTitle":app.get("pageTitle")});
    fs.writeFile('./'+$fs+'.html',_html,function(err){
        console.log('It\'s saved!');
    });
    return _html;
}
//var log_list = [{"title":"多玩魔兽数据库9月12日更新了5.4新增的武器和装备","time":"2014 10.01","url":"http:jx3.xoyo.com"},{"title":"多玩魔兽数据库9月12日更新了5.4新增的武器和装备","time":"2014 10.01","url":"http:jx3.xoyo.com"},{"title":"多玩魔兽数据库9月12日更新了5.4新增的武器和装备","time":"2014 10.01","url":"http:jx3.xoyo.com"},{"title":"多玩魔兽数据库9月12日更新了5.4新增的武器和装备","time":"2014 10.01","url":"http:jx3.xoyo.com"}];

