//  BG/bg Bulgarian Tests

// Dependencies
var assert = require('assert');
var check = require('./../index');

// Holder for Tests
var bg = {};

bg['testing positive numbers up to 999, capital case'] = function(done){
  assert.equal(check.bulgarianConversion(0,'capital'),'Нула');
  assert.equal(check.bulgarianConversion(5,'capital'),'Пет');
  assert.equal(check.bulgarianConversion(10,'capital'),'Десет');
  assert.equal(check.bulgarianConversion(15,'capital'),'Петнадесет');
  assert.equal(check.bulgarianConversion(99,'capital'),'Деветдесет и Девет');
  assert.equal(check.bulgarianConversion(100,'capital'),'Сто');
  assert.equal(check.bulgarianConversion(107,'capital'),'Сто и Седем');
  assert.equal(check.bulgarianConversion(120,'capital'),'Сто и Двадесет');
  assert.equal(check.bulgarianConversion(253,'capital'),'Двеста Петдесет и Три');
  assert.equal(check.bulgarianConversion(600,'capital'),'Шестстотин');
  done();
};

bg['testing positive numbers up to 999, lowercase'] = function(done){
  assert.equal(check.bulgarianConversion(0,'lowercase'),'нула');
  assert.equal(check.bulgarianConversion(5,'lowercase'),'пет');
  assert.equal(check.bulgarianConversion(10,'lowercase'),'десет');
  assert.equal(check.bulgarianConversion(15,'lowercase'),'петнадесет');
  assert.equal(check.bulgarianConversion(99,'lowercase'),'деветдесет и девет');
  assert.equal(check.bulgarianConversion(100,'lowercase'),'сто');
  assert.equal(check.bulgarianConversion(107,'lowercase'),'сто и седем');
  assert.equal(check.bulgarianConversion(120,'lowercase'),'сто и двадесет');
  assert.equal(check.bulgarianConversion(253,'lowercase'),'двеста петдесет и три');
  assert.equal(check.bulgarianConversion(600,'lowercase'),'шестстотин');
  done();
};

bg['testing positive numbers up to 999, uppercase'] = function(done){
  assert.equal(check.bulgarianConversion(0,'uppercase'),'НУЛА');
  assert.equal(check.bulgarianConversion(5,'uppercase'),'ПЕТ');
  assert.equal(check.bulgarianConversion(10,'uppercase'),'ДЕСЕТ');
  assert.equal(check.bulgarianConversion(15,'uppercase'),'ПЕТНАДЕСЕТ');
  assert.equal(check.bulgarianConversion(99,'uppercase'),'ДЕВЕТДЕСЕТ И ДЕВЕТ');
  assert.equal(check.bulgarianConversion(100,'uppercase'),'СТО');
  assert.equal(check.bulgarianConversion(107,'uppercase'),'СТО И СЕДЕМ');
  assert.equal(check.bulgarianConversion(120,'uppercase'),'СТО И ДВАДЕСЕТ');
  assert.equal(check.bulgarianConversion(253,'uppercase'),'ДВЕСТА ПЕТДЕСЕТ И ТРИ');
  assert.equal(check.bulgarianConversion(600,'uppercase'),'ШЕСТСТОТИН');
  done();
};

bg['testing negative numbers up to 999, lowercase'] = function(done){
  assert.equal(check.bulgarianConversion(-0,'lowercase'),'нула');
  assert.equal(check.bulgarianConversion(-5,'lowercase'),'минус пет');
  assert.equal(check.bulgarianConversion(-10,'lowercase'),'минус десет');
  assert.equal(check.bulgarianConversion(-15,'lowercase'),'минус петнадесет');
  assert.equal(check.bulgarianConversion(-99,'lowercase'),'минус деветдесет и девет');
  assert.equal(check.bulgarianConversion(-100,'lowercase'),'минус сто');
  assert.equal(check.bulgarianConversion(-107,'lowercase'),'минус сто и седем');
  assert.equal(check.bulgarianConversion(-120,'lowercase'),'минус сто и двадесет');
  assert.equal(check.bulgarianConversion(-253,'lowercase'),'минус двеста петдесет и три');
  assert.equal(check.bulgarianConversion(-600,'lowercase'),'минус шестстотин');
  done();
};


// Export the tests to the runner
module.exports = bg;