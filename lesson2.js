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

    const firstLetter = arrayLetter[0];
    let count = 0;
    for (let i = 0; i < arrayLetter.length; i++) {
        const letter = arrayLetter[i];
        
        if (letter == firstLetter){
            count++;
        }
    }

    console.log(firstLetter + ' - ' + count);
}