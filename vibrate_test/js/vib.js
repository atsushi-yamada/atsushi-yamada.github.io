jQuery(function ($) {
	$('input[type="email"]').on('blur', function () {
		if ($(this).val() === '') {
			$('#mail-alert').fadeIn('slow').text('メールアドレスが入力されていません');
			navigator.vibrate(100);
		} else if (!$(this).val().match(/^([a-zA-Z0-9])+([a-zA-Z0-9\._-])*@([a-zA-Z0-9_-])+([a-zA-Z0-9\._-]+)+$/)) {
			$('#mail-alert').fadeIn('slow').text('メールアドレスの形式になっていません');
			navigator.vibrate(100);
		} else {
			$('#mail-alert').fadeOut('fast');
		}
	});
	$('input[type="tel"]').on('blur', function () {
		if ($(this).val() === '') {
			$('#tel-alert').fadeIn('slow').text('電話番号が入力されていません');
			navigator.vibrate(100);
		} else {
			$('#tel-alert').fadeOut('fast');
		}
	});
});