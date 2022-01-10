$(window).on("load", function(){

	$(".loader").fadeOut(300); 

})





$(document).ready(function() {
	$('#slides').superslides({
		animation: 'fade',
		play: 3000,
		pagination: false
	});


	var typed = new Typed(".typed", {

		strings: ["Software Engineer.", "Full Stack Web Developer."],
		typeSpeed: 70,
		loop: true,
		startDelay: 1000, 
		showCursor: false

	});

	$("[data-fancybox]").fancybox(); 

	$(".items").isotope({
		filter: '*',
		animationOptions: {
			duration: 1500,
			easing: 'linear',
			queue: false
		}
	})


	$("#filters a").click(function() {
		$("#filters .current").removeClass("current"); 
		$(this).addClass("current");

		var selector = $(this).attr("data-filter"); 

		$(".items").isotope({
			filter: selector,
			animationOptions: {
				duration: 1500,
				easing: 'linear',
				queue: false
			}
		});

		return false; 

	});

	const nav = $("#navigation");

	const navTop = nav.offset().top;

	$(window).on("scroll", stickyNavigation);

	function stickyNavigation(){

		var body = $("body"); 

		if($(window).scrollTop() >= navTop){
			body.css("padding-top", nav.outerHeight() + "px");
			body.addClass("fixedNav");
		}
		else{
			body.css("padding-top", 0);
			body.removeClass("fixedNav");
		}



	}







});