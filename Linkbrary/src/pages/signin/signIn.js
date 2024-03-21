import {
  handleSubmit,
  handlePasswordToggleClick,
  setFocusInOutListenerById,
} from '../../js/eventHandler';

function init() {
  if (localStorage.getItem('accessToken')) {
    window.location.href = '/folder';
    return;
  }

  document
    .querySelector('.pw-toggle-btn')
    .addEventListener('click', handlePasswordToggleClick);
  setFocusInOutListenerById('#user-email');
  setFocusInOutListenerById('#password');
  document.querySelector('.sign-form').addEventListener('submit', handleSubmit);
}

init();
