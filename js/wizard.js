'use strict';

(function () {
  var WIZARD_COAT_COLOR = [
    'rgb(101, 137, 164)',
    'rgb(241, 43, 107)',
    'rgb(146, 100, 161)',
    'rgb(56, 159, 117)',
    'rgb(215, 210, 55)',
    'rgb(0, 0, 0)'
  ];

  var WIZARD_EYES_COLOR = [
    'black',
    'red',
    'blue',
    'yellow',
    'green'
  ];

  var WIZARD_FIREBALL_COLOR = [
    '#ee4830',
    '#30a8ee',
    '#5ce6c0',
    '#e848d5',
    '#e6e848'
  ];

  var wizard = {
    onEyesChange: function (color) {},
    onCoatChange: function (color) {}
  };

  var setupPlayer = document.querySelector('.setup-player');
  var setupPlayerCoat = setupPlayer.querySelector('.wizard-coat');
  var setupPlayerEyes = setupPlayer.querySelector('.wizard-eyes');
  var setupPlayerFireball = setupPlayer.querySelector('.setup-fireball-wrap');

  setupPlayerCoat.addEventListener('click', function () {
    window.colorize(setupPlayerCoat, WIZARD_COAT_COLOR, 'coat-color');
    var newColor = setupPlayerCoat.style.fill;
    wizard.onCoatChange(newColor);
  });

  setupPlayerEyes.addEventListener('click', function () {
    window.colorize(setupPlayerEyes, WIZARD_EYES_COLOR, 'eyes-color');
    var newColor = setupPlayerEyes.style.fill;
    wizard.onEyesChange(newColor);
  });

  setupPlayerFireball.addEventListener('click', function () {
    window.colorize(setupPlayerFireball, WIZARD_FIREBALL_COLOR, 'fireball-color');
  });

  return window.wizard = wizard;
})();
