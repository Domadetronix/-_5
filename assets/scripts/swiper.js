var init = false;
var swiper;
var pagination = document.querySelector('.swiper-pagination');
function swiperCard() {
  if (window.innerWidth >= 320 && window.innerWidth < 768) {
    if (!init) {
      init = true;
      swiper = new Swiper('.mobile-slider', {
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
      pagination.classList.remove('hidden');
    }
  } else if (init) {
    init = false;
    swiper.destroy();
    pagination.classList.add('hidden');
  }
}
swiperCard();
window.addEventListener("resize", swiperCard);






