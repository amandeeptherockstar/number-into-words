//  BG/bg Bulgarian Tests

// Dependencies
var assert = require('assert');
var check = require('./../index');

// Holder for Tests
var bg = {};

bg['testing positive numbers up to 999, capital case'] = function(done){
  assert.equal(check.bulgarianConversion(0,{characterCase:'capital'}),'Нула');
  assert.equal(check.bulgarianConversion(5,{characterCase:'capital'}),'Пет');
  assert.equal(check.bulgarianConversion(10,{characterCase:'capital'}),'Десет');
  assert.equal(check.bulgarianConversion(15,{characterCase:'capital'}),'Петнадесет');
  assert.equal(check.bulgarianConversion(99,{characterCase:'capital'}),'Деветдесет и Девет');
  assert.equal(check.bulgarianConversion(100,{characterCase:'capital'}),'Сто');
  assert.equal(check.bulgarianConversion(107,{characterCase:'capital'}),'Сто и Седем');
  assert.equal(check.bulgarianConversion(120,{characterCase:'capital'}),'Сто и Двадесет');
  assert.equal(check.bulgarianConversion(253,{characterCase:'capital'}),'Двеста Петдесет и Три');
  assert.equal(check.bulgarianConversion(600,{characterCase:'capital'}),'Шестстотин');
  done();
};

bg['testing positive numbers up to 999, uppercase'] = function(done){
  assert.equal(check.bulgarianConversion(0,{characterCase:'uppercase'}),'НУЛА');
  assert.equal(check.bulgarianConversion(5,{characterCase:'uppercase'}),'ПЕТ');
  assert.equal(check.bulgarianConversion(10,{characterCase:'uppercase'}),'ДЕСЕТ');
  assert.equal(check.bulgarianConversion(15,{characterCase:'uppercase'}),'ПЕТНАДЕСЕТ');
  assert.equal(check.bulgarianConversion(99,{characterCase:'uppercase'}),'ДЕВЕТДЕСЕТ И ДЕВЕТ');
  assert.equal(check.bulgarianConversion(100,{characterCase:'uppercase'}),'СТО');
  assert.equal(check.bulgarianConversion(107,{characterCase:'uppercase'}),'СТО И СЕДЕМ');
  assert.equal(check.bulgarianConversion(120,{characterCase:'uppercase'}),'СТО И ДВАДЕСЕТ');
  assert.equal(check.bulgarianConversion(253,{characterCase:'uppercase'}),'ДВЕСТА ПЕТДЕСЕТ И ТРИ');
  assert.equal(check.bulgarianConversion(600,{characterCase:'uppercase'}),'ШЕСТСТОТИН');
  done();
};

bg['testing positive numbers up to 999, lowercase'] = function(done){
  assert.equal(check.bulgarianConversion(0,{characterCase:'lowercase'}),'нула');
  assert.equal(check.bulgarianConversion(5,{characterCase:'lowercase'}),'пет');
  assert.equal(check.bulgarianConversion(10,{characterCase:'lowercase'}),'десет');
  assert.equal(check.bulgarianConversion(15,{characterCase:'lowercase'}),'петнадесет');
  assert.equal(check.bulgarianConversion(99,{characterCase:'lowercase'}),'деветдесет и девет');
  assert.equal(check.bulgarianConversion(100,{characterCase:'lowercase'}),'сто');
  assert.equal(check.bulgarianConversion(107,{characterCase:'lowercase'}),'сто и седем');
  assert.equal(check.bulgarianConversion(120,{characterCase:'lowercase'}),'сто и двадесет');
  assert.equal(check.bulgarianConversion(253,{characterCase:'lowercase'}),'двеста петдесет и три');
  assert.equal(check.bulgarianConversion(600,{characterCase:'lowercase'}),'шестстотин');
  done();
};

bg['testing negative numbers up to 999, lowercase'] = function(done){
  assert.equal(check.bulgarianConversion(-0,{characterCase:'lowercase'}),'нула');
  assert.equal(check.bulgarianConversion(-5,{characterCase:'lowercase'}),'минус пет');
  assert.equal(check.bulgarianConversion(-10,{characterCase:'lowercase'}),'минус десет');
  assert.equal(check.bulgarianConversion(-15,{characterCase:'lowercase'}),'минус петнадесет');
  assert.equal(check.bulgarianConversion(-99,{characterCase:'lowercase'}),'минус деветдесет и девет');
  assert.equal(check.bulgarianConversion(-100,{characterCase:'lowercase'}),'минус сто');
  assert.equal(check.bulgarianConversion(-107,{characterCase:'lowercase'}),'минус сто и седем');
  assert.equal(check.bulgarianConversion(-120,{characterCase:'lowercase'}),'минус сто и двадесет');
  assert.equal(check.bulgarianConversion(-253,{characterCase:'lowercase'}),'минус двеста петдесет и три');
  assert.equal(check.bulgarianConversion(-600,{characterCase:'lowercase'}),'минус шестстотин');
  done();
};

