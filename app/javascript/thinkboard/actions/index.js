const BASE_URL = '../api/v1/';

export const FETCH_POSTITS = 'FETCH_POSTITS';
export const POSTIT_POSTED = 'POSTIT_POSTED';

export function fetchPostits() {
  const url = `${BASE_URL}postits`;
  const promise = fetch(url).then(r => r.json());

  return {
    type: FETCH_POSTITS,
    payload: promise // Will be resolved by redux-promise
  };
}

export function createPostit(content, color) {
  const url = `${BASE_URL}postits`;
  const body = { content, color }; // ES6 destructuring
  const csrfToken = document.querySelector('meta[name="csrf-token"]').attributes.content.value;
  const promise = fetch(url, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'X-CSRF-Token': csrfToken
    },
    credentials: 'same-origin',
    body: JSON.stringify(body)
  }).then(r => r.json());

  return {
    type: POSTIT_POSTED,
    payload: promise // Will be resolved by redux-promise
  };
}
