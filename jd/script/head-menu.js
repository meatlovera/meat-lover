$(function(){
	// ad 关闭功能
	$(".icon-guanbi").click(function(){
		$(".ad").css("display","none");
	});
	// 侧面导航隐藏子菜单
	var lis=$(".sidenav-show li");
	lis.each(function(){
		$(this).mouseover(function(){
		var i=$(this).index();
		$(".snavhide").css("display","block");
		$(".snavhide-items:eq(" + i + ")").css("display","block");
		});
		$(this).mouseout(function(){
		var i=$(this).index();
		$(".snavhide").css("display","none");
		$(".snavhide-items:eq(" + i + ")").css("display","none");
		});
	})
	$(".snavhide-items").each(function(){
		$(this).mouseover(function(){
		$(".snavhide").css("display","block");
		$(this).css("display","block");
		});
		$(this).mouseout(function(){
		$(".snavhide").css("display","none");
		$(this).css("display","none");
		});
	})









})