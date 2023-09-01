$(document).ready(function(){

    inputTouchEvent();

    $(".imgLiquidFill").imgLiquid({
        fill: true,
        horizontalAlign: "center",
        verticalAlign: "top"
    });

    $(".imgLiquidNoFill").imgLiquid({
        fill: false,
        horizontalAlign: "center",
        verticalAlign: "50%"
    });

    $(".dt_item_detail dl dt").click(function(){
        if($(this).hasClass("selected") == true){
            $(this).removeClass("selected");
            $(this).next('dd').slideUp();
        } else {
            $(this).addClass("selected");
            $(this).next('dd').slideDown();
        }       
    });

    $(".btn_open_all").click(function(){
        if($(this).hasClass("selected") == true){
            $(this).removeClass("selected");
            $(".dt_item_detail dl dt").removeClass("selected");
            $(".dt_item_detail dl dd").slideUp();
        } else {
            $(this).addClass("selected");
            $(".dt_item_detail dl dt").addClass("selected");
            $(".dt_item_detail dl dd").slideDown();
        }
    })

    $(".dt_item_detail_scd dl dt").click(function(){
        if($(this).hasClass("selected") == true){
            $(this).removeClass("selected");
            $(this).next('dd').children('.d_box').slideUp();
        } else {
            $(this).addClass("selected");
            $(this).next('dd').children('.d_box').slideDown();
        }       
    });

    $(".btn_open_all_scd").click(function(){
        if($(this).hasClass("selected") == true){
            $(this).removeClass("selected");
            $(".dt_item_detail_scd dl dt").removeClass("selected");
            $(".dt_item_detail_scd dl dd .d_box").slideUp();
        } else {
            $(this).addClass("selected");
            $(".dt_item_detail_scd dl dt").addClass("selected");
            $(".dt_item_detail_scd dl dd .d_box").slideDown();
        }
    })

    $(".btn_share").click(function(){
        if($(this).hasClass("selected") == true){
            $(this).removeClass("selected");
            $(".btn_popup_shadow").removeClass("selected");
            $(".btn_share_list").fadeOut();
            $(".btn_popup_shadow").fadeOut();
            scrollUnlock();
        } else {
            $(this).addClass("selected");
            $(".btn_popup_shadow").addClass("selected");            
            $(".btn_share_list").fadeIn();
            $(".btn_popup_shadow").fadeIn();
            scrollLock();
        }       
    });

    $(".btn_popup_shadow").click(function(){
        if($(this).hasClass("selected") == true){
            $(this).removeClass("selected");
            $(".btn_popup_shadow").removeClass("selected");
            $(".btn_share_list").fadeOut();
            $(".btn_popup_shadow").fadeOut();
            scrollUnlock();
        } else {            
            $(this).addClass("selected");
            $(".btn_popup_shadow").addClass("selected");            
            $(".btn_share_list").fadeIn();
            $(".btn_popup_shadow").fadeIn();
            scrollLock();
        }       
    });

    $(".btn_item_info").click(function(){
        $(this).parents('.item_image_box').nextAll('.info_layer_box').fadeIn();
    });

    $(".btn_layer_close").click(function(){
        $(this).parents('.info_layer_box').fadeOut();
    });

    $(".btn_item_favor").click(function(){
        if($(this).hasClass("on") == true){
            $(this).removeClass("on");            
        } else {
            $(this).addClass("on");            
        }       
    });

    /*
    $(".tools_box").load(function(){
        scrollLock();
    });
    */
    

    // browser window scroll (in pixels) after which the "back to top" link is shown
	var offset = 300,
		//browser window scroll (in pixels) after which the "back to top" link opacity is reduced
		offset_opacity = 1200,
		//duration of the top scrolling animation (in ms)
		scroll_top_duration = 700,
		//grab the "back to top" link
		$back_to_top = $('.btn_list_top');

	//hide or show the "back to top" link
	$(window).scroll(function(){
		( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
		if( $(this).scrollTop() > offset_opacity ) { 
			$back_to_top.addClass('cd-fade-out');
		}
	});

	//smooth scroll to top
	$back_to_top.on('click', function(event){
		event.preventDefault();
		$('body,html').animate({
			scrollTop: 0 ,
		 	}, scroll_top_duration
		);
	});
    
});

function inputTouchEvent(){
    $("input").mousedown(function(){$(this).addClass("touch");});
    $("input").bind('touchstart',function () {        
        $(this).addClass("touch");        
    });
    $("input").bind('touchmove',function () {
        $(this).addClass("touch");        
    });
    $("input").mouseup(function(){$(this).removeClass("touch");});
    $("input").mouseout(function(){$(this).removeClass("touch");});
    $("input").bind('touchend',function () {
        $(this).removeClass("touch");        
    });

    $("button").mousedown(function(){$(this).addClass("touch");});
    $("button").bind('touchstart',function () {        
        $(this).addClass("touch");        
    });
    $("button").bind('touchmove',function () {
        $(this).addClass("touch");        
    });
    $("button").mouseup(function(){$(this).removeClass("touch");});
    $("button").mouseout(function(){$(this).removeClass("touch");});
    $("button").bind('touchend',function () {        
        $(this).removeClass("touch");        
    });
}
  

function scrollLock(){
    var scrollPosition = [
        self.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft,
        self.pageYOffset || document.documentElement.scrollTop  || document.body.scrollTop
      ];
      var html = jQuery('html'); // it would make more sense to apply this to body, but IE7 won't have that
      html.data('scroll-position', scrollPosition);
      html.data('previous-overflow', html.css('overflow'));
      html.css('overflow', 'hidden');
      window.scrollTo(scrollPosition[0], scrollPosition[1]);    
}

function scrollUnlock(){
    var html = jQuery('html');
      var scrollPosition = html.data('scroll-position');
      html.css('overflow', html.data('previous-overflow'));
      window.scrollTo(scrollPosition[0], scrollPosition[1])
}

