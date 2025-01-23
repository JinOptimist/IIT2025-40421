function task1() {
    // const tag = document.querySelector('#text1');
    // const text = tag.value;

    const wordCount = document
        .querySelector('#text1') 
        .value
        .split(' ')
        .length;

    // document
    //     .querySelector('#task1Result')
    //     .innerHTML = 'In text ' + wordCount + ' words';
    document
        .querySelector('#task1Result')
        .innerHTML = `In text ${wordCount } words`;
}