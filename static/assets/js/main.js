$(function () {
  /*Init slick carousel*/
  if ($(".regular").length != 0) {
    $(".regular").slick({
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 4,
      autoplay: true,
      autoplaySpeed: 3000,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
  }
  /*Init galeria de imagenes*/
  if ($('.magnific-popup').length != 0) {
    $('.magnific-popup').magnificPopup({
      type: 'image'
    });
  }
  /*Levantamiento de aside para el detalle de los vehiculos*/
  $(document).on('click', '[data-action]', function () {
    var ob = $(this);
    var aside = $('#aside');
    aside.toggleClass('active-aside');
    //aside.html(ob.attr('data-action'));
  });
  /*Cierra div emergente aside*/
  $(document).on("click", ".aside-close", function () {
    var aside = $('#aside');
    aside.removeClass('active-aside');
  });

  $(document).on('click', '#btn-nav', function () {
    var nav = $('#nav-list');
    nav.toggleClass('nav-list-h');
  });

});

