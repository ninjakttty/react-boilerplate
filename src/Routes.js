import React from 'react'
import { Route } from 'react-router'
import Home from './pages/Home'
import Login from './pages/Login'

export default function Routes() {
  return (
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
    </div>
  )
}
