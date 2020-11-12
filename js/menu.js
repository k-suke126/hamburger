
$(function(){
    $(".is-open").click(function(){
            $(".l-sidebar").addClass("show");
            $(".l-container").addClass("show");
    });
});

$(function(){
    $(".is-close").click(function(){
            $(".l-sidebar").removeClass("show");
            $(".l-container").removeClass("show");
    });
});


$(function(){
    $(window).on('resize',function(){
        if($(window).width()>1180){
            $(".l-sidebar").removeClass("show");
            $(".l-container").removeClass("show");
        }
    });
});
