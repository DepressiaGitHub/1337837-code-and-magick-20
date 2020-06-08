'use strict';

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');
userDialog.querySelector('.setup-similar').classList.remove('hidden');

var similarListElement = userDialog.querySelector('.setup-similar-list');

var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];
var wizards = [];

userDialog.querySelector('.setup-similar').classList.remove('hidden');

var getRandom = function (start, end) {
  var random = start + Math.random() * (end - start);

  return Math.round(random);
};

var getWizards = function () {
  var wizardName = WIZARD_NAMES[getRandom(0, WIZARD_NAMES.length - 1)] + ' ' + WIZARD_SURNAMES[getRandom(0, WIZARD_SURNAMES.length - 1)];
  var wizardCoatColor = WIZARD_COAT_COLOR[getRandom(0, WIZARD_COAT_COLOR.length - 1)];
  var wizardEyesColor = WIZARD_EYES_COLOR[getRandom(0, WIZARD_EYES_COLOR.length - 1)];

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
