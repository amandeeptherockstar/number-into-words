//  BG/bg Bulgarian Tests

// Dependencies
var assert = require('assert');
var check = require('../index');

// Holder for Tests
var bg = {};

bg['testing positive numbers from 1,000,000,000 to 999,999,999,999 , lowercase'] = function(done){
  assert.equal(check.bulgarianConversion(1000000000,'lowercase'),'един милиард');
  assert.equal(check.bulgarianConversion(1000000001,'lowercase'),'един милиард, и едно');
  assert.equal(check.bulgarianConversion(1001002001,'lowercase'),'един милиард, един милион, две хиляди, и едно');
  assert.equal(check.bulgarianConversion(2001024014,'lowercase'),'два милиарда, един милион, двадесет и четири хиляди, и четиринадесет');
  assert.equal(check.bulgarianConversion(12003005300,'lowercase'),'дванадесет милиарда, три милиона, пет хиляди, и триста');
  assert.equal(check.bulgarianConversion(65002018024,'lowercase'),'шестдесет и пет милиарда, два милиона, осемнадесет хиляди, двадесет и четири');
  assert.equal(check.bulgarianConversion(905113950060,'lowercase'),'деветстотин и пет милиарда, сто и тринадесет милиона, деветстотин и петдесет хиляди, и шестдесет');
  assert.equal(check.bulgarianConversion(100072950060,'lowercase'),'сто милиарда, седемдесет и два милиона, деветстотин и петдесет хиляди, и шестдесет');
  assert.equal(check.bulgarianConversion(102803107002,'lowercase'),'сто и два милиарда, осемстотин и три милиона, сто и седем хиляди, и две');
  assert.equal(check.bulgarianConversion(316120999,'lowercase'),'триста и шестнадесет милиона, сто и двадесет хиляди, деветстотин деветдесет и девет');
  assert.equal(check.bulgarianConversion(900000000001,'lowercase'),'деветстотин милиарда, и едно');
  assert.equal(check.bulgarianConversion(999000999030,'lowercase'),'деветстотин деветдесет и девет милиарда, деветстотин деветдесет и девет хиляди, и тридесет');
  done();
};

// Export the tests to the runner
module.exports = bg;