var blogModel=require('../models/blogModel');
exports.index=function(req,res){
    res.render('adminIndex',{user:req.session.loginUser})
};
exports.ownIndex=function(req,res){
    res.render('index',{user:req.session.loginUser})
};

exports.blogs=function(req,res){
    var user=req.session.loginUser;
    blogModel.queryBlog(user.user_id,function(result){
        res.render('blogs',{
            user:req.session.loginUser,
            blogs:result
        })
    })




};


exports.blogComments=function(req,res){
    var user=req.session.loginUser;
    blogModel.queryComment(user.user_id,function(result){
        res.render('blogComments',{
            user:req.session.loginUser,
            comments:result
        })
    })

};



exports.blogType=function(req,res){

    var user=req.session.loginUser;
    blogModel.queryAllTypes(user.user_id,function(result){
        res.render('blogType',{
            user:req.session.loginUser,
            types:result
        })
    })
};
exports.addType=function(req,res){
    var typeName=req.body.typeName;
    var user=req.session.loginUser;
    blogModel.saveType(typeName,user.user_id,function(result){
        if(result.affectedRows>0){
            res.redirect('/blogType')
        }else{
            res.redirect('/addType')
        }

    })





};
exports.newBlog=function(req,res){
    var user=req.session.loginUser;
    blogModel.queryAllTypes(user.user_id,function(result){
        res.render('newBlog',{
            user:req.session.loginUser,
            types:result
        })
    })


};
exports.addBlog=function(req,res){
    var content=req.body.content;
    var title=req.body.title;
    var typeId=req.body.typeId;
    var user=req.session.loginUser;
    blogModel.saveBlog(content,title,typeId,user.user_id,function(result){
        if(result.affectedRows>0){
            res.redirect('/blogs')
        }else{
            res.redirect('/newBlog')
        }
    })
};
exports.deleteBlog=function(req,res){
    var blogIds=req.query.blogId;
    blogModel.deleteBlog(blogIds,function(result){
        if(result.affectedRows>0){
            res.send('success')
        }else{
            res.send('fail')
        }
    })
};
exports.blogThree=function(req,res){
    var user=req.session.loginUser;
     blogModel.queryBlogId(user.user_id,function(result){
         res.render('viewPost_comment',{
             user:req.session.loginUser,
             aaa:result
         })
     });


};
exports.addComment=function(req,res){
    var content=req.body.content;
    var blogId=req.body.blogId;
    var user=req.session.loginUser;
    blogModel.saveComment(user.user_id,content,blogId,function(result){
        if(result.affectedRows>0){
            res.redirect('/blogComments')
        }else{
            res.send('fail')
        }
    })
};
exports.deleteComment=function(req,res){
        var commentId=req.query.commentId;
    blogModel.deleteComment(commentId,function(result){
        if(result.affectedRows>0){
            res.send('success')
        }else{
            res.send('fail')
        }
    })
};
exports.repwd=function(req,res){
    res.render('chpwd',{user:req.session.loginUser})
};
exports.newPwd=function(req,res){
    var pwd=req.body.pwd;
    var newPwd=req.body.newpwd;
    var newPwd2=req.body.newpwd2;
    var user=req.session.loginUser;

    if(pwd==newPwd){
        res.send('ÃÜÂëÖØ¸´')
    }
    if(newPwd!=newPwd2){
        res.render('chpwd',{user:req.session.loginUser})
    }
    blogModel.addPwd(user.user_id,newPwd,function(result){
       if(result.affectedRows>0){
           res.redirect('/login')
       }else{
           res.send('fail')
       }
    })
};