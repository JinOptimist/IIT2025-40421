$(document).ready(function () {
  const images = [];
  const initialImageCount = 20;
  const marginForCardInDeck = 5;
  const radiusOfOpenDeck = 500;
  const animationSpeed = 1 * 1000;
  const smallAnimationDelay = 200;

  init();

  function init() {
    fillImagesArray();
    generateCards();
  }

  function fillImagesArray() {
    for (let i = 0; i < initialImageCount; i++) {
      //images.push(`images/best/best${i < 9 ? "0" : ""}${i + 1}.jpg`);
	  images.push(`images/girl${i < 9 ? "0" : ""}${i + 1}.jpg`);
    }
  }

  function generateCards() {
    for (let i = 0; i < images.length; i++) {
      const image = images[i];
      const cardTag = $(".card.template").clone();
      cardTag.removeClass("template");
      cardTag.attr("data-id", i);
      cardTag.find("img").attr("src", image);
      cardTag.css("top", i * marginForCardInDeck);
      cardTag.css("left", i * marginForCardInDeck);
      cardTag.click(openOrCloseDeck);
      $(".placeholder").append(cardTag);
    }

    const lastIndex = images.length - 1;
    const lastCard = $(`[data-id=${lastIndex}]`);
    lastCard.on("mouseenter", previewFirstImages);
    lastCard.on("mouseleave", returnCardsToInitialPlace);
  }

  function previewFirstImages() {
    const isDeckInitial = $(".deck").hasClass("initial");
    if (!isDeckInitial) {
      return;
    }

    const lastIndex = images.length - 1;
    const lastCard = $(`[data-id=${lastIndex}]`);
    lastCard.animate(
      {
        top: -200,
        left: 0,
      },
      animationSpeed
    );

    const oneBeforeLastCard = $(`[data-id=${lastIndex - 1}]`);
    moveTo(oneBeforeLastCard, {
      top: -170,
      left: -150,
      rotateAngel: -45,
    });

    const twoBeforeLastCard = $(`[data-id=${lastIndex - 2}]`);
    moveTo(twoBeforeLastCard, {
      top: -170,
      left: 150,
      rotateAngel: 45,
    });
  }

  /// You can pass rotateAngel to rotate images
  function moveTo(card, propObj) {
    card.animate(propObj, {
      step: function (now, fx) {
        if (fx.prop == "rotateAngel") {
          card.css("transform", `rotate(${now}deg)`);
        }
      },
      duration: animationSpeed,
    });
  }

  function openOrCloseDeck() {
    if ($(".deck").hasClass("open")) {
      $(".deck").removeClass("open");
      $(".deck").addClass("initial");
      returnCardsToInitialPlace();
    } else {
      openDeck();
    }
  }

  function openDeck() {
    $(".deck").removeClass("initial");
    $(".deck").addClass("open");

    for (let i = images.length - 1; i > -1; i--) {
      const card = $(`[data-id=${i}]`);
      const angel = (Math.PI * 2 * i) / images.length;
      const x = radiusOfOpenDeck * Math.cos(angel) * 1.5;
      const y = radiusOfOpenDeck * Math.sin(angel);
      const angelToRotate = (360 / images.length) * i;

      setTimeout(function () {
        moveTo(card, {
          top: y,
          left: x,
          rotateAngel: angelToRotate,
        });
      }, smallAnimationDelay * (images.length - i));
    }
  }

  function returnCardsToInitialPlace() {
    const isDeckInitial = $(".deck").hasClass("initial");
    if (!isDeckInitial) {
      return;
    }
    for (let i = 0; i < images.length; i++) {
      const card = $(`[data-id=${i}]`);
      moveTo(card, {
        top: i * marginForCardInDeck,
        left: i * marginForCardInDeck,
        rotateAngel: 0,
      });
    }
  }
});
