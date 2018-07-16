$(function(){
	$('.am-slider').flexslider({
		slideshow: true, 
		directionNav: false
	});
	$('.am-slider2').flexslider({
		slideshow: true, 
		directionNav: false
	});
	color();
	cart();
	collect();
	buy();
	confir();
	ok();
});
// 点击加入购物车
function color(){
	$('.item-three>button').click(function(){
		$('.collect-num').css({display:'inline-block'});
	});
	$('.item-three>button').on('touchstart',function(){
		$(this).css({background:'#ff9601',color:'#fff'});
	});
	$('.item-three>button').on('touchend',function(){
		$(this).css({background:'#fff',color:'#ff9601'});
	});
}

// 点击跳转购物车页面
function cart(){
	$('.item-one').click(function(){
		window.location.href='../cart/ceshi2.html';
	});
}

// 点击收藏
function collect(){
	$('.item-two').click(function(){
		$(this).children('i').toggleClass('select');
		if($(this).children('i').hasClass('select')){
			 $('.success').show().delay(2000).hide(300);
			}else{
				 $('.no-success').show().delay(2000).hide(300);
			}
	});
}
// 点击立即购买
function buy(){
	$('.item-four').click(function(){
		$('.edit').css({display:'block'});
	});
	$('.close-btn').click(function(){
		$('.edit').css({display:'none'});
	});
	$('.plus').click(function() {
		var t = $(this).parent().find('.g_quantity');
		t.val(parseInt(t.val()) + 1);
		if(t.val() <= 1) {
			t.val(1);
		}
	});
	$('.minus').click(function() {
		var t = $(this).parent().find('.g_quantity');
		t.val(parseInt(t.val()) - 1);
		if(t.val() <= 1) {
			t.val(1);
		}
	});

}
// 点击确认购买
function confir(){
	$('.buy').click(function(){
		$('.edit2').css({display:'block'});
		$('.edit').css({display:'none'});
		var nums=$('.g_quantity').val();
		var t=46.90;
		$('.total-pri').html((nums*t).toFixed(2));
	});
	$('.edit2-close-btn').click(function(){
		$('.edit2').css({display:'none'});
	});
}
// 点击确认付款
function ok(){
	$('.cyc').click(function(){
		window.location.href='../pay/pay.html';
	});
}