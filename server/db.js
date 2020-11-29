// db.js

module.exports = {
    mysql: {
        host: 'localhost',
        user: 'root',
        password: 'GCC950212',
        port: '3306',
        database: 'genebridge'
    }
}


/*
const mysql = require('mysql');

const mysqlConfig = {
    host: 'localhost',
    user: 'root',
    password: 'GCC950212',
    database: 'genebridge',
    port: '3306'
}

const pool = mysql.createPool ({
    host: mysqlConfig.host,
    user: mysqlConfig.user,
    password: mysqlConfig.password,
    database: mysqlConfig.database,
    port: mysqlConfig.port,
    multipleStatements: true
});

var setValue = function () {
    pool.getConnection((err, connection) => {
        var sql = 'INSERT INTO test2 (id, name) VALUES (3, "rice")'
        connection.query(sql, (err,result) => {
            console.log(result);
            connection.release();
        })
    })
}

setValue();
*/
