const indian = require('./helpers/indian');
const international = require('./helpers/international');


function indianConversion(number) {
  let words = indian.generateWords(number);
  words = words.split(' ');
  if (words.length <= 2) {
    // dont add AND word if the sentence contains less than two words.
    return words.join(' ') + '.';
  }
  // check if previous word has comma?
  const index = words[words.length - 2].indexOf(',');
  if (index >= 0) {
    words[words.length - 2] = words[words.length - 2].substr(0, index);
  }
  words[words.length - 1] = "AND " + words[words.length - 1];
  return words.join(' ') + '.';
}

function internationalConversion(number) {
  let words = international.generateWords(number);
  words = words.split(' ');
  if (words.length > 2) {
    // remove the comma from 2nd last element
    // check if previous word has comma?
    const index = words[words.length - 2].indexOf(',');
    if (index >= 0) {
      words[words.length - 2] = words[words.length - 2].substr(0, index);
    }
    words[words.length - 1] = "AND " + words[words.length - 1];
    return words.join(' ') + '.';
  }
  words[words.length - 1] = words[words.length - 1];
  return words.join(' ') + '.';
}

module.exports = {
  indianConversion,
  internationalConversion
}