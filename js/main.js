$(function(){
    $('.slider__inner').slick({
        infinite: true,
        asNavFor: '.slider__inner-mini',
        nextArrow: '<img src="./images/next-arrow.png" alt="" class="slick-next slick-arrow">',
        prevArrow: '<img src="./images/prev-arrow.png" alt="" class="slick-prev slick-arrow">'
    });
    $('.slider__inner-mini').slick({
        arrows: false,
        asNavFor: '.slider__inner',
        variableWidth: true,
        focusOnSelect: true,
        responsive: [
            {
              breakpoint: 960,
              settings: {
                centerMode: true,
                slidesToShow: 5,
              }
            }
          ]
    });

    $('.header__menu-mini').on('click', function(){
        $('.menu-mini__btn').toggleClass('active'),
        $('.header__menu-list').slideToggle()
    });

     $('.work__inner').slick({
            infinite: true,
            variableWidth: true,
            centerMode: true,
            arrows: true,
            mobileFirst: true,
            nextArrow: '<img src="./images/next-arrow.png" alt="" class="slick-next slick-arrow work-arrow">',
            prevArrow: '<img src="./images/prev-arrow.png" alt="" class="slick-prev slick-arrow work-arrow">',
            responsive:[
            {
                breakpoint: 929,
                settings: 'unslick'
            }
            ]
         });
      });