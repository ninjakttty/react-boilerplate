import React from 'react'
import NavBar from '../components/NavBar'
import { connect } from 'react-redux'
import { Button } from 'semantic-ui-react'
import * as AuthActions from '../redux/auth/actions'

const LogoutPage = ({ logout }) => (
  <div>
    <NavBar />
    <Button negative onClick={logout}>
      Are you sure you want to log out
    </Button>
  </div>
)

export default connect(null, AuthActions)(LogoutPage)
