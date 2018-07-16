$(function(){
	$('.back_btn').click(function(){
		window.location.href='../personal/ceshi.html';
	});
	mask();
});
// 遮盖层
function mask(){
	$('.del').click(function(){
		$('.mask').css({display:'block'});
	});
	$('.cancel').click(function(){
		$('.mask').css({display:'none'});
	});
	$('.yes').click(function(){
		$('.mask').css({display:'none'});
		$('.am-tabs-bd').css({display:'none'});
	});
}