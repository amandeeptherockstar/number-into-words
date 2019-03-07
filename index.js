const indian = require('./helpers/indian');
const bulgarian = require('./helpers/bulgarian');
const international = require('./helpers/international');

// characterCase can be of 3 types capital (default), lowercase or uppercase
function indianConversion(number, { characterCase = 'capital' } = {}) {
  let words = indian.generateWords(number);
  // and can only be in uppercase if the characterCase = uppercase, otherwise it will always be of lowercase (in case of both capital and lowercase)
  let and = "and ";
  if (characterCase === 'uppercase') {
    and = "AND ";
  }

  words = words.split(' ');

  let transformedWords;
  if (characterCase === 'capital') {
    transformedWords = words.map(word => {
      const index = word.indexOf("-");
      if (index >= 0) {
        let indexSeparatedWord = word.split('-')
          .map(word => word[0].toUpperCase() + word.slice(1).toLowerCase())
          .join('-');
        return indexSeparatedWord;
      } else {
        return word[0].toUpperCase() + word.slice(1).toLowerCase()
      }
    });
    // word[0].toUpperCase() + word.slice(1).toLowerCase()
    // return transformedWords;
  } else if (characterCase === 'lowercase') {
    transformedWords = words.map(word => word.toLowerCase());
  } else {
    transformedWords = words;
  }

  if (transformedWords.length <= 2) {
    // dont add AND word if the sentence contains less than two words.
    return transformedWords.join(' ') + '.';
  }
  // check if previous word has comma?
  const index = transformedWords[transformedWords.length - 2].indexOf(',');
  if (index >= 0) {
    transformedWords[transformedWords.length - 2] = transformedWords[transformedWords.length - 2].substr(0, index);
  }
  transformedWords[transformedWords.length - 1] = and + transformedWords[transformedWords.length - 1];
  return transformedWords.join(' ') + '.';
}

function internationalConversion(number, { characterCase = 'capital' } = {}) {
  let words = international.generateWords(number);
  // and can only be in uppercase if the characterCase = uppercase, otherwise it will always be of lowercase (in case of both capital and lowercase)
  let and = "and ";
  if (characterCase === 'uppercase') {
    and = "AND ";
  }

  words = words.split(' ');

  let transformedWords;
  if (characterCase === 'capital') {
    transformedWords = words.map(word => {
      const index = word.indexOf("-");
      if (index >= 0) {
        let indexSeparatedWord = word.split('-')
          .map(word => word[0].toUpperCase() + word.slice(1).toLowerCase())
          .join('-');
        return indexSeparatedWord;
      } else {
        return word[0].toUpperCase() + word.slice(1).toLowerCase()
      }
    });
    // word[0].toUpperCase() + word.slice(1).toLowerCase()
    // return transformedWords;
  } else if (characterCase === 'lowercase') {
    transformedWords = words.map(word => word.toLowerCase());
  } else {
    transformedWords = words;
  }

  if (transformedWords.length > 2) {
    // remove the comma from 2nd last element
    // check if previous word has comma?
    const index = transformedWords[transformedWords.length - 2].indexOf(',');
    if (index >= 0) {
      transformedWords[transformedWords.length - 2] = transformedWords[transformedWords.length - 2].substr(0, index);
    }
    transformedWords[transformedWords.length - 1] = and + transformedWords[transformedWords.length - 1];
    return transformedWords.join(' ') + '.';
  }
  transformedWords[transformedWords.length - 1] = transformedWords[transformedWords.length - 1];
  return transformedWords.join(' ') + '.';
}

function bulgarianConversion(number, { characterCase = 'capital' } = {}) {
  return bulgarian.generateWords(number);
}

module.exports = {
  indianConversion,
  internationalConversion,
  bulgarianConversion
}