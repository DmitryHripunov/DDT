$('.hero__button').on('click', function (event) {
  event.preventDefault();
  let href = $(this).attr('href');
  // let headerHeight = $('.header').height();
  let offset = $(href).offset().top + 150;
  $('body,html').animate({
      scrollTop: offset,
  }, 1000);

  $('.chart__img-big').addClass('scale3d');
  
});

$(window).scroll(function() { 
  if ( $(window).scrollTop() >= 400) {                   
    $('.chart__img-big').addClass('scale3d');       
  }
  
  if ( $(window).scrollTop() === 1350 || $(window).scrollTop() === 0 ){
    $('.chart__img-big').removeClass('scale3d');        
  }
});