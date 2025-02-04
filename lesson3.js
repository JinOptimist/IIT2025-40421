function findNumber7() {
  const symbols = document.querySelector("#task1").value.split("");

  let indexOfTheNumberSeven = -1;
  for (let i = 0; i < symbols.length; i++) {
    const symbol = symbols[i];
    if (symbol == "7") {
      // Я хочу сказать, какой по счёту это символ
      indexOfTheNumberSeven = i;
    }
  }

  let answer;
  if (indexOfTheNumberSeven < 0) {
    answer = `Числа 7 мы не нашли`;
  } else {
    answer = `Мы нашли число 7 и оно ${indexOfTheNumberSeven + 1} по счёту`;
  }

  const task1ResultTag = document.querySelector("#task1Result");
  task1ResultTag.innerHTML = answer;
}

function checkIsSum10Exist() {
  const symbols = document.querySelector("#task2").value.split("");

  let theNumbers = [];
  for (let i = 0; i < symbols.length - 1; i++) {
    //const currentNumber = parseInt(symbols[i]);
    const currentNumber = symbols[i] - 0;
    const nextNumber = symbols[i + 1] - 0;

    if (currentNumber + nextNumber == 10) {
      // мы нашли два числа чья сумма 10
      theNumbers.push(currentNumber);
      theNumbers.push(nextNumber);
    }
  }

  let answer;
  if (theNumbers.length == 0) {
    answer = "Не нашли";
  } else {
    answer = `Мы нашли числа.`;
    for (let i = 0; i < theNumbers.length; i = i + 2) {
      const firstNumber = theNumbers[i];
      const secondNumber = theNumbers[i + 1];
      answer = answer + ` [${firstNumber} + ${secondNumber}]`;
    }
    answer = answer + ` Их сумма 10`;
  }

  const task1ResultTag = document.querySelector("#task2Result");
  task1ResultTag.innerHTML = answer;
}

function sayNumberByWords() {
  const symbols = document.querySelector("#task3").value.split("");

  const hundredsFrom100To900Words = [
    "сто", // 0
    "двести", // 1
    "триста", // 2
    "четыреста", // 3
    "пятьсот", // 4
    "шестьсот", // 5
    "семьсот", // 6
    "восемьсот", // 7
    "девятьсот", // 8
  ];
  let result = "";
  if (symbols.length < 3) {
    result += numberToWordFor2Symbols(symbols);
  } else if (symbols.length == 3) {
    // [5, 3, 4]
    // [1, 0, 2]
    const firstNumber = symbols[0] - 0; // Количество сотен
    const secondNumber = symbols[1] - 0; // Количество десятков
    const thridNumber = symbols[2] - 0; // Количество единиц

    result += hundredsFrom100To900Words[firstNumber - 1]; // "пятьсот"

    if (secondNumber > 0 || thridNumber > 0) {
      result += " ";
      // [3, 4]
      // [0, 2]
      const lastTwoSymbols = [secondNumber, thridNumber];
      result += numberToWordFor2Symbols(lastTwoSymbols);
    }
  } else {
    result += "Такие числа мне умеем писать";
  }

  const task1ResultTag = document.querySelector("#task3Result");
  task1ResultTag.innerHTML = result;
}

function numberToWordFor2Symbols(symbols) {
  let result = "";

  const numberFrom0To9Words = [
    "ноль", // 0
    "один", // 1
    "два", // 2
    "три", // 3
    "четыре", // 4
    "пять", // 5
    "шесть", // 6
    "семь", // 7
    "восемь", // 8
    "девять", // 9
  ];
  const numberFrom10To19Words = [
    "десять", // 0
    "одиннадцать", // 1
    "двенадцать", // 2
    "тринадцать", // 3
    "четырнадцать", // 4
    "пятьнадцать", // 5
    "шестьнадцать", // 6
    "семьнадцать", // 7
    "восемьнадцать", // 8
    "девятьнадцать", // 9
  ];
  const dozenFrom20To90Words = [
    "двадцать", // 0
    "тридцать", // 1
    "сорок", // 2
    "пятьдесят", // 3
    "шестьдесят", // 4
    "семьдесят", // 5
    "восемьдесят", // 6
    "девяносто", // 7
  ];

  if (symbols.length == 1 || (symbols.length == 2 && symbols[0] == "0")) {
    const indexOfLastSymbols = symbols.length - 1;
    const firstNumber = symbols[indexOfLastSymbols] - 0;
    result += numberFrom0To9Words[firstNumber];
  } else if (symbols.length == 2 && symbols[0] == "1") {
    // ['1','2']
    const secondNumber = symbols[1] - 0;
    result += numberFrom10To19Words[secondNumber];
  } else if (symbols.length == 2) {
    // [4, 1]
    // [8, 9]
    // [3, 6]
    const firstNumber = symbols[0] - 0; // Количество десятков
    const secondNumber = symbols[1] - 0; // Количество единиц
    result += dozenFrom20To90Words[firstNumber - 2];
    if (secondNumber > 0) {
      result += " ";
      result += numberFrom0To9Words[secondNumber];
    }
  }

  return result;
}
