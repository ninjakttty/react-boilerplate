import auth from './auth/reducer'
import basket from './basket/reducer'
import { combineReducers } from 'redux'
import options from './options/reducer'
import { routerReducer } from 'react-router-redux'
import ui from './ui/reducer'

export default combineReducers({
  router: routerReducer,
  auth,
  options,
  basket,
  ui,
})
