$(document).ready(function(){
  $('.slider').slick({
    arrows: true,
    dots: true, 
    adaptiveHeight: true,
    slidesToShow: 1,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    draggable: false,
    waitForAnimate: false,
  }) 
})

  $('.one-time').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  adaptiveHeight: true
  });

$('.header__burger').click(function(event){
  $('.header__burger, .menu').toggleClass('active')
  $('body').toggleClass('lock')
})  

			

window.addEventListener('scroll', () => {
  const header = document.querySelector('.header')
  header.classList.toggle('sticky', window.scrollY > 650)
})

const animeItems = document.querySelectorAll('._anim-items')

if (animeItems.length > 0) {
  window.addEventListener('scroll', animOnScroll)
  function animOnScroll() { 
    for(let index = 0; index < animeItems.length; index++){
       const animeItem = animeItems[index]
       const animeItemHeight = animeItem.offsetHeight
       const animeItemOffset = offset(animeItem). top
       const animeStart = 4

       let animeItemPoint = window.innerHeight - animeItemHeight / animeStart

       if (animeItemHeight > window.innerHeight) {
         animeItemPoint = window.innerHeight - window.innerHeight / animeStart
       }

       if ((pageYOffset > animeItemOffset - animeItemPoint) && pageYOffset < (animeItemOffset + animeItemHeight)) {
         animeItem.classList.add('_active')
       }
       else {
         if(!animeItem.classList.contains('_anim-no-hide')){
         animeItem.classList.remove('_active')
         }
       }

    }
  }
}

function offset(el) {
  const rect = el.getBoundingClientRect(),
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop
  return { top: rect.top + scrollTop, left: rect.left + scrollLeft}  
}
animOnScroll()