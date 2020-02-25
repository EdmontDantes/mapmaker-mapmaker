function doubleAll(numbers) {
  let separateMutatedDoubledNums = [];

  for (i = 0; i < numbers.length; i++) {

    separateMutatedDoubledNums.push(numbers[i] * 2);
  }
  return separateMutatedDoubledNums;
}

function absoluteValues(numbers) {
  let positiveNumbers = [];

  for (let i = 0; i < numbers.length; i++) {
    
    positiveNumbers.push(Math.abs(numbers[i]));

  }
  return positiveNumbers;
}

function yelledGreetings(strArray) {
  let strArrayModifiedWithExclaimChar = [];
  
  for (let i = 0; i < strArray.length; i++) {

    strArrayModifiedWithExclaimChar.push(strArray[i] + '!');

  }
  return strArrayModifiedWithExclaimChar;
}

function changeToInitials(strArray) {
let intermediateInitialsArray = [];
  for (let i = 0; i < strArray.length; i++) {
    intermediateInitialsArray.push(strArray[i][0] + strArray[i][strArray[i].indexOf(' ') + 1]);
  }
  return intermediateInitialsArray;
}

function doubleOdd(numbersArray) {
  let doubledOddNumbersArray = []
  for (let i = 0; i < numbersArray.length; i++) {
    if (numbersArray[i] % 2 === 1 || numbersArray[i] % 2 === -1) {
      doubledOddNumbersArray.push(numbersArray[i] * 2);
    } else {
      doubledOddNumbersArray.push(numbersArray[i]);
    }
  }
  return doubledOddNumbersArray;
}

function upperCaseFirstLetters(strArray) {
  let upperCasedFirstLetterInArrayAndLowerCaseOthers = [];

  for (let i = 0; i < strArray.length; i++) {
    let restLettersLowerCased = strArray[i].slice(1, strArray[i].length).toLowerCase();

    upperCasedFirstLetterInArrayAndLowerCaseOthers.push(strArray[i][0].toUpperCase() + restLettersLowerCased);

  }
  return upperCasedFirstLetterInArrayAndLowerCaseOthers;
}

function add1ToLeft(numbersArray) {
  let intermediateNumbersArray  = [];

  for (let i = 0; i < numbersArray.length; i++) {
    let oneAddedTostring = 0;
    if (numbersArray[i] > 0) {
    oneAddedTostring = '1' + numbersArray[i].toString();
    intermediateNumbersArray.push(Number(oneAddedTostring));
    } else if (numbersArray[i] < 0) {
      let tempMathAbs = Math.abs(numbersArray[i]);
      oneAddedTostring = ('1' + tempMathAbs.toString());
      let negativeTemp = Number(oneAddedTostring) * (-1);
    intermediateNumbersArray.push(negativeTemp);

    }
      // intermediateNumbersArray.push(Number(oneAddedTostring));
  }
  return intermediateNumbersArray;
}


module.exports = {
  doubleAll,
  absoluteValues,
  yelledGreetings,
  changeToInitials,
  doubleOdd,
  upperCaseFirstLetters,
  add1ToLeft,
}