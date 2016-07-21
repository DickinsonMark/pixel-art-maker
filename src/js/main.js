(function() {
  'use strict';

  var brush;
  var pixel;

  function newCanvas() {
    var $canvas = $('#canvas');
    for (var i = 0; i < 3402; i++) {
      $canvas.append($('<div class="pixel"></div>'));
    }
  }
  newCanvas();

  $('.pixel').on('click', function(event) {
    $(this).css('background-color', brush);
  });

  $('.paintColor').on('click', function() {
    brush = $(this).css('background-color');
    $('#currentColor').css({'background-color': brush});
  });
  $('input').on('click', function(e) {
    e.preventDefault();
    $('.pixel').css({'background-color': 'white'});
  });
}());
