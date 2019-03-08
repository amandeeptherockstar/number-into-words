//  BG/bg Bulgarian Tests

// Dependencies
var assert = require('assert');
var check = require('./../index');

// Holder for Tests
var bg = {};

bg['testing positive numbers up to 999'] = function(done){
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


// Export the tests to the runner
module.exports = bg;