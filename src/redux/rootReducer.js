import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import options from './options/reducer'
import basket from './basket/reducer'
import auth from './auth/reducer'

export default combineReducers(
  {
    router: routerReducer,
    auth,
    options,
    basket,
  }
)
