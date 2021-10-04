let swiper = new Swiper('.mySwiper', {
  effect: 'cube',
  grabCursor: true,
  cubeEffect: {
    shadow: true,
    slideShadows: true,
    shadowOffset: 20,
    shadowScale: 0.94,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }

  // // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },
});

// access instance in DOM
// const swiper = document.querySelector('.swiper').swiper;

// Sweet Alert
// clickbox
document.getElementById("samsung").addEventListener("click", function () {
  Swal.fire({
    title: "Don't click the phone!",
    text: "What if it explodes?",
    icon: "warning"
  });
}
);

// Animate
document.getElementById("atm").addEventListener("click", function () {
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

// Nyan Cat
document.getElementById("escooter").addEventListener("click", function () {
  Swal.fire({
    title: 'Do your body good! Ride a real scooter!',
    width: 600,
    padding: '3em',
    background: '#fff url(https://sweetalert2.github.io/images/trees.png)',
    backdrop: `
    rgba(0,0,123,0.4)
    url("https://sweetalert2.github.io/images/nyan-cat.gif")
    left top
    no-repeat
  `
  });
})

// Auto-close
document.getElementById('broken').addEventListener('click', function () {
  let timerInterval
  Swal.fire({
    title: 'Auto close alert! Will I go to link??',
    html: 'I will close in <b></b> milliseconds.',
    timer: 2000,
    timerProgressBar: true,
    didOpen: () => {
      Swal.showLoading()
      const b = Swal.getHtmlContainer().querySelector('b')
      timerInterval = setInterval(() => {
        b.textContent = Swal.getTimerLeft()
      }, 100)
    },
    willClose: () => {
      clearInterval(timerInterval)
    }
  }).then((result) => {
    /* Read more about handling dismissals below */
    if (result.dismiss === Swal.DismissReason.timer) {
      console.log('I was closed by the timer')
    }
  })
})

// Basic Title text under
document.getElementById('alert-test').addEventListener('click', function () {
  Swal.fire({
    title: 'Auto close alert! Will I go to link??',
    html: 'I will close in <b></b> milliseconds.',
    timer: 2000,
    timerProgressBar: true,
    didOpen: () => {
      Swal.showLoading()
      const b = Swal.getHtmlContainer().querySelector('b')
      timerInterval = setInterval(() => {
        b.textContent = Swal.getTimerLeft()
      }, 100)
    },
    willClose: () => {
      clearInterval(timerInterval)
    }
  }).then((result) => {
    /* Read more about handling dismissals below */
    if (result.dismiss === Swal.DismissReason.timer) {
      console.log('I was closed by the timer')
    }
  })
})