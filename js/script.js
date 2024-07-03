// window.addEventListener("resize", function(e) {
//     var mapElement = document.getElementById("phototest");
//     mapElement.style.height = mapElement.style.width + mapElement.style.width * 1.41;
// });

const swiper = new Swiper('.swiper', {
    allowSlideNext: true,
    allowSlidePrev: true,
    allowTouchMove: true,
    centeredSlides: true,

    slidesPerView: 1,
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    // pagination: {
    //   el: '.swiper-pagination',
    // },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
    breakpoints: {
        2200: {
            slidesPerView: 6,
        },
        1850: {
            slidesPerView: 5,
        },
        1500: {
            slidesPerView: 4,
        },
        1150: {
            slidesPerView: 3,
        },
        750: {
            slidesPerView: 2,
        },
      },
  });