import * as actions from './actions'

import produce from 'immer'

const initialState = []

export default (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case actions.ADD_TO_BASKET: {
        const id = action.payload
        draft.push(id)
        break
      }
      case actions.SUB_FROM_BASKET: {
        const id = action.payload
        draft.filter(i => i !== id)
        break
      }
    }
  })