bg['testing positive numbers from 1,000 to 999,999 , lowercase'] = function(done){
  assert.equal(check.bulgarianConversion(1000,{characterCase:'lowercase'}),'хиляда');
  assert.equal(check.bulgarianConversion(1001,{characterCase:'lowercase'}),'хиляда, и едно');
  assert.equal(check.bulgarianConversion(1014,{characterCase:'lowercase'}),'хиляда, и четиринадесет');
  assert.equal(check.bulgarianConversion(5300,{characterCase:'lowercase'}),'пет хиляди, и триста');
  assert.equal(check.bulgarianConversion(18024,{characterCase:'lowercase'}),'осемнадесет хиляди, двадесет и четири');
  assert.equal(check.bulgarianConversion(35060,{characterCase:'lowercase'}),'тридесет и пет хиляди, и шестдесет');
  assert.equal(check.bulgarianConversion(107002,{characterCase:'lowercase'}),'сто и седем хиляди, и две');
  assert.equal(check.bulgarianConversion(120999,{characterCase:'lowercase'}),'сто и двадесет хиляди, деветстотин деветдесет и девет');
  assert.equal(check.bulgarianConversion(900000,{characterCase:'lowercase'}),'деветстотин хиляди');
  assert.equal(check.bulgarianConversion(999030,{characterCase:'lowercase'}),'деветстотин деветдесет и девет хиляди, и тридесет');
  done();
};

bg['testing positive numbers from 1,000,000 to 999,999,999 , lowercase'] = function(done){
  assert.equal(check.bulgarianConversion(1000000,{characterCase:'lowercase'}),'един милион');
  assert.equal(check.bulgarianConversion(1000001,{characterCase:'lowercase'}),'един милион, и едно');
  assert.equal(check.bulgarianConversion(1002001,{characterCase:'lowercase'}),'един милион, две хиляди, и едно');
  assert.equal(check.bulgarianConversion(1024014,{characterCase:'lowercase'}),'един милион, двадесет и четири хиляди, и четиринадесет');
  assert.equal(check.bulgarianConversion(3005300,{characterCase:'lowercase'}),'три милиона, пет хиляди, и триста');
  assert.equal(check.bulgarianConversion(2018024,{characterCase:'lowercase'}),'два милиона, осемнадесет хиляди, двадесет и четири');
  assert.equal(check.bulgarianConversion(13950060,{characterCase:'lowercase'}),'тринадесет милиона, деветстотин и петдесет хиляди, и шестдесет');
  assert.equal(check.bulgarianConversion(72950060,{characterCase:'lowercase'}),'седемдесет и два милиона, деветстотин и петдесет хиляди, и шестдесет');
  assert.equal(check.bulgarianConversion(803107002,{characterCase:'lowercase'}),'осемстотин и три милиона, сто и седем хиляди, и две');
  assert.equal(check.bulgarianConversion(316120999,{characterCase:'lowercase'}),'триста и шестнадесет милиона, сто и двадесет хиляди, деветстотин деветдесет и девет');
  assert.equal(check.bulgarianConversion(900000000,{characterCase:'lowercase'}),'деветстотин милиона');
  assert.equal(check.bulgarianConversion(100999030,{characterCase:'lowercase'}),'сто милиона, деветстотин деветдесет и девет хиляди, и тридесет');
  done();
};

bg['testing positive numbers from 1,000,000,000 to 999,999,999,999 , lowercase'] = function(done){
  assert.equal(check.bulgarianConversion(1000000000,{characterCase:'lowercase'}),'един милиард');
  assert.equal(check.bulgarianConversion(1000000001,{characterCase:'lowercase'}),'един милиард, и едно');
  assert.equal(check.bulgarianConversion(1001002001,{characterCase:'lowercase'}),'един милиард, един милион, две хиляди, и едно');
  assert.equal(check.bulgarianConversion(2001024014,{characterCase:'lowercase'}),'два милиарда, един милион, двадесет и четири хиляди, и четиринадесет');
  assert.equal(check.bulgarianConversion(12003005300,{characterCase:'lowercase'}),'дванадесет милиарда, три милиона, пет хиляди, и триста');
  assert.equal(check.bulgarianConversion(65002018024,{characterCase:'lowercase'}),'шестдесет и пет милиарда, два милиона, осемнадесет хиляди, двадесет и четири');
  assert.equal(check.bulgarianConversion(905113950060,{characterCase:'lowercase'}),'деветстотин и пет милиарда, сто и тринадесет милиона, деветстотин и петдесет хиляди, и шестдесет');
  assert.equal(check.bulgarianConversion(100072950060,{characterCase:'lowercase'}),'сто милиарда, седемдесет и два милиона, деветстотин и петдесет хиляди, и шестдесет');
  assert.equal(check.bulgarianConversion(102803107002,{characterCase:'lowercase'}),'сто и два милиарда, осемстотин и три милиона, сто и седем хиляди, и две');
  assert.equal(check.bulgarianConversion(902316120999,{characterCase:'lowercase'}),'деветстотин и два милиарда, триста и шестнадесет милиона, сто и двадесет хиляди, деветстотин деветдесет и девет');
  assert.equal(check.bulgarianConversion(900000000001,{characterCase:'lowercase'}),'деветстотин милиарда, и едно');
  assert.equal(check.bulgarianConversion(999000999030,{characterCase:'lowercase'}),'деветстотин деветдесет и девет милиарда, деветстотин деветдесет и девет хиляди, и тридесет');
  done();
};

