var mysql = require('mysql');
var pool  = mysql.createPool({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'myblog'
});
exports.query=function(sq,param,callBack){
    pool.getConnection(function(err, connection) {
        connection.query( sq,param, function(err, rows) {
            if(err){
                throw  err;
            }
            callBack&&callBack(rows);
            connection.release();
        });
    });
};