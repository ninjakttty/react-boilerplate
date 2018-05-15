import * as actions from './actions'

import { List } from 'immutable'

const initialState = List()

export default function basketReducer(state = initialState, action) {
  switch (action.type) {
    case actions.SHOW_NOTIFICATION: {
      const id = action.payload
      console.log('action.payload', action.payload)

      return state
    }
  }

  return state
}
