import React, { Component } from 'react'
import { Input, Menu, Segment } from 'semantic-ui-react'
import { push } from 'react-router-redux'
import { connect } from 'react-redux'

class NavBar extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => {
    const { path, push } = this.props
    console.log('path', path)
    this.setState({ activeItem: name })

    push(name === 'home' ? '/' : `/${name}`)
  }

  render() {
    const { activeItem } = this.state

    return (
      <Menu>
        <Menu.Item name="home" active={activeItem === 'home'} onClick={this.handleItemClick} />
        <Menu.Item name="login" active={activeItem === 'login'} onClick={this.handleItemClick} />
        <Menu.Item name="logout" active={activeItem === 'logout'} onClick={this.handleItemClick} />
      </Menu>
    )
  }
}

export default connect(state => ({ path: state.router.location.pathname }), { push })(NavBar)
