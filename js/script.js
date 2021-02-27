
	$( () => {
	var nav = $('nav').height();
    $('.showmenu-container').css('top', nav);
	//On Scroll Functionality
	$(window).scroll( () => {
		var windowTop = $(window).scrollTop();
		windowTop > 90 ? $('nav').addClass('navShadow') : $('nav').removeClass('navShadow');
		var nav = $('nav').height();
		var navShadow = $(".navShadow").height();
		windowTop > 90 ? $('.showmenu-container').css('top', navShadow) : $('.showmenu-container').css('top', nav);
	});
	//Click Logo To Scroll To Top
	$('#logo').on('click', () => {
		$('html,body').animate({
			scrollTop: 0
		},500);
	});
	$('#hero').on('click', () => {
		$('html,body').animate({
			scrollTop: 0
		},500);
	});
	
	//Smooth Scrolling Using Navigation Menu
	$('a[href*="#"]').on('click', function(e){
		$('html,body').animate({
			scrollTop: $($(this).attr('href')).offset().top - 50
		},500);
		e.preventDefault();
	});
	
	//Toggle Menu
			$('.showmenu-container').hide();
          $('.menu').on('click', function(){
          	$('.menu>div').eq(1).slideToggle();
          	$('.menu>div').eq(2).slideToggle();
          	$('.menu>div').eq(3).slideToggle();
          	$('.menu>div').eq(4).slideToggle();
          	$('.showmenu-container').slideToggle();
		});

	
$('.first').click(function(){
$(".gallery").show();
$('.items').empty();
$('.wrap').css('display', 'none');
$('.wrap').children().css('display', 'none');
if($(window).width() >= 960){
	$(".gallery-container-center").css('grid-template-rows', 'repeat(11, 18.4vw)');
	$(".gallery-container-center").css('grid-template-columns', '1fr 1fr 1fr');
}
if($(window).width() <= 960){
	$(".gallery-container-center").css('grid-template-rows', 'repeat(16, 25.35vw)');
	$(".gallery-container-center").css('grid-template-columns', '1fr 1fr');
}
if($(window).width() <= 576){
	$(".gallery-container-center").css('grid-template-rows', 'repeat(31, 55.5vw)');
	$(".gallery-container-center").css('grid-template-columns', '1fr');
}
});

$('.second').click(function(){
	$('.gallery').hide();
	$('.items').empty();
    $('.wrap').css('display', 'none');
    $('.wrap').children().css('display', 'none');
	$(".contain-10").show();
	$(".contain-11").show();
	$(".contain-12").show();
	$(".contain-13").show();
	$(".contain-14").show();
	$(".contain-15").show();
	$(".contain-16").show();
	$(".contain-17").show();
	$(".contain-18").show();
	$(".contain-19").show();
if($(window).width() >= 960){
$(".gallery-container-center").css('grid-template-rows', 'repeat(4, 18.4vw)');
$(".gallery-container-center").css('grid-template-columns', '1fr 1fr 1fr');
}
if($(window).width() <= 960){
$(".gallery-container-center").css('grid-template-rows', 'repeat(5, 25.35vw)');
$(".gallery-container-center").css('grid-template-columns', '1fr 1fr');
}
if($(window).width() <= 576){
$(".gallery-container-center").css('grid-template-rows', 'repeat(10, 55.5vw)');
$(".gallery-container-center").css('grid-template-columns', '1fr');
}
});

$('.third').click(function(){
	$('.gallery').hide();
    $('.items').empty();
$('.wrap').css('display', 'none');
$('.wrap').children().css('display', 'none');
if($(window).width() >= 960){
$(".gallery-container-center").css('grid-template-rows', '18.4vw)');
$(".gallery-container-center").css('grid-template-columns', '1fr');
}
});

$('.fourth').click(function(){
	$('.gallery').hide();
	$('.items').empty();
$('.wrap').css('display', 'none');
$('.wrap').children().css('display', 'none');
	$(".contain-20").show();
	$(".contain-21").show();
	$(".contain-22").show();
	$(".contain-23").show();
	$(".contain-24").show();
	$(".contain-25").show();
	$(".contain-26").show();
	$(".contain-27").show();
	$(".contain-28").show();
	$(".contain-29").show();
	if($(window).width() >= 960){
	$(".gallery-container-center").css('grid-template-rows', 'repeat(4, 18.4vw)');
	$(".gallery-container-center").css('grid-template-columns', '1fr 1fr 1fr');
}
	if($(window).width() <= 960){
	$(".gallery-container-center").css('grid-template-rows', 'repeat(5, 25.35vw)');
	$(".gallery-container-center").css('grid-template-columns', '1fr 1fr');
}
if($(window).width() <= 576){
	$(".gallery-container-center").css('grid-template-rows', 'repeat(10, 55.5vw)');
	$(".gallery-container-center").css('grid-template-columns', '1fr');
}
});


$('.fifth').click(function(){
	$('.gallery').hide();
	$('.items').empty();
$('.wrap').css('display', 'none');
$('.wrap').children().css('display', 'none');
	$(".contain").show();
	$(".contain-1").show();
	$(".contain-2").show();
	$(".contain-3").show();
	$(".contain-4").show();
	$(".contain-5").show();
	$(".contain-6").show();
	$(".contain-7").show();
	$(".contain-8").show();
	$(".contain-9").show();
		if($(window).width() >= 960){
	$(".gallery-container-center").css('grid-template-rows', 'repeat(4, 18.4vw)');
	$(".gallery-container-center").css('grid-template-columns', '1fr 1fr 1fr');
}
	if($(window).width() <= 960){
	$(".gallery-container-center").css('grid-template-rows', 'repeat(5, 25.35vw)');
	$(".gallery-container-center").css('grid-template-columns', '1fr 1fr');
}
if($(window).width() <= 576){
	$(".gallery-container-center").css('grid-template-rows', 'repeat(10, 55.5vw)');
	$(".gallery-container-center").css('grid-template-columns', '1fr');
}
});

$('.sixth').click(function(){
	$('.gallery').hide();
	$('.items').empty();
$('.wrap').css('display', 'none');
$('.wrap').children().css('display', 'none');
	$(".contain-30").show();
		if($(window).width() >= 960){
	$(".gallery-container-center").css('grid-template-rows', '45vw');
	$(".gallery-container-center").css('grid-template-columns', '70vw');
}
	if($(window).width() <= 960){
	$(".gallery-container-center").css('grid-template-rows',  '45vw');
	$(".gallery-container-center").css('grid-template-columns', '70vw');
}
if($(window).width() <= 576){
	$(".gallery-container-center").css('grid-template-rows',  '45vw');
	$(".gallery-container-center").css('grid-template-columns', '70vw');
}
});


$('.gallery').mouseenter(function(){
	$(this).children().children().children().hide().slideDown(400); 
	$(this).children().children().children().css('display', 'flex');
	$(this).children().children().next().children().next().hide().slideDown(400);
});
$('.gallery').mouseleave(function(){
	$(this).children().children().next().children().next('.gal-cont-text-bottom').show().slideUp(400);
	$(this).children().children().children().show().slideUp(400);
});

$('.wrap').hide();

$(".gallery").click(function(){
	$('.gallery-container-center').hide();
    $('.wrap').show();
});	

$('.category-1').click(function(){
    $('.gallery-container-center').show();
});


$('.contain').click(function(){var x = $(this);x.siblings().hide();x.children().hide();x.addClass('.wrap');x.hide();
$('.wrap').css('display', 'flex');$('.wrap').children().css('display', 'flex');
$('<img>', { src: 'img/Проекты/сруб1/1.jpg', class: 'item'}).appendTo('.items');
$('<img>', { src: 'img/Проекты/сруб1/2.jpg', class: 'item'}).appendTo('.items');
$('<img>', { src: 'img/Проекты/сруб1/3.jpg', class: 'item'}).appendTo('.items');
$('<img>', { src: 'img/Проекты/сруб1/4.jpg', class: 'item'}).appendTo('.items');
$('<img>', { src: 'img/Проекты/сруб1/5.jpg', class: 'item'}).appendTo('.items');
$('<img>', { src: 'img/Проекты/сруб1/6.jpg', class: 'item'}).appendTo('.items');
$('<img>', { src: 'img/Проекты/сруб1/7.jpg', class: 'item'}).appendTo('.items');
$('<img>', { src: 'img/Проекты/сруб1/8.jpg', class: 'item'}).appendTo('.items');
$('<img>', { src: 'img/Проекты/сруб1/9.jpg', class: 'item'}).appendTo('.items');
$('<img>', { src: 'img/Проекты/сруб1/10.jpg', class: 'item'}).appendTo('.items');
$('.item').eq(0).siblings().hide();
$('.item').click(function(){
	$(this).next().hide().slideDown();
	$(this).hide().slideUp();
});
$('.item').last().click(function(){
$('.item').first().hide().slideDown();
});
$('.contain-value-title').text('Сруб 3х5.5 +кровельные работы. Осоргино');
$('.year').parent().hide();
$('.place').parent().hide();
$('.type').text('В лапу');
$('.service').hide();
$('.size').text('3х5.5');
var scrollTop = $('.category').offset().top; 
$(document).scrollTop(scrollTop);
});



$('.contain-1').click(function(){var x = $(this);x.siblings().hide();x.children().hide();x.addClass('.wrap');x.hide();
$('.wrap').css('display', 'flex');$('.wrap').children().css('display', 'flex');
$('<img>', { src: 'img/Проекты/сруб2/1.jpg', class: 'item'}).appendTo('.items');
$('<img>', { src: 'img/Проекты/сруб2/2.jpg', class: 'item'}).appendTo('.items');
$('<img>', { src: 'img/Проекты/сруб2/3.jpg', class: 'item'}).appendTo('.items');
$('<img>', { src: 'img/Проекты/сруб2/4.jpg', class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/сруб2/5.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/сруб2/6.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/сруб2/7.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/сруб2/8.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/сруб2/9.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/сруб2/10.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/сруб2/11.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/сруб2/12.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/сруб2/13.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/сруб2/14.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/сруб2/15.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/сруб2/16.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/сруб2/17.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/сруб2/18.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/сруб2/19.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/сруб2/20.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/сруб2/21.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/сруб2/22.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/сруб2/23.jpg", class: 'item'}).appendTo('.items');
$('.item').eq(0).siblings().hide();
$('.item').click(function(){$(this).next().hide().slideDown();$(this).hide().slideUp();});
$('.item').last().click(function(){$('.item').first().hide().slideDown();});
$('.contain-value-title').text('Сруб 4,5х5 в лапу. Нагаево. Уфа');
$('.year').parent().hide();
$('.place').parent().hide();
$('.type').text('В лапу');$('.service').hide();
$('.size').text('4,5х5');$('.slider').css('display', 'flex');
var scrollTop = $('.category').offset().top; $(document).scrollTop(scrollTop);
});
	
$('.contain-2').click(function(){var x = $(this);x.siblings().hide();x.children().hide();x.addClass('.wrap');x.hide();
$('.wrap').css('display', 'flex');$('.wrap').children().css('display', 'flex');
$('<img>', { src: 'img/Проекты/сруб1/1.jpg', class: 'item'}).appendTo('.items');
$('<img>', { src: 'img/Проекты/сруб1/2.jpg', class: 'item'}).appendTo('.items');
$('<img>', { src: 'img/Проекты/сруб1/3.jpg', class: 'item'}).appendTo('.items');
$('<img>', { src: 'img/Проекты/сруб1/4.jpg', class: 'item'}).appendTo('.items');
$('<img>', { src: 'img/Проекты/сруб1/5.jpg', class: 'item'}).appendTo('.items');
$('<img>', { src: 'img/Проекты/сруб1/6.jpg', class: 'item'}).appendTo('.items');
$('<img>', { src: 'img/Проекты/сруб1/7.jpg', class: 'item'}).appendTo('.items');
$('<img>', { src: 'img/Проекты/сруб1/8.jpg', class: 'item'}).appendTo('.items');
$('<img>', { src: 'img/Проекты/сруб1/9.jpg', class: 'item'}).appendTo('.items');
$('<img>', { src: 'img/Проекты/сруб1/10.jpg', class: 'item'}).appendTo('.items');
$('.item').eq(0).siblings().hide();
$('.item').click(function(){
$(this).next().hide().slideDown();
$(this).hide().slideUp();});
$('.item').last().click(function(){
$('.item').first().hide().slideDown();});
$('.contain-value-title').text('Сруб 6,2на9,2 (1 этаж) 8,2на9,2 (2этаж)');
$('.year').parent().hide();
$('.place').parent().hide();
$('.type').text('В лапу');$('.service').hide();
$('.size').text('8,2х9,2');$('.slider').css('display', 'flex');
var scrollTop = $('.category').offset().top; $(document).scrollTop(scrollTop);
});

$('.contain-3').click(function(){var x = $(this);x.siblings().hide();x.children().hide();x.addClass('.wrap');x.hide();
$('.wrap').css('display', 'flex');$('.wrap').children().css('display', 'flex');
$('<img>', { src: 'img/Проекты/сруб2/1.jpg', class: 'item'}).appendTo('.items');
$('<img>', { src: 'img/Проекты/сруб2/2.jpg', class: 'item'}).appendTo('.items');
$('<img>', { src: 'img/Проекты/сруб2/3.jpg', class: 'item'}).appendTo('.items');
$('<img>', { src: 'img/Проекты/сруб2/4.jpg', class: 'item'}).appendTo('.items');
$('<img>', { src: 'img/Проекты/сруб2/5.jpg', class: 'item'}).appendTo('.items');
$('<img>', { src: 'img/Проекты/сруб2/6.jpg', class: 'item'}).appendTo('.items');
$('<img>', { src: 'img/Проекты/сруб2/7.jpg', class: 'item'}).appendTo('.items');
$('<img>', { src: 'img/Проекты/сруб2/8.jpg', class: 'item'}).appendTo('.items');
$('<img>', { src: 'img/Проекты/сруб2/9.jpg', class: 'item'}).appendTo('.items');
$('<img>', { src: 'img/Проекты/сруб2/10.jpg', class: 'item'}).appendTo('.items');
$('.item').eq(0).siblings().hide();
$('.item').click(function(){$(this).next().hide().slideDown();$(this).hide().slideUp();});
$('.item').last().click(function(){$('.item').first().hide().slideDown();});
$('.contain-value-title').text('Сруб 6.30 на 9.70 Нижегородка');
$('.year').parent().hide();
$('.place').parent().hide();
$('.type').text('В лапу');$('.service').hide();
$('.size').text('6.30х9.70');$('.slider').css('display', 'flex');
var scrollTop = $('.category').offset().top; $(document).scrollTop(scrollTop);
});


$('.contain-4').click(function(){var x = $(this);x.siblings().hide();x.children().hide();x.addClass('.wrap');x.hide();
$('.wrap').css('display', 'flex');$('.wrap').children().css('display', 'flex');
$('<img>', { src: 'img/Проекты/сруб1/1.jpg', class: 'item'}).appendTo('.items');
$('<img>', { src: 'img/Проекты/сруб1/2.jpg', class: 'item'}).appendTo('.items');
$('<img>', { src: 'img/Проекты/сруб1/3.jpg', class: 'item'}).appendTo('.items');
$('<img>', { src: 'img/Проекты/сруб1/4.jpg', class: 'item'}).appendTo('.items');
$('<img>', { src: 'img/Проекты/сруб1/5.jpg', class: 'item'}).appendTo('.items');
$('<img>', { src: 'img/Проекты/сруб1/6.jpg', class: 'item'}).appendTo('.items');
$('<img>', { src: 'img/Проекты/сруб1/7.jpg', class: 'item'}).appendTo('.items');
$('<img>', { src: 'img/Проекты/сруб1/8.jpg', class: 'item'}).appendTo('.items');
$('<img>', { src: 'img/Проекты/сруб1/9.jpg', class: 'item'}).appendTo('.items');
$('<img>', { src: 'img/Проекты/сруб1/10.jpg', class: 'item'}).appendTo('.items');
$('.item').eq(0).siblings().hide();
$('.item').click(function(){$(this).next().hide().slideDown();$(this).hide().slideUp();});
$('.item').last().click(function(){$('.item').first().hide().slideDown();});
$('.contain-value-title').text('Сруб 6х8 мансардный+кровля');
$('.year').parent().hide();
$('.place').parent().hide();
$('.type').text('В лапу');$('.service').hide();
$('.size').text('6х8');$('.slider').css('display', 'flex');
var scrollTop = $('.category').offset().top; $(document).scrollTop(scrollTop);
});


$('.contain-5').click(function(){var x = $(this);x.siblings().hide();x.children().hide();x.addClass('.wrap');x.hide();
$('.wrap').css('display', 'flex');$('.wrap').children().css('display', 'flex');
$('<img>', { src: 'img/Проекты/В лапу/Сруб 7х12 в лапу. Нижнеарметово (Ишимбайский район)/1.jpg', class: 'item'}).appendTo('.items');
$('<img>', { src: 'img/Проекты/В лапу/Сруб 7х12 в лапу. Нижнеарметово (Ишимбайский район)/2.jpg', class: 'item'}).appendTo('.items');
$('<img>', { src: 'img/Проекты/В лапу/Сруб 7х12 в лапу. Нижнеарметово (Ишимбайский район)/3.jpg', class: 'item'}).appendTo('.items');
$('<img>', { src: 'img/Проекты/В лапу/Сруб 7х12 в лапу. Нижнеарметово (Ишимбайский район)/4.jpg', class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/В лапу/Сруб 7х12 в лапу. Нижнеарметово (Ишимбайский район)/5.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/В лапу/Сруб 7х12 в лапу. Нижнеарметово (Ишимбайский район)/6.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/В лапу/Сруб 7х12 в лапу. Нижнеарметово (Ишимбайский район)/7.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/В лапу/Сруб 7х12 в лапу. Нижнеарметово (Ишимбайский район)/8.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/В лапу/Сруб 7х12 в лапу. Нижнеарметово (Ишимбайский район)/9.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/В лапу/Сруб 7х12 в лапу. Нижнеарметово (Ишимбайский район)/10.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/В лапу/Сруб 7х12 в лапу. Нижнеарметово (Ишимбайский район)/11.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/В лапу/Сруб 7х12 в лапу. Нижнеарметово (Ишимбайский район)/12.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/В лапу/Сруб 7х12 в лапу. Нижнеарметово (Ишимбайский район)/13.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/В лапу/Сруб 7х12 в лапу. Нижнеарметово (Ишимбайский район)/14.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/В лапу/Сруб 7х12 в лапу. Нижнеарметово (Ишимбайский район)/15.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/В лапу/Сруб 7х12 в лапу. Нижнеарметово (Ишимбайский район)/16.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/В лапу/Сруб 7х12 в лапу. Нижнеарметово (Ишимбайский район)/17.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/В лапу/Сруб 7х12 в лапу. Нижнеарметово (Ишимбайский район)/18.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/В лапу/Сруб 7х12 в лапу. Нижнеарметово (Ишимбайский район)/19.jpg", class: 'item'}).appendTo('.items');
$('.item').eq(0).siblings().hide();
$('.item').click(function(){$(this).next().hide().slideDown();$(this).hide().slideUp();});
$('.item').last().click(function(){$('.item').first().hide().slideDown();});
$('.contain-value-title').text('Сруб 7х12 в лапу. Нижнеарметово (Ишимбайский район)');
$('.year').parent().hide();
$('.place').parent().hide();
$('.type').text('В лапу');$('.service').hide();
$('.size').text('7х12');$('.slider').css('display', 'flex');
var scrollTop = $('.category').offset().top; $(document).scrollTop(scrollTop);
});


$('.contain-6').click(function(){var x = $(this);x.siblings().hide();x.children().hide();x.addClass('.wrap');x.hide();
$('.wrap').css('display', 'flex');$('.wrap').children().css('display', 'flex');
$('<img>', { src: 'img/Проекты/В лапу/Сруб 8х8 мансардный тип/1.jpg', class: 'item'}).appendTo('.items');
$('<img>', { src: 'img/Проекты/В лапу/Сруб 8х8 мансардный тип/2.jpg', class: 'item'}).appendTo('.items');
$('<img>', { src: 'img/Проекты/В лапу/Сруб 8х8 мансардный тип/3.jpg', class: 'item'}).appendTo('.items');
$('<img>', { src: 'img/Проекты/В лапу/Сруб 8х8 мансардный тип/4.jpg', class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/В лапу/Сруб 8х8 мансардный тип/5.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/В лапу/Сруб 8х8 мансардный тип/6.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/В лапу/Сруб 8х8 мансардный тип/7.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/В лапу/Сруб 8х8 мансардный тип/8.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/В лапу/Сруб 8х8 мансардный тип/9.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/В лапу/Сруб 8х8 мансардный тип/10.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/В лапу/Сруб 8х8 мансардный тип/11.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/В лапу/Сруб 8х8 мансардный тип/12.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/В лапу/Сруб 8х8 мансардный тип/13.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/В лапу/Сруб 8х8 мансардный тип/14.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/В лапу/Сруб 8х8 мансардный тип/15.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/В лапу/Сруб 8х8 мансардный тип/16.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/В лапу/Сруб 8х8 мансардный тип/17.jpg", class: 'item'}).appendTo('.items');
$('.item').eq(0).siblings().hide();
$('.item').click(function(){$(this).next().hide().slideDown();$(this).hide().slideUp();});
$('.item').last().click(function(){$('.item').first().hide().slideDown();});
$('.contain-value-title').text('Сруб 8х8 мансардный тип');
$('.year').parent().hide();
$('.place').parent().hide();
$('.type').text('В лапу');$('.service').hide();
$('.size').text('8х8');$('.slider').css('display', 'flex');
var scrollTop = $('.category').offset().top; $(document).scrollTop(scrollTop);
});


$('.contain-7').click(function(){var x = $(this);x.siblings().hide();x.children().hide();x.addClass('.wrap');x.hide();
$('.wrap').css('display', 'flex');$('.wrap').children().css('display', 'flex');
$('<img>', { src: 'img/Проекты/В лапу/Сруб в лапу 5х6/1.jpg', class: 'item'}).appendTo('.items');
$('<img>', { src: 'img/Проекты/В лапу/Сруб в лапу 5х6/2.jpg', class: 'item'}).appendTo('.items');
$('<img>', { src: 'img/Проекты/В лапу/Сруб в лапу 5х6/3.jpg', class: 'item'}).appendTo('.items');
$('<img>', { src: 'img/Проекты/В лапу/Сруб в лапу 5х6/4.jpg', class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/В лапу/Сруб в лапу 5х6/5.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/В лапу/Сруб в лапу 5х6/6.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/В лапу/Сруб в лапу 5х6/7.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/В лапу/Сруб в лапу 5х6/8.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/В лапу/Сруб в лапу 5х6/9.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/В лапу/Сруб в лапу 5х6/10.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/В лапу/Сруб в лапу 5х6/11.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/В лапу/Сруб в лапу 5х6/12.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/В лапу/Сруб в лапу 5х6/13.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/В лапу/Сруб в лапу 5х6/14.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/В лапу/Сруб в лапу 5х6/15.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/В лапу/Сруб в лапу 5х6/16.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/В лапу/Сруб в лапу 5х6/17.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/В лапу/Сруб в лапу 5х6/18.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/В лапу/Сруб в лапу 5х6/19.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/В лапу/Сруб в лапу 5х6/20.jpg", class: 'item'}).appendTo('.items');
$('.item').eq(0).siblings().hide();
$('.item').click(function(){$(this).next().hide().slideDown();$(this).hide().slideUp();});
$('.item').last().click(function(){$('.item').first().hide().slideDown();});
$('.contain-value-title').text('Сруб в лапу 5х6');
$('.year').parent().hide();
$('.place').parent().hide();
$('.type').text('В лапу');$('.service').hide();
$('.size').text('5х6');$('.slider').css('display', 'flex');
var scrollTop = $('.category').offset().top; $(document).scrollTop(scrollTop);
});


$('.contain-8').click(function(){var x = $(this);x.siblings().hide();x.children().hide();x.addClass('.wrap');x.hide();
$('.wrap').css('display', 'flex');$('.wrap').children().css('display', 'flex');
$('<img>', { src: 'img/Проекты/В лапу/Сруб в лапу 6.5х6.5 +вынос 2.6 метра/1.jpg', class: 'item'}).appendTo('.items');
$('<img>', { src: 'img/Проекты/В лапу/Сруб в лапу 6.5х6.5 +вынос 2.6 метра/2.jpg', class: 'item'}).appendTo('.items');
$('<img>', { src: 'img/Проекты/В лапу/Сруб в лапу 6.5х6.5 +вынос 2.6 метра/3.jpg', class: 'item'}).appendTo('.items');
$('<img>', { src: 'img/Проекты/В лапу/Сруб в лапу 6.5х6.5 +вынос 2.6 метра/4.jpg', class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/В лапу/Сруб в лапу 6.5х6.5 +вынос 2.6 метра/5.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/В лапу/Сруб в лапу 6.5х6.5 +вынос 2.6 метра/6.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/В лапу/Сруб в лапу 6.5х6.5 +вынос 2.6 метра/7.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/В лапу/Сруб в лапу 6.5х6.5 +вынос 2.6 метра/8.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/В лапу/Сруб в лапу 6.5х6.5 +вынос 2.6 метра/9.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/В лапу/Сруб в лапу 6.5х6.5 +вынос 2.6 метра/10.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/В лапу/Сруб в лапу 6.5х6.5 +вынос 2.6 метра/11.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/В лапу/Сруб в лапу 6.5х6.5 +вынос 2.6 метра/12.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/В лапу/Сруб в лапу 6.5х6.5 +вынос 2.6 метра/13.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/В лапу/Сруб в лапу 6.5х6.5 +вынос 2.6 метра/14.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/В лапу/Сруб в лапу 6.5х6.5 +вынос 2.6 метра/15.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/В лапу/Сруб в лапу 6.5х6.5 +вынос 2.6 метра/16.jpg", class: 'item'}).appendTo('.items');
$('.item').eq(0).siblings().hide();
$('.item').click(function(){$(this).next().hide().slideDown();$(this).hide().slideUp();});
$('.item').last().click(function(){$('.item').first().hide().slideDown();});
$('.contain-value-title').text('Сруб в лапу 6.5х6.5 +вынос 2.6 метра');
$('.year').parent().hide();
$('.place').parent().hide();
$('.type').text('В лапу');$('.service').hide();
$('.size').text('6.5х6.5');$('.slider').css('display', 'flex');
var scrollTop = $('.category').offset().top; $(document).scrollTop(scrollTop);
});

$('.contain-9').click(function(){var x = $(this);x.siblings().hide();x.children().hide();x.addClass('.wrap');x.hide();
$('.wrap').css('display', 'flex');$('.wrap').children().css('display', 'flex');
$('<img>', { src: 'img/Проекты/В лапу/сруб в лапу 6.5х8.5 мансардный тип/1.jpg', class: 'item'}).appendTo('.items');
$('<img>', { src: 'img/Проекты/В лапу/сруб в лапу 6.5х8.5 мансардный тип/2.jpg', class: 'item'}).appendTo('.items');
$('<img>', { src: 'img/Проекты/В лапу/сруб в лапу 6.5х8.5 мансардный тип/3.jpg', class: 'item'}).appendTo('.items');
$('<img>', { src: 'img/Проекты/В лапу/сруб в лапу 6.5х8.5 мансардный тип/4.jpg', class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/В лапу/сруб в лапу 6.5х8.5 мансардный тип/5.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/В лапу/сруб в лапу 6.5х8.5 мансардный тип/6.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/В лапу/сруб в лапу 6.5х8.5 мансардный тип/7.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/В лапу/сруб в лапу 6.5х8.5 мансардный тип/8.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/В лапу/сруб в лапу 6.5х8.5 мансардный тип/9.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/В лапу/сруб в лапу 6.5х8.5 мансардный тип/10.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/В лапу/сруб в лапу 6.5х8.5 мансардный тип/11.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/В лапу/сруб в лапу 6.5х8.5 мансардный тип/12.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/В лапу/сруб в лапу 6.5х8.5 мансардный тип/13.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/В лапу/сруб в лапу 6.5х8.5 мансардный тип/14.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/В лапу/сруб в лапу 6.5х8.5 мансардный тип/15.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/В лапу/сруб в лапу 6.5х8.5 мансардный тип/16.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/В лапу/сруб в лапу 6.5х8.5 мансардный тип/17.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/В лапу/сруб в лапу 6.5х8.5 мансардный тип/18.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/В лапу/сруб в лапу 6.5х8.5 мансардный тип/19.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/В лапу/сруб в лапу 6.5х8.5 мансардный тип/20.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/В лапу/сруб в лапу 6.5х8.5 мансардный тип/21.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/В лапу/сруб в лапу 6.5х8.5 мансардный тип/22.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/В лапу/сруб в лапу 6.5х8.5 мансардный тип/23.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/В лапу/сруб в лапу 6.5х8.5 мансардный тип/24.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/В лапу/сруб в лапу 6.5х8.5 мансардный тип/25.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/В лапу/сруб в лапу 6.5х8.5 мансардный тип/26.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/В лапу/сруб в лапу 6.5х8.5 мансардный тип/27.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/В лапу/сруб в лапу 6.5х8.5 мансардный тип/28.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/В лапу/сруб в лапу 6.5х8.5 мансардный тип/29.jpg", class: 'item'}).appendTo('.items');
$('.item').eq(0).siblings().hide();
$('.item').click(function(){$(this).next().hide().slideDown();$(this).hide().slideUp();});
$('.item').last().click(function(){$('.item').first().hide().slideDown();});
$('.contain-value-title').text('сруб в лапу 6.5х8.5 мансардный тип');
$('.year').parent().hide();
$('.place').parent().hide();
$('.type').text('В лапу');$('.service').hide();
$('.size').text('6.5х8.5');$('.slider').css('display', 'flex');
var scrollTop = $('.category').offset().top; $(document).scrollTop(scrollTop);
});


$('.contain-10').click(function(){var x = $(this);x.siblings().hide();x.children().hide();x.addClass('.wrap');x.hide();
$('.wrap').css('display', 'flex');$('.wrap').children().css('display', 'flex');
$('<img>', { src: 'img/Проекты/Нижняя чаша/6х8 мансардный тип сруба/1.jpg', class: 'item'}).appendTo('.items');
$('<img>', { src: 'img/Проекты/Нижняя чаша/6х8 мансардный тип сруба/2.jpg', class: 'item'}).appendTo('.items');
$('<img>', { src: 'img/Проекты/Нижняя чаша/6х8 мансардный тип сруба/3.jpg', class: 'item'}).appendTo('.items');
$('<img>', { src: 'img/Проекты/Нижняя чаша/6х8 мансардный тип сруба/4.jpg', class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/Нижняя чаша/6х8 мансардный тип сруба/5.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/Нижняя чаша/6х8 мансардный тип сруба/6.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/Нижняя чаша/6х8 мансардный тип сруба/7.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/Нижняя чаша/6х8 мансардный тип сруба/8.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/Нижняя чаша/6х8 мансардный тип сруба/9.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/Нижняя чаша/6х8 мансардный тип сруба/10.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/Нижняя чаша/6х8 мансардный тип сруба/11.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/Нижняя чаша/6х8 мансардный тип сруба/12.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/Нижняя чаша/6х8 мансардный тип сруба/13.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/Нижняя чаша/6х8 мансардный тип сруба/14.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/Нижняя чаша/6х8 мансардный тип сруба/15.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/Нижняя чаша/6х8 мансардный тип сруба/16.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/Нижняя чаша/6х8 мансардный тип сруба/17.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/Нижняя чаша/6х8 мансардный тип сруба/18.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/Нижняя чаша/6х8 мансардный тип сруба/19.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/Нижняя чаша/6х8 мансардный тип сруба/20.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/Нижняя чаша/6х8 мансардный тип сруба/21.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/Нижняя чаша/6х8 мансардный тип сруба/22.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/Нижняя чаша/6х8 мансардный тип сруба/23.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/Нижняя чаша/6х8 мансардный тип сруба/24.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/Нижняя чаша/6х8 мансардный тип сруба/25.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/Нижняя чаша/6х8 мансардный тип сруба/26.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/Нижняя чаша/6х8 мансардный тип сруба/27.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/Нижняя чаша/6х8 мансардный тип сруба/28.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/Нижняя чаша/6х8 мансардный тип сруба/29.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/Нижняя чаша/6х8 мансардный тип сруба/30.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/Нижняя чаша/6х8 мансардный тип сруба/31.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/Нижняя чаша/6х8 мансардный тип сруба/32.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/Нижняя чаша/6х8 мансардный тип сруба/33.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/Нижняя чаша/6х8 мансардный тип сруба/34.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/Нижняя чаша/6х8 мансардный тип сруба/35.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/Нижняя чаша/6х8 мансардный тип сруба/36.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/Нижняя чаша/6х8 мансардный тип сруба/37.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/Нижняя чаша/6х8 мансардный тип сруба/38.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/Нижняя чаша/6х8 мансардный тип сруба/39.jpg", class: 'item'}).appendTo('.items');
$('.item').eq(0).siblings().hide();
$('.item').click(function(){$(this).next().hide().slideDown();$(this).hide().slideUp();});
$('.item').last().click(function(){$('.item').first().hide().slideDown();});
$('.contain-value-title').text('Сруб 6х8 мансардный тип');
$('.year').parent().hide();
$('.place').parent().hide();
$('.type').text('В чашу');$('.service').hide();
$('.size').text('6х8');$('.slider').css('display', 'flex');
var scrollTop = $('.category').offset().top; $(document).scrollTop(scrollTop);
});


$('.contain-11').click(function(){var x = $(this);x.siblings().hide();x.children().hide();x.addClass('.wrap');x.hide();
$('.wrap').css('display', 'flex');$('.wrap').children().css('display', 'flex');
$('<img>', { src: 'img/Проекты/Нижняя чаша/Сруб 4,5х6,5 в чашу под баню/1.jpg', class: 'item'}).appendTo('.items');
$('<img>', { src: 'img/Проекты/Нижняя чаша/Сруб 4,5х6,5 в чашу под баню/2.jpg', class: 'item'}).appendTo('.items');
$('<img>', { src: 'img/Проекты/Нижняя чаша/Сруб 4,5х6,5 в чашу под баню/3.jpg', class: 'item'}).appendTo('.items');
$('<img>', { src: 'img/Проекты/Нижняя чаша/Сруб 4,5х6,5 в чашу под баню/4.jpg', class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/Нижняя чаша/Сруб 4,5х6,5 в чашу под баню/5.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/Нижняя чаша/Сруб 4,5х6,5 в чашу под баню/6.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/Нижняя чаша/Сруб 4,5х6,5 в чашу под баню/7.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/Нижняя чаша/Сруб 4,5х6,5 в чашу под баню/8.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/Нижняя чаша/Сруб 4,5х6,5 в чашу под баню/9.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/Нижняя чаша/Сруб 4,5х6,5 в чашу под баню/10.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/Нижняя чаша/Сруб 4,5х6,5 в чашу под баню/11.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/Нижняя чаша/Сруб 4,5х6,5 в чашу под баню/12.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/Нижняя чаша/Сруб 4,5х6,5 в чашу под баню/13.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/Нижняя чаша/Сруб 4,5х6,5 в чашу под баню/14.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/Нижняя чаша/Сруб 4,5х6,5 в чашу под баню/15.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/Нижняя чаша/Сруб 4,5х6,5 в чашу под баню/16.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/Нижняя чаша/Сруб 4,5х6,5 в чашу под баню/17.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/Нижняя чаша/Сруб 4,5х6,5 в чашу под баню/18.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/Нижняя чаша/Сруб 4,5х6,5 в чашу под баню/19.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/Нижняя чаша/Сруб 4,5х6,5 в чашу под баню/20.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/Нижняя чаша/Сруб 4,5х6,5 в чашу под баню/21.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/Нижняя чаша/Сруб 4,5х6,5 в чашу под баню/22.jpg", class: 'item'}).appendTo('.items');
$('.item').eq(0).siblings().hide();
$('.item').click(function(){$(this).next().hide().slideDown();$(this).hide().slideUp();});
$('.item').last().click(function(){$('.item').first().hide().slideDown();});
$('.contain-value-title').text('Сруб 4,5х6,5 в чашу под баню');
$('.year').parent().hide();
$('.place').parent().hide();
$('.type').text('В чашу');$('.service').hide();
$('.size').text('4,5х6,5');$('.slider').css('display', 'flex');
var scrollTop = $('.category').offset().top; $(document).scrollTop(scrollTop);
});


$('.contain-12').click(function(){var x = $(this);x.siblings().hide();x.children().hide();x.addClass('.wrap');x.hide();
$('.wrap').css('display', 'flex');$('.wrap').children().css('display', 'flex');
$('<img>', { src: 'img/Проекты/Нижняя чаша/Сруб 6х8 с 5 стеной/1.jpg', class: 'item'}).appendTo('.items');
$('<img>', { src: 'img/Проекты/Нижняя чаша/Сруб 6х8 с 5 стеной/2.jpg', class: 'item'}).appendTo('.items');
$('<img>', { src: 'img/Проекты/Нижняя чаша/Сруб 6х8 с 5 стеной/3.jpg', class: 'item'}).appendTo('.items');
$('<img>', { src: 'img/Проекты/Нижняя чаша/Сруб 6х8 с 5 стеной/4.jpg', class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/Нижняя чаша/Сруб 6х8 с 5 стеной/5.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/Нижняя чаша/Сруб 6х8 с 5 стеной/6.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/Нижняя чаша/Сруб 6х8 с 5 стеной/7.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/Нижняя чаша/Сруб 6х8 с 5 стеной/8.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/Нижняя чаша/Сруб 6х8 с 5 стеной/9.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/Нижняя чаша/Сруб 6х8 с 5 стеной/10.jpg", class: 'item'}).appendTo('.items');
$('.item').eq(0).siblings().hide();
$('.item').click(function(){$(this).next().hide().slideDown();$(this).hide().slideUp();});
$('.item').last().click(function(){$('.item').first().hide().slideDown();});
$('.contain-value-title').text('Сруб 6х8 с 5 стеной');
$('.year').parent().hide();
$('.place').parent().hide();
$('.type').text('В чашу');$('.service').hide();
$('.size').text('6х8 с 5 стеной');$('.slider').css('display', 'flex');
var scrollTop = $('.category').offset().top; $(document).scrollTop(scrollTop);
});


$('.contain-13').click(function(){var x = $(this);x.siblings().hide();x.children().hide();x.addClass('.wrap');x.hide();
$('.wrap').css('display', 'flex');$('.wrap').children().css('display', 'flex');
$('<img>', { src: 'img/Проекты/Нижняя чаша/сруб 7х7 мансардный тип/1.jpg', class: 'item'}).appendTo('.items');
$('<img>', { src: 'img/Проекты/Нижняя чаша/сруб 7х7 мансардный тип/2.jpg', class: 'item'}).appendTo('.items');
$('<img>', { src: 'img/Проекты/Нижняя чаша/сруб 7х7 мансардный тип/3.jpg', class: 'item'}).appendTo('.items');
$('<img>', { src: 'img/Проекты/Нижняя чаша/сруб 7х7 мансардный тип/4.jpg', class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/Нижняя чаша/сруб 7х7 мансардный тип/5.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/Нижняя чаша/сруб 7х7 мансардный тип/6.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/Нижняя чаша/сруб 7х7 мансардный тип/7.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/Нижняя чаша/сруб 7х7 мансардный тип/8.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/Нижняя чаша/сруб 7х7 мансардный тип/9.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/Нижняя чаша/сруб 7х7 мансардный тип/10.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/Нижняя чаша/сруб 7х7 мансардный тип/11.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/Нижняя чаша/сруб 7х7 мансардный тип/12.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/Нижняя чаша/сруб 7х7 мансардный тип/13.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/Нижняя чаша/сруб 7х7 мансардный тип/14.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/Нижняя чаша/сруб 7х7 мансардный тип/15.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/Нижняя чаша/сруб 7х7 мансардный тип/16.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/Нижняя чаша/сруб 7х7 мансардный тип/17.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/Нижняя чаша/сруб 7х7 мансардный тип/18.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/Нижняя чаша/сруб 7х7 мансардный тип/19.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/Нижняя чаша/сруб 7х7 мансардный тип/20.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/Нижняя чаша/сруб 7х7 мансардный тип/21.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/Нижняя чаша/сруб 7х7 мансардный тип/22.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/Нижняя чаша/сруб 7х7 мансардный тип/23.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/Нижняя чаша/сруб 7х7 мансардный тип/24.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/Нижняя чаша/сруб 7х7 мансардный тип/25.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/Нижняя чаша/сруб 7х7 мансардный тип/26.jpg", class: 'item'}).appendTo('.items');
$('.item').eq(0).siblings().hide();
$('.item').click(function(){$(this).next().hide().slideDown();$(this).hide().slideUp();});
$('.item').last().click(function(){$('.item').first().hide().slideDown();});
$('.contain-value-title').text('Сруб 7х7 мансардный тип');
$('.year').parent().hide();
$('.place').parent().hide();
$('.type').text('В чашу');$('.service').hide();
$('.size').text('7х7');$('.slider').css('display', 'flex');
var scrollTop = $('.category').offset().top; $(document).scrollTop(scrollTop);
});


$('.contain-14').click(function(){var x = $(this);x.siblings().hide();x.children().hide();x.addClass('.wrap');x.hide();
$('.wrap').css('display', 'flex');$('.wrap').children().css('display', 'flex');
$('<img>', { src: 'img/Проекты/Нижняя чаша/Сруб 10х10 в чашу с 5 стеной/1.jpg', class: 'item'}).appendTo('.items');
$('<img>', { src: 'img/Проекты/Нижняя чаша/Сруб 10х10 в чашу с 5 стеной/2.jpg', class: 'item'}).appendTo('.items');
$('<img>', { src: 'img/Проекты/Нижняя чаша/Сруб 10х10 в чашу с 5 стеной/3.jpg', class: 'item'}).appendTo('.items');
$('<img>', { src: 'img/Проекты/Нижняя чаша/Сруб 10х10 в чашу с 5 стеной/4.jpg', class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/Нижняя чаша/Сруб 10х10 в чашу с 5 стеной/5.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/Нижняя чаша/Сруб 10х10 в чашу с 5 стеной/6.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/Нижняя чаша/Сруб 10х10 в чашу с 5 стеной/7.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/Нижняя чаша/Сруб 10х10 в чашу с 5 стеной/8.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/Нижняя чаша/Сруб 10х10 в чашу с 5 стеной/9.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/Нижняя чаша/Сруб 10х10 в чашу с 5 стеной/10.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/Нижняя чаша/Сруб 10х10 в чашу с 5 стеной/11.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/Нижняя чаша/Сруб 10х10 в чашу с 5 стеной/12.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/Нижняя чаша/Сруб 10х10 в чашу с 5 стеной/13.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/Нижняя чаша/Сруб 10х10 в чашу с 5 стеной/14.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/Нижняя чаша/Сруб 10х10 в чашу с 5 стеной/15.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/Нижняя чаша/Сруб 10х10 в чашу с 5 стеной/16.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/Нижняя чаша/Сруб 10х10 в чашу с 5 стеной/17.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/Нижняя чаша/Сруб 10х10 в чашу с 5 стеной/18.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/Нижняя чаша/Сруб 10х10 в чашу с 5 стеной/19.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/Нижняя чаша/Сруб 10х10 в чашу с 5 стеной/20.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/Нижняя чаша/Сруб 10х10 в чашу с 5 стеной/21.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/Нижняя чаша/Сруб 10х10 в чашу с 5 стеной/22.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/Нижняя чаша/Сруб 10х10 в чашу с 5 стеной/23.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/Нижняя чаша/Сруб 10х10 в чашу с 5 стеной/24.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/Нижняя чаша/Сруб 10х10 в чашу с 5 стеной/25.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/Нижняя чаша/Сруб 10х10 в чашу с 5 стеной/26.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/Нижняя чаша/Сруб 10х10 в чашу с 5 стеной/27.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/Нижняя чаша/Сруб 10х10 в чашу с 5 стеной/28.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/Нижняя чаша/Сруб 10х10 в чашу с 5 стеной/29.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/Нижняя чаша/Сруб 10х10 в чашу с 5 стеной/30.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/Нижняя чаша/Сруб 10х10 в чашу с 5 стеной/31.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/Нижняя чаша/Сруб 10х10 в чашу с 5 стеной/32.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/Нижняя чаша/Сруб 10х10 в чашу с 5 стеной/33.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/Нижняя чаша/Сруб 10х10 в чашу с 5 стеной/34.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/Нижняя чаша/Сруб 10х10 в чашу с 5 стеной/35.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/Нижняя чаша/Сруб 10х10 в чашу с 5 стеной/36.jpg", class: 'item'}).appendTo('.items');
$('.item').eq(0).siblings().hide();
$('.item').click(function(){$(this).next().hide().slideDown();$(this).hide().slideUp();});
$('.item').last().click(function(){$('.item').first().hide().slideDown();});
$('.contain-value-title').text('Сруб 10х10 в чашу с 5 стеной');
$('.year').parent().hide();
$('.place').parent().hide();
$('.type').text('В чашу');$('.service').hide();
$('.size').text('10х10');$('.slider').css('display', 'flex');
var scrollTop = $('.category').offset().top; $(document).scrollTop(scrollTop);
});


$('.contain-15').click(function(){var x = $(this);x.siblings().hide();x.children().hide();x.addClass('.wrap');x.hide();
$('.wrap').css('display', 'flex');$('.wrap').children().css('display', 'flex');
$('<img>', { src: 'img/Проекты/Нижняя чаша/Сруб в чашу/1.jpg', class: 'item'}).appendTo('.items');
$('<img>', { src: 'img/Проекты/Нижняя чаша/Сруб в чашу/2.jpg', class: 'item'}).appendTo('.items');
$('<img>', { src: 'img/Проекты/Нижняя чаша/Сруб в чашу/3.jpg', class: 'item'}).appendTo('.items');
$('<img>', { src: 'img/Проекты/Нижняя чаша/Сруб в чашу/4.jpg', class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/Нижняя чаша/Сруб в чашу/5.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/Нижняя чаша/Сруб в чашу/6.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/Нижняя чаша/Сруб в чашу/7.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/Нижняя чаша/Сруб в чашу/8.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/Нижняя чаша/Сруб в чашу/9.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/Нижняя чаша/Сруб в чашу/10.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/Нижняя чаша/Сруб в чашу/11.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/Нижняя чаша/Сруб в чашу/12.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/Нижняя чаша/Сруб в чашу/13.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/Нижняя чаша/Сруб в чашу/14.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/Нижняя чаша/Сруб в чашу/15.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/Нижняя чаша/Сруб в чашу/16.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/Нижняя чаша/Сруб в чашу/17.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/Нижняя чаша/Сруб в чашу/18.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/Нижняя чаша/Сруб в чашу/19.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/Нижняя чаша/Сруб в чашу/20.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/Нижняя чаша/Сруб в чашу/21.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/Нижняя чаша/Сруб в чашу/22.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/Нижняя чаша/Сруб в чашу/23.jpg", class: 'item'}).appendTo('.items');
$('.item').eq(0).siblings().hide();
$('.item').click(function(){$(this).next().hide().slideDown();$(this).hide().slideUp();});
$('.item').last().click(function(){$('.item').first().hide().slideDown();});
$('.contain-value-title').text('Сруб в чашу');
$('.year').parent().hide();
$('.place').parent().hide();
$('.type').text('В чашу');$('.service').hide();
$('.size').hide();$('.slider').css('display', 'flex');
var scrollTop = $('.category').offset().top; $(document).scrollTop(scrollTop);
});


$('.contain-16').click(function(){var x = $(this);x.siblings().hide();x.children().hide();x.addClass('.wrap');x.hide();
$('.wrap').css('display', 'flex');$('.wrap').children().css('display', 'flex');
$('<img>', { src: 'img/Проекты/Нижняя чаша/Сруб в чашу 7.3х9.0 с высотой 3.2 метра/1.jpg', class: 'item'}).appendTo('.items');
$('<img>', { src: 'img/Проекты/Нижняя чаша/Сруб в чашу 7.3х9.0 с высотой 3.2 метра/2.jpg', class: 'item'}).appendTo('.items');
$('<img>', { src: 'img/Проекты/Нижняя чаша/Сруб в чашу 7.3х9.0 с высотой 3.2 метра/3.jpg', class: 'item'}).appendTo('.items');
$('<img>', { src: 'img/Проекты/Нижняя чаша/Сруб в чашу 7.3х9.0 с высотой 3.2 метра/4.jpg', class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/Нижняя чаша/Сруб в чашу 7.3х9.0 с высотой 3.2 метра/5.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/Нижняя чаша/Сруб в чашу 7.3х9.0 с высотой 3.2 метра/6.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/Нижняя чаша/Сруб в чашу 7.3х9.0 с высотой 3.2 метра/7.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/Нижняя чаша/Сруб в чашу 7.3х9.0 с высотой 3.2 метра/8.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/Нижняя чаша/Сруб в чашу 7.3х9.0 с высотой 3.2 метра/9.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/Нижняя чаша/Сруб в чашу 7.3х9.0 с высотой 3.2 метра/10.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/Нижняя чаша/Сруб в чашу 7.3х9.0 с высотой 3.2 метра/11.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/Нижняя чаша/Сруб в чашу 7.3х9.0 с высотой 3.2 метра/12.jpg", class: 'item'}).appendTo('.items');
$('.item').eq(0).siblings().hide();
$('.item').click(function(){$(this).next().hide().slideDown();$(this).hide().slideUp();});
$('.item').last().click(function(){$('.item').first().hide().slideDown();});
$('.contain-value-title').text('Сруб в чашу 7.3х9.0 с высотой 3.2 метра');
$('.year').parent().hide();
$('.place').parent().hide();
$('.type').text('В чашу');$('.service').hide();
$('.size').text('7.3х9.0');$('.slider').css('display', 'flex');
var scrollTop = $('.category').offset().top; $(document).scrollTop(scrollTop);
});


$('.contain-17').click(function(){var x = $(this);x.siblings().hide();x.children().hide();x.addClass('.wrap');x.hide();
$('.wrap').css('display', 'flex');$('.wrap').children().css('display', 'flex');
$('<img>', { src: 'img/Проекты/Нижняя чаша/Сруб в чашу 8,5х10,5 с 5 стеной(мансардный тип)+вынос на балкон/1.jpg', class: 'item'}).appendTo('.items');
$('<img>', { src: 'img/Проекты/Нижняя чаша/Сруб в чашу 8,5х10,5 с 5 стеной(мансардный тип)+вынос на балкон/2.jpg', class: 'item'}).appendTo('.items');
$('<img>', { src: 'img/Проекты/Нижняя чаша/Сруб в чашу 8,5х10,5 с 5 стеной(мансардный тип)+вынос на балкон/3.jpg', class: 'item'}).appendTo('.items');
$('<img>', { src: 'img/Проекты/Нижняя чаша/Сруб в чашу 8,5х10,5 с 5 стеной(мансардный тип)+вынос на балкон/4.jpg', class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/Нижняя чаша/Сруб в чашу 8,5х10,5 с 5 стеной(мансардный тип)+вынос на балкон/5.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/Нижняя чаша/Сруб в чашу 8,5х10,5 с 5 стеной(мансардный тип)+вынос на балкон/6.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/Нижняя чаша/Сруб в чашу 8,5х10,5 с 5 стеной(мансардный тип)+вынос на балкон/7.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/Нижняя чаша/Сруб в чашу 8,5х10,5 с 5 стеной(мансардный тип)+вынос на балкон/8.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/Нижняя чаша/Сруб в чашу 8,5х10,5 с 5 стеной(мансардный тип)+вынос на балкон/9.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/Нижняя чаша/Сруб в чашу 8,5х10,5 с 5 стеной(мансардный тип)+вынос на балкон/10.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/Нижняя чаша/Сруб в чашу 8,5х10,5 с 5 стеной(мансардный тип)+вынос на балкон/11.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/Нижняя чаша/Сруб в чашу 8,5х10,5 с 5 стеной(мансардный тип)+вынос на балкон/12.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/Нижняя чаша/Сруб в чашу 8,5х10,5 с 5 стеной(мансардный тип)+вынос на балкон/13.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/Нижняя чаша/Сруб в чашу 8,5х10,5 с 5 стеной(мансардный тип)+вынос на балкон/14.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/Нижняя чаша/Сруб в чашу 8,5х10,5 с 5 стеной(мансардный тип)+вынос на балкон/15.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/Нижняя чаша/Сруб в чашу 8,5х10,5 с 5 стеной(мансардный тип)+вынос на балкон/16.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/Нижняя чаша/Сруб в чашу 8,5х10,5 с 5 стеной(мансардный тип)+вынос на балкон/17.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/Нижняя чаша/Сруб в чашу 8,5х10,5 с 5 стеной(мансардный тип)+вынос на балкон/18.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/Нижняя чаша/Сруб в чашу 8,5х10,5 с 5 стеной(мансардный тип)+вынос на балкон/19.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/Нижняя чаша/Сруб в чашу 8,5х10,5 с 5 стеной(мансардный тип)+вынос на балкон/20.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/Нижняя чаша/Сруб в чашу 8,5х10,5 с 5 стеной(мансардный тип)+вынос на балкон/21.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/Нижняя чаша/Сруб в чашу 8,5х10,5 с 5 стеной(мансардный тип)+вынос на балкон/22.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/Нижняя чаша/Сруб в чашу 8,5х10,5 с 5 стеной(мансардный тип)+вынос на балкон/23.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/Нижняя чаша/Сруб в чашу 8,5х10,5 с 5 стеной(мансардный тип)+вынос на балкон/24.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/Нижняя чаша/Сруб в чашу 8,5х10,5 с 5 стеной(мансардный тип)+вынос на балкон/25.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/Нижняя чаша/Сруб в чашу 8,5х10,5 с 5 стеной(мансардный тип)+вынос на балкон/26.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/Нижняя чаша/Сруб в чашу 8,5х10,5 с 5 стеной(мансардный тип)+вынос на балкон/27.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/Нижняя чаша/Сруб в чашу 8,5х10,5 с 5 стеной(мансардный тип)+вынос на балкон/28.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/Нижняя чаша/Сруб в чашу 8,5х10,5 с 5 стеной(мансардный тип)+вынос на балкон/29.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/Нижняя чаша/Сруб в чашу 8,5х10,5 с 5 стеной(мансардный тип)+вынос на балкон/30.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/Нижняя чаша/Сруб в чашу 8,5х10,5 с 5 стеной(мансардный тип)+вынос на балкон/31.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/Нижняя чаша/Сруб в чашу 8,5х10,5 с 5 стеной(мансардный тип)+вынос на балкон/32.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/Нижняя чаша/Сруб в чашу 8,5х10,5 с 5 стеной(мансардный тип)+вынос на балкон/33.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/Нижняя чаша/Сруб в чашу 8,5х10,5 с 5 стеной(мансардный тип)+вынос на балкон/34.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/Нижняя чаша/Сруб в чашу 8,5х10,5 с 5 стеной(мансардный тип)+вынос на балкон/35.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/Нижняя чаша/Сруб в чашу 8,5х10,5 с 5 стеной(мансардный тип)+вынос на балкон/36.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/Нижняя чаша/Сруб в чашу 8,5х10,5 с 5 стеной(мансардный тип)+вынос на балкон/37.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/Нижняя чаша/Сруб в чашу 8,5х10,5 с 5 стеной(мансардный тип)+вынос на балкон/38.jpg", class: 'item'}).appendTo('.items');
$('.item').eq(0).siblings().hide();
$('.item').click(function(){$(this).next().hide().slideDown();$(this).hide().slideUp();});
$('.item').last().click(function(){$('.item').first().hide().slideDown();});
$('.contain-value-title').text('Сруб в чашу 8,5х10,5 с 5 стеной(мансардный тип)+вынос на балкон');
$('.year').parent().hide();
$('.place').parent().hide();
$('.type').text('В чашу');$('.service').hide();
$('.size').text('8,5х10,5');$('.slider').css('display', 'flex');
var scrollTop = $('.category').offset().top; $(document).scrollTop(scrollTop);
});


$('.contain-18').click(function(){var x = $(this);x.siblings().hide();x.children().hide();x.addClass('.wrap');x.hide();
$('.wrap').css('display', 'flex');$('.wrap').children().css('display', 'flex');
$('<img>', { src: 'img/Проекты/Нижняя чаша/Сруб в чашу 8х9 с высотой 6 метров (2 этажа)/1.jpg', class: 'item'}).appendTo('.items');
$('<img>', { src: 'img/Проекты/Нижняя чаша/Сруб в чашу 8х9 с высотой 6 метров (2 этажа)/2.jpg', class: 'item'}).appendTo('.items');
$('<img>', { src: 'img/Проекты/Нижняя чаша/Сруб в чашу 8х9 с высотой 6 метров (2 этажа)/3.jpg', class: 'item'}).appendTo('.items');
$('<img>', { src: 'img/Проекты/Нижняя чаша/Сруб в чашу 8х9 с высотой 6 метров (2 этажа)/4.jpg', class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/Нижняя чаша/Сруб в чашу 8х9 с высотой 6 метров (2 этажа)/5.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/Нижняя чаша/Сруб в чашу 8х9 с высотой 6 метров (2 этажа)/6.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/Нижняя чаша/Сруб в чашу 8х9 с высотой 6 метров (2 этажа)/7.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/Нижняя чаша/Сруб в чашу 8х9 с высотой 6 метров (2 этажа)/8.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/Нижняя чаша/Сруб в чашу 8х9 с высотой 6 метров (2 этажа)/9.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/Нижняя чаша/Сруб в чашу 8х9 с высотой 6 метров (2 этажа)/10.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/Нижняя чаша/Сруб в чашу 8х9 с высотой 6 метров (2 этажа)/11.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/Нижняя чаша/Сруб в чашу 8х9 с высотой 6 метров (2 этажа)/12.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/Нижняя чаша/Сруб в чашу 8х9 с высотой 6 метров (2 этажа)/13.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/Нижняя чаша/Сруб в чашу 8х9 с высотой 6 метров (2 этажа)/14.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/Нижняя чаша/Сруб в чашу 8х9 с высотой 6 метров (2 этажа)/15.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/Нижняя чаша/Сруб в чашу 8х9 с высотой 6 метров (2 этажа)/16.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/Нижняя чаша/Сруб в чашу 8х9 с высотой 6 метров (2 этажа)/17.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/Нижняя чаша/Сруб в чашу 8х9 с высотой 6 метров (2 этажа)/18.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/Нижняя чаша/Сруб в чашу 8х9 с высотой 6 метров (2 этажа)/19.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/Нижняя чаша/Сруб в чашу 8х9 с высотой 6 метров (2 этажа)/20.jpg", class: 'item'}).appendTo('.items');
$('.item').eq(0).siblings().hide();
$('.item').click(function(){$(this).next().hide().slideDown();$(this).hide().slideUp();});
$('.item').last().click(function(){$('.item').first().hide().slideDown();});
$('.contain-value-title').text('Сруб в чашу 8х9 с высотой 6 метров (2 этажа)');
$('.year').parent().hide();
$('.place').parent().hide();
$('.type').text('В чашу'); $('.service').show();
$('.size').text('8x9');$('.slider').css('display', 'flex');
var scrollTop = $('.category').offset().top; $(document).scrollTop(scrollTop);
});


$('.contain-19').click(function(){var x = $(this);x.siblings().hide();x.children().hide();x.addClass('.wrap');x.hide();
$('.wrap').css('display', 'flex');$('.wrap').children().css('display', 'flex');
$('<img>', { src: 'img/Проекты/Нижняя чаша/Сруб в чашу 9х11 и кровля/1.jpg', class: 'item'}).appendTo('.items');
$('<img>', { src: 'img/Проекты/Нижняя чаша/Сруб в чашу 9х11 и кровля/2.jpg', class: 'item'}).appendTo('.items');
$('<img>', { src: 'img/Проекты/Нижняя чаша/Сруб в чашу 9х11 и кровля/3.jpg', class: 'item'}).appendTo('.items');
$('<img>', { src: 'img/Проекты/Нижняя чаша/Сруб в чашу 9х11 и кровля/4.jpg', class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/Нижняя чаша/Сруб в чашу 9х11 и кровля/5.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/Нижняя чаша/Сруб в чашу 9х11 и кровля/6.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/Нижняя чаша/Сруб в чашу 9х11 и кровля/7.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/Нижняя чаша/Сруб в чашу 9х11 и кровля/8.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/Нижняя чаша/Сруб в чашу 9х11 и кровля/9.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/Нижняя чаша/Сруб в чашу 9х11 и кровля/10.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/Нижняя чаша/Сруб в чашу 9х11 и кровля/11.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/Нижняя чаша/Сруб в чашу 9х11 и кровля/12.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/Нижняя чаша/Сруб в чашу 9х11 и кровля/13.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/Нижняя чаша/Сруб в чашу 9х11 и кровля/14.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/Нижняя чаша/Сруб в чашу 9х11 и кровля/15.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/Нижняя чаша/Сруб в чашу 9х11 и кровля/16.jpg", class: 'item'}).appendTo('.items');
$('.item').eq(0).siblings().hide();
$('.item').click(function(){$(this).next().hide().slideDown();$(this).hide().slideUp();});
$('.item').last().click(function(){$('.item').first().hide().slideDown();});
$('.contain-value-title').text('Сруб в чашу 9х11 и кровля');
$('.year').parent().hide();
$('.place').parent().hide();
$('.type').text('В чашу');$('.service').hide();
$('.size').text('9х11');$('.slider').css('display', 'flex');
var scrollTop = $('.category').offset().top; $(document).scrollTop(scrollTop);
});


$('.contain-20').click(function(){var x = $(this);x.siblings().hide();x.children().hide();x.addClass('.wrap');x.hide();
$('.wrap').css('display', 'flex');$('.wrap').children().css('display', 'flex');
$('<img>', { src: 'img/Проекты/Кровля/Кровля сруба с размерами 6.3х9.4/1.jpg', class: 'item'}).appendTo('.items');
$('<img>', { src: 'img/Проекты/Кровля/Кровля сруба с размерами 6.3х9.4/2.jpg', class: 'item'}).appendTo('.items');
$('<img>', { src: 'img/Проекты/Кровля/Кровля сруба с размерами 6.3х9.4/3.jpg', class: 'item'}).appendTo('.items');
$('<img>', { src: 'img/Проекты/Кровля/Кровля сруба с размерами 6.3х9.4/4.jpg', class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/Кровля/Кровля сруба с размерами 6.3х9.4/5.jpg", class: 'item'}).appendTo('.items');
$('.item').eq(0).siblings().hide();
$('.item').click(function(){$(this).next().hide().slideDown();$(this).hide().slideUp();});
$('.item').last().click(function(){$('.item').first().hide().slideDown();});
$('.contain-value-title').text('Кровля сруба с размерами 6.3х9.4');
$('.year').parent().hide();
$('.place').parent().hide();
$('.type').text('В лапу');$('.service').hide();
$('.size').text('6.3x9.4');$('.slider').css('display', 'flex');
var scrollTop = $('.category').offset().top; $(document).scrollTop(scrollTop);
});


$('.contain-21').click(function(){var x = $(this);x.siblings().hide();x.children().hide();x.addClass('.wrap');x.hide();
$('.wrap').css('display', 'flex');$('.wrap').children().css('display', 'flex');
$('<img>', { src: 'img/Проекты/Кровля/Крыша для сруба с размерами 6.5 х 8.5/1.jpg', class: 'item'}).appendTo('.items');
$('<img>', { src: 'img/Проекты/Кровля/Крыша для сруба с размерами 6.5 х 8.5/2.jpg', class: 'item'}).appendTo('.items');
$('<img>', { src: 'img/Проекты/Кровля/Крыша для сруба с размерами 6.5 х 8.5/3.jpg', class: 'item'}).appendTo('.items');
$('<img>', { src: 'img/Проекты/Кровля/Крыша для сруба с размерами 6.5 х 8.5/4.jpg', class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/Кровля/Крыша для сруба с размерами 6.5 х 8.5/5.jpg", class: 'item'}).appendTo('.items');
$('.item').eq(0).siblings().hide();
$('.item').click(function(){$(this).next().hide().slideDown();$(this).hide().slideUp();});
$('.item').last().click(function(){$('.item').first().hide().slideDown();});
$('.contain-value-title').text('Крыша для сруба с размерами 6.5 х 8.5');
$('.year').parent().hide();
$('.place').parent().hide();
$('.type').text('В лапу');$('.service').hide();
$('.size').text('6.5x8.5');$('.slider').css('display', 'flex');
var scrollTop = $('.category').offset().top; $(document).scrollTop(scrollTop);
});


$('.contain-22').click(function(){var x = $(this);x.siblings().hide();x.children().hide();x.addClass('.wrap');x.hide();
$('.wrap').css('display', 'flex');$('.wrap').children().css('display', 'flex');
$('<img>', { src: 'img/Проекты/Кровля/Сруб 4.5х6 с ломанной кровлей/1.jpg', class: 'item'}).appendTo('.items');
$('<img>', { src: 'img/Проекты/Кровля/Сруб 4.5х6 с ломанной кровлей/2.jpg', class: 'item'}).appendTo('.items');
$('<img>', { src: 'img/Проекты/Кровля/Сруб 4.5х6 с ломанной кровлей/3.jpg', class: 'item'}).appendTo('.items');
$('<img>', { src: 'img/Проекты/Кровля/Сруб 4.5х6 с ломанной кровлей/4.jpg', class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/Кровля/Сруб 4.5х6 с ломанной кровлей/5.jpg", class: 'item'}).appendTo('.items');
$('.item').eq(0).siblings().hide();
$('.item').click(function(){$(this).next().hide().slideDown();$(this).hide().slideUp();});
$('.item').last().click(function(){$('.item').first().hide().slideDown();});
$('.contain-value-title').text('Сруб 4.5х6 с ломанной кровлей');
$('.year').parent().hide();
$('.place').parent().hide();
$('.type').text('В лапу');$('.service').hide();
$('.size').text('4.5x6');$('.slider').css('display', 'flex');$('.size').hide();
var scrollTop = $('.category').offset().top; $(document).scrollTop(scrollTop);
});


$('.contain-23').click(function(){var x = $(this);x.siblings().hide();x.children().hide();x.addClass('.wrap');x.hide();
$('.wrap').css('display', 'flex');$('.wrap').children().css('display', 'flex');
$('<img>', { src: 'img/Проекты/Кровля/Сруб 6х8/1.jpg', class: 'item'}).appendTo('.items');
$('<img>', { src: 'img/Проекты/Кровля/Сруб 6х8/2.jpg', class: 'item'}).appendTo('.items');
$('<img>', { src: 'img/Проекты/Кровля/Сруб 6х8/3.jpg', class: 'item'}).appendTo('.items');
$('<img>', { src: 'img/Проекты/Кровля/Сруб 6х8/4.jpg', class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/Кровля/Сруб 6х8/5.jpg", class: 'item'}).appendTo('.items');
$('.item').eq(0).siblings().hide();
$('.item').click(function(){$(this).next().hide().slideDown();$(this).hide().slideUp();});
$('.item').last().click(function(){$('.item').first().hide().slideDown();});
$('.contain-value-title').text('Кровля/Сруб 6х8');
$('.year').parent().hide();
$('.place').parent().hide();
$('.type').parent().hide();$('.service').hide();
$('.size').size('6x8');$('.slider').css('display', 'flex');
var scrollTop = $('.category').offset().top; $(document).scrollTop(scrollTop);
});


$('.contain-24').click(function(){var x = $(this);x.siblings().hide();x.children().hide();x.addClass('.wrap');x.hide();
$('.wrap').css('display', 'flex');$('.wrap').children().css('display', 'flex');
$('<img>', { src: 'img/Проекты/Кровля/сруб 6х8 полутораэтажа/1.jpg', class: 'item'}).appendTo('.items');
$('.item').eq(0).siblings().hide();
$('.item').click(function(){$(this).next().hide().slideDown();$(this).hide().slideUp();});
$('.item').last().click(function(){$('.item').first().hide().slideDown();});
$('.contain-value-title').text('Сруб 6х8 полутораэтажа');
$('.year').parent().hide();
$('.place').parent().hide();
$('.type').parent().hide(); $('.service').show();
$('.size').text('6x8');$('.slider').css('display', 'flex');
var scrollTop = $('.category').offset().top; $(document).scrollTop(scrollTop);
});


$('.contain-25').click(function(){var x = $(this);x.siblings().hide();x.children().hide();x.addClass('.wrap');x.hide();
$('.wrap').css('display', 'flex');$('.wrap').children().css('display', 'flex');
$('<img>', { src: 'img/Проекты/Кровля/Сруб 6х8 с выносом 2 метра. Кровля 8х8/1.jpg', class: 'item'}).appendTo('.items');
$('<img>', { src: 'img/Проекты/Кровля/Сруб 6х8 с выносом 2 метра. Кровля 8х8/2.jpg', class: 'item'}).appendTo('.items');
$('<img>', { src: 'img/Проекты/Кровля/Сруб 6х8 с выносом 2 метра. Кровля 8х8/3.jpg', class: 'item'}).appendTo('.items');
$('<img>', { src: 'img/Проекты/Кровля/Сруб 6х8 с выносом 2 метра. Кровля 8х8/4.jpg', class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/Кровля/Сруб 6х8 с выносом 2 метра. Кровля 8х8/5.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/Кровля/Сруб 6х8 с выносом 2 метра. Кровля 8х8/6.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/Кровля/Сруб 6х8 с выносом 2 метра. Кровля 8х8/7.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/Кровля/Сруб 6х8 с выносом 2 метра. Кровля 8х8/8.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/Кровля/Сруб 6х8 с выносом 2 метра. Кровля 8х8/9.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/Кровля/Сруб 6х8 с выносом 2 метра. Кровля 8х8/10.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/Кровля/Сруб 6х8 с выносом 2 метра. Кровля 8х8/11.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/Кровля/Сруб 6х8 с выносом 2 метра. Кровля 8х8/12.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/Кровля/Сруб 6х8 с выносом 2 метра. Кровля 8х8/13.jpg", class: 'item'}).appendTo('.items');
$('.item').eq(0).siblings().hide();
$('.item').click(function(){$(this).next().hide().slideDown();$(this).hide().slideUp();});
$('.item').last().click(function(){$('.item').first().hide().slideDown();});
$('.contain-value-title').text('Сруб 6х8 с выносом 2 метра. Кровля 8х8');
$('.year').parent().hide();
$('.place').parent().hide();
$('.type').text('В лапу');$('.service').hide();
$('.size').text('6х8');$('.slider').css('display', 'flex');
var scrollTop = $('.category').offset().top; $(document).scrollTop(scrollTop);
});


$('.contain-26').click(function(){var x = $(this);x.siblings().hide();x.children().hide();x.addClass('.wrap');x.hide();
$('.wrap').css('display', 'flex');$('.wrap').children().css('display', 'flex');
$('<img>', { src: 'img/Проекты/Кровля/Сруб в лапу 3х5.5/1.jpg', class: 'item'}).appendTo('.items');
$('<img>', { src: 'img/Проекты/Кровля/Сруб в лапу 3х5.5/2.jpg', class: 'item'}).appendTo('.items');
$('<img>', { src: 'img/Проекты/Кровля/Сруб в лапу 3х5.5/3.jpg', class: 'item'}).appendTo('.items');
$('<img>', { src: 'img/Проекты/Кровля/Сруб в лапу 3х5.5/4.jpg', class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/Кровля/Сруб в лапу 3х5.5/5.jpg", class: 'item'}).appendTo('.items');
$('.item').eq(0).siblings().hide();
$('.item').click(function(){$(this).next().hide().slideDown();$(this).hide().slideUp();});
$('.item').last().click(function(){$('.item').first().hide().slideDown();});
$('.contain-value-title').text('Сруб в лапу 3х5.5');
$('.year').parent().hide();
$('.place').parent().hide();
$('.type').text('В лапу'); $('.service').hide();
$('.size').text('3x5');$('.slider').css('display', 'flex');
var scrollTop = $('.category').offset().top; $(document).scrollTop(scrollTop);
});


$('.contain-27').click(function(){var x = $(this);x.siblings().hide();x.children().hide();x.addClass('.wrap');x.hide();
$('.wrap').css('display', 'flex');$('.wrap').children().css('display', 'flex');
$('<img>', { src: 'img/Проекты/Кровля/Сруб в лапу 6х9/1.jpg', class: 'item'}).appendTo('.items');
$('<img>', { src: 'img/Проекты/Кровля/Сруб в лапу 6х9/2.jpg', class: 'item'}).appendTo('.items');
$('<img>', { src: 'img/Проекты/Кровля/Сруб в лапу 6х9/3.jpg', class: 'item'}).appendTo('.items');
$('<img>', { src: 'img/Проекты/Кровля/Сруб в лапу 6х9/4.jpg', class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/Кровля/Сруб в лапу 6х9/5.jpg", class: 'item'}).appendTo('.items');
$('.item').eq(0).siblings().hide();
$('.item').click(function(){$(this).next().hide().slideDown();$(this).hide().slideUp();});
$('.item').last().click(function(){$('.item').first().hide().slideDown();});
$('.contain-value-title').text('Сруб в лапу 6х9');
$('.year').parent().hide();
$('.place').parent().hide();
$('.type').text('В лапу');$('.service').hide();
$('.size').text('6х9');$('.slider').css('display', 'flex');
var scrollTop = $('.category').offset().top; $(document).scrollTop(scrollTop);
});



$('.contain-28').click(function(){var x = $(this);x.siblings().hide();x.children().hide();x.addClass('.wrap');x.hide();
$('.wrap').css('display', 'flex');$('.wrap').children().css('display', 'flex');
$('<img>', { src: 'img/Проекты/Кровля/Сруб в лапу 9х12/1.jpg', class: 'item'}).appendTo('.items');
$('<img>', { src: 'img/Проекты/Кровля/Сруб в лапу 9х12/2.jpg', class: 'item'}).appendTo('.items');
$('<img>', { src: 'img/Проекты/Кровля/Сруб в лапу 9х12/3.jpg', class: 'item'}).appendTo('.items');
$('<img>', { src: 'img/Проекты/Кровля/Сруб в лапу 9х12/4.jpg', class: 'item'}).appendTo('.items');
$('.item').eq(0).siblings().hide();
$('.item').click(function(){$(this).next().hide().slideDown();$(this).hide().slideUp();});
$('.item').last().click(function(){$('.item').first().hide().slideDown();});
$('.contain-value-title').text('Сруб в лапу 9х12');
$('.year').parent().hide();
$('.place').parent().hide();
$('.type').text('В лапу'); $('.service').hide();
$('.size').text('9х12');$('.slider').css('display', 'flex');
var scrollTop = $('.category').offset().top; $(document).scrollTop(scrollTop);
});


$('.contain-29').click(function(){var x = $(this);x.siblings().hide();x.children().hide();x.addClass('.wrap');x.hide();
$('.wrap').css('display', 'flex');$('.wrap').children().css('display', 'flex');
$('<img>', { src: 'img/Проекты/Кровля/Сруб в чашу 8х9 в чашу/1.jpg', class: 'item'}).appendTo('.items');
$('.item').eq(0).siblings().hide();
$('.item').click(function(){$(this).next().hide().slideDown();$(this).hide().slideUp();});
$('.item').last().click(function(){$('.item').first().hide().slideDown();});
$('.contain-value-title').text('Сруб в чашу 8х9 в чашу');
$('.year').parent().hide();
$('.place').parent().hide();
$('.type').text('В чашу'); $('.service').hide();
$('.size').text('8х9');$('.slider').css('display', 'flex');
var scrollTop = $('.category').offset().top; $(document).scrollTop(scrollTop);
});


$('.contain-30').click(function(){var x = $(this);x.siblings().hide();x.children().hide();x.addClass('.wrap');x.hide();
$('.wrap').css('display', 'flex');$('.wrap').children().css('display', 'flex');
$('<img>', { src: 'img/Проекты/Дикая рубка/Сруб  в диком стиле 6х9 - мансардный тип/1.jpg', class: 'item'}).appendTo('.items');
$('<img>', { src: 'img/Проекты/Дикая рубка/Сруб  в диком стиле 6х9 - мансардный тип/2.jpg', class: 'item'}).appendTo('.items');
$('<img>', { src: 'img/Проекты/Дикая рубка/Сруб  в диком стиле 6х9 - мансардный тип/3.jpg', class: 'item'}).appendTo('.items');
$('<img>', { src: 'img/Проекты/Дикая рубка/Сруб  в диком стиле 6х9 - мансардный тип/4.jpg', class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/Дикая рубка/Сруб  в диком стиле 6х9 - мансардный тип/5.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/Дикая рубка/Сруб  в диком стиле 6х9 - мансардный тип/6.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/Дикая рубка/Сруб  в диком стиле 6х9 - мансардный тип/7.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/Дикая рубка/Сруб  в диком стиле 6х9 - мансардный тип/8.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/Дикая рубка/Сруб  в диком стиле 6х9 - мансардный тип/9.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/Дикая рубка/Сруб  в диком стиле 6х9 - мансардный тип/10.jpg", class: 'item'}).appendTo('.items');
$('<img>', { src: "img/Проекты/Дикая рубка/Сруб  в диком стиле 6х9 - мансардный тип/11.jpg", class: 'item'}).appendTo('.items');
$('.item').eq(0).siblings().hide();
$('.item').click(function(){$(this).next().hide().slideDown();$(this).hide().slideUp();});
$('.item').last().click(function(){$('.item').first().hide().slideDown();});
$('.contain-value-title').text('Сруб  в диком стиле 6х9 - мансардный тип');
$('.year').parent().hide();
$('.place').parent().hide();
$('.type').text('Дикая рубка');$('.service').hide();
$('.size').text('6х9');$('.slider').css('display', 'flex');
var scrollTop = $('.category').offset().top; $(document).scrollTop(scrollTop);
});

});
