const TEN = 10;                           //                    10 ( 1) // десет
const ONE_HUNDRED = 100;                  //                   100 ( 2) // сто
const ONE_THOUSAND = 1000;                //                 1,000 ( 3) // хиляда
const ONE_MILLION = 1000000;              //             1,000,000 ( 6) // милион
const ONE_BILLION = 1000000000;           //         1,000,000,000 ( 9) // милиард
const ONE_TRILLION = 1000000000000;       //     1,000,000,000,000 (12) // билион
const ONE_QUADRILLION = 1000000000000000; // 1,000,000,000,000,000 (15) // билиард
const MAX = 9007199254740992;             // 9,007,199,254,740,992 (15)

const unitDigits = ["Нула", "Едно", "Две", "Три", "Четири", "Пет", "Шест", "Седем", "Осем", "Девет", "Десет"];
const teensDigits = ["Нула", "Единадесет", "Дванадесет", "Тринадесет", "Четиринадесет", "Петнадесет", "Шестнадесет", "Седемнадесет", "Осемнадесет", "Деветнадесет"];
const tensDigits = ["Нула", "Десет", "Двадесет", "Тридесет", "Четиридесет", "Петдесет", "Шестдесет", "Седемдесет", "Осемдесет", "Деветдесет"];
const hundredsDigits = ["Нула", "Сто", "Двеста", "Триста", "Четиристотин", "Петстотин", "Шестстотин", "Седемстотин", "Осемстотин", "Деветстотин"];

const thousand  = ['', 'Хиляда', 'Един Милион', 'Един Милиард', 'Един Билион', 'Един Билиард'];
const thousands = ['', 'Хиляди', 'Милиона', 'Милиарда', 'Билиона', 'Билиарда'];

function trippleWords(trippleNumber) {

  // format the input length to 3
  trippleNumber = ('00'+trippleNumber).slice(trippleNumber.length-1);
  
  let firstDigit  = parseInt(trippleNumber[0]);
  let firstWord = firstDigit !== 0 ? hundredsDigits[firstDigit] : '';
  
  let secondDigit = '';
  let secondWord = '';

  let thirdDigit = '';
  let thirdWord = '';

  secondDigit = parseInt(trippleNumber[1]);
  thirdDigit  = parseInt(trippleNumber[2]);
  if (secondDigit!=1){
    secondWord = secondDigit !== 0 ? tensDigits[secondDigit] : '';
    thirdWord = thirdDigit !== 0 ? unitDigits[thirdDigit] : '';
  } else if (secondDigit===1 & thirdDigit!==0) {
    secondDigit = 10 + thirdDigit;
    thirdDigit = 0;

    secondWord = teensDigits[secondDigit-10];
    thirdWord = '';
  } else {
    secondDigit = 10;
    // thirdDigit = 0;

    secondWord = 'Десет';
    thirdWord = '';
  }
  
  let firstDivider = '';
  let secondDivider = '';
  let thirdDivider = '';

  // dividers format
  if (firstDigit!==0){
    if(secondDigit!==0){
      if(thirdDigit!==0){
        firstDivider = '';
        secondDivider = ' ';
        thirdDivider = ' и '; // 'сто двадесет и пет'
      } else { // thirdDigit === 0
        firstDivider = '';
        secondDivider = ' и ';
        thirdDivider = ''; // 'сто и двадесет'
      }
    } else { // secondDigit === 0
      if(thirdDigit!==0){
        firstDivider = '';
        secondDivider = '';
        thirdDivider = ' и '; // 'сто и пет'
      } else { // thirdDigit === 0
        firstDivider = 'и ';
        secondDivider = '';
        thirdDivider = ''; // 'и сто'
      }
    }
  } else { // firstDigit === 0
    if(secondDigit!==0){
      if(thirdDigit!==0){
        firstDivider = '';
        secondDivider = '';
        thirdDivider = ' и '; // 'двадесет и пет'
      } else { // thirdDigit === 0
        firstDivider = '';
        secondDivider = 'и ';
        thirdDivider = ''; // 'и двадесет'
      }
    } else { // secondDigit === 0
      if(thirdDigit!==0){
        firstDivider = '';
        secondDivider = '';
        thirdDivider = 'и '; // 'и пет'
      } else { // thirdDigit === 0
        firstDivider = '';
        secondDivider = '';
        thirdDivider = ''; // ''
      }
    }
  }
  
  return firstDivider+firstWord+secondDivider+secondWord+thirdDivider+thirdWord;
}

function generateWords(number) {
  let words = '';
  
  if (number===0) {
    return 'Нула';
  }
  
  // If negative, note the “minus”
  let isNegative = number<0 ? true : false;

  // get the abs value
  number = Math.abs(number);
  
  // If there are fractions, round down the number
  number = Math.floor(number);

  number = number.toString();
  
  let counter = 0; // tripples counter
  let nmbr = '';
  // slice number to tripples and process each
  while (number.length>0) {
    if (number.length>2){
      nmbr = number.slice(number.length-3);
      number = number.slice(0,number.length-3);
    } else {
      nmbr = number;
      number = '';
    }

    let tripple = trippleWords(nmbr);

    if (counter===0){
      words = tripple;
    } else {
      tripple = (tripple.startsWith('и Едно') ? '' : tripple ) + ( nmbr == 1 ? ' '+thousand[counter] : nmbr == 0 ? '' : ' '+thousands[counter] );
      tripple = tripple.startsWith('и ') ? tripple.slice(2) : tripple;
      words = tripple + (words.startsWith(' ') ? ',' : ', ') + words ;
    }

    counter++;
  }

  // reformat the head
  if (words.startsWith('и ')){
    words = words.slice(2);
  }

  // sign compensation
  if (isNegative) {
    return 'минус ' + words;
  } else {
    return words;
  };
}

module.exports = {
  generateWords
};