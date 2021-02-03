const innerHeight = $(window).innerHeight();

$(window).scroll(() => {
  const offsetHeight = $(document).scrollTop() + innerHeight * 0.5;
  $('.img-top').map((ind, elem) => {
    const elementHeight = $(elem).innerHeight()
    const itemOffsetHeight = $(elem).offset().top + elementHeight * 0.5;
    $( elem ).css( "transform", `translateY(${ (itemOffsetHeight - offsetHeight) / 10 }px)` );
  });

  $('.suite-content').map((ind, elem) => {
    const elementHeight = $(elem).innerHeight();
    const itemOffsetHeight = $(elem).offset().top + elementHeight * 0.5;
    $( elem ).css( "transform", `translateY(${ - (itemOffsetHeight - offsetHeight) / 6 + 80 }px)` );
  });
})