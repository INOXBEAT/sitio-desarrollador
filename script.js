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

//  SLOGANS
document.addEventListener('DOMContentLoaded', function() {
  const headerText = document.querySelector('header h1');
  const texts = [
      "¿Quieres destacar tu negocio en Internet?",
      "¿Necesitas una página web que llame la atención?",
      "¿Deseas conectar con más clientes potenciales?",
      "¿Buscas una web que le dé impulso a tu negocio?"
  ];
  let currentIndex = 0;

  // Establece el primer texto inmediatamente
  headerText.textContent = texts[currentIndex];

  function changeText() {
      // Actualiza el texto y el índice
      currentIndex = (currentIndex + 1) % texts.length;
      headerText.textContent = texts[currentIndex];
  }

  // Cambia el texto cada 8 segundos
  setInterval(changeText, 8000);

  // Cambia el texto después de 8 segundos para que no se muestre el texto inicial dos veces
  setTimeout(() => {
    changeText(); // Cambia el texto una vez para evitar la duplicación
  }, 8000);
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