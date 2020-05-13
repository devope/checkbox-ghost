function initGhostCheckbox(){
	$('.checkbox-ghost').click(function(){
		let hiddenPrev = $(this).parents('.checkbox').find('input[type=text]');
		if($(hiddenPrev).val() == 0 || !$(hiddenPrev).val()){
			$(hiddenPrev).val(1);
		} else {
			$(hiddenPrev).val(0);
		}
	});
}
