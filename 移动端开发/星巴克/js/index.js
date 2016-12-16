$(function(){
     eventType=isMobile()?'tab':'click';
    $('#tab span').on(eventType,function(){
        var index=$(this).index();
        var imgNum=$('#content-img li').size();
        var tabNum=$('#tab span:visible').size();
        var num=Math.ceil(imgNum/tabNum);
        //console.log(num+'aaa'+index)
        var iLeft=-num*290*index;
        if(index==tabNum-1){
            iLeft=$('.slide-box').width()-$('#content-img').width();
        }
        $('#content-img').animate({
            left:iLeft
        })
    });
    $(window).resize(function(){
        iLeft=$('.slide-box').width()-$('#content-img').width();
        $('#content-img').css('left', iLeft)
    });
    //$(window).resize(function(){
    //    iLeft = $(".slide-box").width()-$(".slide-box ul").width();
    //    $(".slide-box ul").css('left',iLeft);
    //});
});