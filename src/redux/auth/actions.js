export const LOGIN = 'LOGIN'
export const LOGOUT = 'LOGOUT'

export function login(payload) {
  return function(dispatch) {
    setTimeout(() => {
      if (payload.email === 'yuri@ninjakitty.net') {
        dispatch({ type: LOGIN, payload: { loggedIn: true, token: 'validation token', ...payload } })
      } else {
        dispatch({ type: LOGIN, payload: { loggedIn: false, token: 'validation token' } })
      }
    }, 1500)
  }
}

export function logout() {
  return function(dispatch) {
    setTimeout(() => {
      dispatch({ type: LOGOUT })
    }, 1500)
  }
}
