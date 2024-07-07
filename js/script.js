// window.addEventListener("resize", function(e) {
//     var mapElement = document.getElementById("phototest");
//     mapElement.style.height = mapElement.style.width + mapElement.style.width * 1.41;
// });

const swiper = new Swiper('.swiper', {
    // effect: "panorama",
    allowSlideNext: true,
    allowSlidePrev: true,
    allowTouchMove: true,
    centeredSlides: true,
    // slidesPerView: "auto",
    loop: true,
    slidesPerView: 1,
    direction: 'horizontal',
    
    // Pagination
    // pagination: {
    //   el: '.swiper-pagination',
    //   dynamicBullets: true,
    //   dynamicMainBullets: 3,
    // },

    // Effect
    // panoramaEffect: {
    //   depth: 150,
    //   rotate: 45
    // },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // Scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },

    //Breakpoints
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