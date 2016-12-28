var db=require('./db');

exports.queryByNameAndPwd=function(username,password,callBack){
   var sql="select * from t_user where username=? and password=?";
    db.query(sql,[username,password],callBack)
};
exports.save=function(username,password,email,callBack){
    var sql="insert into t_user(username,password,email) values(?,?,?)";
    db.query(sql,[username,password,email],callBack)
};