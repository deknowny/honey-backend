$(document).ready(function() {

  // var myPath = document.getElementById("svg-check");
  // var length = myPath.getTotalLength();
  // console.log(length);

  // Checkout/basket quantity init
  if ( $('.checkout-items').length ) {
    $('.checkout-items .quantity .res').each(function() {
      let num = parseInt($(this).text());
      let dec = $(this).parent('p').siblings('.dec');
      if ( num == 1 ) {
        dec.addClass('q-trash');
      }
    });
  }

  // AOS animation
  AOS.init();

  // SVG
  $('svg.set-vb').each(function() {
    var width = parseInt($(this).css('width'));
    var height = parseInt($(this).css('height'));
    $(this).attr('width', width).attr('height', height).attr('viewBox', '0 0 ' + width + ' ' + height);
  });

  // Easy tab's init
  if ( $('#checkout_tabs').length ) {
    $('#checkout_tabs').easytabs({
      animationSpeed: 100,
      updateHash: false,
      // defaultTab: 'li.third'
    });
  }

  $('#checkout_tabs').bind('easytabs:midTransition', function() {
    $('#checkout ul.etabs li').removeClass('prev-tab');
    $('#checkout ul.etabs li.active').prevAll('li').addClass('prev-tab');
  });

  // Main slider
  var mainTotal = $('.main-swiper .swiper-slide').length;
  var mainSwiper = new Swiper('.main-swiper', {
    spaceBetween: 400,
    speed: 500,
    effect: 'coverflow',
    grabCursor: false,
    simulateTouch: false,
    centeredSlides: true,
    slidesPerView: 'auto',
    loop: true,
    loopedSlides: mainTotal,
    autoplay: {
      delay: 8000,
      disableOnInteraction: false
    },
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 700,
      modifier: 1,
      slideShadows : false
    },
    pagination: {
      el: '.main-pagination',
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '"><svg width="32" height="31" viewBox="0 0 32 31" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.3947 1.90004C12.5716 3.51038 9.45579 4.77048 6.90003 6.8259C6.00328 7.54709 5.21409 8.0245 4.6683 9.0801C4.21988 9.94736 3.68203 10.7137 3.20773 11.5609C2.69583 12.4753 2.59508 13.6497 2.30803 14.6619C1.78996 16.4888 1.11621 17.9661 1.11621 19.9456C1.11621 21.8887 1.65024 23.7953 2.68193 25.4201C4.81355 28.7772 8.62962 30.4856 12.532 29.9166C14.4327 29.6394 16.2103 28.9367 18.0587 28.4019C20.5114 27.6922 23.1045 26.9391 25.2681 25.5036C26.9803 24.3676 28.5899 22.2889 29.79 20.6016C30.8922 19.0518 31.1386 16.663 30.935 14.7931C30.7385 12.988 29.362 10.8083 28.1308 9.53333C26.079 7.40865 23.5569 6.1511 20.8747 5.03685C17.45 3.61414 13.732 2.17347 10.1366 1.25598" stroke="#211F1F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></span>';
      }
    },
    breakpoints: {
      1279: {
        coverflowEffect: {
          depth: 900
        }
      }
    }
  });

  $('.main-swiper').on('click', '.swiper-slide', function (e) {
    e.stopPropagation();
    var index = $(this).index();
    if (mainSwiper.activeIndex === index + 1) {
      e.preventDefault();
      mainSwiper.slidePrev();
    }
    else if (mainSwiper.activeIndex === index - 1) {
      e.preventDefault();
      mainSwiper.slideNext();
    }
  });

  if ( $('.main-swiper').length ) {
    $('.main-pagination .swiper-pagination-bullet:first-child').addClass('offset');
    mainSwiper.autoplay.stop();
    setTimeout(function() {
      $('.main-pagination .swiper-pagination-bullet').removeClass('offset');
      mainSwiper.autoplay.start();
    }, 1500);
  }

  // Feedback slider
  var feedbackTotal = $('.feedback-swiper .swiper-slide').length;
  var feedbackSwiper = new Swiper('.feedback-swiper', {
    spaceBetween: 800,
    speed: 500,
    effect: 'coverflow',
    grabCursor: false,
    simulateTouch: false,
    centeredSlides: true,
    slidesPerView: 'auto',
    loop: true,
    loopedSlides: feedbackTotal,
    autoplay: {
      delay: 8000,
      disableOnInteraction: false
    },
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 600,
      modifier: 1,
      slideShadows : false
    },
    pagination: {
      el: '.feedback-pagination',
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '"><svg width="32" height="31" viewBox="0 0 32 31" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.3947 1.90004C12.5716 3.51038 9.45579 4.77048 6.90003 6.8259C6.00328 7.54709 5.21409 8.0245 4.6683 9.0801C4.21988 9.94736 3.68203 10.7137 3.20773 11.5609C2.69583 12.4753 2.59508 13.6497 2.30803 14.6619C1.78996 16.4888 1.11621 17.9661 1.11621 19.9456C1.11621 21.8887 1.65024 23.7953 2.68193 25.4201C4.81355 28.7772 8.62962 30.4856 12.532 29.9166C14.4327 29.6394 16.2103 28.9367 18.0587 28.4019C20.5114 27.6922 23.1045 26.9391 25.2681 25.5036C26.9803 24.3676 28.5899 22.2889 29.79 20.6016C30.8922 19.0518 31.1386 16.663 30.935 14.7931C30.7385 12.988 29.362 10.8083 28.1308 9.53333C26.079 7.40865 23.5569 6.1511 20.8747 5.03685C17.45 3.61414 13.732 2.17347 10.1366 1.25598" stroke="#211F1F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></span>';
      }
    },
    breakpoints: {
      320: {
        spaceBetween: 20
      },
      767: {
        coverflowEffect: {
          depth: 1000
        },
        spaceBetween: 10
      },
      1023: {
        spaceBetween: 200
      },
      1279: {
        spaceBetween: 100
      }
    }
  });

  $('.feedback-swiper').on('click', '.swiper-slide', function (e) {
    e.stopPropagation();
    var index = $(this).index();
    if (feedbackSwiper.activeIndex === index + 1) {
      e.preventDefault();
      feedbackSwiper.slidePrev();
    }
    else if (feedbackSwiper.activeIndex === index - 1) {
      e.preventDefault();
      feedbackSwiper.slideNext();
    }
  });

  if ( $('.feedback-swiper').length ) {
    $('.feedback-pagination .swiper-pagination-bullet:first-child').addClass('offset');
    feedbackSwiper.autoplay.stop();
    setTimeout(function() {
      $('.feedback-pagination .swiper-pagination-bullet').removeClass('offset');
      feedbackSwiper.autoplay.start();
    }, 1500);
  }

  // Apiary slider
  var apiarySwiper = new Swiper('.apiary-slider', {
    slidesPerView: 3,
    spaceBetween: 32,
    speed: 500,
    loop: true,
    autoplay: {
      delay: 8000,
      disableOnInteraction: false
    },
    breakpoints: {
      767: {
        slidesPerView: 2,
        spaceBetween: 16
      }
    }
  });

  apiarySwiper.on('transitionStart', function () {
    let video = $('.common-slider .video-container iframe').attr('src');
    $('.common-slider .video-container iframe').attr('src', '');
    $('.common-slider .video-container iframe').attr('src', video);
    $('.common-slider .video-container .mask').fadeIn(100);
  });

  // Email break
  $('.email-break').each(function() {
    if ( $(this).width() >= $(this).closest('div').width() ) {
      var thisEmail = $(this).html();
      $(this).empty();
      var beforeString = thisEmail.substr(0, thisEmail.indexOf('@'));
      var afterString = thisEmail.substr(thisEmail.indexOf('@'));
      $(this).html(beforeString + '<br>' + afterString);
    }
  });

  // Personal card animation
  if ( $('#personal-header').length ) {
    if ( !Cookies.get('tooltip') ) {
      // Cookies.set('tooltip', 'showed',);
      $('#personal-header .personal-data .tooltip').css('opacity', '1');
      setTimeout(function() {
        $('#personal-header .personal-data .tooltip').addClass('animate__animated').addClass('animate__jello');
      }, 300);
      setTimeout(function() {
        $('#personal-header .personal-data .tooltip').fadeOut(300);
      }, 6000);
    } else {
      $('#personal-header .personal-data .tooltip').remove();
    }  
  }

  $('#personal-header .personal-data .card').mouseover(function() {
    $(this).find('.tooltip').fadeOut(300);
  });  

  // Input masks's
  $('#personal_birth').inputmask({
    placeholder: "__.__.____",
    alias: "datetime", 
    inputFormat: "dd.mm.yyyy",
    showMaskOnHover: false
  });

  $('.phone-mask').inputmask({
    mask: "+7 (999) 999 99 99",
    clearIncomplete: true,
    showMaskOnHover: false
  });

  $('#address_house').inputmask({
    mask: "д. 9[9][9][9][a][a]",
    showMaskOnHover: false
  });

  $('#address_building').inputmask({
    mask: "корп. [9][9][a]",
    showMaskOnHover: false
  });

  $('#address_appartment').inputmask({
    mask: "кв. 9[9][9]",
    showMaskOnHover: false
  });

  $('.card_mask').inputmask({
    mask: "9999",
    showMaskOnHover: false
  });

  // Cursor animation
  if (window.matchMedia("screen and (min-width: 1366px)").matches) {
    function beesInit() {
      var i = 1;                  
      function myLoop() {         
        setTimeout(function() {   
          $("#cursor-follower").append('<div class="a a' + i + '">');
          animateDiv(".a" + i);   
          i++;                   
          if (i < 25) { 
            myLoop();            
          }         
        }, 20)
      };
      myLoop();  
    };
    beesInit();

    $(document).on('mouseleave', function(e) {
      $("#cursor-follower").fadeOut(300);
    });
    $(document).on('mouseenter', function(e) {
      $("#cursor-follower").empty().show();
      beesInit();
    });
  }
	
});

