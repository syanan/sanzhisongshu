$(function(){
	$('.add-btn').click(function(){
		window.location.href='../address2/add.html';
	});
	$('.cancel').click(function(){
		$('.mask').css({display:'none'});
	});
	$('.mask1 .yes').click(function(){
		if($('.address2').css('display')=='block'){
			$('.mask1').css({display:'none'});
			$('.address1').css({display:'none'});
		}else{
			$('.mask1').css({display:'none'});
			$('.last-infor').show().delay(1000).hide(300);
		}
		
	});
	$('.mask2 .yes').click(function(){
		if($('.address1').css('display')=='block'){
			$('.mask2').css({display:'none'});
			$('.address2').css({display:'none'});
		}else{
			$('.mask2').css({display:'none'});
			$('.last-infor').show().delay(1000).hide(300);
		}
		
	});
	del();

});
// 点击删除
function del(){
	$('.del1').click(function(){
		$('.mask1').css({display:'block'});
	});
	$('.del2').click(function(){
		$('.mask2').css({display:'block'});
	});
}