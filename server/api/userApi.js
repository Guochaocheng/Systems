var models = require('../db');
var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var $sql = require('../sqlMap');

// connect to the mysql
var conn = mysql.createConnection(models.mysql);
conn.connect();
var jsonWrite = function(res, ret){
    if(typeof ret == 'undefined') {
        res.json({
            code: '1',
            msg: '操作失败'
        });
    } else{
        res.json(ret);
    }
};

// add user api 
router.post('/show', (req, res) =>{
    var sql = $sql.GMAD.show;
    var params = req.body;
    console.log('Show', params);
    conn.query(sql, [params.module, params.gmad], function(err, result){
        if ( err ) {
            console.log(err);
        } else {
            jsonWrite(res, result);
        }
    });
});
module.exports = router;

/*
app.get('/api/show', (req, res, next) => {
    res.json({
        data: '后台'
    })
})
*/