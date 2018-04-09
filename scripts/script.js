;(function ($) {

    $(function () {
        $('.but').on("click", function(){
            $('.welcome').hide();
            $('.menu').addClass( "flex" );
        });
    });


    $(function () {
        $('.front').on("click", function(){
            $(this).css("transform", "rotateX(-180deg)");
            $('.back').css("transform", "rotateX(0deg)");

            // $(this).css("transition", "all 1s ease-in-out");
            // $('.back').css("transition", "all 1s ease-in-out");
        });
    });

    $(function () {
        $('.back').on("click", function(){
            $(this).css("transform", "rotateX(180deg)");
            $('.front').css("transform", "rotateX(0deg)");
        });
    });

    var lFollowX = 0,
    lFollowY = 0,
    x = 0,
    y = 0,
    friction = 1 / 30;

function moveBackground() {
  x += (lFollowX - x) * friction;
  y += (lFollowY - y) * friction;
  
  translate = 'translate(' + x + 'px, ' + y + 'px) scale(1.1)';

  $('.bg').css({
    '-webit-transform': translate,
    '-moz-transform': translate,
    'transform': translate
  });

  window.requestAnimationFrame(moveBackground);
}

$(window).on('mousemove click', function(e) {

  var lMouseX = Math.max(-100, Math.min(100, $(window).width() / 2 - e.clientX));
  var lMouseY = Math.max(-100, Math.min(100, $(window).height() / 2 - e.clientY));
  lFollowX = (20 * lMouseX) / 100; // 100 : 12 = lMouxeX : lFollow
  lFollowY = (10 * lMouseY) / 100;

});

moveBackground();



    var _ouibounce = ouibounce(document.getElementById('ouibounce-modal'), {
      aggressive: true,
      timer: 0,
      callback: function() { console.log('ouibounce fired!'); }
    });
    $('body').on('click', function() {
      $('#ouibounce-modal').hide();
    });
    $('#ouibounce-modal .modal-footer').on('click', function() {
      $('#ouibounce-modal').hide();
    });
    $('#ouibounce-modal .modal').on('click', function(e) {
      e.stopPropagation();
    });

// window.onbeforeunload = popup;

// function popup() {
//   return alert('I see you are leaving the site');
// }


})(jQuery);

