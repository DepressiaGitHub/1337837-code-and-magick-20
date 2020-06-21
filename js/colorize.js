'use strict';

(function () {
  var setupPlayer = document.querySelector('.setup-player');

  var currentColor = 0;
  var inputColorList = setupPlayer.querySelectorAll('input');

  window.colorize = function (data, type, inputName) {
    currentColor = (currentColor + 1) % type.length;
    if (data.tagName.toLowerCase() === 'div') {
      data.style.background = type[currentColor];
    } else {
      data.style.fill = type[currentColor];
    }

    for (var i = 0; i < inputColorList.length; i++) {
      if (inputColorList[i].name === inputName) {
        inputColorList[i].value = type[currentColor];
        break;
      }
    }
  };
})();
