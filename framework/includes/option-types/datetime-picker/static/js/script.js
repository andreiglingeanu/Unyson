(function($, fwe) {
	jQuery.datetimepicker.setLocale(jQuery('html').attr('lang').split('-').shift());

	var init = function() {
		var $container = $(this),
			$input = $container.find('.fw-option-type-text'),
			data = {
				options: $container.data('datetime-attr'),
				el: $input,
				container: $container
			};

		fwe.trigger('fw:options:datetime-picker:before-init', data);
		$input.datetimepicker(data.options)
			.on('changeDate', function (e) {
				fw.options.triggerChangeForEl(
					jQuery(e.target).closest('[data-fw-option-type="datetime-picker"]'), {
						value: e.target.value
					}
				);
			});
	};

	fwe.on('fw:options:init', function(data) {
		data.$elements
			.find('.fw-option-type-datetime-picker').each(init)
			.addClass('fw-option-initialized');
	});

})(jQuery, fwEvents);
