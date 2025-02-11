function isPolindrow() {
  const symbols = document.querySelector("#task4").value.split("");
  let answer = true;

  //              0    1    2    3    4
  // symbols == ['o', 'l', 'o', 'l', 'q']

  const lastSymbolIndex = symbols.length - 1;
  for (let i = 0; i < symbols.length / 2; i++) {
    const symbol = symbols[i];
    const symbolFromTheEnd = symbols[lastSymbolIndex - i];

    if (symbol != symbolFromTheEnd) {
      answer = false;
      break;
    }
  }


  const task1ResultTag = document.querySelector("#task4Result");
  task1ResultTag.innerHTML = answer;
}

function theLongestGrowingSq() {
  const symbols = document.querySelector("#task5").value.split("");

  const firstNumber = symbols[0] - 0;
  let theLongetSq = [firstNumber]; // [1]
  let currentSq = [firstNumber]; // [1]

  // 1 2 3 2 4 5 6 1 2
  for (let i = 1; i < symbols.length; i++) {
    const theNumber = symbols[i] - 0; // 2

    if (theNumber > currentSq[currentSq.length - 1]) {
      currentSq.push(theNumber);
    } else {
      currentSq = [theNumber];
    }

    if (currentSq.length > theLongetSq.length) {
      theLongetSq = currentSq;
    }
  }

  const task1ResultTag = document.querySelector("#task5Result");
  task1ResultTag.innerHTML = theLongetSq;
}