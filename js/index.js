$(document).ready(function(){


	/* navigation to stick to the top */
	
	 $(window).scroll(function () {
      //nav bar to stick.  
      console.log($(window).scrollTop())
	    if ($(window).scrollTop() > 280) {
	      $('header nav').addClass('navbar-fixed');
	    }
	    if ($(window).scrollTop() < 281) {
	      $('header nav').removeClass('navbar-fixed');
	    }
  	});

	/* navigation call to action */
	// $('.menu').click(function(){
	// 	event.preventDefault();
	// 	$('ul').show();
	// });

	/* features call to action action */
	$('.featureHidden').hide();

 	$("#features div").hover(function(){
 		event.preventDefault();
 		$(this).children('.featureHidden').show('slow');
 	}, function(){
 		$(this).children('.featureHidden').hide();
 	});

 	/* Hamburger call to action action */
 	function menu (){
		$('header nav ul').toggleClass('toggleHamburger');
	};

	$('.hamburger').click(menu);



});

