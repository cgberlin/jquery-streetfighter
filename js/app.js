$(document).ready(function() {
  var ryu = '.ryu div'
  var hulk = '.hulk-ryu div'
  


  $('.ryu').mouseenter(function() {
    $(ryu).hide();
    $('.ryu-ready').show();
  })
  .mouseleave(function() {
  	$(ryu).hide();
  	$('.ryu-still').show();
  })
  .mousedown(function(){
  	playHadouken();
  	$(ryu).hide();
  	$('.ryu-throwing').show();
  	$('.hadouken').finish().show().animate(
  		{'left':'1020px'},
  		500,
  		function(){
  			$(this).hide();
  			$(this).css('left', '550px');
  		}
  		);
  })
  .mouseup(function(){
  	$(ryu).hide();
  	$('.ryu-ready').show();
  });
  $(window).keydown(function (e) {
  		if (e.keyCode == 88) {
  			$(ryu).hide();
  			$('.ryu-cool').show();
  		}
  })
  .keyup(function (e) {
  		if (e.keyCode == 88) {
  			$(ryu).hide();
  			$('.ryu-still').show();
  		}

  	});
// hulk ryu below


 $('.hulk-ryu').mouseenter(function() {
    $(hulk).hide();
    $('.hulk-ready').show();
  })
  .mouseleave(function() {
  	$(hulk).hide();
  	$('.hulk-still').show();
  })
  .mousedown(function(){
  	playHadouken();
  	$(hulk).hide();
  	$('.hulk-throwing').show();
  	$('.hulk-hadouken').finish().show().animate(
  		{'right':'900px'},
  		500,
  		function(){
  			$(this).hide();
  			$(this).css('right', '447px');
  		}
  		);
  })
  .mouseup(function(){
  	$(hulk).hide();
  	
  	$('.hulk-ready').show();
  });
  $(window).keydown(function (e) {
  		if (e.keyCode == 88) {
  			$(hulk).hide();
  			
  			$('.hulk-cool').show();
  		}
  })
  .keyup(function (e) {
  		if (e.keyCode == 88) {
  			$(hulk).hide();
  			$('.hulk-still').show();
  		}

  	});

  $('.streetfighter-logo').fadeIn(2000);
  $('.streetfighter-logo').delay(1000).fadeOut(2000);

  $('.my-name').delay(5000).fadeIn(2000);
  $('.my-name').delay(1000).fadeOut(2000);
});






function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}