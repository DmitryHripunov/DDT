$('.vote__input-js').focusin(function () {
  $(this).siblings('.vote__label').addClass('vote__label--focused');
});

$('.vote__input-js').focusout(function () {
  let input = $(this);
  if ('' === input.val() ) {
    $(this).siblings('.vote__label').removeClass('vote__label--focused');
  } else {
    input.removeClass('vote__label--focused');
  };

  if (input.val() != '') {
    $('#form__city').val(input.val());
    $('#form__city').siblings('.form__label').addClass('form__label--focused');
  }
});

$('.form__input-js').focusin(function () {
  $(this).siblings('.form__label').addClass('form__label--focused');
});

$('.form__input-js').focusout(function () {
  let input = $(this);
  if ('' === input.val() ) {
    $(this).siblings('.form__label').removeClass('form__label--focused');
  } else {
    input.removeClass('form__label--focused');
  }
});

$('.form__close').click(function (e) {
  e.preventDefault();
  history.back(1);
});

$('.cancel').click(function (e) {
  e.preventDefault();
  history.back(1);
});


  // form
  $('.form').each(function () {
    $('.tel').inputmask({ 
      'mask': '+7(999)999-99-99', 
      showMaskOnHover: false 
    });
  
    $.validator.addMethod('checkMask', function (value, element) {
      return /\+\d{1}\(\d{3}\)\d{3}-\d{2}-\d{2}/g.test(value); 
    });
  
      $(this).validate({
      errorPlacement(error, element) {
        return true;
      },

      focusInvalid: false,
      rules: {
        город: {
          required: true,
        },
        имя: {
          required: true,
          minlength: 3  
        },
        Телефон: {
          required: true,
          checkMask: true, 
        },
        почта: {
          required: true,
          email: true
        },
      },

      // submitHandler(form) {
      //   let th = $(form);
  
      //   $.ajax({
      //   type: 'POST',
      //   url: 'mail.php',
      //   data: th.serialize(),
      //   }).done(() => {
  
        // $('body').addClass('success-send-open');
        // $('body').removeClass('modal-open');
        // $('body').on('click', function() {
        //   $('body').removeClass('success-send-open');
        // });
  
      //   th.trigger('reset');
      // });
  
      // return false;
      // }
    });
  });