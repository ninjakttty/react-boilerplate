import React from 'react'
import NavBar from '../components/NavBar'
import { connect } from 'react-redux'
import { Button } from 'semantic-ui-react'
import * as AuthActions from '../redux/auth/actions'

const LogoutPage = props => (
  <div>
    <NavBar />
    <Button onClick={props.logout}>logout</Button>
  </div>
)

export default connect(null, AuthActions)(LogoutPage)
