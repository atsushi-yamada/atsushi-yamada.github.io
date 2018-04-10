jQuery(function($) {
	$('.top-of-page').each(function() {
		$(this).on('inview', function(event, isInView) {
			if (isInView) {
				var nextUrl = $(this).attr('data-url');
				var needUpdateUrl = window.location.href !== nextUrl;
				if (needUpdateUrl) {
					window.history.pushState(null, null, nextUrl);
				}
			}
		});
	});

	$('.infinite-scroll').infinitescroll({
		loading: {
			msgText: '記事を読み込み中...',
			finishedMsg: 'もうこれ以上記事がありませんm(_ _)m'
		},
		navSelector  : '.next-link',
		nextSelector : '.next-link a',
		itemSelector : '.infinite-scroll-inner'
	});
});