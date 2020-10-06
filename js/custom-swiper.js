const instSwiper = new Swiper('.swiper-container', {

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 0,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  }
});
instSwiper.slideNext();