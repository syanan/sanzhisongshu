$(function() {
	$('.confirm-checkbox').click(function() {
		var checkoutAll = $('.confirm-checkbox').prop('checked')
		$('.item-content').find('.item-checkbox').prop("checked", checkoutAll)
	});
	
	//	add();
	edit();
});
//// 点击数量
//function add() {
//	$('.add').click(function() {
//		var val = $('.number').val();
//		val++;
//	});
//}

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


// 数量减
$(".minus").click(function() {
	var t = $(this).parent().find('.g_quantity');
	t.val(parseInt(t.val()) - 1);
	if(t.val() <= 1) {
		t.val(1);
	}
});
// 数量加
$(".plus").click(function() {
	var t = $(this).parent().find('.g_quantity');
	t.val(parseInt(t.val()) + 1);
	if(t.val() <= 1) {
		t.val(1);
	}
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