$(window).scroll(function() {

  if ( $(this).scrollTop() > 50 ) {
    $('header').addClass('sticky');
  } else {
    $('header').removeClass('sticky');
  }

});

// Cursor animation
if (window.matchMedia("screen and (min-width: 1366px)").matches) {
  function makeNewPosition(){
    // Get viewport dimensions (remove the dimension of the div)
    var h = $('#cursor-follower').height() - 3;
    var w = $('#cursor-follower').width() - 3;   
    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);
    return [nh,nw];    
  }

  function animateDiv(myclass){
      var newq = makeNewPosition();
      $(myclass).animate({ top: newq[0], left: newq[1] }, 400, function() {
        animateDiv(myclass);        
      });
  };

  $(document).on('mousemove', function(e) {
    $('#cursor-follower').css({
      left:  e.pageX + 10,
      top:   e.pageY + 20
    });
  });
}

// Widget
$('#widget').on('click', function(e) {
  if ( !$(this).hasClass('active') ) {
    $(this).addClass('active');
    $(this).find('.collapsed').fadeOut(300);
    $(this).find('.deployed').fadeIn(300);
    $(this).find('.close').fadeIn(300);
  }
});
$(document).on('click', '#widget .close', function(e) {
  $('#widget').removeClass('active');
  $('#widget').find('.deployed').fadeOut(300);
  $('#widget').find('.close').fadeOut(300);
  $('#widget').find('.collapsed').fadeIn(300);
});

