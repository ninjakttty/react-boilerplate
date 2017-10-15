import React from 'react'
import { Route } from 'react-router'
import Home from './pages/Home'
import Login from './pages/Login'
import Logout from './pages/Logout'

export default function Routes() {
  return (
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/logout" component={Logout} />
    </div>
  )
}
