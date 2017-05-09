jQuery(function ($) {

	$(document).on(
		'change',
		[
			'[data-fw-option-type="text"]',
			'[data-fw-option-type="hidden"]',
			'[data-fw-option-type="password"]',
			'[data-fw-option-type="textarea"]',
			'[data-fw-option-type="html"]',

			'[data-fw-option-type="radio"]',
			'[data-fw-option-type="checkbox"]',
			'[data-fw-option-type="select"]'
		].join(', '),
		function (e) {
			fw.options.triggerChangeForEl(e.target, {
				value: (e.target.type === 'checkbox')
					?  e.target.checked
					: e.target.value
			});
		}
	);

	$(document).on(
		'change',
		[
			'[data-fw-option-type="checkboxes"]',
		].join(', '),
		function (e) {

			var checkboxes = $(e.target).closest(
				'[data-fw-option-type="checkboxes"]'
			).find('[type="checkbox"]').slice(1);

			var value = {};

			checkboxes.toArray().map(function (el) {
				value[$(el).attr('data-fw-checkbox-id')] = el.checked;
			});

			fw.options.triggerChangeForEl(e.target, {
				value: value
			});
		}
	);
});
