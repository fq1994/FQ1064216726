define(function(require, exports, module){
    function Leaf(aa){
        this.width=aa.width;
        this.left=aa.left;
        this.oImg=new Image();
        this.oImg.src='img/'+(parseInt(Math.random()*4+1))+'.png';
        this.oImg.width=this.width;
        this.oImg.style.left=this.left+'px';
        aa.container.appendChild(this.oImg);
    }
    Leaf.prototype.fall=function(){
        var that=this;
        setInterval(function(){
            that.oImg.style.top=that.oImg.offsetTop+5+'px';
        },Math.random()*200)
    };
    //return Leaf;
    module.exports =Leaf;
})