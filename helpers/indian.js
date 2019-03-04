const TEN = 10;
const ONE_HUNDRED = 100;
const ONE_THOUSAND = 1000;
const ONE_LAC = 100000;
const ONE_CRORE = 10000000;
const ONE_ARAB = 1000000000;
const ONE_KHARAB = 100000000000;
const MAX = 9999999999999;

const unitDigits = ["ZERO", "ONE", "TWO", "THREE", "FOUR", "FIVE", "SIX", "SEVEN", "EIGHT", "NINE", "TEN", "ELEVEN", "TWELVE", "THIRTEEN", "FOURTEEN", "FIFTEEN", "SIXTEEN", "SEVENTEEN", "EIGHTEEN", "NINETEEN"]
const tensDigits = ["ZERO", "TEN", "TWENTY", "THIRTY", "FORTY", "FIFTY", "SIXTY", "SEVENTY", "EIGHTY", "NINETY"];

function generateWords(number) {
  let remainder, word;
  let words = arguments[1];

  // We’re done
  if (number === 0) {
    // console.log(words, 'words');
    return !words ? 'ZERO' : words.join(' ').replace(/,$/, '');
  }
  // handle first time case: words will be undefined at first run
  if (!words) {
    words = [];
  }
  // If negative, prepend “minus”
  if (number < 0) {
    words.push('minus');
    number = Math.abs(number);
  }

  if (number < 20) {
    remainder = 0;
    word = unitDigits[number];
  } else if (number < ONE_HUNDRED) {
    remainder = number % TEN;
    word = tensDigits[Math.floor(number / TEN)];
    // In case of remainder, we need to handle it here to be able to add the “-”
    if (remainder) {
      word += "-" + unitDigits[remainder];
      remainder = 0;
    }
  } else if (number < ONE_THOUSAND) {
    remainder = number % ONE_HUNDRED;
    word = generateWords(Math.floor(number / ONE_HUNDRED)) + ' HUNDRED';

  } else if (number < ONE_LAC) {
    remainder = number % ONE_THOUSAND;
    word = generateWords(Math.floor(number / ONE_THOUSAND)) + ' THOUSAND,';

  } else if (number < ONE_CRORE) {
    remainder = number % ONE_LAC;
    word = generateWords(Math.floor(number / ONE_LAC)) + ' LAC,';

  } else if (number < ONE_ARAB) {
    remainder = number % ONE_CRORE;
    word = generateWords(Math.floor(number / ONE_CRORE)) + ' CRORE,';

  } else if (number < ONE_KHARAB) {
    console.log(Math.floor(number / ONE_ARAB));
    remainder = number % ONE_ARAB;
    word = generateWords(Math.floor(number / ONE_ARAB)) + ' ARAB,';

  } else if (number < MAX) {
    remainder = number % ONE_KHARAB;
    word = generateWords(Math.floor(number / ONE_KHARAB)) + ' KHARAB';

  }
  words.push(word);
  return generateWords(remainder, words);
}

module.exports = {
  generateWords
};
// 100000
// 1
// 99
// 1001 - ONE THOUSAND AND ONE.
// 19990 - NINETEEN THOUSAND, NINE HUNDRED AND NINETY.
// 100001 - ONE LAC AND ONE.
// 7664190 - SEVENTY-SIX LAC, SIXTY-FOUR THOUSAND, ONE HUNDRED AND NINETY.
// 34444201 - THREE CRORE, FORTY-FOUR LAC, FORTY-FOUR THOUSAND, TWO HUNDRED AND ONE.
// 100000001 - TEN CRORE AND ONE.
// 1000000999 - ONE ARAB, NINE HUNDRED AND NINETY-NINE.