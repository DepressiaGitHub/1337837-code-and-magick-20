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

userDialog.querySelector('.setup-similar').classList.remove('hidden');

//  Функция для случайных чисел от min до max включительно.
// var getRandom = function (start, end) {
//   var random = start + Math.random() * (end - start);

//   return Math.round(random);
// };

//  Функция для случайных элементов массива.
var getRandomElement = function (arr) {
  var rand = Math.floor(Math.random() * arr.length);
  return arr[rand];
};

var getWizards = function () {
  var wizardName = getRandomElement(WIZARD_NAMES) + ' ' + getRandomElement(WIZARD_SURNAMES);
  var wizardCoatColor = getRandomElement(WIZARD_COAT_COLOR);
  var wizardEyesColor = getRandomElement(WIZARD_EYES_COLOR);

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


// Функции для открытия и закрытия окна настроев персонажа.
var buttonOpenSetup = document.querySelector('.setup-open');
var buttonCloseSetup = document.querySelector('.setup-close');

var onPopupEscPress = function (evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closePopup();
  }
};

var openPopup = function () {
  userDialog.classList.remove('hidden');

  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  userDialog.classList.add('hidden');

  document.removeEventListener('keydown', onPopupEscPress);
};


buttonOpenSetup.addEventListener('click', function () {
  openPopup();
});

buttonOpenSetup.addEventListener('keydown', function (evt) {
  if (evt.key === 'Enter') {
    openPopup();
  }
});

buttonCloseSetup.addEventListener('click', function () {
  closePopup();
});

buttonCloseSetup.addEventListener('keydown', function (evt) {
  if (evt.key === 'Enter') {
    closePopup();
  }
});

var MIN_NAME_LENGTH = 2;
var MAX_NAME_LENGTH = 25;
var userNameInput = document.querySelector('.setup-user-name');

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


// Переменные для изменения цвета при клике.
var setupPlayer = document.querySelector('.setup-player');
var setupPlayerCoat = setupPlayer.querySelector('.wizard-coat');
var setupPlayerEyes = setupPlayer.querySelector('.wizard-eyes');
var setupPlayerFireball = setupPlayer.querySelector('.setup-fireball-wrap');

var currentColor = 0;
var inputColorList = setupPlayer.querySelectorAll('input');


// Функция для смены цвета.
var setNewColor = function (data, type, inputName) {
  currentColor = (currentColor + 1) % type.length;
  data.style.fill = type[currentColor];
  data.style.background = type[currentColor];

  for (i = 0; i < inputColorList.length; i++) {
    if (inputColorList[i].name === inputName) {
      inputColorList[i].value = type[currentColor];
      break;
    }
  }
};

setupPlayerCoat.addEventListener('click', function () {
  setNewColor(setupPlayerCoat, WIZARD_COAT_COLOR, 'coat-color');
});

setupPlayerEyes.addEventListener('click', function () {
  setNewColor(setupPlayerEyes, WIZARD_EYES_COLOR, 'eyes-color');
});

setupPlayerFireball.addEventListener('click', function () {
  setNewColor(setupPlayerFireball, WIZARD_FIREBALL_COLOR, 'fireball-color');
});
