$(function(){
	back();
	// add();
});
function back(){
	$('.top-box').click(function(){
		$('html,body').animate({scrollTop:0},200);
	});
}
// 点击加入购物车
// function add(){
// 	$('.cart').click(function(){
// 		alert(123);
// 		$('.collect-num').css({display:'block'});
// 	});
// }