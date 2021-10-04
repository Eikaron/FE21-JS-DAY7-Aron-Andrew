const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

// Sweet Alert JS
document.getElementById("phone").addEventListener("click", function () {
  Swal.fire({
    title: "Don't click the phone!",
    text: "What if it explodes?",
    icon: "warning"
  });
}
);

document.getElementById("card").addEventListener("click", function () {
  Swal.fire({
    title: 'Animate it!',
    showClass: {
      popup: 'animate__animated animate__rubberBand'
    },
    hideClass: {
      popup: 'animate__animated animate__backOutDown'
    }
  })
}
);
