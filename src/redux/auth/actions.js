export const LOGIN = 'LOGIN'
export const LOGIN_FULFILLED = 'LOGIN_FULFILLED'
export const LOGIN_REJECTED = 'LOGIN_REJECTED'
export const LOGOUT = 'LOGOUT'
export const LOGOUT_FULFILLED = 'LOGOUT_FULFILLED'
export const LOGOUT_REJECTED = 'LOGOUT_REJECTED'

export function login(data) {
  const promise = fetch('/yuri-is-great') // make a real network request but don't care about data
    .then(() => {
      if (data.email === 'yuri@ninjakitty.net') {
        return { loggedIn: true, token: 'validation token', ...data }
      } else {
        throw new Error()
      }
    })
    .catch(() => {
      return Promise.reject({ loggedIn: false, token: 'nope', ...data })
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
