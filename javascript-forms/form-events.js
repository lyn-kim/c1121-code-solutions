function handleFocus(event) {
  console.log('focus event fired');
  console.log('event.target.name:', event.target.name);
}

function handleBlur(event) {
  console.log('blur event fired');
  console.log('event.target.name:', event.target.name);
}

function handleInput(event) {
  console.log('value of name:', event.target.value);
}

var userName = document.querySelector('#user-name');
userName.addEventListener('focus', handleFocus);
userName.addEventListener('input', handleInput);
userName.addEventListener('blur', handleBlur);

var userEmail = document.querySelector('#user-email');
userEmail.addEventListener('focus', handleFocus);
userEmail.addEventListener('input', handleInput);
userEmail.addEventListener('blur', handleBlur);

var userMsg = document.querySelector('#user-message');
userMsg.addEventListener('focus', handleFocus);
userMsg.addEventListener('input', handleInput);
userMsg.addEventListener('blur', handleBlur);
