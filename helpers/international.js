const TEN = 10;
const ONE_HUNDRED = 100;
const ONE_THOUSAND = 1000;
const ONE_MILLION = 1000000;
const ONE_BILLION = 1000000000;           //         1.000.000.000 (9)
const ONE_TRILLION = 1000000000000;       //     1.000.000.000.000 (12)
const ONE_QUADRILLION = 1000000000000000; // 1.000.000.000.000.000 (15)
const MAX = 9007199254740992;             // 9.007.199.254.740.992 (15)

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
  } else if (number < ONE_MILLION) {
    remainder = number % ONE_THOUSAND;
    word = generateWords(Math.floor(number / ONE_THOUSAND)) + ' THOUSAND,';
    // console.log(word, 'word');
  } else if (number < ONE_BILLION) {
    remainder = number % ONE_MILLION;
    word = generateWords(Math.floor(number / ONE_MILLION)) + ' MILLION,';
  } else if (number < ONE_TRILLION) {
    remainder = number % ONE_BILLION;
    word = generateWords(Math.floor(number / ONE_BILLION)) + ' BILLION,';
  } else if (number < ONE_QUADRILLION) {
    remainder = number % ONE_TRILLION;
    word = generateWords(Math.floor(number / ONE_TRILLION)) + ' TRILLION,';
  } else if (number <= MAX) {
    remainder = number % ONE_QUADRILLION;
    word = generateWords(Math.floor(number / ONE_QUADRILLION)) + ' QUADRILLION,';
  }
  words.push(word);
  return generateWords(remainder, words);
}

module.exports = {
  generateWords
};

// 100000
// 1
// 99 - NINETY-NINE
// 1001 - ONE THOUSAND AND ONE.
// 19990 - NINETEEN THOUSAND, NINE HUNDRED AND NINETY.
// 100001 - ONE HUNDRED THOUSAND AND ONE.
// 1000011 - ONE MILLION AND ELEVEN.
// 7664190 - SEVEN MILLION, SIX HUNDRED SIXTY-FOUR THOUSAND, ONE HUNDRED AND NINETY.
// 34444201 - THIRTY-FOUR MILLION, FOUR HUNDRED FORTY-FOUR THOUSAND, TWO HUNDRED AND ONE.
// 100000001 - ONE HUNDRED MILLION AND ONE.
// 1000000999 - ONE BILLION, NINE HUNDRED AND NINETY-NINE.