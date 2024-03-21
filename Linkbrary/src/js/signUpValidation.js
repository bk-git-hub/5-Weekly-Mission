import isValidEmail from './emailValidation';
import isValidPassword, { isSamePassword } from './passwordValidation';

export default function validateSignUp(
  emailInput,
  passwordInput,
  passwordCheck
) {
  if (!isValidEmail(emailInput)) {
    return;
  }

  if (!isValidPassword(passwordInput)) {
    return;
  }

  if (!isSamePassword(passwordCheck)) {
    return;
  }

  window.location.href = '../pages/folder/index.html';
}
