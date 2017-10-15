import * as actions from './actions'
import { Record } from 'immutable'

const initialState = Record({
  email: 'email',
  loggedIn: false,
  token: 'token',
})

export default function authReducer(state = new initialState(), action) {
  switch (action.type) {
    case actions.LOGIN: {
      const { loggedIn, email } = action.payload
      if (!loggedIn) return state.set('loggedIn', false)
      return state.set('email', email).set('loggedIn', loggedIn)
    }
    case actions.LOGOUT: {
      return state
    }
  }

  return state
}
