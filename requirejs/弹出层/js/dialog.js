
define(["jquery"],function($){

    function Dialog(settings){
         this.defaultSettings={
            width:400,
            height:300,
            title:"弹出层",
            content:""
        };
        $.extend(this.defaultSettings,settings);
        this.$container=$('<div class="dialog-container"></div>');
        this.$mask=$('<div class="dialog-mask"></div>');
        this.$box=$('<div class="dialog-box"></div>');
        this.$title=$('<div class="dialog-title"></div>');
        this.$item=$('<div class="dialog-title-item"></div>');
        this.$close=$('<div class="dialog-title-close">[x]</div>');
        this.$content=$('  <div class="dialog-content">aaa</div>');

    }
   Dialog.prototype.open=function(){
       this.$container.append(this.$mask).append(this.$box);
       this.$box.append(this.$title).append(this.$content);
       this.$title.append(this.$item).append(this.$close);
       this.$item.html(this.defaultSettings.title);

       this.$box.css({
           width:this.defaultSettings.width,
           height:this.defaultSettings.height
       });
       if(this.defaultSettings.content){
           this.$content.load(this.defaultSettings.content);
       }
       $('body').append(this.$container);
       //var that=this;
       this.$close.on('click',function(){
          this.close();
       }.bind(this));
   };

    Dialog.prototype.close=function(){
        this.$container.remove()
    };
    return Dialog;
});