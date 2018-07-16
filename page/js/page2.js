$(function() {
	banner();
	banner2();
	cart();
	$('.icon-box2').click(function(){
		window.location.href='../classify1/index.html';
	});
	
	// 顶部固定
	// $(window).scroll(function(){
	// 	// 定位元素距离顶部的距离
	// 	var navH=$('.am-tabs-nav').offset().top;
	// 	 var top=$(window).scrollTop();
		
	// 	// 获取滚动条的滑动距离
	// 	if(top>=navH){
	// 		// alert(123);
	// 		$('.am-tabs-nav').css({'position':'fixed','top':'234px'});

	// 	}else{
	// 		$('.am-tabs-nav').css({'position':'static'});
	// 		// alert(456);
	// 	}
		
	// });

	// 点击加入购物车
	
});
// 顶部轮播图
function banner(){
	$('.am-slider-a1').flexslider({
		directionNav: false,
		slideshow: true,
		// controlNav: false,
		pauseOnAction: true
	});
}
function banner2(){
	var swiper = new Swiper('.swiper-container', {
		autoplay: 3000,
		speed: 1000,
		autoplayDisableOnInteraction: false,
		loop: true,
		centeredSlides: true,
		slidesPerView: 1.5,
		pagination: '.swiper-pagination',
		paginationClickable: true,
		prevButton: '.swiper-button-prev',
		nextButton: '.swiper-button-next',
		onInit: function(swiper) {
			swiper.slides[2].className = "swiper-slide swiper-slide-active"; //第一次打开不要动画
		},
		breakpoints: {
			668: {
				slidesPerView: 1.3,
			}
		}
	});

}
// 点击加入购物车
function cart(){
	$('cart').click(function(){
		alert(123);
		$('.badge').css({'opacity':1});
	});
}

