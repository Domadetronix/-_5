const swiper = new Swiper('.mobile-slider', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
    slidesPerView: 'auto',
    spaceBetween: 16,
  });