jQuery(document).ready(function ($) {
	var optionTypeClass = 'fw-option-type-background-image';
	var eventNamePrefix = 'fw:option-type:background-image:';

	fwEvents.on('fw:options:init', function (data) {
		var $options = data.$elements.find('.'+ optionTypeClass +':not(.initialized)');

		$options.toArray().map(function (el) {
			fw.options.onChangeByContext(el, function (data) {
				if (data.type === 'radio') {
					var $predefined = jQuery(data.el).closest('.fw-inner').find('.predefined');
					var $custom = jQuery(data.el).closest('.fw-inner').find('.custom');

					if (data.value === 'custom') {
						$predefined.hide();
						$custom.show();
					} else {
						$predefined.show();
						$custom.hide();
					}
				}

				fw.options.triggerChangeForEl(data.context);
			});
		});

		// route inner image-picker events as this option events
		{
			$options.on(
				'fw:option-type:image-picker:clicked',
				'.fw-option-type-image-picker',
				function(e, data) {
					jQuery(this).trigger(eventNamePrefix + 'clicked', data);
				}
			);

			$options.on(
				'fw:option-type:image-picker:changed',
				'.fw-option-type-image-picker',
				function(e, data) {
					jQuery(this).trigger(eventNamePrefix + 'changed', data);
				}
			);
		}

		$options.addClass('initialized');
	});
});
