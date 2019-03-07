const TEN = 10;                           //                    10 ( 1) // десет
const ONE_HUNDRED = 100;                  //                   100 ( 2) // сто
const ONE_THOUSAND = 1000;                //                 1,000 ( 3) // хиляда
const ONE_MILLION = 1000000;              //             1,000,000 ( 6) // милион
const ONE_BILLION = 1000000000;           //         1,000,000,000 ( 9) // милиард
const ONE_TRILLION = 1000000000000;       //     1,000,000,000,000 (12) // билион
const ONE_QUADRILLION = 1000000000000000; // 1,000,000,000,000,000 (15) // билиард
const MAX = 9007199254740992;             // 9,007,199,254,740,992 (15)

const unitDigits = ["НУЛА", "ЕДНО", "ДВЕ", "ТРИ", "ЧЕТИРИ", "ПЕТ", "ШЕСТ", "СЕДЕМ", "ОСЕМ", "ДЕВЕТ", "ДЕСЕТ", "ЕДИНАДЕСЕТ", "ДВАНАДЕСЕТ", "ТРИНАДЕСЕТ", "ЧЕТИРИНАДЕСЕТ", "ПЕТНАДЕСЕТ", "ШЕСТНАДЕСЕТ", "СЕДЕМНАДЕСЕТ", "ОСЕМНАДЕСЕТ", "ДЕВЕТНАДЕСЕТ"]
const tensDigits = ["НУЛА", "ДЕСЕТ", "ДВАДЕСЕТ", "ТРИДЕСЕТ", "ЧЕТИРИДЕСЕТ", "ПЕТДЕСЕТ", "ШЕСТДЕСЕТ", "СЕДЕМДЕСЕТ", "ОСЕМДЕСЕТ", "ДЕВЕТДЕСЕТ"];
const hundredsDigits = ["НУЛА", "СТО", "ДВЕСТА", "ТРИСТА", "ЧЕТИРИСТОТИН", "ПЕТСТОТИН", "ШЕСТСТОТИН", "СЕДЕМСТОТИН", "ОСЕМСТОТИН", "ДЕВЕТСТОТИН"];

function trippleWords(trippleNumber) {
  
  let thirdDigit  = trippleNumber%10;
  let thirdWord = thirdDigit !== 0 ? unitDigits[thirdDigit] : '';
  let thirdDivider = '';

  let secondDigit = (trippleNumber-thirdDigit)%100/10;
  let secondWord = secondDigit !== 0 ? tensDigits[secondDigit] : '';
  let secondDivider = '';

  let firstDigit  = (trippleNumber-secondDigit*10-thirdDigit)/100;
  let firstWord = firstDigit !== 0 ? hundredsDigits[firstDigit] : '';  
  let firstDivider = '';

  // dividers format
  if (firstDigit!==0){
    if(secondDigit!==0){
      if(thirdDigit!==0){
        firstDivider = '';
        secondDivider = ' ';
        thirdDivider = ' И ';
      } else { // thirdDigit === 0
        firstDivider = '';
        secondDivider = ' И ';
        thirdDivider = '';
      }
    } else { // secondDigit === 0
      if(thirdDigit!==0){
        firstDivider = '';
        secondDivider = '';
        thirdDivider = ' И ';
      } else { // thirdDigit === 0
        firstDivider = 'И ';
        secondDivider = '';
        thirdDivider = '';
      }
    }
  } else { // firstDigit === 0
    if(secondDigit!==0){
      if(thirdDigit!==0){
        firstDivider = '';
        secondDivider = '';
        thirdDivider = ' И ';
      } else { // thirdDigit === 0
        firstDivider = '';
        secondDivider = 'И ';
        thirdDivider = '';
      }
    } else { // secondDigit === 0
      if(thirdDigit!==0){
        firstDivider = '';
        secondDivider = '';
        thirdDivider = 'И ';
      } else { // thirdDigit === 0
        firstDivider = '';
        secondDivider = '';
        thirdDivider = '';
      }
    }
  }
  
  return firstDivider+firstWord+secondDivider+secondWord+thirdDivider+thirdWord;
}


function generateWords(number) {
  let words = '';
  
  if (number===0) {
    return 'НУЛА';
  }

  // If negative, prepend “minus”
  if (number < 0) {
    words = 'МИНУС ';
    number = Math.abs(number);
  }

  // slice number to tripples and process each
  

  words += trippleWords(number);

  // trim starter 'И ' if any
  if (words.startsWith('И ')) {
    words = words.slice(2);
  } else if (words.startsWith('МИНУС И ')){
    words = 'МИНУС ' + words.slice(8);
  }

  return words;
}

module.exports = {
  generateWords
};