// Password show/hide
$('.common-form .pass-control').on('click', function(e) {
  e.preventDefault();
  if ( $(this).siblings('input').attr('type') == 'password' ) {
    $(this).addClass('view');
    $(this).siblings('input').attr('type', 'text');
  } else {
    $(this).removeClass('view');
    $(this).siblings('input').attr('type', 'password');
  }
});

// Upload image
$('#personal_photo').on('change', function () {
  let imgCont = $(this).parent('label').siblings('.img-container');
  let thImg = $(this)[0].files[0];
  let img = document.createElement('img');
  imgCont.empty();
  img.src = window.URL.createObjectURL(thImg);
  img.onload = function () {
      window.URL.revokeObjectURL(this.src);
  }
  imgCont.append(img);
});

// Basket quantity
$('.checkout-items .quantity .but').on('click', function(e) {
  e.preventDefault();
  let result = $(this).parent('.quantity').find('.res');
  let num = parseInt(result.text());
  if ( $(this).hasClass('dec') && num == 2 ) {
    $(this).addClass('q-trash');
  }
  if ( $(this).hasClass('dec') && num > 1 ) {
    num--;
    result.text(num);
  } 
  if ( $(this).hasClass('inc') ) {
    $(this).siblings('.dec').removeClass('q-trash');
    num++;
    result.text(num);
  }
});

// Basket remove item
$(document).on('click', '.checkout-items .trash', function() {
  let th = $(this)
  th.parent('.item').fadeOut(300);
  setTimeout(function() {
    th.parent('.item').remove();
  }, 300);
});

$(document).on('click', '.checkout-items .q-trash img', function() {
  let th = $(this)
  th.closest('.item').fadeOut(300);
  setTimeout(function() {
    th.closest('.item').remove();
  }, 300);
});

