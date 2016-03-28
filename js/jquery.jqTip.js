/**
 * 基于jquery的悬浮提示插件
 *
 * @author AfterWin
 * @mail CJ_Zheng1023@hotmail.com
 *
 *  example:$(selector).jqTip({
 *      title:"",            标题
 *      content:"",          内容
 *      width:"",            内容区域宽度
 *      height:""            内容区域高度
 *  })
 *
 *
 *  update log
 *
 *
 *  v1.0.0         基本功能完成
 *
 *
 *
 */



(function($){

    var settings={
        title:"title",               //标题
        content:"content",          //内容
        width:200,                    //内容区域宽度
        height:100                   //内容区域高度
    }


    /**
     *扩展jquery原型
     *
     * @param options    配置参数
     * @author AfterWin
     * @mail CJ_Zheng1023@hotmail.com
     */
    $.fn.jqTip=function(options){
        var target=$(this);
        options= $.extend(true,settings,options||settings);
        var tipDialog=$("<div></div>").addClass("jq-tip-dialog");
        var title=$("<h1>"+options.title+"</h1>");
        var content=$("<div></div>").html(options.content).addClass("jq-tip-content");
        var contentArea=$("<div></div>").width(options.width).height(options.height).append(content);
        var wrapper=$("<div></div>").addClass("wrapper").append(contentArea);
        tipDialog.append(title).append(wrapper);
        $("body").append(tipDialog);
        target.bind({
            mousemove:function(e){
                tipDialog.css({
                    left: e.pageX+15,
                    top: e.pageY+15,
                    display:"block"
                })
            },
            mouseleave:function(){
                tipDialog.css("display","none");
            }
        })



    }






})(jQuery);
