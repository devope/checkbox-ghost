// wrapper (string): jquery selector

function checkboxGhost(wrapper)
{
	let ghosts = document.getElementsByClassName('checkbox-ghost');
	for (var i = 0; i < ghosts.length; i++) {
		if(ghosts[i].value == ""){
			ghosts[i].value = 0;
		}
	}

	$('.checkbox-entity').click(function()
	{
		let ghost = $(this).parents(wrapper).find('.checkbox-ghost');

		if($(this).is(':checked')){
			$(ghost).val(1);
		} else {
			$(ghost).val(0);
		}
	});
}