// Radio
$('.common-form .radio-group p').on('click', function() {
  let sibItem = $(this).closest('.item').siblings('.item');
  sibItem.removeClass('active');
  $(this).closest('.item').addClass('active');
  sibItem.find('input[type="radio"]').prop('checked', false);
  $(this).siblings('label').find('input[type="radio"]').prop('checked', true);
});

$('.common-form .radio-group label').on('click', function() {
  let sibItem = $(this).closest('.item').siblings('.item');
  sibItem.removeClass('active');
  $(this).closest('.item').addClass('active');
  sibItem.find('input[type="radio"]').prop('checked', false);
  $(this).find('input[type="radio"]').prop('checked', true);
});

// Play youtube
$('.common-slider .youtube .play').on('click', function(e) {
  let mask = $(this).parent('.mask');
  mask.fadeOut(300);
  mask.siblings('iframe')[0].src += '?autoplay=1';
});

// Only one checkbox
$('.only-chk label').on('click', function(e) {
  e.preventDefault();
  let thInput = $(this).children('input');
  if ( !thInput.is(':checked') ) {
    $(this).parent('.only-chk').find('input').prop('checked', false);
    thInput.prop('checked', true);
  }
});

// Cookies
$('#cookies button').on('click', function() {
  $('#cookies').fadeOut(300);
});

// Catalog

// Categories
// Aside filter's
$('#catalog aside .category h2').on('click', function() {
    let category = $(this).parent('.category');
    let index = category.index('.category');
    let tab = $('#catalog .catalog-side .tabs label');

    if ( !category.hasClass('active') ) {
      $('#catalog aside .category .options-container').slideUp(300);
      $('#catalog aside .category').removeClass('before-active');
      category.addClass('before-active').children('.options-container').slideDown(300);
      
      tab.removeClass('active').children('input').prop('checked', false);
      tab.eq(index).addClass('active').children('input').prop('checked', true);
      setTimeout(function() {  
        $('#catalog aside .category').removeClass('active');
        category.addClass('active'); 

        if ( window.matchMedia('screen and (min-width: 1024px)').matches) {
          let offset = category.offset().top - 200;
          $('body, html').animate({
            scrollTop: offset
          }, 300); 
        } else {
          let offset = category.offset().top - $('#catalog aside').offset().top + 100;
          $('#catalog .aside-wrapper').animate({
            scrollTop: offset
          }, 300); 
        }
      }, 300);
    }
});

// Upper tab's
$('#catalog .catalog-side .tabs label p').on('click', function(e) {
  e.preventDefault();
  let tab = $(this).parent('label');
  let index = tab.index();
  let category = $('#catalog aside .category');
  let activeCategory = category.eq(index);

  if ( !tab.hasClass('active') ) {

    $('#catalog .catalog-side .tabs label').removeClass('active').children('input').prop('checked', false);
    tab.addClass('active').children('input').prop('checked', true);

    category.removeClass('before-active').children('.options-container').slideUp(300);
    setTimeout(function() {
      category.removeClass('active');
    }, 300);

    if ( tab.is(':not(:last-child)') ) {
      activeCategory.addClass('before-active').children('.options-container').slideDown(300);  

      setTimeout(function() {  
        activeCategory.addClass('active');

        if ( window.matchMedia('screen and (min-width: 1024px)').matches) {
          let offset = category.eq(index).offset().top - 200;
          $('body, html').animate({
            scrollTop: offset
          }, 300);
        } else {
          let offset = category.eq(index).offset().top - $('#catalog aside').offset().top + 100;
          $('#catalog .aside-wrapper').animate({
            scrollTop: offset
          }, 300); 
        }
      }, 300);
    } else {
        $('#catalog .aside-wrapper').animate({
          scrollTop: 0
        }, 300); 
    }

  }

});

// Category reset
$('#catalog aside button').on('click', function() {
  $('#catalog aside .category.active input').prop('checked', false);
});

// Notification's
$('#catalog .item.notify .btn-container .b-white').on('click', function() {
  $(this).closest('.item').removeClass('notify').addClass('notified');
});

// Validations

// Basket promo
$('#promo-form.denied .group input').on('keyup', function(e) {
  e.preventDefault();
  $(this).closest('#promo-form').removeClass('denied');
});

