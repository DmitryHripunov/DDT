$('.hero__info-btn').click(function () {
    let href = $(this).attr('href');
    $(window).on('hashchange', function() {
      let popupId = window.location.hash;
      if (popupId === href) {
        $('body').css('overflow', 'hidden');
      } else {
        $('body').css('overflow', 'auto');
      }
    });
  });

  $('.vote__link').click(function () {
    let href = $(this).attr('href');
    $(window).on('hashchange', function() {
      let popupId = window.location.hash;
      if (popupId === href) {
        $('body').css('overflow', 'hidden');
      } else {
        $('body').css('overflow', 'auto');
      }
    });
  });