var dbConfig = require('./db');
var mysql = require('mysql');
var sqlMap = require('./sqlMap');
// other packages
var express = require('express');
var router = express.Router();

// connect to the mysql
const pool = mysql.createPool ({
    host: dbConfig.host,
    user: dbConfig.user,
    password: dbConfig.password,
    database: dbConfig.database,
    port: dbConfig.port,
    multipleStatements: true
})

module.exports = {
    getValue(req, res, next) {
        var id = req.query.id;
        pool.getConnection((err, connection) => {
            var sql = sqlMap.getValue;
            connection.query(sql, [id], (err, result) => {
                res.json(result);
                connection.release();
            })
        })
    },
    setValue(req, res, next) {
        console.log(req.body);
        var id = req.body.id;
        var name = req.body.name;
        pool.getConnection((err, connection) => {
            var sql = sqlMap.setValue;
            connection.query(sql, [name, id], (err, result) =>{
                res.json(result);
                connection.release();
            })
        })
    }
}

/*
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
router.post('/show', (req, res) => {
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

router.post('/addUser', (req, res) =>{
    var sql = $sql.reader.add;
    var params = req.body
    console.log(params)
    conn.query(sql, [params.name], function(err, result) {
        if(err){
            console.log(err)
        }else{
            jsonWrite(res, result)
        }
    })
})
module.exports = router;

/*
app.get('/api/show', (req, res, next) => {
    res.json({
        data: '后台'
    })
})
*/