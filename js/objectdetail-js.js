new Swiper(".buy-big-thumnail .swiper-container", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 10,
  centeredSlides: true,
  //   autoplay: {
  //     delay: 3000,
  //     disableOnInteraction: false,
  //   },
  //   pagination: {
  //     el: ".buy-big-thumnail .swiper-pagination",
  //     clickable: true,
  //   },
  pagination: {
    el: ".buy-big-thumnail .swiper-pagination",
    clickable: true,
  },
  navigation: {
    prevEl: ".buy-big-thumnail .swiper-prev",
    nextEl: ".buy-big-thumnail .swiper-next",
  },
});
