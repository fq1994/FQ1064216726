var db=require('./db');
exports.queryAllTypes=function(userId,callBack){
    var sql="select * from t_type where user_id=?";
    db.query(sql,[userId],callBack)
};
exports.saveType=function(typeName,userId,callBack){
    var sql="insert into t_type(type_name,user_id) values(?,?)";
    db.query(sql,[typeName,userId],callBack)
};
exports.queryBlog=function(userId,callBack){
    var sql="select blog.*,type.type_name from t_blog blog ,t_type type where blog.type_id=type.type_id and blog.author=?";
    db.query(sql,[userId],callBack)
};
exports.saveBlog=function(content,title,typeId,userId,callBack){
    var sql="insert into t_blog(content,title,type_id,author) values(?,?,?,?)";
    db.query(sql,[content,title,typeId,userId],callBack)
};
exports.deleteBlog=function(blogId,callBack){
    var sql="delete from t_blog where blog_id in ("+blogId+")";
    db.query(sql,[],callBack)
};
exports.queryComment=function(userId,callBack){
    var sql="select c.*,u.username,b.title from t_comment c,t_user u,t_blog b where c.blog_id=b.blog_id and c.user_id=u.user_id";
    db.query(sql,[],callBack)
};
exports.saveComment=function(userId,content,blogId,callBack){
    var sql="insert into t_comment(user_id,content,blog_id) values(?,?,?)";
    db.query(sql,[userId,content,blogId],callBack)
};
exports.queryBlogId=function(userId,callBack){
    var sql="select b.*,c.blog_id from t_blog b,t_comment c where b.blog_id=c.blog_id and b.author=c.user_id=?";
    db.query(sql,[userId],callBack)
};
exports.deleteComment=function(commentId,callBack){
    var sql="delete from t_comment where comm_id in ("+commentId+")";
    db.query(sql,[],callBack)
};
exports.addPwd=function(userId,newPwd,callBack){
    console.log(newPwd)
    var sql="update t_user set password=? where user_id=?";
    db.query(sql,[newPwd,userId],callBack)
};