$('#promo-form').validate({
  highlight: function(element) {
    $(element).removeClass('is-valid').addClass('is-invalid');
    $(element).siblings('button').removeClass('is-valid').addClass('is-invalid');
  },
  unhighlight: function(element) {
    $(element).removeClass('is-invalid').addClass('is-valid');
    $(element).siblings('button').removeClass('is-invalid').addClass('is-valid');
  },
  rules: {
    promo: {
      required: true,
      minlength: 8
    }
  },
  messages: {
    promo: {
      required: '',
      minlength: ''
    }
  },
  submitHandler: function() {
    var th = $('#promo-form');
    $.ajax({
      type: "POST",
      url: "assets/app/mail.php",
      data: th.serialize()
    }).done(function() {
      
    });
    return false;
  }
});

// Enter window
$('#enter-form').validate({
  highlight: function(element) {
    $(element).removeClass('is-valid').addClass('is-invalid');
    $(element).siblings('label:not(.error)').removeClass('is-valid').addClass('is-invalid');
  },
  unhighlight: function(element) {
    $(element).removeClass('is-invalid').addClass('is-valid');
    $(element).siblings('label:not(.error)').removeClass('is-invalid').addClass('is-valid');
  },
  rules: {
    phone: {
      required: true,
      minlength: 5
    },
    pass: {
      required: true,
      minlength: 5
    }
  },
  messages: {
    phone: {
      required: 'Заполните это поле',
      minlength: 'Слишком короткий номер'
    },
    pass: {
      required: 'Заполните это поле',
      minlength: 'Минимум 5 символов'
    }
  },
  submitHandler: function() {
    var th = $('#enter-form');
    $.ajax({
      type: "POST",
      url: "assets/app/mail.php",
      data: th.serialize()
    }).done(function() {
      $('[data-remodal-id=enter]').remodal().close();
      setTimeout(function() {
        th.trigger('reset');
      }, 2000);
    });
    return false;
  }
});

// Regist window
$('#regist-form').validate({
  highlight: function(element) {
    $(element).removeClass('is-valid').addClass('is-invalid');
    $(element).siblings('label:not(.error)').removeClass('is-valid').addClass('is-invalid');
  },
  unhighlight: function(element) {
    $(element).removeClass('is-invalid').addClass('is-valid');
    $(element).siblings('label:not(.error)').removeClass('is-invalid').addClass('is-valid');
  },
  rules: {
    name: {
      required: true,
      minlength: 2
    },
    phone: {
      required: true,
      minlength: 5
    },
    pass: {
      required: true,
      minlength: 5
    },
    confirm: {
      required: true,
      equalTo : "#regist_pass"
    },
    checkbox: {
      required: true
    }
  },
  messages: {
    name: {
      required: 'Заполните это поле',
      minlength: 'Слишком короткое имя'
    },
    phone: {
      required: 'Заполните это поле',
      minlength: 'Слишком короткий номер'
    },
    pass: {
      required: 'Заполните это поле',
      minlength: 'Минимум 5 символов'
    },
    confirm: {
      required: 'Заполните это поле',
      equalTo: 'Пароли не совпадают'
    },
    checkbox: {
      required: ''
    }
  },
  submitHandler: function() {
    var th = $('#regist-form');
    $.ajax({
      type: "POST",
      url: "assets/app/mail.php",
      data: th.serialize()
    }).done(function() {
      $('[data-remodal-id=regist]').remodal().close();
      setTimeout(function() {
        th.trigger('reset');
      }, 2000);
    });
    return false;
  }
});

// Personal window
$('#personal-form').validate({
  highlight: function(element) {
    $(element).removeClass('is-valid').addClass('is-invalid');
    $(element).siblings('label:not(.error)').removeClass('is-valid').addClass('is-invalid');
  },
  unhighlight: function(element) {
    $(element).removeClass('is-invalid').addClass('is-valid');
    $(element).siblings('label:not(.error)').removeClass('is-invalid').addClass('is-valid');
  },
  rules: {
    name: {
      required: true,
      minlength: 2
    },
    surname: {
      required: true,
      minlength: 2
    },
    phone: {
      required: true,
      minlength: 14
    },
    email: {
      required: true,
      email: true
    },
    birthday: {
      required: true,
      minlength: 10
    },
    address_1: {
      required: true,
      minlength: 5
    },
    address_house: {
      required: function(element) {
        return $('input[name="address_1"]').val().length >= 5;
      }
    },
    repeat_pass: {
      equalTo : "#new_pass"
    }
  },
  messages: {
    name: {
      required: 'Заполните это поле',
      minlength: 'Слишком короткое имя'
    },
    surname: {
      required: 'Заполните это поле',
      minlength: 'Слишком короткая фамилия'
    },
    phone: {
      required: 'Заполните это поле',
      minlength: 'Слишком короткий номер'
    },
    email: {
      required: 'Заполните это поле',
      email: 'Некорректный адрес'
    },
    birthday: {
      required: 'Заполните это поле',
      minlength: 'Слишком короткая дата'
    },
    address_1: {
      required: 'Укажите адрес',
      minlength: 'Слишком короткий адрес'
    },
    address_house: {
      required: 'Укажите номер дома'
    },
    repeat_pass: {
      equalTo: 'Пароли не совпадают'
    }
  },
  submitHandler: function() {
    var th = $('#personal-form');
    $.ajax({
      type: "POST",
      url: "assets/app/mail.php",
      data: th.serialize()
    }).done(function() {
      $('[data-remodal-id=personal]').remodal().close();
      setTimeout(function() {
        th.trigger('reset');
      }, 2000);
    });
    return false;
  }
});

