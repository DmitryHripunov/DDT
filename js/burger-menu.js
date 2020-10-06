$('.menu__link').on('click', function () {
  let href = $(this).attr('href');
  let headerHeight = $('.header').height();
  let offset = $(href).offset().top - headerHeight;
  $('body,html').animate({
    scrollTop: offset,
  }, 700);
});

$('.header__btn').click(function () {
  let href = $(this).attr('href');
  $(window).on('hashchange', function () {
    let popupId = window.location.hash;
    if (popupId === href) {
      $('body').css('overflow', 'hidden');
    } else {
      $('body').css('overflow', 'visible');
    }
  });
});
