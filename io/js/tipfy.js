$.fn.tipfy =  function(e, f){
    var t = this
    , item = $.extend(true, {
          title: t.data('tipfyTitle')
        , text: t.data('tipfy')
        , width: t.data('tipfyWidth')
        , side: 'up'
    }, e);
    if(t.is('[this-status="on"]'))return;
    $(t).attr('this-status','on').on('mouseover', function(e){
        $('.tipfy-position').remove();
        var tip = this
        , text = item.text
        , side = item.side
        , title = item.title
        , maxWidth = item.width
        , x = $(tip).offset().left
        , y = $(tip).offset().top
        , width = tip.getBoundingClientRect().width
        , height = tip.getBoundingClientRect().height
        , point = $('<div class="tipfy-position" />').css({left:x, top:y}).append('<div class="tipfy-wrap" />').appendTo('body')
        , wrap = $('.tipfy-wrap')
        ;
        wrap.html('<div class="tipfy-text">'+text+'</div>');
        if(title){
            wrap.addClass('tipfy-wrap-title').prepend('<h3 class="tipfy-title cf">'+title+'</h3>');
        }
        if(maxWidth){
            wrap.addClass('tipfy-max-width').css({width: parseInt(maxWidth)})
        }
        var tipHeight = $('.tipfy-wrap').innerHeight()
        , tipWidth = $('.tipfy-wrap').innerWidth()
        ;
        switch(side){
            case'left':
                $('.tipfy-position').addClass('tipfy-left');
                $('.tipfy-wrap').css({top:-(tipHeight/2)+height/2, right:'100%'});
            break;
            case'right':
                $('.tipfy-position').addClass('tipfy-right');
                $('.tipfy-wrap').css({top:-(tipHeight/2)+height/2, left:width});
            break;
            case'bottom':
                $('.tipfy-position').addClass('tipfy-bottom');
                $('.tipfy-wrap').css({top:height, left:-tipWidth/2+width/2});
            break;
            default:
                $('.tipfy-position').addClass('tipfy-top');
                $('.tipfy-wrap').css({left:-(tipWidth/2)+width/2, bottom:'100%'});
        }
    })
    .on('mouseleave', function(){
        $('.tipfy-position').remove()
    });
}
$(function(){
    $('[data-tipfy]').each(function(e, f){
        $(f).tipfy({text:$(f).data('tipfy')});
    });
})