// Card number
$('#card-form').validate({
  highlight: function(element) {
    $(element).removeClass('is-valid').addClass('is-invalid');
    $(element).siblings('label:not(.error)').removeClass('is-valid').addClass('is-invalid');
  },
  unhighlight: function(element) {
    $(element).removeClass('is-invalid').addClass('is-valid');
    $(element).siblings('label:not(.error)').removeClass('is-invalid').addClass('is-valid');
  },
  rules: {
    card: {
      required: true,
      cardminlength: true
    }
  },
  messages: {
    card: {
      required: ''
    }
  },
  submitHandler: function() {
    var th = $('#card-form');
    $.ajax({
      type: "POST",
      url: "assets/app/mail.php",
      data: th.serialize()
    }).done(function() {
      $('[data-remodal-id=card]').remodal().close();
      setTimeout(function() {
        th.trigger('reset');
      }, 2000);
    });
    return false;
  }
});

$.validator.addMethod('cardminlength', function (value, element) {
    let thVal = value.replace(/_/g, '');
    return thVal.length > 3;
}, '');

// Reset form's on popup closing
$(document).on('closed', '.remodal', function (e) {
  $('form').trigger('reset');
});

// Step's form's

// Step 1
$('#step_1_form').validate({
  highlight: function(element) {
    $(element).removeClass('is-valid').addClass('is-invalid');
    $(element).siblings('label:not(.error)').removeClass('is-valid').addClass('is-invalid');
  },
  unhighlight: function(element) {
    $(element).removeClass('is-invalid').addClass('is-valid');
    $(element).siblings('label:not(.error)').removeClass('is-invalid').addClass('is-valid');
  },
  rules: {
    name: {
      required: true,
      minlength: 2
    },
    surname: {
      required: true,
      minlength: 2
    },
    phone: {
      required: true,
      minlength: 5
    },
    email: {
      required: true,
      email: true
    }
  },
  messages: {
    name: {
      required: 'Заполните это поле',
      minlength: 'Слишком короткое имя'
    },
    surname: {
      required: 'Заполните это поле',
      minlength: 'Слишком короткая фамилия'
    },
    phone: {
      required: 'Заполните это поле',
      minlength: 'Слишком короткий номер'
    },
    email: {
      required: 'Заполните это поле',
      email: 'Некорректный адрес'
    }
  },
  submitHandler: function() {
    $('#checkout_tabs').easytabs('select', '#step_2'); // next step
    $('html, body').animate({scrollTop: 0}, 600);
  }
});

// Step 2
$('#step_2_form').validate({
  submitHandler: function() {
    $('#checkout_tabs').easytabs('select', '#step_3'); // next step
    $('html, body').animate({scrollTop: 0}, 600);
  }
});

// Step 3
$('#step_3_form').validate({
  submitHandler: function() {
    $('[data-remodal-id=thanks]').remodal().open();
    setTimeout(function() {
      window.location.replace('/med/checkout-success.html');
    }, 5000);
  }
});

// Redirect, on popup closing
$(document).on('closing', '.remodal-thanks', function () {
  window.location.replace('/med/checkout-success.html');
});

// Previous step
$('#checkout .common-step button.b-prev').on('click', function(e) {
  e.preventDefault();
  let prevId = $(this).closest('.common-step').prev('.common-step').attr('id');
  $('#checkout_tabs').easytabs('select', '#' + prevId);
  $('html, body').animate({scrollTop: 0}, 600);
});