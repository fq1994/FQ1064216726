define(['jquery'],function($){
    function Carousel(Settings){
        this.defaultSettings={
               imgsUrl:[],
            buttonStyle:'square',
            arrowsStyle:'bottom',
            speed:500,
            location:'body'
        };
        $.extend(this.defaultSettings,Settings);

       this.$container=$('<div class="carousel-container"></div>');
        this.$img=$('<div class="carousel-imgs"></div>');
        this.$tabs=$('<ul class="carousel-tabs"></ul>');
        this.$arrows=$('<div class="carousel-arrows"></div>');
        this.$left=$('<span class="carousel-left">&lt;</span>');
        this.$right=$('<span class="carousel-right">&gt;</span>')
    }
    Carousel.prototype.init=function(){
        var nowIndex=0;
        var _this=this;
        this.$container.append(this.$img).append(this.$tabs).append(this.$arrows);
        this.$arrows.append(this.$left).append(this.$right);
       for(var i=0;i<this.defaultSettings.imgsUrl.length;i++){
           this.$img.append($("<img src='"+ this.defaultSettings.imgsUrl[i] +"'>"));
           this.$tabs.append($("<li>"+(this.defaultSettings.buttonStyle=='circle'?'':(i+1))+"</li>"));/*三元运算符*/
       }
        $('li',this.$tabs).addClass(this.defaultSettings.buttonStyle);
        this.$arrows.addClass(this.defaultSettings.arrowsStyle);
        this.$left.addClass(this.defaultSettings.arrowsStyle);
        this.$right.addClass(this.defaultSettings.arrowsStyle);
        $('img:first-child',this.$img).addClass('selected');
        $('li:first-child',this.$tabs).addClass('selected');
        $(this.defaultSettings.location).append(this.$container);

       $('li',this.$tabs).on('mouseover',function(){
           nowIndex=$(this).index();
           changeImg();
       });
      this.$right.on('click',function(){
          nowIndex++;
          if(nowIndex==_this.defaultSettings.imgsUrl.length){
              nowIndex=0
          }
         changeImg();
      });
        this.$left.on('click',function(){
            nowIndex--;
            if(nowIndex==-1){
                nowIndex=_this.defaultSettings.imgsUrl.length-1
            }
         changeImg();
        });
        play();
        this.$container.hover(function(){
            clearInterval(_this.timer);
        },function(){
            play();
        });
        function play(){
            _this.timer=setInterval(function(){
                _this.$right.trigger('click');
            },_this.defaultSettings.speed)
        }
        function changeImg(){
            $('li',_this.$tabs).eq(nowIndex).addClass('selected').siblings().removeClass('selected');
            $('img',_this.$img).eq(nowIndex).addClass('selected').siblings().removeClass('selected');
        }


    };

    return Carousel;
});