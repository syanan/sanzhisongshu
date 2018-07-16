$(function() {
	check();
	//	add();
	edit();
	del();
	confir();
	finaly();
	$('.classify').click(function(){
		window.location.href='../classify/classify.html';
	});
});
// 价格的计算
function calculate(){
	if($('.checkbox').children('i').hasClass('cyc')){
			var nums=parseInt($('.g_quantity').val());
			var price=46.90;
			$('.sh-price').html((nums*price).toFixed(2));
			$('.tol-pri').html((nums*price).toFixed(2));
			$('.total_balance').children('a').addClass('cal');
			$('.badge').html(nums);
		}else{
			$('.sh-price').html((0.00).toFixed(2));
			$('.tol-pri').html((0.00).toFixed(2));
			$('.total_balance').children('a').removeClass('cal');
		}
}
// 运费提示
function trans(){
	if($('.checkbox').children('i').hasClass('cyc')){
		$('.trans').css({display:'none'});
		$('.fill').css({display:'block'});
		$('.order').css({display:'none'});
		$('.cance').css({display:'block'});
	}else{
		$('.trans').css({display:'block'});
		$('.fill').css({display:'none'});
		$('.order').css({display:'block'});
		$('.cance').css({display:'none'});
	}
	
}
// 点击全选
function check(){

	$('.all-checkbox').click(function(){
		$(this).children('i').toggleClass('cyc');
		$('.checkbox').children('i').toggleClass('cyc');
		calculate();
		trans();
	});
	$('.checkbox').click(function(){
		$(this).children('i').toggleClass('cyc');
		$('.all-checkbox').children('i').toggleClass('cyc');
		calculate();trans();
	});
}
// 点击编辑
function edit(){
	$('.am-header-right').click(function(){
		var nr=$(this).children('.edit').html();
		nr=nr=='编辑'?'完成':'编辑';
		$(this).children('.edit').html(nr);
		if(nr=='完成'){
			$('.del-btn').css({display:'inline-block'});
			$('.pay-item').css({display:'none'});
		}else{
			$('.del-btn').css({display:'none'});
			$('.pay-item').css({display:'block'});
		}
	});
}
// 点击删除购物车商品
function del(){
	$('.del-btn').click(function(){
		if($('.checkbox').children('i').hasClass('cyc')){
			$('.mask').css({display:'block'});
		}else{
			$('.select-btn').show().delay(1000).hide(300);
		}
	});
}
// 遮盖层点击删除
function confir(){
	$('.yes').click(function(){
		// alert(123);
		$('.item-content').css({display:'none'});
		$('.mask').css({display:'none'});
		$('.confirm').css({display:'none'});
		$('.am-header-right').css({display:'none'});
		$('.cart-empty').css({opacity:'1'});
		$('.badge').css({display:'none'});
		$('.trans').css({display:'block'});
		$('.fill').css({display:'none'});
		$('.order').css({display:'block'});
		$('.cance').css({display:'none'});
	});
	$('.cancel').click(function(){
		$('.mask').css({display:'none'});
	});
}
// 数量减
$(".minus").click(function() {
	var t = $(this).parent().find('.g_quantity');
	t.val(parseInt(t.val()) - 1);
	if(t.val() <= 1) {
		t.val(1);
	}
	if($('.checkbox').children('i').hasClass('cyc')){
			var nums=parseInt($('.g_quantity').val());
			var price=46.90;
			$('.sh-price').html((nums*price).toFixed(2));
			$('.tol-pri').html((nums*price).toFixed(2));
			$('.badge').html(nums);
		}else{
			$('.sh-price').html((0.00).toFixed(2));
			$('.tol-pri').html((0.00).toFixed(2));
		}

});
// 数量加
$(".plus").click(function() {
	var t = $(this).parent().find('.g_quantity');
	t.val(parseInt(t.val()) + 1);
	if(t.val() <= 1) {
		t.val(1);
	}
	$('.checkbox').children('i').addClass('cyc');
	$('.all-checkbox').children('i').addClass('cyc');
	calculate();trans();

});
//减号变灰
$(function() {
	var num = $(".g_quantity").val();
	if(num > 1) {
		$(".minus").removeClass("current");
	}
	if(num == 1) {
		$(".minus").addClass("current");
	}
	$(".plus").click(function() {
		var num = $(".g_quantity").val();
		if(num > 1) {
			$(".minus").removeClass("current");
		}

	})
	$(".minus").click(function() {
		var num = $(".g_quantity").val();
		if(num > 1) {
			$(".minus").removeClass("current");
		}
		if(num == 1) {
			$(".minus").addClass("current");
		}

	})

})
// 点击结算
function finaly(){
	$('.total_balance').click(function(){
		
		if($('.total_balance').children('a').hasClass('cal')){
			$('.edit2').css({display:'block'});
			var ns=$('.g_quantity').val();
			var c=46.90;
			$('.total-pri').html((ns*c).toFixed(2));
		};
		
	});
	$('.edit2-close-btn').click(function(){
		$('.edit2').css({display:'none'});
	});
}
