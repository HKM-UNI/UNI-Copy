function swiperInit(){new Swiper(".swiper-container",{effect:"coverflow",slidesOffsetBefore:0,grabCursor:!0,centeredSlides:!0,autoplay:{delay:2500,disableOnInteraction:!1},slidesPerView:"3",observer:!0,observeParents:!0,coverflowEffect:{rotate:-20,stretch:10,depth:300,modifier:1,slideShadows:!0},breakpoints:{360:{slidesPerView:1},768:{slidesPerView:3},1024:{slidesPerView:3}},pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},simulateTouch:!0})}$(document).ready(swiperInit);