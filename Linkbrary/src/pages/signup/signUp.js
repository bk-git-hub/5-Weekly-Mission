import {
  handlePasswordToggleClick,
  handleSubmit,
  setFocusInOutListenerById,
} from '../../js/eventHandler';

function init() {
  if (localStorage.getItem('accessToken')) {
    window.location.href = '../pages/folder/index.html';
    return;
  }

  const pwToggleBtns = document.querySelectorAll('.pw-toggle-btn');

  for (const btn of pwToggleBtns) {
    btn.addEventListener('click', handlePasswordToggleClick);
  }

  setFocusInOutListenerById('#user-email');
  setFocusInOutListenerById('#password');
  setFocusInOutListenerById('#password-check');
  document
    .querySelector('#sign-up-form')
    .addEventListener('submit', handleSubmit);
}

init();
