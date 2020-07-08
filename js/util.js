'use strict';

window.util = (function () {

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
    },

    errorMessage: function (errorMessage) {
      var alert = document.getElementById('error-block');

      if (alert) {
        node.textContent = errorMessage;
      } else {
        var node = document.createElement('div');
        node.style = 'display: block; z-index: 9999; margin: 0 auto; text-align: center; background-color: red;';
        node.style.position = 'absolute';
        node.style.left = 0;
        node.style.right = 0;
        node.style.fontSize = '40px';
        node.id = 'error-block';

        node.textContent = errorMessage;
        document.body.insertAdjacentElement('afterbegin', node);
      }
    }
  };
})();
