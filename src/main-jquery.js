
$(()=>{

	$('.jquery button.btn-primary').prop('disabled', true);
	
	$('.jquery textarea').on('input', function() {
		// body...

		if($('.js-add-photo-button').hasClass('photo-added')){
			$('.jquery span').text(140 - 27 - $('jquery textarea').val().length)
		}else {
			$('.jquery span').text(140 - $(this).val().length);
		}

		if($(this).val().length > 0){
			$('.jquery button.btn-primary').prop('disabled', false);
		}else{
			$('.jquery button.btn-primary').prop('disabled', true);
		}

	});	
	
	$('.js-add-photo-button').on('click', function(){
		if($(this).hasClass('photo-added')){
			$(this)
				.removeClass('photo-added')
				.text('Add Photo');
				$('.jquery span').text(140 - $(this).val().length);
			if($('.jquery button.btn-primary').val().length === 0) {
				$('.jquery button.btn-primary').prop('disabled', true);
			}
		}else {
			$(this)
				.addClass('photo-added')
				.text('photo-added');
				$('.jquery span').text(140 - 27 - $('jquery textarea').val().length)
		}
	});
});