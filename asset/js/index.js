let myNav = document.querySelector('nav');
document.addEventListener('scroll',()=>{
    if(window.scrollY >=50){
        myNav.classList.add('nav_active');
    }else{
        myNav.classList.remove('nav_active');
    }
});

// boot-strap-modal
const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
});

//slick-slider
$('.autoplay').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  });