$('.slider').slick({
    arrows: false,
    centerMode: true,
    infinite: false,
    slidesToShow: 4.5,
    focusOnSelect: true,
    asNavFor: '.slider-bg',
    responsive: [
      {
        breakpoint: 1440,
        settings: {
        centerMode: true,
        slidesToShow: 3.5,
        }
      },
      {
        breakpoint: 875,
        settings: {
          centerMode: false,
          slidesToShow: 3.5,
        }
      },
      {
        breakpoint: 600,
        settings: {
          centerMode: false,
          slidesToShow: 3.5,
        }
      },
      {
        breakpoint: 500,
        settings: { 
          centerMode: false, 
          slidesToShow: 2.5,
        }
      },
      {
        breakpoint: 350,
        settings: {
          centerMode: false,
          slidesToShow: 1.5,
        }
      }
    ]
});

$('.slider-bg').slick({
    arrows: false,
    centerMode: true,
    initialSlide: 0,
    infinite: false,
    slidesToShow: 4.5,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
        centerMode: true,
        slidesToShow: 3.5,
        }
      },
        {
          breakpoint: 875,
          settings: {
          centerMode: false,
          slidesToShow: 3.5,
          }
        },
        {
          breakpoint: 600,
          settings: {
          centerMode: false,
          slidesToShow: 3.5,
          }
        },
        {
          breakpoint: 500,
          settings: {
            centerMode: false,
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 350,
          settings: {
            centerMode: false,
            slidesToShow: 1.5,
          }
        }
    ],
    asNavFor: '.slider',
});
 
$(document).ready(function() {
  $('.slider__image-link').magnificPopup({
    type:'image',
    mainClass: 'mfp-with-zoom mfp-img-mobile',
    showCloseBtn: false,
    closeOnContentClick: true,
  });

  const watchingChanges = function(){
    let count = $('.slick-current').index();
    if ( count !== 0 ) { 
      $('.description').addClass('hidden')
      $('.description__after').addClass('hidden')
      $('.slider').addClass('scalable')
    } else {
      $('.description').removeClass('hidden')
      $('.description__after').removeClass('hidden')
      $('.slider').removeClass('scalable')
    }
  }

  $('.slider').on('wheel', (function(e) {
    e.preventDefault();
  
    if (e.originalEvent.deltaY < 0) {
      $(this).slick('slickNext');
    } else {
      $(this).slick('slickPrev');
    }
  }));

  $('.slider').on('swipe', function(){
    watchingChanges();
  });

  $('.slider').keydown(function(){
    watchingChanges();
  });

  $('.slider').click(function(){
    watchingChanges();
  });

  $(document).bind('mousewheel', function(){
    watchingChanges();
  });
});









