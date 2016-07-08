$(document).ready(function() {

function hideAllRyuStates() {
  $('.ryu-cool, .hadouken, .ryu-ready, .ryu-still, .ryu-throwing').css("display", "none");
} 

function hideAllHulkStates() {
  $('.hulk-cool, .hulk-still, .hulk-throwing, .hulk-ready, .hulk-hadouken').css('display', 'none')
}

function showHulkReady() {
  $('.hulk-ready').show();
}

function showHulkStill() {
  $('.hulk-still').show();
}

function showRyuReady() {
  $('.ryu-ready').show();
}

function showRyuStill() {
  $('.ryu-still').show();
}

  


  $('.ryu').mouseenter(function() {
    hideAllRyuStates();
    showRyuReady()
  })
  .mouseleave(function() {
  	hideAllRyuStates()
  	showRyuStill()
  })
  .mousedown(function(){
  	playHadouken();
  	hideAllRyuStates();
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
  	hideAllRyuStates();
  	showRyuReady()
  });
  $(window).keydown(function (e) {
  		if (e.keyCode == 88) {
  			hideAllRyuStates();
  			$('.ryu-cool').show();
  		}
  })
  .keyup(function (e) {
  		if (e.keyCode == 88) {
  			hideAllRyuStates();
  			showRyuStill()
  		}

  	});
// hulk ryu below


 $('.hulk-ryu').mouseenter(function() {
    hideAllHulkStates();
    showHulkReady();
  })
  .mouseleave(function() {
  	hideAllHulkStates();
  	showHulkStill()
  })
  .mousedown(function(){
  	playHadouken();
  	hideAllHulkStates();
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
  	hideAllHulkStates();
  	showHulkReady();
  });
  $(window).keydown(function (e) {
  		if (e.keyCode == 88) {
  			hideAllHulkStates();
  			$('.hulk-cool').show();
  		}
  })
  .keyup(function (e) {
  		if (e.keyCode == 88) {
  			hideAllHulkStates();
  			showHulkStill()
  		}

  	});

  $('.streetfighter-logo').fadeIn(2000).delay(1000).fadeOut(2000);
  

  $('.my-name').delay(5000).fadeIn(2000).delay(1000).fadeOut(2000);
  
});






function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}