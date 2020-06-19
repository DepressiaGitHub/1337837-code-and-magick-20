'use strict';

var userDialog = document.querySelector('.setup');
var similarListElement = userDialog.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];
var WIZARD_FIREBALL_COLOR = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var wizards = [];

var getWizards = function () {
  var wizardName = window.util.getRandomElement(WIZARD_NAMES) + ' ' + window.util.getRandomElement(WIZARD_SURNAMES);
  var wizardCoatColor = window.util.getRandomElement(WIZARD_COAT_COLOR);
  var wizardEyesColor = window.util.getRandomElement(WIZARD_EYES_COLOR);

  return {
    name: wizardName,
    coatColor: wizardCoatColor,
    eyesColor: wizardEyesColor
  };
};

for (var i = 0; i < 4; i++) {
  wizards[i] = getWizards();
}

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var fragment = document.createDocumentFragment();

for (var j = 0; j < wizards.length; j++) {
  fragment.appendChild(renderWizard(wizards[j]));
}

similarListElement.appendChild(fragment);

userDialog.querySelector('.setup-similar').classList.remove('hidden');


// Переменные для изменения цвета при клике.
var setupPlayer = document.querySelector('.setup-player');
var setupPlayerCoat = setupPlayer.querySelector('.wizard-coat');
var setupPlayerEyes = setupPlayer.querySelector('.wizard-eyes');
var setupPlayerFireball = setupPlayer.querySelector('.setup-fireball-wrap');


setupPlayerCoat.addEventListener('click', function () {
  window.setNewColor(setupPlayerCoat, WIZARD_COAT_COLOR, 'coat-color');
});

setupPlayerEyes.addEventListener('click', function () {
  window.setNewColor(setupPlayerEyes, WIZARD_EYES_COLOR, 'eyes-color');
});

setupPlayerFireball.addEventListener('click', function () {
  window.setNewColor(setupPlayerFireball, WIZARD_FIREBALL_COLOR, 'fireball-color');
});
