let unemphasizedWhite;
let scrolled = false;
const innerHeight = $(window).innerHeight();
const innerWidth = $(window).innerWidth();
const largeBreakpoint = 992;
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

  $('.animate-img-top').map((ind, elem) => {
    const elementHeight = $(elem).innerHeight()
    const itemOffsetHeight = $(elem).offset().top;
    $( elem ).css( "transform", `translateY(${ (itemOffsetHeight - offsetHeight) / 7 }px)` );
  });

  $('.suite-content').map((ind, elem) => {
    const elementHeight = $(elem).innerHeight();
    const itemOffsetHeight = $(elem).offset().top + elementHeight * 0.5;
    $( elem ).css( "transform", `translateY(${ - (itemOffsetHeight - offsetHeight) / 6 + 80 }px)` );
  });

  if (innerWidth > largeBreakpoint) {
    if (scrollTop > 0) {
      if (!scrolled) {
        scrolled = true;
        $('#navbar').addClass('navbar-scrolled');
        $('#navbar').removeClass('navbar-unscrolled');
        $('#navbar li').addClass('unemphasized-orange');
        unemphasizedWhite = $('#navbar li').first().hasClass('unemphasized-white')
        removedClass = $('#navbar li').removeClass(unemphasizedWhite ? 'unemphasized-white' : 'unemphasized-dark');
        $('.nav-link').css('color', '#000');
        console.log(unemphasizedWhite);
      }
    } else {
      scrolled = false;
      console.log(unemphasizedWhite);
      $('#navbar').addClass('navbar-unscrolled');
      $('#navbar').removeClass('navbar-scrolled');
      $('#navbar li').addClass(unemphasizedWhite ? 'unemphasized-white' : 'unemphasized-dark');
      $('#navbar li').removeClass('unemphasized-orange');
      $('.nav-link').css('color', '#fff');
    }
  }
})

// GALLERY-CAROUSEL
let slideNow = 1;
const slides = $('#slidewrapper').children();
const slideCount = $('#slidewrapper').children().length;
const viewportWidth = $('#block-for-slider').width();
const third = 100 / 3;

$('#slidewrapper').children().remove();
$('#slidewrapper').css('width', `${viewportWidth * 3}px`);

$('#slidewrapper').append($(slides[(slideCount - 1) % slideCount]).attr('id', 'prev').css('margin-left', `-${third}%`));
$('#slidewrapper').append($(slides[(slideNow - 1) % slideCount]).attr('id', 'active').css('margin-left', '0%'));
$('#slidewrapper').append($(slides[(slideNow) % slideCount]).attr('id', 'next').css('margin-left', `0%`));

function nextSlide() {
  $('#slidewrapper #prev').remove();
  $('#slidewrapper #active').attr('id', 'prev').css('margin-left', `-${third}%`);
  $('#slidewrapper #next').attr('id', 'active').css('margin-left', '0%');
  slideNow++;
  $('#slidewrapper').append($(slides[(slideNow) % slideCount]).attr('id', 'next').css('margin-left', `0%`));
}

function prevSlide() {
  $('#slidewrapper #next').remove();
  $('#slidewrapper #active').attr('id', 'next').css('margin-left', `0%`);
  $('#slidewrapper #prev').attr('id', 'active').css('margin-left', '0%');
  slideNow = slideNow === 1 ? slideCount : slideNow - 1;
  const prevID = slideNow === 1 ? 3 : (slideNow - 2) % slideCount;
  $('#slidewrapper').prepend($(slides[prevID]).attr('id', 'prev').css('margin-left', `-${third}%`));
}

// $('#prev-btn').click(() => {
//   console.log('original');
//   prevSlide();
//   const sliderNumb = slideNow % slideCount;
//   $('#carousel-counter-text').html(`${sliderNumb ? slideNow % slideCount : 4}/${slideCount}`)
// });
// $('#next-btn').click(() => {
//   nextSlide()
//   const sliderNumb = slideNow % slideCount;
//   $('#carousel-counter-text').html(`${sliderNumb ? slideNow % slideCount : 4}/${slideCount}`)
// });


// FOR CLONE
const slidesClone = $('#slidewrapper-clone').children();
// const slideCount = $('#slidewrapper-clone').children().length;
const viewportCloneWidth = $('#block-for-slider-minor').width();

$('#slidewrapper-clone').children().remove();
$('#slidewrapper-clone').css('width', `${viewportCloneWidth * 3}px`);

$('#slidewrapper-clone').append($(slidesClone[(slideCount) % slideCount]).attr('id', 'prev-clone').css('margin-left', `-${third}%`));
$('#slidewrapper-clone').append($(slidesClone[(slideNow) % slideCount]).attr('id', 'active-clone').css('margin-left', '0%'));
$('#slidewrapper-clone').append($(slidesClone[(slideNow + 1) % slideCount]).attr('id', 'next-clone').css('margin-left', `0%`));

function nextSlideClone() {
  $('#slidewrapper-clone #prev-clone').remove();
  $('#slidewrapper-clone #active-clone').attr('id', 'prev-clone').css('margin-left', `-${third}%`);
  $('#slidewrapper-clone #next-clone').attr('id', 'active-clone').css('margin-left', '0%');
  // slideNow++;
  $('#slidewrapper-clone').append($(slidesClone[(slideNow + 1) % slideCount]).attr('id', 'next-clone').css('margin-left', `0%`));
}

function prevSlideClone() {
  $('#slidewrapper-clone #next-clone').remove();
  $('#slidewrapper-clone #active-clone').attr('id', 'next-clone').css('margin-left', `0%`);
  $('#slidewrapper-clone #prev-clone').attr('id', 'active-clone').css('margin-left', '0%');
  // slideNow = slideNow === 1 ? slideCount : slideNow - 1;
  const prevID = slideNow === 1 ? 3 : (slideNow - 2) % slideCount;
  $('#slidewrapper-clone').prepend($(slidesClone[prevID]).attr('id', 'prev-clone').css('margin-left', `-${third}%`));
}

$('#prev-btn').click(() => {
  prevSlide();
  prevSlideClone();
  const sliderNumb = slideNow % slideCount;
  $('#carousel-counter-text').html(`${sliderNumb ? slideNow % slideCount : 4}/${slideCount}`)
});
$('#next-btn').click(() => {
  nextSlide();
  nextSlideClone();
  const sliderNumb = slideNow % slideCount;
  $('#carousel-counter-text').html(`${sliderNumb ? slideNow % slideCount : 4}/${slideCount}`)
});
$('.minor-carousel').click(() => {
  nextSlide();
  nextSlideClone();
  const sliderNumb = slideNow % slideCount;
  $('#carousel-counter-text').html(`${sliderNumb ? slideNow % slideCount : 4}/${slideCount}`)
});

// NAVBAR
$('.toggler-navbar').click(() => {
  $('.navbar-small-devices').toggleClass('navbar-small-devices-unopened');
  $('.navbar-small-devices').append($('.navbar-collapse').removeClass());
})

$('.close-button').click(() => {
  $('.navbar-small-devices').removeClass('navbar-small-devices-unopened');
})