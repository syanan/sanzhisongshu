$(function(){
	$('.icon-delete').click(function(){
		$('.fir').css({display:'none'});
		$('.success').show().delay(1000).hide(300);
		$('.cart-empty').css({opacity: '1'});
	});
	$('.icon-cart').click(function(){
		$('.add').show().delay(1000).hide(300);
	});
	$('.back_btn').click(function(){
		window.location.href='../personal/ceshi.html';
	});
});