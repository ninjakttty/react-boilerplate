import * as actions from './actions'
import { List } from 'immutable'

const initialState = List()

export default function basketReducer(
  state = initialState,
  action
) {
  switch (action.type) {
    case actions.ADD_TO_BASKET: {
      const id = action.payload
      return state.push(id)
    }
    case actions.SUB_FROM_BASKET: {
      const id = action.payload
      return state.filter(i => i !== id)
    }
  }

  return state
}
