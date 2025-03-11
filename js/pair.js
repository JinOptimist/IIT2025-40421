$(document).ready(function () {
  const animationSpeed = 1 * 1000;
  const imagesSrc = [
    'images/girl01.jpg',
    'images/girl02.jpg',
    'images/girl03.jpg',
    'images/girl04.jpg',
  ];

  // те картинки что видит пользователь в их реальной последовательности
  const arrayForCards = [];

  let openedCardIndex = undefined;
  let countOfFindedPairs = 0;

  init();

  $('.red').click(function () {
    $('.red')
      .animate(
        {
          width: 0
        }
        , animationSpeed);

    $('.green')
      .animate(
        {
          width: 100
        }
        , animationSpeed);

  });

  $('.green').click(function () {
    $('.red')
      .animate(
        {
          width: 100
        }
        , animationSpeed);

    $('.green')
      .animate(
        {
          width: 0
        }
        , animationSpeed);

  });

  $('.card').click(function () {
    const currentCard = $(this);
    const indexOfClickedCard = $(this).attr('card-id') - 0;
    if (openedCardIndex == undefined) {
      // user first time click to card
      // just remember selected card
      // and open clicked card
      openedCardIndex = indexOfClickedCard;
      showCard(currentCard);
      return;
    }

    if (indexOfClickedCard == openedCardIndex) {
      // user click to the same card second time
      // forgot selected card
      // and hide clicked card
      hideCard(currentCard);
      openedCardIndex = undefined
      return;
    }

    //user click to second card. At first open the clicked card
    showCard(currentCard);

    // Already exist opened card! We need compare them
    const urlForOpenedCard = arrayForCards[openedCardIndex];
    const urlForClickedCard = arrayForCards[indexOfClickedCard];
    const opendCard = $(`.card[card-id="${openedCardIndex}"]`);
    const clickedCard = $(`.card[card-id="${indexOfClickedCard}"]`);

    if (urlForOpenedCard == urlForClickedCard) {
      // This is a parid. Graz
      countOfFindedPairs++;
      if (arrayForCards.length == countOfFindedPairs * 2) {
        // THE END OF THE GAME
        setTimeout(
          function () {
            alert('You are winner')
          }, animationSpeed * 2);
      }

      // After a few second marked both of the card as finded
      setTimeout(
        function () {
          opendCard.addClass('finded');
          clickedCard.addClass('finded');
        }, animationSpeed * 2);
    } else {
      // This is NOT a parid
      // Hide both of the cards after a few seconds
      setTimeout(
        function () {
          hideCard(opendCard);
          hideCard(clickedCard);
        },
        animationSpeed * 2);
    }

    openedCardIndex = undefined
  });

  function hideCard(currentCard) {
    rotateCard(
      currentCard,
      90,
      function () {
        currentCard.find('.face').hide();
        currentCard.find('.cover').show();
        rotateCard(currentCard, 0);
      });
  }

  function showCard(currentCard) {
    rotateCard(
      currentCard,
      90,
      function () {
        currentCard.find('.face').show();
        currentCard.find('.cover').hide();
        rotateCard(currentCard, 0);
      });
  }

  function rotateCard(card, finalAngel, onComplete) {
    card.animate(
      {
        smile: finalAngel
      },
      {
        step: function (now, fx) {
          card.css('transform', `rotateY(${now}deg)`);
        },
        duration: animationSpeed,
        complete: onComplete
      }
    );
  }

  function init() {

  }

  $('.easy').click(function(){
    startGame(2);
  });

  $('.hard').click(function(){
    startGame(4);
  });

  function startGame(maxImageCount) {
    for (let i = 0; i < maxImageCount; i++) {
      const imageSrc = imagesSrc[i];
      arrayForCards.push(imageSrc);
      arrayForCards.push(imageSrc);
    }

    shuffleArray(arrayForCards);

    for (let i = 0; i < arrayForCards.length; i++) {
      const imageSrc = arrayForCards[i];
      createCard(imageSrc, i);
    } 
  }

  function createCard(imageSrc, index) {
    const template = $('.card.template');
    const newTagForCard = template.clone();
    newTagForCard.removeClass('template');
    newTagForCard
      .find('.face img')
      .attr('src', imageSrc);
    newTagForCard.attr('card-id', index);
    $('.desc').append(newTagForCard);
  }

  function shuffleArray(array) {
    for (let i = 0; i < 100; i++) {
      const firstRandomIndex = getRandom(0, array.length - 1);
      const secondRandomIndex = getRandom(0, array.length - 1);

      const temp = array[firstRandomIndex];
      array[firstRandomIndex] = array[secondRandomIndex];
      array[secondRandomIndex] = temp;
    }
  }

  function getRandom(min, max) {
    //                    [0;1]       растягиваем   смещение вправо
    return Math.floor(Math.random() * (max - min) + min);
  }
});