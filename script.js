//  MENU COLLAPSE
document.querySelectorAll('.navbar-nav .nav-link').forEach(function (link) {
  link.addEventListener('click', function () {
    // Colapsa el menú de navegación una vez que se selecciona una opción
    var navbarCollapse = document.querySelector('.navbar-collapse');
    var bsCollapse = new bootstrap.Collapse(navbarCollapse, {
      toggle: false
    });
    bsCollapse.hide();
  });
});


//  EMAILjs
(function() {
  emailjs.init("9SWluyO85IPiFNc1K");
})();

window.onload = function() {
  document.getElementById('contact-form').addEventListener('submit', function(event) {
      event.preventDefault(); 

      emailjs.sendForm('service_b9foqw9', 'template_gu9q0k3', this)
          .then((response) => {
              console.log('Éxito!', response);
              alert('Mensaje enviado exitosamente!');
              document.getElementById('contact-form').reset();
          }, (error) => {
              console.log('Fallido...', error);
              alert('Error al enviar el mensaje.');
          });
  });
}


//  WHATSAPP
const btnWhatsapp = document.querySelector(".btn-success");
btnWhatsapp.href =
  "https://wa.me/+51958189488?text=Hola, estoy interesado en tus servicios de desarrollo web";