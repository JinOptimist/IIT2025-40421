$(document).ready(function () {
    const images = [];
    let zeroImageIndex = 2;

    const animationSpeed = 1 * 1000;

    const defaultPadding = 5;
    const defaultMargin = 10;

    const defaultSmallWidth = 200;
    const defaultSmallHeight = 200;
    const defaultSmallBorderWidth = 2;

    const defaultCenterWidth = 300;
    const defaultCenterHeight = 300;
    const defaultCenterBorderWidth = 2;

    init();

    $('.block-1').click(function () {
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
                    $('.block-2'),
                    $('.block-3'));
                moveInnerHtml(
                    $('.block-1'),
                    $('.block-2'));
                moveInnerHtml(
                    $('.block-0'),
                    $('.block-1'));

                zeroImageIndex--;
                fixIndex();
                setImageForBlock0();
            });
    });

    function setImageForBlock0() {
        const newImageSrc = images[zeroImageIndex];
        $('.block-0 img').attr('src', newImageSrc);
    }

    function fixIndex() {
        if (zeroImageIndex < 0) {
            zeroImageIndex = images.length + zeroImageIndex;
        }
        if (zeroImageIndex >= images.length) {
            zeroImageIndex = zeroImageIndex - images.length;
        }
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
    }

    function setStyles(block, width, height, padding, margin, borderWidth) {
        block.css('width', width);
        block.css('height', height);
        block.css('padding', padding);
        block.css('margin', margin);
        block.css('border-width', borderWidth);
    }

    function init() {
        for (let i = 1; i < 6; i++) {
            images.push(`images/girl${i < 10 ? '0' : ''}${i}.jpg`);
        }
    }
});

