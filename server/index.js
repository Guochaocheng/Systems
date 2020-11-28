const path = require('path');
const express = require('express');
const userApi = require('./api/userApi')
const fs = require('fs')
const bodyParser = require('body-parser')
const app = express();


//采用设置所有均可访问的方法解决跨域问题
app.all('*', function (req, res, next) {
    //设置允许跨域的域名，*代表允许任意域名跨域
    res.header("access-control-allow-origin", "*");
    //允许的header类型
    res.header("access-control-allow-headers", "content-type");
    //跨域允许的请求方式
    res.header("access-control-allow-methods", "DELETE,PUT,POST,GET,OPTIONS");
    if (req.method.toLowerCase() == 'options')
        res.send(200);  //让options尝试请求快速结束
    else 
        next;
})
app.use(bodyParser.json()) // 以json格式返回出去
app.use(bodyParser.urlencoded({ extended: false }))
// 后端api路由
app.use('/api/GMAD', userApi)
app.listen(3000);
console.log('Success listen at port: 3000......');

/*
app.get('/api/show', (req, res, next)=>{
    res.jsoin({
        data: '后台返回结果 getAirtcle'
    })
})
app.listen(3000);
console.log('Success listen at port: 3000......');
*/