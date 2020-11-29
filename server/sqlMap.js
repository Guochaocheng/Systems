// sqlMap.js 
const sqlMap = {
    getValue : 'SELECT * FROM test2 WHERE id = ?',
    /*setValue : 'UPDATE test2 SET name = ? WHERE id =? '*/
    setVaule : 'INSERT INTO test2 (id, name) VALUES (?, ?)'
    /*
    GMAD: {
        show: 'select * from test'
    },
    reader: {
        add: 'insert into test1(name) values (?)',
        filter: 'select * from test where gmad = ?'
    }
    */
}
module.exports = sqlMap; 