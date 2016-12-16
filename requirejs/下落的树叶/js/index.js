
require(['./leaf'],function(Leaf){
          var oContainer=document.getElementById('container');
          var winWidth=document.documentElement.clientWidth;

    for(var i=0;i<4;i++){
        var iWidth=parseInt(Math.random()*50+50);
        var leaf=new Leaf({
            width:iWidth,
            left:parseInt(Math.random()*(winWidth-iWidth)),
            container:oContainer
        });
        leaf.fall()
    }

});