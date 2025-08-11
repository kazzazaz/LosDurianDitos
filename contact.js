var btnSubmit = document.querySelector('.submit');
var modal = document.querySelector('.modal-container');

if (btnSubmit) {
  btnSubmit.addEventListener('click', function () {
    modal.classList.add('show');

    const next = document.querySelector('.next');
    if (next) {
      next.setAttribute('value', 'https://cobee-the-junior-programmer.netlify.app/contact.html');
    }
  });
}

AOS.init();