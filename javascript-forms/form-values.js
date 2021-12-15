var contactForm = document.querySelector('#contact-form');
contactForm.addEventListener('submit', pushUserInput);

function pushUserInput(event) {
  event.preventDefault();
  var name = contactForm.elements.name.value;
  var email = contactForm.elements.email.value;
  var msg = contactForm.elements.message.value;
  var inputs = {
    name: name,
    email: email,
    message: msg
  };
  console.log('User Input Values:', inputs);
  contactForm.reset();
}
