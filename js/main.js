$(function () {
  $('.main_visual .main_slide').slick({
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    pauseOnFocus: false,
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
  })

})