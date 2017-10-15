import * as actions from './actions'

import { Record } from 'immutable'

const initialState = Record({
  displayName: 'Your Name',
})

export default function sitesReducer(state = new initialState(), action) {
  switch (action.type) {
    case actions.SET_PREF: {
      return state
    }
  }

  return state
}
