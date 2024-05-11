    const swiper = new Swiper(".mySwiper", {
      slidesPerView: 3,
      spaceBetween: 30,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 50,
        },

        1280: {
          slidesPerView: 4,
          spaceBetween: 50,
        }
      }
    });







    const roman = new Swiper(".yourSwiper", {
      slidesPerView: 3,
      spaceBetween: 30,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 40,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 50,
        },
      }
    });




    const overlay = document.querySelector(".overlay-menu")
  const nav = document.querySelector(".navbar-toggler-icon")
const block = document.querySelector(".bi-x-circle")

  nav.addEventListener("click", menuopen)
  block.addEventListener("click", menuclose)

  function menuopen() {
    overlay.classList.add("aktiv")
  }

  function menuclose() {
    overlay.classList.remove("aktiv")
  }