import React, {
  Component,
} from 'react'
import { connect } from 'react-redux'
import {
  Button,
  Form,
} from 'semantic-ui-react'
import * as AuthActions from '../../redux/auth/actions'
import randomInt from 'random-int'

class LoginForm extends Component {
  state = {
    email: `yuri${randomInt(
      0,
      10000
    )}@ninjakitty.net`,
    password:
      'password',
    name:
      'thing',
    phone_number:
      'thing',
    bank_name:
      'thing',
    bank_routing_number:
      'thing',
    bank_account_number:
      'thing',
    phone_extension:
      'thing',
    address_1:
      'thing',
    address_2:
      'thing',
    city:
      'thing',
    state:
      'thing',
    country:
      'thing',
    zip:
      'thing-zip',
    loading: false,
  }

  handleSubmit = (
    e,
    { name }
  ) => {
    const {
      createAccount,
    } = this.props
    createAccount(
      this
        .state
    )

    this.setState(
      {
        loading: true,
      }
    )
  }

  handleChange = (
    e,
    {
      name,
      value,
    }
  ) => {
    this.setState(
      {
        [name]: value,
      }
    )
  }

  render() {
    const form = (
      <Form
        onSubmit={
          this
            .handleSubmit
        }>
        <Button
          type="submit"
          loading={
            this
              .state
              .loading
          }>
          Submit
        </Button>
        <Form.Input
          defaultValue={
            this
              .state
              .email
          }
          label="email"
          name="email"
          onChange={
            this
              .handleChange
          }
        />
        <Form.Input
          defaultValue={
            this
              .state
              .password
          }
          label="password"
          name="password"
          onChange={
            this
              .handleChange
          }
        />
        <Form.Input
          defaultValue={
            this
              .state
              .name
          }
          label="name"
          name="name"
          onChange={
            this
              .handleChange
          }
        />
        <Form.Input
          defaultValue={
            this
              .state
              .phone_number
          }
          label="phone_number"
          name="phone_number"
          onChange={
            this
              .handleChange
          }
        />
        <Form.Input
          defaultValue={
            this
              .state
              .bank_name
          }
          label="bank_name"
          name="bank_name"
          onChange={
            this
              .handleChange
          }
        />
        <Form.Input
          defaultValue={
            this
              .state
              .bank_routing_number
          }
          label="bank_routing_number"
          name="bank_routing_number"
          onChange={
            this
              .handleChange
          }
        />
        <Form.Input
          defaultValue={
            this
              .state
              .bank_account_number
          }
          label="bank_account_number"
          name="bank_account_number"
          onChange={
            this
              .handleChange
          }
        />
        <Form.Input
          defaultValue={
            this
              .state
              .phone_extension
          }
          label="phone_extension"
          name="phone_extension"
          onChange={
            this
              .handleChange
          }
        />
        <Form.Input
          defaultValue={
            this
              .state
              .address_1
          }
          label="address_1"
          name="address_1"
          onChange={
            this
              .handleChange
          }
        />
        <Form.Input
          defaultValue={
            this
              .state
              .address_2
          }
          label="address_2"
          name="address_2"
          onChange={
            this
              .handleChange
          }
        />
        <Form.Input
          defaultValue={
            this
              .state
              .city
          }
          label="city"
          name="city"
          onChange={
            this
              .handleChange
          }
        />
        <Form.Input
          defaultValue={
            this
              .state
              .state
          }
          label="state"
          name="state"
          onChange={
            this
              .handleChange
          }
        />
        <Form.Input
          defaultValue={
            this
              .state
              .country
          }
          label="country"
          name="country"
          onChange={
            this
              .handleChange
          }
        />
        <Form.Input
          defaultValue={
            this
              .state
              .zip
          }
          label="zip"
          name="zip"
          onChange={
            this
              .handleChange
          }
        />
      </Form>
    )

    return (
      <div>
        {this
          .props
          .loggedIn
          ? 'You are logged in'
          : form}
      </div>
    )
  }
}

export default connect(
  state => ({
    loggedIn:
      state
        .auth
        .loggedIn,
  }),
  AuthActions
)(LoginForm)
