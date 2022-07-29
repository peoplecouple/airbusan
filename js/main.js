$(function () {
  $('.main_visual .main_slide').slick({
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    pauseOnFocus: false,
  })

  $(' .main_visual .control i:nth-child(1)').on('click', function () {
    $('.main_visual .main_slide').slick('slickPause')
  })

  $(' .main_visual .control i:nth-child(2)').on('click', function () {
    $('.main_visual .main_slide').slick('slickPlay')
  })

  $('.main_visual .main_tab .tab_menu>div').on('click', function () {
    $(this).addClass('on').siblings().removeClass('on')
    var idx = $(this).index()
    $('.main_visual .main_tab .tab_form').eq(idx).addClass('on').siblings().removeClass('on')
  })

  $('.main_tab .tab_form .top .trip_way div').on('click', function () {
    $(this).addClass('on').siblings().removeClass('on')
  })

  $('.main_tab .tab_form .top .group_check i').on('click', function () {
    $(this).toggleClass('on')
    $('.main_tab .tab_form .top .group_check p').toggleClass('on')
  })


  $('.lowest .lowest_slide').slick({
    arrows: false,
    pauseOnHover: false,
    pauseOnFocus: false,
    slidesToShow: 3,
    responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      }
    }]
  })

  $('.lowest .control i:nth-child(1)').on('click', function () {
    $('.lowest .lowest_slide').slick('slickPrev')
  })

  $('.lowest .control i:nth-child(2)').on('click', function () {
    $('.lowest .lowest_slide').slick('slickNext')
  })


  $('.service .left .list a').on('click', function (e) {
    e.preventDefault();
    $(this).find('p').addClass('on').parent().parent().siblings().find('p').removeClass('on')

    if ($(this).parent().find('img:nth-child(1)').hasClass('on')) {
      $(this).parent().find('img:nth-child(1)').removeClass('on')
      $(this).parent().find('img:nth-child(2)').addClass('on')
      $(this).parent().siblings().find('img:nth-child(2)').removeClass('on')
      $(this).parent().siblings().find('img:nth-child(1)').addClass('on')
    } else {
      $(this).parent().find('img:nth-child(2)').removeClass('on')
      $(this).parent().find('img:nth-child(1)').addClass('on')
      $(this).parent().siblings().find('img:nth-child(2)').removeClass('on')
      $(this).parent().siblings().find('img:nth-child(1)').addClass('on')

    }

    var idx = $(this).parent().index();
    $('.service .right figure').eq(idx).addClass('on').siblings().removeClass('on')
  })

  // $('.service .left .list p').on('click', function (e) {
  //   e.preventDefault();
  //   $(this).addClass('on').parent().parent().siblings().find('p').removeClass('on')

  //   if ($(this).parent().find('img:nth-child(1)').hasClass('on')) {
  //     $(this).parent().find('img:nth-child(1)').removeClass('on')
  //     $(this).parent().find('img:nth-child(2)').addClass('on')
  //     $(this).parent().parent().siblings().find('img:nth-child(2)').removeClass('on')
  //     $(this).parent().parent().siblings().find('img:nth-child(1)').addClass('on')
  //   } else {
  //     $(this).parent().find('img:nth-child(2)').removeClass('on')
  //     $(this).parent().find('img:nth-child(1)').addClass('on')
  //     $(this).parent().parent().siblings().find('img:nth-child(2)').removeClass('on')
  //     $(this).parent().parent().siblings().find('img:nth-child(1)').addClass('on')

  //   }

  //   var idx = $(this).parent().parent().index();
  //   $('.service .right figure').eq(idx).addClass('on').siblings().removeClass('on')
  // })


  $('.promo .left_slider').slick({
    arrows: false,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    asNavFor: '.promo .right_slider',
    pauseOnHover: false,
    pauseOnFocus: false,
  })

  $('.promo .right_slider').slick({
    arrows: false,
    slidesToShow: 1,
    asNavFor: '.promo .left_slider',
    pauseOnHover: false,
    pauseOnFocus: false,
  })

  $('.promo .control i:nth-child(1)').on('click', function () {
    $('.promo .left_slider').slick('slickPause')
  })

  $('.promo .control i:nth-child(2)').on('click', function () {
    $('.promo .right_slider').slick('slickPlay')
  })


  // 반응형때

  $('.mbtn i').on('click', function () {
    $('.gnb').toggleClass('on')
    if ($('.mbtn i:nth-child(1)').hasClass('on')) {
      $('.mbtn i:nth-child(1)').removeClass('on').siblings().addClass('on')
    } else {
      $('.mbtn i:nth-child(2)').removeClass('on').siblings().addClass('on')
    }
  })

  $('.gnb>ul>li>div>a').on('click', function (e) {
    if ($('.gnb').hasClass('on')) {
      e.preventDefault();
      $('.smenu').slideUp();
      $(this).next().toggleClass('on')
      $(this).parent().next().stop().slideToggle()
      $(this).parent().parent().siblings().find('i').removeClass('on')
    }
  })

  $(window).on('resize', function () {
    $('.gnb').removeClass('on')
    $('.mbtn i:nth-child(1)').addClass('on')
    $('.mbtn i:nth-child(2)').removeClass('on')
    $('.smenu').removeAttr('style')
    $('.gnb>ul>li>div>a').next().removeClass('on')

    var width = window.outerWidth;
    if (width <= 768) {
      $('.main_visual .main_tab .book').addClass('on')
      $('.main_visual .main_tab .search').removeClass('on')
      $('.main_visual .main_tab .checkin').removeClass('on')
    }
  })


})