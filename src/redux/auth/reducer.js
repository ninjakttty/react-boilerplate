import * as actions from './actions'
import { Record } from 'immutable'

const initialState = Record({
  email: 'email',
  loggedIn: false,
  token: 'token',
})

export default function authReducer(state = new initialState(), action) {
  switch (action.type) {
    case actions.LOGIN_FULFILLED: {
      console.log(`accepted login`, action.payload)
      const { loggedIn, email } = action.payload
      return state.set('email', email).set('loggedIn', loggedIn)
    }
    case actions.LOGIN_REJECTED: {
      console.log(`rejected login`, action.payload)
      return new initialState()
    }

    case actions.LOGOUT_FULFILLED: {
      return new initialState()
    }
  }

  return state
}
