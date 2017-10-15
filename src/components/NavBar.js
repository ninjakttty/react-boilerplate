import React, { Component } from 'react'
import { Input, Menu, Segment } from 'semantic-ui-react'
import { push } from 'react-router-redux'
import { connect } from 'react-redux'

class NavBar extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => {
    const { path, push } = this.props
    this.setState({ activeItem: name })

    push(name === 'home' ? '/' : `/${name}`)
  }

  render() {
    const { path } = this.props

    return (
      <Menu>
        <Menu.Item name="home" active={path === '/'} onClick={this.handleItemClick} />
        <Menu.Item name="login" active={path === '/login'} onClick={this.handleItemClick} />
        <Menu.Item name="logout" active={path === '/logout'} onClick={this.handleItemClick} />
      </Menu>
    )
  }
}

export default connect(state => ({ path: state.router.location.pathname }), { push })(NavBar)
