$(document).ready(function () {
    const images = [];
    const animationSpeed = 3 * 1000;
    let currentLeftImageIndex = 0;

    init();

    $('.page.right.initial').click(function () {
        const rightMoving = $('.page.right.moving');
        rightMoving.css('transition', 'none');
        rightMoving.addClass('opened');

        const rightPageStaticImage = $('.page.right.initial').find('img');
        const rightPageImage = rightPageStaticImage.attr('src');
        rightPageStaticImage.attr('src', getImage(currentLeftImageIndex + 3));
        rightMoving.find('img').attr('src', rightPageImage);

        setTimeout(() => {
            rightMoving.css('transition', '3s');
            rightMoving.removeClass('opened');
        }, 0);

        const leftMoving = $('.page.left.moving');
        leftMoving.find('img').attr('src', getImage(currentLeftImageIndex + 2));
        setTimeout(() => {
            leftMoving.addClass('opened');

            setTimeout(() => {
                leftMoving.css('transition', 'none');
                const newImage = leftMoving.find('img').attr('src');
                $('.page.left.initial').find('img').attr('src', newImage);
                leftMoving.removeClass('opened');

                setTimeout(() => {
                    leftMoving.css('transition', '3s');
                    currentLeftImageIndex += 2;
                }, 100);
            }, animationSpeed);
        }, animationSpeed)
    });



    function init() {
        for (let i = 1; i < 8; i++) {
            //images.push(`images/girl${i < 10 ? '0' : ''}${i}.jpg`);
            images.push(`images/best/best${i < 10 ? '0' : ''}${i}.jpg`);
        }

        $('.page.left.initial').find('img').attr('src', getImage(currentLeftImageIndex))
        $('.page.right.initial').find('img').attr('src', getImage(currentLeftImageIndex + 1))
    }

    function getImage(i){
        if (i < 0){
            i = i + images.length;
        }
        if (i > images.length - 1){
            i = i % images.length;
        }
        return  images[i];
    }

    $('.red').click(function () {
        $('.red').toggleClass('big');
    });
})