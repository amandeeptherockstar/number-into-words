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

bg['testing positive numbers from 1,000 to 999,999 , lowercase'] = function(done){
  assert.equal(check.bulgarianConversion(1000,'lowercase'),'хиляда');
  assert.equal(check.bulgarianConversion(1001,'lowercase'),'хиляда, и едно');
  assert.equal(check.bulgarianConversion(1014,'lowercase'),'хиляда, и четиринадесет');
  assert.equal(check.bulgarianConversion(5300,'lowercase'),'пет хиляди, и триста');
  assert.equal(check.bulgarianConversion(18024,'lowercase'),'осемнадесет хиляди, двадесет и четири');
  assert.equal(check.bulgarianConversion(35060,'lowercase'),'тридесет и пет хиляди, и шестдесет');
  assert.equal(check.bulgarianConversion(107002,'lowercase'),'сто и седем хиляди, и две');
  assert.equal(check.bulgarianConversion(120999,'lowercase'),'сто и двадесет хиляди, деветстотин деветдесет и девет');
  assert.equal(check.bulgarianConversion(900000,'lowercase'),'деветстотин хиляди');
  assert.equal(check.bulgarianConversion(999030,'lowercase'),'деветстотин деветдесет и девет хиляди, и тридесет');
  done();
};

bg['testing positive numbers from 1,000,000 to 999,999,999 , lowercase'] = function(done){
  assert.equal(check.bulgarianConversion(1000000,'lowercase'),'един милион');
  assert.equal(check.bulgarianConversion(1000001,'lowercase'),'един милион, и едно');
  assert.equal(check.bulgarianConversion(1002001,'lowercase'),'един милион, две хиляди, и едно');
  assert.equal(check.bulgarianConversion(1024014,'lowercase'),'един милион, двадесет и четири хиляди, и четиринадесет');
  assert.equal(check.bulgarianConversion(3005300,'lowercase'),'три милиона, пет хиляди, и триста');
  assert.equal(check.bulgarianConversion(2018024,'lowercase'),'два милиона, осемнадесет хиляди, двадесет и четири');
  assert.equal(check.bulgarianConversion(13950060,'lowercase'),'тринадесет милиона, деветстотин и петдесет хиляди, и шестдесет');
  assert.equal(check.bulgarianConversion(7250060,'lowercase'),'седемдесет и два милиона, деветстотин и петдесет хиляди, и шестдесет');
  assert.equal(check.bulgarianConversion(803107002,'lowercase'),'осемстотин и три милиона, сто и седем хиляди, и две');
  assert.equal(check.bulgarianConversion(316120999,'lowercase'),'триста и шестнадесет милиона, сто и двадесет хиляди, деветстотин деветдесет и девет');
  assert.equal(check.bulgarianConversion(900000000,'lowercase'),'деветстотин милиона');
  assert.equal(check.bulgarianConversion(100999030,'lowercase'),'сто милиона, деветстотин деветдесет и девет хиляди, и тридесет');
  done();
};

// Export the tests to the runner
module.exports = bg;