$(document).ready(function(){

	/* identify the variables */

	/* function */


	/* call the action */
	 $('.featureHidden').hide();

	 $("#features div").hover(function(){

	 		$(this).show("slow", function(){
	 			$('.featureHidden').slideUp("slow");
	 		});
	 		

	 	
	 });


});


		// $(this).slideUp(); //have a black background slide up
		// $().show();
		// $(this).addClass();
		// $(this).html(); //add html text
		// $(this).click() //goes to it destinated page.
