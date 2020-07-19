'use strict';

(function () {
  var userDialog = document.querySelector('.setup');
  var similarListElement = userDialog.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

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

  var wizards = [];
  var coatColor = 'rgb(101, 137, 164)';
  var eyesColor = 'black';
  var MAX_WIZARD_COUNT = 4;

  var getRank = function (wizard) {
    var rank = 0;
    if (wizard.colorCoat === coatColor) {
      rank += 2;
    }
    if (wizard.colorEyes === eyesColor) {
      rank += 1;
    }

    return rank;
  };

  var namesComparator = function (left, right) {
    if (left > right) {
      return 1;
    } else if (left < right) {
      return -1;
    } else {
      return 0;
    }
  };

  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;

    return wizardElement;
  };

  var updateWizards = function () {
    render(wizards.sort(function (left, right) {
      var rankDiff = getRank(right) - getRank(left);
      if (rankDiff === 0) {
        rankDiff = namesComparator(left.name, right.name);
      }
      return rankDiff;
    }));
  };

  var render = function (data) {
    var fragment = document.createDocumentFragment();
    similarListElement.innerHTML = '';
    for (var i = 0; i < MAX_WIZARD_COUNT; i++) {
      fragment.appendChild(renderWizard(data[i]));
    }

    similarListElement.appendChild(fragment);

    userDialog.querySelector('.setup-similar').classList.remove('hidden');
  };

  // Изменение цвета при клике.
  var setupPlayer = document.querySelector('.setup-player');
  var setupPlayerCoat = setupPlayer.querySelector('.wizard-coat');
  var setupPlayerEyes = setupPlayer.querySelector('.wizard-eyes');
  var setupPlayerFireball = setupPlayer.querySelector('.setup-fireball-wrap');

  setupPlayerCoat.addEventListener('click', function () {
    window.colorize(setupPlayerCoat, WIZARD_COAT_COLOR, 'coat-color');
    coatColor = setupPlayerCoat.style.fill;
    updateWizards();
  });

  setupPlayerEyes.addEventListener('click', function () {
    window.colorize(setupPlayerEyes, WIZARD_EYES_COLOR, 'eyes-color');
    eyesColor = setupPlayerEyes.style.fill;
    updateWizards();
  });

  setupPlayerFireball.addEventListener('click', function () {
    window.colorize(setupPlayerFireball, WIZARD_FIREBALL_COLOR, 'fireball-color');
  });

  // Успешно загружаем магов по данным с сервера.
  var successHandler = function (data) {
    wizards = data;
    updateWizards();
    var alert = document.getElementById('error-block');
    if (alert) {
      alert.remove();
    }
  };

  window.backend.load(successHandler, window.util.errorMessage);
})();
