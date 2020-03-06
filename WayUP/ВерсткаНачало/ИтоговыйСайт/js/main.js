// анимация header

var btn = document.getElementById('botton');
btn.onclick = function (e){
	// e.prevent.Default();
	//alert('Кнопка нажата!'); //проверка работы функции
	var txt = document.querySelector('.promise');
	txt.classList.add('red');
	var img = document.querySelector('.travel');
	img.style.display = 'none';
	// document.querySelector('.future_sect').style.paddingTop = "60px";
	
}
	// анимация в секции1
$(function () {
	$(window).scroll(function() {
	    $('#future_sect .title_head').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("slideInDown");
	        }
	    });
	});
	$(window).scroll(function() {
	    $('.blocks').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("zoomIn");
	        }
	    });
	});

	$(window).scroll(function() {
	    $('.block_palm').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("zoomIn");
	        }
	    });
	});

	$(window).scroll(function() {
	    $('.block_rocket').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("zoomIn");
	        }
	    });
	});
})

// анимация в секции2
$(function () {
	$(window).scroll(function() {
	    $('#order_sect .title_head').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("zoomIn");
	        }
	    });
	});
	$(window).scroll(function() {
	    $('.input').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("fadeInLeft");
	        }
	    });
	});
	$(window).scroll(function() {
	    $('.botton').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("zoomIn");
	           }
	    });
	});

})