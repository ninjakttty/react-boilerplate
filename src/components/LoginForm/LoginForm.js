import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button, Form } from 'semantic-ui-react'
import * as AuthActions from '../../redux/auth/actions'

class LoginForm extends Component {
  state = {
    email: '',
    password: '',
  }

  handleSubmit = (e, { name }) => {
    const { login } = this.props
    login(this.state)
  }

  handleChange = (e, { name, value }) => {
    this.setState({
      [name]: value,
    })
  }

  render() {
    console.log(this.props)
    //     {this.props.loggedIn ? 'You are already logged in' : 'You are not logged in'}
    const form = (
      <Form onSubmit={this.handleSubmit}>
        <Form.Input label="Enter Email" type="text" name="email" onChange={this.handleChange} />
        <Form.Input label="Enter Password" type="password" name="password" onChange={this.handleChange} />
        <Button type="submit">Submit</Button>
      </Form>
    )
    return <div>{this.props.loggedIn ? 'You are already logged in' : form}</div>
  }
}

export default connect(state => ({ loggedIn: state.auth.loggedIn }), AuthActions)(LoginForm)
