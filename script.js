(function() {
  // Inicializa EmailJS con tu clave pública
  emailjs.init("9SWluyO85IPiFNc1K");
})();

window.onload = function() {
  document.getElementById('contact-form').addEventListener('submit', function(event) {
      event.preventDefault(); 

      // Envía el formulario usando EmailJS
      emailjs.sendForm('service_b9foqw9', 'template_gu9q0k3', this)
          .then((response) => {
              console.log('Éxito!', response);
              alert('Mensaje enviado exitosamente!');
              // Limpia el formulario
              document.getElementById('contact-form').reset();
          }, (error) => {
              console.log('Fallido...', error);
              alert('Error al enviar el mensaje.');
          });
  });
}

const btnWhatsapp = document.querySelector(".btn-success");
btnWhatsapp.href =
  "https://wa.me/+51958189488?text=Hola, estoy interesado en tus servicios de desarrollo web";
