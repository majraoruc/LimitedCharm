var swiper1 = new Swiper('.swiper-container1', {

  slidesPerView: 4,
  spaceBetween: 2,
  loop:true,
pagination: {
  el: '.swiper-pagination',
  clickable: true,
},
navigation: {
  nextEl: '.swiper-button-next',
  prevEl: '.swiper-button-prev',
},
breakpoints:{

  1381:{
      slidesPerView:4,
      spaceBetween: 10
  },  
  1380:{
      slidesPerView:3,
      spaceBetween: 30
  },
  1000: {
      slidesPerView:3,
      spaceBetween: 30
  },

  768: {
      slidesPerView:2,
      spaceBetween: 30
  },

  576: {
      slidesPerView:1,
      spaceBetween: 30
  },

  320: {
      slidesPerView:1,
      spaceBetween: 30
  }
 
}
//    breakpoints: {  
//       1380: {       
//          slidesPerView: 3,       
//          spaceBetween: 2     
//       },
//       1220: {       
//         slidesPerView: 3,       
//         spaceBetween: 2     
//      } 
//    } 
});

var swiper2 = new Swiper('.swiper-container2', {
  slidesPerView: 3,
  spaceBetween: 2,
  clickable:true,
  loop:true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints:{
  
    1381:{
        slidesPerView:3,
        spaceBetween: 10
    },  
    1220:{
        slidesPerView:2,
        spaceBetween: 30
    },
    1000: {
      slidesPerView:1,
      spaceBetween: 30
  },

  768: {
      slidesPerView:1,
      spaceBetween: 30
  },

  576: {
      slidesPerView:1,
      spaceBetween: 30
  },

  320: {
      slidesPerView:1,
      spaceBetween: 30
  }
  }
});

var swiper = new Swiper('.swiper-container3', {
  spaceBetween: 30,
  centeredSlides: true,
  loop:true,
  slidesPerSlide:1,
  
  // autoplay: {
  //     delay: 2500,
  //     disableOnInteraction: false,
  // },
  pagination: {
      el: '.swiper-pagination',
      clickable: true,
  },
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  }
});