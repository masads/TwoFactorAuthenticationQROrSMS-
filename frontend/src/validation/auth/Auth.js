const isMobileValid = /^(\+\d{1,3}[- ]?)?\d{10}$/;
const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

const isPinValide = /^[0-9][0-9]{3}$/;

function validateLogin({ mobileNumber, password }) {

  return isMobileValid.test(mobileNumber) && password.length >= 6;
}
function validateOtp(pin) {
  console.log(isPinValide.test(pin));
  return isPinValide.test(pin);
}
function validateRegister({ mobileNumber, password, email, name }) {

  return isEmailValid.test(email) && isMobileValid.test(mobileNumber) && password.length >= 0 && name.length > 0;
}
const authValidation = { validateLogin, validateRegister, validateOtp };

export default authValidation;
