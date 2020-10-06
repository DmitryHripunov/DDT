$('.header__nav-link').on('click', function (event) {
    event.preventDefault();
    let href = $(this).attr('href');
    let headerHeight = $('.header').height();
    let offset = $(href).offset().top - headerHeight;
    $('body,html').animate({
        scrollTop: offset,
    }, 700);
});


$('.aside-nav__link').on('click', function (event) {
    event.preventDefault();
    let href = $(this).attr('href');
    let headerHeight = $('.header').height();
    let offset = $(href).offset().top - headerHeight;
    $('body,html').animate({
        scrollTop: offset,
    }, 700);
});


// $('.menu__link').on('click', function (event) {
//   event.preventDefault();
//   let href = $(this).attr('href');
//   let headerHeight = $('.header').height();
//   let offset = $(href).offset().top -  headerHeight;
//   $('body,html').animate({
//     scrollTop: offset,
//   }, 700);
// });


const moveUpEl = document.querySelector('.up-btn');

moveUpEl.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector('.header').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
});