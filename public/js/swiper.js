var swiper = new Swiper('.slide-content', {
    slidesPerView: 3,  // Default for large screens
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    scrollbar: {  // Enable scrollbar for better mobile navigation
        el: '.swiper-scrollbar',
        draggable: true,
    },
    touchRatio: 1,  // Enable touch-based scrolling and swiping
    touchStartPreventDefault: false,  // Prevent touch blocking
    breakpoints: {
        768: {  // Mobile screens
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 10,
            touchEventsTarget: 'container',  // Make sure touch events work on mobile
        },
        1024: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 20,
        }
    }
});
