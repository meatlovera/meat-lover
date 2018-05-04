$(document).ready(function () {
	$(".j-shopcarbox-show").mouseover(function(){
		$(".m-shopcarbox-show").css("display","block");
		$(".j-shopcarbox-show img").attr({
			"src":"./images/icon/shopcarhover.png",
			"width":"30px",
			"height":"30px",
		});
	});
	$(".j-shopcarbox-show").mouseout(function(){
	$(".m-shopcarbox-show").css("display","none");
	$(".j-shopcarbox-show img").attr(
		"src","images/icon/shopcar.png",
		)
	});
	$(".m-menu-navlist li").mouseover(function(){
		var a=$(".m-menu-navlist li").index(this);
		$(".m-nav-hidebox1:eq(" + a + ")").css({"display":"block"});
	});
	$(".m-menu-navlist li").mouseout(function(){
		var a=$(".m-menu-navlist li").index(this);
		$(".m-nav-hidebox1:eq(" + a + ")").css({"display":"none"});
	});
	$(".m-nav-hidebox1").mouseover(function(){
		$(this).css({"display":"block"});
	});
	$(".m-nav-hidebox1").mouseout(function(){
		$(this).css({"display":"none"});
	});
	$(".m-menu-search input").focus(function(){
		$(".m-searchbox-hide").css({"display":"block"});
	});
	$(".m-menu-search input").blur(function(){
		$(".m-searchbox-hide").css({"display":"none"});
	});
	$(".m-sidenav a").mouseover(function(){
		var b=$(".m-sidenav a").index(this);
		$(".m-sidenav-hide:eq(" + b + ")").css({"display":"block"});
	});
	$(".m-sidenav a").mouseout(function(){
		var b=$(".m-sidenav a").index(this);
		$(".m-sidenav-hide:eq(" + b + ")").css({"display":"none"});
	});
	// banner切换
	var index=1;
	var buttons=$(".u-pagechange-item a");
	function change(cwidth){
		var offset = parseInt($(".m-menu-banner").css("margin-left")) + cwidth;
		$(".m-menu-banner").animate({"margin-left":offset},300,function(){
			if(parseInt($(".m-menu-banner").css("margin-left")) < -6130){
				parseInt($(".m-menu-banner").css("margin-left","-1226px"));
			}else if(parseInt($(".m-menu-banner").css("margin-left")) > 0){
				parseInt($(".m-menu-banner").css("margin-left","-6130px"));
			}
		});		
	};
	function showButton() { 
		if(index < 1){
			index = 5;
		}else if(index > 5){
			index = 1;
		}
		buttons.each(function(){
			$(this).removeClass("active");
		});
		buttons.eq(index-1).addClass('active');
	};
	$(".u-pagechange-left").click(function(){
		change(1226);
		index -= 1;
		showButton();
	});
	$(".u-pagechange-right").click(function(){
		change(-1226);
		index += 1;
		showButton();
	})
	buttons.click(function(){
		var a=buttons.index(this);
		var b=(a+1)*(-1226)+"px";
		$(".m-menu-banner").css("margin-left",b);
		buttons.each(function(){
			$(this).removeClass("active");
		});
		$(this).addClass("active");
		
	})
	






})
