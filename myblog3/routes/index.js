var express = require('express');
var router = express.Router();
var user=require('../controllers/user');
var welcome=require('../controllers/welcome');
var admin=require('../controllers/admin');

/* GET home page. */
router.get('/',welcome.index);
router.get('/login',user.login);
router.get('/reg',user.reg);
router.post('/checkLogin',user.checkLogin);
router.post('/regist',user.regist);
router.get('/adminIndex',admin.index);
router.get('/logout',user.logout);
router.get('/ownIndex',admin.ownIndex);
router.get('/blogs',admin.blogs);
router.get('/blogComments',admin.blogComments);
router.get('/blogType',admin.blogType);
router.post('/addType',admin.addType);
router.get('/newBlog',admin.newBlog);
router.get('/chpwd',admin.repwd);
router.post('/addBlog',admin.addBlog);
router.post('/addComment',admin.addComment);
router.post('/newPwd',admin.newPwd);
router.get('/deleteComment',admin.deleteComment);
router.get('/viewPost_comment',admin.blogThree);

module.exports = router;
