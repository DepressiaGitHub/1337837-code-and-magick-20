'use strict';

(function () {
  var userDialog = document.querySelector('.setup');
  var similarListElement = userDialog.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

  var WIZARD_COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var WIZARD_EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];
  var WIZARD_FIREBALL_COLOR = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
  var MAX_WIZARD_COUNT = 4;

  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;

    return wizardElement;
  };

  // Переменные для изменения цвета при клике.
  var setupPlayer = document.querySelector('.setup-player');
  var setupPlayerCoat = setupPlayer.querySelector('.wizard-coat');
  var setupPlayerEyes = setupPlayer.querySelector('.wizard-eyes');
  var setupPlayerFireball = setupPlayer.querySelector('.setup-fireball-wrap');


  setupPlayerCoat.addEventListener('click', function () {
    window.colorize(setupPlayerCoat, WIZARD_COAT_COLOR, 'coat-color');
  });

  setupPlayerEyes.addEventListener('click', function () {
    window.colorize(setupPlayerEyes, WIZARD_EYES_COLOR, 'eyes-color');
  });

  setupPlayerFireball.addEventListener('click', function () {
    window.colorize(setupPlayerFireball, WIZARD_FIREBALL_COLOR, 'fireball-color');
  });

  // Усешно загружаем магов по данным с сервера.
  var successHandler = function (wizards) {
    var fragment = document.createDocumentFragment();

    for (var i = 0; i < MAX_WIZARD_COUNT; i++) {
      fragment.appendChild(renderWizard(wizards[i]));
    }
    similarListElement.appendChild(fragment);

    userDialog.querySelector('.setup-similar').classList.remove('hidden');
    var alert = document.getElementById('error-block');
    alert.remove();
  };

  window.backend.load(successHandler, window.util.errorMessage);
})();
