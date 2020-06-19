'use strict';

window.util = (function() {

  return {
    isEscEvent: function (evt, action) {
      if (evt.key === 'Escape') {
        evt.preventDefault();
        action();
      }
    },
    isEnterEvent: function (evt, action) {
      if (evt.key === 'Enter') {
        evt.preventDefault();
        action();
      }
    },
    getRandomElement: function (arr) {
      var rand = Math.floor(Math.random() * arr.length);
      return arr[rand];
    },
    getRandom: function (start, end) {
      var random = start + Math.random() * (end - start);
      return Math.round(random);
    }
  };
})();
