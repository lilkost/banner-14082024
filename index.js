let qsThumbs = new Swiper(".qs-banner__thumbs", {
    spaceBetween: 10,
    slidesPerView: 7,
    freeMode: true,
    watchSlidesProgress: true,
});

const pagination = document.querySelector('.qs-banner__slider-pagination')

let qsSldier = new Swiper(".qs-banner__slider", {
    spaceBetween: 10,
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    autoplay: {
        delay: 10000,
    },
    pagination: {
        el: '.qs-banner__slider-pagination',
        clickable: true
    },    
    thumbs: {
        swiper: qsThumbs,
    },

});