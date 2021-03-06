'use strict';

(function () {
  var MIN_NAME_LENGTH = 2;
  var MAX_NAME_LENGTH = 25;
  var userNameInput = document.querySelector('.setup-user-name');
  var userDialog = document.querySelector('.setup');

  userNameInput.addEventListener('invalid', function () {
    if (userNameInput.validity.tooShort) {
      userNameInput.setCustomValidity('Имя должно состоять минимум из 2-х символов');
    } else if (userNameInput.validity.tooLong) {
      userNameInput.setCustomValidity('Имя не должно превышать 25-ти символов');
    } else if (userNameInput.validity.valueMissing) {
      userNameInput.setCustomValidity('Обязательное поле');
    } else {
      userNameInput.setCustomValidity('');
    }
  });

  userNameInput.addEventListener('input', function () {
    var valueLength = userNameInput.value.length;

    if (valueLength < MIN_NAME_LENGTH) {
      userNameInput.setCustomValidity('Ещё ' + (MIN_NAME_LENGTH - valueLength) + ' симв.');
    } else if (valueLength > MAX_NAME_LENGTH) {
      userNameInput.setCustomValidity('Удалите лишние ' + (valueLength - MAX_NAME_LENGTH) + ' симв.');
    } else {
      userNameInput.setCustomValidity('');
    }
  });

  // Отправка формы и скрытия окна.
  var form = userDialog.querySelector('.setup-wizard-form');

  var successForm = function () {
    userDialog.classList.add('hidden');
    var alert = document.getElementById('error-block');
    alert.remove();
  };

  var submitHandler = function (evt) {
    window.backend.save(new FormData(form), successForm, window.util.errorMessage);
    evt.preventDefault();
  };

  form.addEventListener('submit', submitHandler);
})();
