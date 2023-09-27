let header = document.querySelector('header');
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
window.addEventListener('scroll',()=>{
  header.classList.toggle('shadow',window.screenY > 0);
});

menu.onclick = () =>{
  menu.classList.toggle('bx-x');
  navbar.classList.toggle('active');
}

window.onscroll =() =>{
  menu.classList.remove('bx-x');
  navbar.classList.remove('active');
}
var swiper = new Swiper(".home", {
   spaceBetween: 30,
   centeredSlides: true,
   autoplay: {
     delay: 5000,
     disableOnInteraction: false,
   },
   pagination: {
     el: ".swiper-pagination",
     clickable: true,
   },
   // navigation: {
   //   nextEl: ".swiper-button-next",
   //   prevEl: ".swiper-button-prev",
   // },
 });


 var swiper = new Swiper(".coming-container", {
  spaceBetween: 20,
  centeredSlides: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  centeredSlides:true,
  breakpoints: {
    0:{
      slidesPerView:2,
    },
    568:{
      slidesPerView:3,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 50,
    },
  },
 
});


 