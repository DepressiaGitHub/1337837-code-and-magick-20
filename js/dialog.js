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

  // var userDialog = document.querySelector('.setup');
  // var dialogHangle = userDialog.querySelector('.upload');

  // dialogHangle.addEventListener('mousedown', function (evt) {
  //   evt.preventDefault;

  //   var startCoords = {
  //     x: evt.clientX,
  //     y: evt.clientY
  //   };

  //   var dragged = false;

  //   var onMouseMove = function (moveEvt) {
  //     moveEvt.preventDefault();

  //     dragged = true;

  //     var shift = {
  //       x: startCoords.x - moveEvt.clientX,
  //       y: startCoords.y - moveEvt.clientY
  //     };

  //     startCoords = {
  //       x: moveEvt.clientX,
  //       y: moveEvt.clientY
  //     };

  //     userDialog.style.top = (userDialog.offsetTop - shift.y) + 'px';
  //     userDialog.style.left = (userDialog.offsetLeft - shift.x) + 'px';
  //   };

  //   var onMouseUp = function (upEvt) {
  //     upEvt.preventDefault();

  //     document.removeEventListener('mousemove', onMouseMove);
  //     document.removeEventListener('mouseup', onMouseUp);

  //     if (dragged) {
  //       var onClickPreventDefault = function (clickEvt) {
  //         clickEvt.preventDefault();
  //         dialogHangle.removeEventListener('click', onClickPreventDefault)
  //       };
  //       dialogHangle.addEventListener('click', onClickPreventDefault);
  //     }
  //   };

  //   document.addEventListener('mousemove', onMouseMove);
  //   document.addEventListener('mouseup', onMouseUp);
  // });
})();
