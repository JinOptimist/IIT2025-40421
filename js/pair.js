$(document).ready(function () {
  const animationSpeed = 1 * 1000;

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
    //   $('.card').css('smile', 0)
    //   $('.card').animate(
    //     {
    //       smile: 90
    //     },
    //     {
    //       step: function (now, fx) {
    //         $('.card').css('transform', `rotateY(${now}deg)`);
    //       },
    //       duration: animationSpeed,
    //       complete: function () {
    //         $('.card .face').show();
    //         $('.card .cover').hide();
    //         // turn off
    //         $('.card').animate(
    //           {
    //             smile: 0
    //           },
    //           {
    //             step: function (now, fx) {
    //               $('.card').css('transform', `rotateY(${now}deg)`);
    //             },
    //             duration: animationSpeed,
    //           });
    //       }
    //     });
    
    const currentCard = $(this);

    if (currentCard.hasClass('fun')){
      console.log('Это уже второй клик');
    }

    currentCard.toggleClass('fun');

    rotateCard(
      currentCard,
      90,
      function () {
        console.log('onComplete started')
        currentCard.find('.face').show();
        currentCard.find('.cover').hide();
        rotateCard(currentCard, 0);
      });
  });

  function rotateCard(card, finalAngel, onComplete) {
    card.animate(
      {
        smile: finalAngel
      },
      {
        step: function (now, fx) {
          // console.log(`now: ${now}`);
          card.css('transform', `rotateY(${now}deg)`);
        },
        duration: animationSpeed,
        complete: onComplete
      }
    );
  }
});