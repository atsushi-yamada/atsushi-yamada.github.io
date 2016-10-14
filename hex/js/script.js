jQuery(function($) {

		
	var count = 0;
	
	$('.submit-btn').on('click keypress',function() {
		
		item01();
		item03();
		item02();
		item04();
		
		function item01(){
	
			var lists = [
			  "Get",
			  "Wild",
			  "and",
			  "Tough"
			];

			var num = Math.floor(Math.random() * lists.length);
			document.getElementById('output01').innerHTML = lists[num];
		}
		
		function item02(){
	
			var lists = [
			  "Get",
			  "Wild",
			  "and",
			  "Tough"
			];

			var num = Math.floor(Math.random() * lists.length);
			document.getElementById('output02').innerHTML = lists[num];
		}
		
		function item03(){
	
			var lists = [
			  "Get",
			  "Wild",
			  "and",
			  "Tough"
			];

			var num = Math.floor(Math.random() * lists.length);
			document.getElementById('output03').innerHTML = lists[num];
		}
		
		function item04(){
	
			var lists = [
			  "Get",
			  "Wild",
			  "and",
			  "Tough"
			];

			var num = Math.floor(Math.random() * lists.length);
			document.getElementById('output04').innerHTML = lists[num];
		}
		count++;
		$(".try-count-block").text("Get Wildに" + count + "回チャレンジしました");
		
		if($('#output01').text() == 'Get' && $('#output02').text() == 'Wild' && $('#output03').text() == 'and' && $('#output04').text() == 'Tough' ) {
			$('.result-txt-box').css('display','block').text("Get Wild!!");
			$('.submit-btn-block').css('display','none');
			$(".try-count-block").text(count + "回目でGet Wildできました！");
			$('.result-box').html('<iframe width="560" height="315" src="https://www.youtube.com/embed/s1miaJfMqms?rel=0&amp;autoplay=1" frameborder="0" allowfullscreen></iframe>');
		} else if(count == 256){
			$('.result-txt-box').css('display','block').text("Get Wild!!");
			$('.submit-btn-block').css('display','none');
			$(".try-count-block").text(count + "回やってもGet Wildできなかったので温情Get Wild");
			$('.result-box').html('<iframe width="560" height="315" src="https://www.youtube.com/embed/s1miaJfMqms?rel=0&amp;autoplay=1" frameborder="0" allowfullscreen></iframe>');
		} else {
			$('.result-txt-box').css('display','block').text("Get Wild できませんでした・・・");
		}
	
	});

});