const form = document.querySelector('form'),
  emailField = form.querySelector('.email-field'),
  emailInput = emailField.querySelector('.email'),
  passField = form.querySelector('.create-password'),
  passInput = passField.querySelector('.password'),
  conPassField = form.querySelector('.confirm-password'),
  conPassInput = conPassField.querySelector('.confirpassword');

// ---- ---- Email Validation ---- ---- //
function checkEmail() {
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailInput.value.match(emailPattern)) {
    return emailField.classList.add('invalid');
  }
  emailField.classList.remove('invalid');
}

// ---- ---- Calling Function on Form Sumbit ---- ---- //
form.addEventListener('submit', (e) => {
  e.preventDefault();
  checkEmail();
  emailInput.addEventListener('keyup', checkEmail);
});
