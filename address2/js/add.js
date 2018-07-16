$(function(){
	btn();
	save();
});
// 点击默认地址按钮
function btn(){
	$('.change').click(function(){
		$(this).find('div').toggleClass('track');
		$(this).find('span').toggleClass('circle');
	});
}
// 保存按钮
function save(){
	$(':input').on('input',function(){
		var val1=$('.user-name').val();
		var val2=$('.user-region').val();
		var val3=$('.user-address').val();
		var val4=$('.user-tel').val();
		if($(':input').val()&&/^[0-9]{11}$/.test(val4)){
			$('.save>button').css({backgroundColor:'#77bc1f'});
		}
	});
}