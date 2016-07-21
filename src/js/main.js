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

  function newPallete() {
    var $pallete = $('#pallete #options');
    var options = ['Black', 'Navy', 'DarkBlue', 'MediumBlue', 'Blue', 'DarkGreen', 'Green', 'Teal', 'DarkCyan', 'DeepSkyBlue', 'DarkTurquoise', 'MediumSpringGreen', 'Lime', 'SpringGreen', 'Aqua', 'MidnightBlue', 'DodgerBlue', 'LightSeaGreen', 'ForestGreen', 'SeaGreen', 'DarkSlateGray', 'LimeGreen', 'MediumSeaGreen', 'Turquoise', 'RoyalBlue', 'SteelBlue', 'DarkSlateBlue', 'MediumTurquoise', 'Indigo', 'DarkOliveGreen', 'CadetBlue', 'CornflowerBlue', 'RebeccaPurple', 'MediumAquaMarine', 'DimGray', 'SlateBlue', 'OliveDrab', 'SlateGray', 'LightSlateGray', 'MediumSlateBlue', 'LawnGreen', 'Chartreuse', 'Aquamarine', 'Maroon', 'Purple', 'Olive', 'Gray', 'SkyBlue', 'LightSkyBlue', 'BlueViolet', 'DarkRed', 'DarkMagenta', 'SaddleBrown', 'DarkSeaGreen', 'LightGreen', 'MediumPurple', 'DarkViolet', 'PaleGreen', 'DarkOrchid', 'YellowGreen', 'Sienna', 'Brown', 'DarkGray', 'LightBlue', 'GreenYellow', 'PaleTurquoise', 'LightSteelBlue', 'PowderBlue', 'FireBrick', 'DarkGoldenRod', 'MediumOrchid', 'RosyBrown', 'DarkKhaki', 'Silver', 'MediumVioletRed', 'IndianRed', 'Peru', 'Chocolate', 'Tan', 'LightGray', 'Thistle', 'Orchid', 'GoldenRod', 'PaleVioletRed', 'Crimson', 'Gainsboro', 'Plum', 'BurlyWood', 'LightCyan', 'Lavender', 'DarkSalmon', 'Violet', 'PaleGoldenRod', 'LightCoral', 'Khaki', 'AliceBlue', 'HoneyDew', 'Azure', 'SandyBrown', 'Wheat', 'Beige', 'WhiteSmoke', 'MintCream', 'GhostWhite', 'Salmon', 'AntiqueWhite', 'Linen', 'LightGoldenRodYellow', 'OldLace', 'Red', 'Magenta', 'DeepPink', 'OrangeRed', 'Tomato', 'HotPink', 'Coral', 'DarkOrange', 'LightSalmon', 'Orange', 'LightPink', 'Pink', 'Gold', 'PeachPuff', 'NavajoWhite', 'Moccasin', 'Bisque', 'MistyRose', 'BlanchedAlmond', 'PapayaWhip', 'LavenderBlush', 'SeaShell', 'Cornsilk', 'LemonChiffon', 'FloralWhite', 'Snow', 'Yellow', 'LightYellow', 'Ivory', 'White']
    for (var i = 0; i < options.length; i++) {
      console.log(options);
      $pallete.prepend($('<div class="paintColor ' + options[i] + '">'));
      $('.' + options[i]).css({'background-color': options[i]})
    }
  }
  newPallete();
  $('.pixel').on('click', function(event) {
    $(this).css('background-color', brush);
    $(event).on('hover',function() {
      $(this).css('background-color', brush);
    })
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