bg['testing positive numbers from 1,000,000,000,000 to 999,999,999,999,999 , lowercase'] = function(done){
  assert.equal(check.bulgarianConversion(1000000000000,{characterCase:'lowercase'}),'един билион');
  assert.equal(check.bulgarianConversion(1000000000001,{characterCase:'lowercase'}),'един билион, и едно');
  assert.equal(check.bulgarianConversion(1001001002001,{characterCase:'lowercase'}),'един билион, един милиард, един милион, две хиляди, и едно');
  assert.equal(check.bulgarianConversion(5002001024014,{characterCase:'lowercase'}),'пет билиона, два милиарда, един милион, двадесет и четири хиляди, и четиринадесет');
  assert.equal(check.bulgarianConversion(18012003005300,{characterCase:'lowercase'}),'осемнадесет билиона, дванадесет милиарда, три милиона, пет хиляди, и триста');
  assert.equal(check.bulgarianConversion(78065002018024,{characterCase:'lowercase'}),'седемдесет и осем билиона, шестдесет и пет милиарда, два милиона, осемнадесет хиляди, двадесет и четири');
  assert.equal(check.bulgarianConversion(836905113950060,{characterCase:'lowercase'}),'осемстотин тридесет и шест билиона, деветстотин и пет милиарда, сто и тринадесет милиона, деветстотин и петдесет хиляди, и шестдесет');
  assert.equal(check.bulgarianConversion(200100072950060,{characterCase:'lowercase'}),'двеста билиона, сто милиарда, седемдесет и два милиона, деветстотин и петдесет хиляди, и шестдесет');
  assert.equal(check.bulgarianConversion(905102803107002,{characterCase:'lowercase'}),'деветстотин и пет билиона, сто и два милиарда, осемстотин и три милиона, сто и седем хиляди, и две');
  assert.equal(check.bulgarianConversion(2000316120999,{characterCase:'lowercase'}),'два билиона, триста и шестнадесет милиона, сто и двадесет хиляди, деветстотин деветдесет и девет');
  assert.equal(check.bulgarianConversion(900000000000001,{characterCase:'lowercase'}),'деветстотин билиона, и едно');
  assert.equal(check.bulgarianConversion(111999000999030,{characterCase:'lowercase'}),'сто и единадесет билиона, деветстотин деветдесет и девет милиарда, деветстотин деветдесет и девет хиляди, и тридесет');
  done();
};

bg['testing positive numbers from 1,000,000,000,000,000 to 9,007,199,254,740,992 , lowercase'] = function(done){
  assert.equal(check.bulgarianConversion(1000000000000000,{characterCase:'lowercase'}),'един билиард');
  assert.equal(check.bulgarianConversion(1001000000000001,{characterCase:'lowercase'}),'един билиард, един билион, и едно');
  assert.equal(check.bulgarianConversion(1001001001002001,{characterCase:'lowercase'}),'един билиард, един билион, един милиард, един милион, две хиляди, и едно');
  assert.equal(check.bulgarianConversion(9005002001024014,{characterCase:'lowercase'}),'девет билиарда, пет билиона, два милиарда, един милион, двадесет и четири хиляди, и четиринадесет');
  assert.equal(check.bulgarianConversion(8018012003005300,{characterCase:'lowercase'}),'осем билиарда, осемнадесет билиона, дванадесет милиарда, три милиона, пет хиляди, и триста');
  assert.equal(check.bulgarianConversion(6078065002018024,{characterCase:'lowercase'}),'шест билиарда, седемдесет и осем билиона, шестдесет и пет милиарда, два милиона, осемнадесет хиляди, двадесет и четири');
  assert.equal(check.bulgarianConversion(3836905113950060,{characterCase:'lowercase'}),'три билиарда, осемстотин тридесет и шест билиона, деветстотин и пет милиарда, сто и тринадесет милиона, деветстотин и петдесет хиляди, и шестдесет');
  assert.equal(check.bulgarianConversion(2200100072950060,{characterCase:'lowercase'}),'два билиарда, двеста билиона, сто милиарда, седемдесет и два милиона, деветстотин и петдесет хиляди, и шестдесет');
  assert.equal(check.bulgarianConversion(1905102803107002,{characterCase:'lowercase'}),'един билиард, деветстотин и пет билиона, сто и два милиарда, осемстотин и три милиона, сто и седем хиляди, и две');
  assert.equal(check.bulgarianConversion(7002000316120999,{characterCase:'lowercase'}),'седем билиарда, два билиона, триста и шестнадесет милиона, сто и двадесет хиляди, деветстотин деветдесет и девет');
  done();
};

// Export the tests to the runner
module.exports = bg;