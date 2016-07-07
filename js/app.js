$(document).ready(function() {
  var state = 'ryu-ready';
  


  $('.ryu').mouseenter(function() {
    $('.ryu-still').hide();
    $('.ryu-ready').show();
  })
  .mouseleave(function() {
  	$('.ryu-ready').hide();
  	$('.ryu-still').show();
  })
  .mousedown(function(){
  	playHadouken();
  	$('.ryu-ready').hide();
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
  	$('.hadouken').hide();
  	$('.ryu-throwing').hide();
  	$('.ryu-ready').show();
  });
  $(window).keydown(function (e) {
  		if (e.keyCode == 88) {
  			$('.ryu-still').hide();
  			$('.ryu-ready').hide();
  			$('.ryu-cool').show();
  		}
  })
  .keyup(function (e) {
  		if (e.keyCode == 88) {
  			$('.ryu-cool').hide();
  			$('.ryu-still').show();
  		}

  	});
// hulk ryu below


 $('.hulk-ryu').mouseenter(function() {
    $('.hulk-still').hide();
    $('.hulk-ready').show();
  })
  .mouseleave(function() {
  	$('.hulk-ready').hide();
  	$('.hulk-still').show();
  })
  .mousedown(function(){
  	playHadouken();
  	$('.hulk-ready').hide();
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
  	$('.hulk-hadouken').hide();
  	$('.hulk-throwing').hide();
  	$('.hulk-ready').show();
  });
  $(window).keydown(function (e) {
  		if (e.keyCode == 88) {
  			$('.hulk-still').hide();
  			$('.hulk-ready').hide();
  			$('.hulk-cool').show();
  		}
  })
  .keyup(function (e) {
  		if (e.keyCode == 88) {
  			$('.hulk-cool').hide();
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