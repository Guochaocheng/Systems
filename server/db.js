// db.js

/*
module.exports = {
    mysql: {
        host: '202.120.41.69',
        user: 'genebridge',
        password: 'genebridge',
        port: '3306',
        database: 'geneDb'
    }
}
/*
module.exports = {
    mysql: {
        host: 'localhost',
        user: 'root',
        password: 'GCC950212',
        port: '3306',
        database: 'genebridge'
    }
}
*/

const mysql = require('mysql');

const mysqlConfig = {
    host: 'localhost',
    user: 'root',
    password: 'GCC950212',
    port: '3306',
    database: 'geneDb'
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
        //var sql = 'INSERT INTO test2 (id, name) VALUES (3, "rice")'
        var sql = 'SELECT * FROM gmad_gene wher id = 1'
        connection.query(sql, (err,result) => {
            console.log(result);
            connection.release();
        })
    })
}

setValue();

