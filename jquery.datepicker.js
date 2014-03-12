/*
	jQuery date picker
	2014-02-20
	Nicolas Bouliane, http://nicolasbouliane.com

	A simple, cross-browser date picker that doesn't suck. Requires moment.js.
	
	How to use it:

	1. Create an input:
		<input class='date' type='text'>

	2. Apply the .datepicker() function to this element:
		$('input.date').dropdown()
	
*/
;(function($){
	$.fn.extend({
		datepicker: function() {
			return this.each(function(){
				//Apply the plugin
				$(this).addClass('datepicker');

				$(this).next('.hint').remove();
				$(this).after($('<span class="hint">yyyy-mm-dd</span>'));

				if($(this).not(':empty')){
					var date = moment($(this).val(),'YYYY-MM-DD',true);
					if(date.isValid()){
						$(this)
							.addClass('valid')
							.removeClass('invalid')
							.next('.hint')
								.addClass('valid')
								.removeClass('invalid')
								.text(date.format('ll'));
					}
				}

				//Only allow certain characters
				$(this).on('keypress',function(e){
					charCode = e.charCode || e.keyCode; //IE stores charCode in keyCode, because why not
					if((charCode>57 || charCode<48) && charCode!=45 && charCode!=8 && charCode!=46){
						e.preventDefault(); //Only allow 0-9, -, del and backspace
					}
				})

				//Validate the input, update the hint
				$(this).on('keyup focus',function(){
					var hint = $(this).val() + 'yyyy-mm-dd'.substring($(this).val().length);
					var date = moment($(this).val(),'YYYY-MM-DD',true);
					if(date.isValid()){
						$(this)
							.addClass('valid')
							.removeClass('invalid')
							.next('.hint')
								.addClass('valid')
								.removeClass('invalid')
								.text(date.format('ll'));
					}
					else{
						if($(this).val()===''){
							$(this)
								.removeClass('valid invalid')
								.next('.hint')
									.removeClass('valid invalid')
									.text(hint);
						}
						else{
							$(this)
								.addClass('invalid')
								.removeClass('valid')
								.next('.hint')
									.addClass('invalid')
									.removeClass('valid')
									.text(hint);
						}
					}
				})

				$(this).on('blur',function(){
					//Drop invalid values
					var date = moment($(this).val(), "YYYY-MM-DD", true);
					if(!date.isValid()){
						$(this).addClass('invalid').removeClass('valid');
						$(this).next('.hint').text('Invalid date')
					}
				})

			});
		}
	});
})(jQuery);
