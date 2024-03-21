import { handleSignOut } from '../../js/signout';

function init() {
  if (!localStorage.getItem('accessToken')) {
    window.location.href = '/pages/signin';
  }

  if (localStorage.getItem('accessToken')) {
    console.log('signed in');
    document
      .querySelector('#sign-out-btn')
      .addEventListener('click', handleSignOut);
  }
}

init();
