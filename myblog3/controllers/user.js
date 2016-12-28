var userModel=require('../models/userModel');

exports.login=function(req,res){
    res.render('login')
};
exports.logout=function(req,res){
    req.session.loginUser=null;
    res.redirect('login')
};
exports.reg=function(req,res){
    res.render('reg')
};
exports.checkLogin=function(req,res){
   var username=req.body.uname;
   var password=req.body.pwd;
    userModel.queryByNameAndPwd(username,password,function(result){
        if(result.length>0){
            var user=result[0];
            req.session.loginUser=user;
            res.redirect('/adminIndex');
        }else{
            res.redirect('/login')
        }
    })


};
exports.regist=function(req,res){
     var username=req.body.name;
     var email=req.body.email;
     var pwd=req.body.pwd;
     var pwd2=req.body.pwd2;
    if(pwd!=pwd2){
        res.render('reg')
    }
    userModel.save(username,pwd,email,function(result){
        if(result.affectedRows>0){
            res.redirect('/login');
        }else{
            res.send('failed')
        }
    })

};