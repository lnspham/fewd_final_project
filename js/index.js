$(document).ready(function(){

	/*identify the variables*/

	/*provide the actions*/

	//Features: slide up
	function slideUpContent(event){
		event.preventDefault();
		$('#show-this-on-click').slideUp(2000);
	}

	/* call the action */
	$('#hr').click(slideUpContent);


});
