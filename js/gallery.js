$(document).ready(function () {
    const images = [];
    const initialImageCount = 7;
    init();

    function init() {
        for (let i = 0; i < initialImageCount; i++) {
            images.push(`images/best/best0${i + 1}.jpg`);
            // images.push(`images/girl${i < 10 ? '0' : ''}${i + 1}.jpg`);
        }

        const placeholderTag = $('.gallery .placeholder.template')
        $('.gallery').empty();
        for (let i = 0; i < initialImageCount; i++) {
            const copyOfPlaceholder = placeholderTag.clone();
            copyOfPlaceholder.attr('data-id', i);
            copyOfPlaceholder.removeClass('template');
            $('.gallery').append(copyOfPlaceholder);
        }
        $('.gallery').append(placeholderTag)

        for (let i = 0; i < images.length; i++) {
            const imageSrc = images[i];
            const placeholder = $(`[data-id=${i}]`);
            moveImage(imageSrc, placeholder, i);
        }
    }

    function moveImage(imageSrc, placeholder, index) {
        const placeholderWidth = placeholder.width();
        const placeholderHeight = placeholder.height();

        const image = $('<img>');
        image.attr('src', imageSrc);
        image.addClass('image');
        image.addClass('fly');

        const initialTop = randomIntFromInterval(0, 800);
        const initialLeft = randomIntFromInterval(3500, 5000);
        image.css('top', initialTop);
        image.css('left', initialLeft);

        image.css('max-width', placeholderWidth);
        image.css('max-height', placeholderHeight);
        $('body').append(image);

        const placeholderPosition = placeholder.position();

        image.animate(
            {
                top: placeholderPosition.top + 10,
                left: placeholderPosition.left + 10,
            },
            1 * 1000 + index * 200
        );
    }

    function randomIntFromInterval(min, max) { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    $(window).on('resize', function(){
        $('.image').remove();
        init();
    });
});