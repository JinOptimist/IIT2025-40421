function task1() {
    const wordCount = document
        .querySelector('#task1')
        .value
        .split(' ')
        .length;

    const task1ResultTag = document
        .querySelector('#task1Result');
    const answer = `In text ${wordCount} words`;
    task1ResultTag.innerHTML = answer;
}

function task2() {
    const arrayLetter = document
        .querySelector('#task2')
        .value
        .split('');


    let answer = '';
    const alreadyCountedLetters = [];
    for (let i = 0; i < arrayLetter.length; i++) {
        const letter = arrayLetter[i];

        const indexOfMyLetter = alreadyCountedLetters.indexOf(letter);
        if (indexOfMyLetter == -1) {
            alreadyCountedLetters.push(letter);
            const partOfAnswer = calcOneLetter(arrayLetter, i);
            answer = answer + ' * ' + partOfAnswer;
        }
    }

    document.querySelector('#task2Result').innerHTML = answer;

}

function calcOneLetter(arrayLetter, magicNumber) {
    const magicLetter = arrayLetter[magicNumber];
    let magicLetterCount = 0;
    for (let i = 0; i < arrayLetter.length; i++) {
        const letter = arrayLetter[i];
        if (letter == magicLetter) {
            magicLetterCount++;
        }
    }
    return "'" + magicLetter + "'" + ' - ' + magicLetterCount;
}
