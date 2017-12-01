export const LOGIN = 'LOGIN'
export const LOGIN_FULFILLED = 'LOGIN_FULFILLED'
export const LOGIN_REJECTED = 'LOGIN_REJECTED'
export const LOGOUT = 'LOGOUT'
export const LOGOUT_FULFILLED = 'LOGOUT_FULFILLED'
export const LOGOUT_REJECTED = 'LOGOUT_REJECTED'
export const CREATE_ACCOUNT = 'CREATE_ACCOUNT'
export const CREATE_ACCOUNT_FULFILLED = 'CREATE_ACCOUNT_FULFILLED'
export const CREATE_ACCOUNT_REJECTED = 'CREATE_ACCOUNT_REJECTED'

export function login(data) {
  const { email, password } = data
  const promise = fetch('/api/accounts/login', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  })
    .then(data => data.json())
    .then(({ token }) => token)
    .then(token => ({ token, ...data }))
    .catch(() => {
      return new Promise((resolve, reject) => reject())
    })
  return {
    type: LOGIN,
    payload: promise,
  }
}

export function createAccount(data) {
  delete data.loading

  const promise = fetch('/api/accounts/create', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  return {
    type: LOGIN,
    payload: promise,
  }
}

export function logout() {
  // fake making ajax request
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve()
    }, 1500)
  })

  return {
    type: LOGOUT,
    payload: promise,
  }
}
