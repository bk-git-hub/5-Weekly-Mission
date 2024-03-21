export function makeRequestOptions(postData) {
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(postData),
  };
  return requestOptions;
}

export function handleLoginResponse(responseData) {
  const accessToken = responseData.accessToken;
  saveAccessTokenToLocalStorage(accessToken);
  window.location.href = '../../pages/folder/index.html';
  return Promise.resolve();
}

function saveAccessTokenToLocalStorage(accessToken) {
  localStorage.setItem('accessToken', accessToken);
}
