const innerHeight = $(window).innerHeight();
const sections = $('.animate-block');
sections.map((ind, elem) => {
  $(elem).addClass('before-animation');
})

$(window).scroll(() => {
  const scrollTop = $(document).scrollTop();
  const scrollBottom = scrollTop + innerHeight;
  const offsetHeight = scrollTop + innerHeight * 0.5;

  sections.map((ind, elem) => {
    if (elem) {
      const itemOffsetHeight = $(elem).offset().top;
      if (itemOffsetHeight + 30 < scrollBottom) {
        $(elem).addClass('animate');
        sections.splice(ind, 1);
      }
    }
  })

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

  if (scrollTop > 0) {
    $('#navbar').addClass('navbar-scrolled');
    $('#navbar').removeClass('navbar-unscrolled');
    $('.nav-link').css('color', '#000');
  } else {
    $('#navbar').addClass('navbar-unscrolled');
    $('#navbar').removeClass('navbar-scrolled');
    $('.nav-link').css('color', '#fff');
  }
})