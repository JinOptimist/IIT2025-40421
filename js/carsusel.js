$(document).ready(function () {
    const images = [];
    let zeroImageIndex = 0;

    const animationSpeed = 1 * 1000;

    const defaultPadding = 5;
    const defaultMargin = 10;

    const defaultSmallWidth = 200;
    const defaultSmallHeight = 200;
    const defaultSmallBorderWidth = 2;

    const defaultCenterWidth = 300;
    const defaultCenterHeight = 300;
    const defaultCenterBorderWidth = 2;

    const actionsToPerform = [];
    let isAnimationActive = false;

    const marginForImageInPopup = 50;

    init();

    setInterval(function () {
        if (isAnimationActive) {
            return;
        }

        if (actionsToPerform.length <= 0) {
            return;
        }

        isAnimationActive = true;

        // get first element from array and remove it from array
        // const action = actionsToPerform[0];
        // actionsToPerform.splice(0, 1);
        const action = actionsToPerform.shift();
        action();
    }, 100);

    $('.block-1').click(function () {
        // rotateCaruselToRight();
        actionsToPerform.push(rotateCaruselToRight);
    });

    $('.block-3').click(function () {
        actionsToPerform.push(rotateCaruselToLeft);
    });

    $('.block-2').click(openCenterImageToFullSize);

    function openCenterImageToFullSize() {
        const tagImage = $('.block-2 img');
        const width = tagImage.width();     // 150
        const height = tagImage.height();   // 300
        const postion = tagImage.position();
        const left = postion.left;
        const top = postion.top;
        // tagImage.hide();

        $('.popup .content img').css('width', width);
        $('.popup .content img').css('height', height);
        $('.popup .content img').css('left', left);
        $('.popup .content img').css('top', top);
        $('.popup .content img').css('position', 'fixed');

        const windowWidth = $(window).width() - marginForImageInPopup; // 698
        const windowHeight = $(window).height() - marginForImageInPopup;// 600

        const rateToResize = height > width
            ? windowHeight / height
            : windowWidth / width;

        const imageFinalWidth = width * rateToResize;
        const imageFinalHeight = height * rateToResize;

        const newTop = marginForImageInPopup / 2 + (windowHeight - imageFinalHeight) / 2;
        const newLeft = marginForImageInPopup / 2 + (windowWidth - imageFinalWidth) / 2;

        $('.popup .content img').animate(
            {
                width: imageFinalWidth,
                height: imageFinalHeight,
                top: newTop,
                left: newLeft,
                borderRadius: 20
            },
            animationSpeed
        );

        $('.popup .cover').css('opacity', 0);
        $('.popup .cover').animate(
            {
                opacity: 0.7,
            },
            animationSpeed
        );

        $('.block-2').animate({ opacity: 0 }, animationSpeed);


        const centerImageSrc = images[getFixedIndex(zeroImageIndex + 2)];
        $('.popup .content img').attr('src', centerImageSrc);
        $('.popup-container').show();
    }

    $('.popup .cover').click(exitFromFullSize);
    $(document).on("keydown", function (e) {
        // escape code is 27 
        if (e.keyCode == 27) {
            exitFromFullSize();
        }

        // left arrow code is 37 
        if (e.keyCode == 37) {
            actionsToPerform.push(rotateCaruselToLeft);
        }
        // right arrow code is 39  
        if (e.keyCode == 39) {
            actionsToPerform.push(rotateCaruselToRight);
        }

        // right arrow code is 39  
        if (e.keyCode == 13
            || e.keyCode == 32
            || e.keyCode == 70) {
            openCenterImageToFullSize();
        }

        console.log(e.keyCode);
    });

    function exitFromFullSize() {
        const tagImage = $('.block-2 img');
        tagImage.show();
        const width = tagImage.width();     // 150
        const height = tagImage.height();   // 300
        const postion = tagImage.position();
        const top = postion.top;
        const left = postion.left;

        $('.block-2').animate({ opacity: 1 }, animationSpeed);

        $('.popup .content img').animate(
            {
                width: width,
                height: height,
                top: top,
                left: left,
                borderRadius: 0
            },
            animationSpeed
        );

        $('.popup .cover').animate(
            {
                opacity: 0,
            },
            animationSpeed,
            function () {
                $('.popup-container').hide();
            }
        );
    }

    function rotateCaruselToRight() {
        $('.block-0').animate({
            width: defaultSmallWidth,
            height: defaultSmallHeight,
            padding: defaultPadding,
            margin: defaultMargin,
            borderWidth: defaultSmallBorderWidth,
        }, animationSpeed);

        $('.block-1').animate({
            width: defaultCenterWidth,
            height: defaultCenterHeight
        }, animationSpeed);

        $('.block-2').animate({
            width: defaultSmallWidth,
            height: defaultSmallHeight
        }, animationSpeed);

        $('.block-3').animate(
            {
                width: 0,
                height: 0,
                padding: 0,
                margin: 0,
                borderWidth: 0
            },
            animationSpeed,
            function () {
                setInitialStyleForAll();
                moveInnerHtml(
                    $('.block-3'),
                    $('.block-4'));
                moveInnerHtml(
                    $('.block-2'),
                    $('.block-3'));
                moveInnerHtml(
                    $('.block-1'),
                    $('.block-2'));
                moveInnerHtml(
                    $('.block-0'),
                    $('.block-1'));

                zeroImageIndex = getFixedIndex(zeroImageIndex - 1);
                setImageForBlock0();
                isAnimationActive = false;
            });
    }

    function rotateCaruselToLeft() {
        $('.block-1').animate({
            width: 0,
            height: 0,
            padding: 0,
            margin: 0,
            borderWidth: 0
        }, animationSpeed);

        $('.block-2').animate({
            width: defaultSmallWidth,
            height: defaultSmallHeight
        }, animationSpeed);

        $('.block-3').animate({
            width: defaultCenterWidth,
            height: defaultCenterHeight,
        }, animationSpeed);

        $('.block-4').animate(
            {
                width: defaultSmallWidth,
                height: defaultSmallHeight,
                padding: defaultPadding,
                margin: defaultMargin,
                borderWidth: defaultSmallBorderWidth,
            },
            animationSpeed,
            function () {
                setInitialStyleForAll();
                moveInnerHtml(
                    $('.block-1'),
                    $('.block-0'));
                moveInnerHtml(
                    $('.block-2'),
                    $('.block-1'));
                moveInnerHtml(
                    $('.block-3'),
                    $('.block-2'));
                moveInnerHtml(
                    $('.block-4'),
                    $('.block-3'));

                zeroImageIndex = getFixedIndex(zeroImageIndex + 1);
                setImageForBlock4();
                isAnimationActive = false;
            });
    }

    function setImageForBlock0() {
        const newImageSrc = images[zeroImageIndex];
        $('.block-0 img').attr('src', newImageSrc);
        // console.log(`zeroIndex: ${zeroImageIndex} src: ${newImageSrc}`)
        // logToConsoleAllImageSrcs();
    }

    function setImageForBlock4() {
        const newImageSrc = images[getFixedIndex(zeroImageIndex + 4)];
        $('.block-4 img').attr('src', newImageSrc);
        // console.log(`zeroIndex: ${zeroImageIndex} src: ${newImageSrc}`);
        // logToConsoleAllImageSrcs();
    }

    function logToConsoleAllImageSrcs() {
        for (let i = 0; i < 5; i++) {
            const src = $(`.block-${i} img`).attr('src');
            console.log(`Image ${i} src: ${src}`);
        }
    }

    function getFixedIndex(index) {
        if (index < 0) {
            index = images.length + index;
        }
        if (index >= images.length) {
            index = index - images.length;
        }
        return index;
    }

    function moveInnerHtml(from, to) {
        const htmlFrom = from.html();
        to.html(htmlFrom);
    }

    function setInitialStyleForAll() {
        setStyles($('.block-0'), 0, 0, 0, 0, 0);
        setStyles(
            $('.block-1'),
            defaultSmallWidth,
            defaultSmallHeight,
            defaultPadding,
            defaultMargin,
            defaultSmallBorderWidth);
        setStyles(
            $('.block-2'),
            defaultCenterWidth,
            defaultCenterHeight,
            defaultPadding,
            defaultMargin,
            defaultCenterBorderWidth);
        setStyles(
            $('.block-3'),
            defaultSmallWidth,
            defaultSmallHeight,
            defaultPadding,
            defaultMargin,
            defaultSmallBorderWidth);
        setStyles($('.block-4'), 0, 0, 0, 0, 0);
    }

    function setStyles(block, width, height, padding, margin, borderWidth) {
        block.css('width', width);
        block.css('height', height);
        block.css('padding', padding);
        block.css('margin', margin);
        block.css('border-width', borderWidth);
    }

    function init() {
        for (let i = 1; i < 8; i++) {
            //images.push(`images/girl${i < 10 ? '0' : ''}${i}.jpg`);
            images.push(`images/best/best${i < 10 ? '0' : ''}${i}.jpg`);
        }
        for (let i = 0; i < 5; i++) {
            $(`.block-${i} img`).attr('src', images[i]);
        }

        // logToConsoleAllImageSrcs();
        runInfinitAnimation();
    }

    function runInfinitAnimation() {
        const smallDelay = 100;
        const timeToEnjoy = 5 * 1000;
        const delay1 = smallDelay;
        const delay2 = delay1
            + animationSpeed
            + timeToEnjoy;
        const delay3 = delay2
            + animationSpeed
            + smallDelay;
        const delay4 = delay3
            + animationSpeed
            + smallDelay;

        setInterval(
            () => {
                setTimeout(
                    openCenterImageToFullSize,
                    delay1,
                );

                setTimeout(
                    exitFromFullSize,
                    delay2
                );

                setTimeout(
                    () => { actionsToPerform.push(rotateCaruselToLeft); },
                    delay3
                );
            },
            delay4
        );
    }
});

