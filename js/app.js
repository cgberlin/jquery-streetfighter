
$(document).ready(function() {

  function hidePlayer(player) {
    $(player + ' div').hide();
  }
  function showPlayerState(player, state) {
    hidePlayer(player);
    $(player + ' ' + state).show();
  }
  function playHadouken(player, hadouken, hadoukenAnimation, fromPos, toPos) {
    playHadoukenSound();
    hidePlayer(player);
    $(hadouken).show();
    $(hadoukenAnimation).finish().show().animate(
      {'left': fromPos + 'px'},
      500,
      function(){
        $(this).hide();
        $(this).css('left', toPos + 'px');
      }
    );
  }
  function keyXAction(e, player, state) {
    if (e.keyCode == 88) {
      showPlayerState(player, state);
    }
  }
  function initAnimationsRyu() {
    $('.ryu').mouseenter(function () {
      showPlayerState('.ryu', '.ryu-ready');
    })
    .mouseleave(function () {
      showPlayerState('.ryu', '.ryu-still');
    })
    .mousedown(function(){
      playHadouken('.ryu', '.ryu-throwing', '.hadouken', 1020, 550);
    })
    .mouseup(function(){
      showPlayerState('.ryu', '.ryu-ready');
    });
    $(window).keydown(function (e) {
      keyXAction(e, '.ryu', '.ryu-cool');
    })
    .keyup(function (e) {
      keyXAction(e, '.ryu', '.ryu-still');
    });
  }
  function initAnimationsHulk() {
    $('.hulk-ryu').mouseenter(function () {
      showPlayerState('.hulk-ryu', '.hulk-ready');
    })
    .mouseleave(function () {
      showPlayerState('.hulk-ryu', '.hulk-still');
    })
    .mousedown(function(){
      playHadouken('.hulk-ryu', '.hulk-throwing', '.hulk-hadouken', 447, 900);
    })
    .mouseup(function(){
      showPlayerState('.hulk-ryu', '.hulk-ready');
    });
    $(window).keydown(function (e) {
      keyXAction(e, '.hulk-ryu', '.hulk-cool');
    })
    .keyup(function (e) {
      keyXAction(e, '.hulk-ryu', '.hulk-still');
    });
  }

  $('.streetfighter-logo').fadeIn(2000).delay(1000).fadeOut(2000);
  $('.my-name').delay(5000).fadeIn(2000).delay(1000).fadeOut(2000);

  initAnimationsRyu();
  initAnimationsHulk();
});

function playHadoukenSound () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}
