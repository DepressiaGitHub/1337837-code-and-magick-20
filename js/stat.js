'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;

var BAR_WIDTH = 40;
var BAR_HEIGTH = -150;
var BAR_GAP = 50;

var FONT_GAP = 10;

var BAR_START_X = CLOUD_X + 40;
var BAR_START_Y = CLOUD_Y + 235;

var NAME_START_X = BAR_START_X;
var NAME_START_Y = BAR_START_Y + FONT_GAP;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxTime = function (time) {
  var maxElement = time[0];

  for (var i = 1; i < time.length; i++) {
    if (time[i] > maxElement) {
      maxElement = time[i];
    }
  }

  return maxElement;
};

var getRandomInSegment = function (start, end) {
  var random = start + Math.random() * (end - start);

  return Math.round(random);
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + 10, CLOUD_Y + 10, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';
  ctx.font = '16px Pt Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура вы победили!', CLOUD_X + 20, CLOUD_Y + 20);
  ctx.fillText('Список результатов:', CLOUD_X + 20, CLOUD_Y + 40);

  var maxTime = getMaxTime(times);

  for (var i = 0; i < players.length; i++) {
    var saturate = getRandomInSegment(1, 100);
    var playerTime = Math.round(times[i]);

    ctx.fillStyle = '#000';
    ctx.fillText(players[i], NAME_START_X + (BAR_WIDTH + BAR_GAP) * i, NAME_START_Y);
    ctx.fillText(playerTime, BAR_START_X + (BAR_WIDTH + BAR_GAP) * i, BAR_START_Y - 2 * FONT_GAP + (BAR_HEIGTH * times[i]) / maxTime);
    if (players[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'hsl(240, ' + saturate + '%, 50%)';
    }
    ctx.fillRect(BAR_START_X + (BAR_WIDTH + BAR_GAP) * i, BAR_START_Y, BAR_WIDTH, (BAR_HEIGTH * times[i]) / maxTime);
  }
};
