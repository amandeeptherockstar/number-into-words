//  BG/bg Bulgarian Tests

// Dependencies
var assert = require('assert');
var check = require('../index');

// Holder for Tests
var bg = {};

bg['testing positive numbers from 1,000 to 999,999 , lowercase'] = function(done){
  assert.equal(check.bulgarianConversion(1000,'lowercase'),'хиляда');
  assert.equal(check.bulgarianConversion(1001,'lowercase'),'хиляда и едно');
  assert.equal(check.bulgarianConversion(1014,'lowercase'),'хиляда и четиринадесет');
  assert.equal(check.bulgarianConversion(5300,'lowercase'),'пет хиляди и триста');
  assert.equal(check.bulgarianConversion(18024,'lowercase'),'осемнадесет хиляди и двадесет и четири');
  assert.equal(check.bulgarianConversion(35060,'lowercase'),'тридесет и пет хиляди и шестдесет');
  assert.equal(check.bulgarianConversion(107002,'lowercase'),'сто и седем хиляди и две');
  assert.equal(check.bulgarianConversion(120999,'lowercase'),'сто и двадесет хиляди, деветстотин деветдесет и девет');
  assert.equal(check.bulgarianConversion(900000,'lowercase'),'деветстотин хиляди');
  assert.equal(check.bulgarianConversion(999030,'lowercase'),'деветстотин деветдесет и девет хиляди и тридесет');
  done();
};
// Export the tests to the runner
module.exports = bg;