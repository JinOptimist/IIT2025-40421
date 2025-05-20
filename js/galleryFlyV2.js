$(document).ready(function () {
  const images = [];
  const imagePerPage = 8;
  let page = 0;
  const initialImageCount = 8;
  const animationSpeed = 4; // seconds

  init();

  function init() {
    if (!images.length) {
      for (let i = 0; i < initialImageCount; i++) {
        images.push(`images/best/best0${i + 1}.jpg`);
        // images.push(`images/girl${i < 10 ? '0' : ''}${i + 1}.jpg`);
      }
    }

    const placeholderTag = $(".desc .placeholder.template");
    $(".desc").empty();
    for (let i = 0; i < imagePerPage; i++) {
      const copyOfPlaceholder = placeholderTag.clone();
      copyOfPlaceholder.attr("data-id", i);
      copyOfPlaceholder.removeClass("template");
      copyOfPlaceholder.find(".card img").attr("src", images[i]);
      const card = copyOfPlaceholder.find(".card");
      card.css("opacity", 0);
      $(".desc").append(copyOfPlaceholder);
    }
    $(".desc").append(placeholderTag);

    for (let i = 0; i < imagePerPage; i++) {
      setTimeout(function () {
        const placeholderTag = $(`.desc .placeholder[data-id=${i}]`);
        const card = placeholderTag.find(".card");
        card.css(
          "animation",
          `card-fly-to-place ${animationSpeed}s ease 0s 1 normal both`
        );
      }, 500 * i);
    }
  }
});
