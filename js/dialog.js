'use strict';

(function () {
  var userDialog = document.querySelector('.setup');
  var buttonOpenSetup = document.querySelector('.setup-open');
  var buttonCloseSetup = document.querySelector('.setup-close');

  var onPopupEscPress = function (evt) {
    window.util.isEscEvent(evt, closePopup);
  };

  buttonOpenSetup.addEventListener('click', function () {
    openPopup();
  });

  buttonOpenSetup.addEventListener('keydown', function (evt) {
    window.util.isEnterEvent(evt, openPopup);
  });

  buttonCloseSetup.addEventListener('click', function () {
    closePopup();
    resetPosition();
  });

  buttonCloseSetup.addEventListener('keydown', function (evt) {
    window.util.isEnterEvent(evt, closePopup);
  });

  var openPopup = function () {
    userDialog.classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscPress);
  };

  var closePopup = function () {
    userDialog.classList.add('hidden');
    document.removeEventListener('keydown', onPopupEscPress);
    resetPosition();
  };

  var resetPosition = function () {
    userDialog.removeAttribute('style');
  };
})();
