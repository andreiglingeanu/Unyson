jQuery(function ($) {

	/**
	 * Radios
	 */
	$(document).on('change', '.fw-option-type-radio', function (e) {
		fw.options.triggerChangeForEl(e.target, {
			value: e.target.value
		});
	});

});
