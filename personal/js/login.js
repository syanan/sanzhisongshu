$(function() {
	btn();
	code();
	// $('.btn_box').click(function(){
	// 	window.location.href='../personal/ceshi.html';
	// });
	$('.back_btn').click(function(){
		window.location.href='../page/page2.html';
	});
});
// 登录变色
function btn(){
	$('.phone, .pwd_text').on('input', function() {
		var phone = $(this).val()
		var password = $(this).val()
		if (phone && password) {
			$('.login_btn').addClass('active')
		} else {
			$('.login_btn').removeClass('active')
		}
	});
}
// 验证密码
function code(){
	$('.login_btn').click(function(){
		var phone=$('.text').val();
		var password=$('.pwd_text').val();
		if(phone=='18363994105'&&password=='curry'){
			window.location.href='../personal/ceshi.html';
		}else{
			$('.judge').show().delay(1000).hide(300);
		}
	});
}