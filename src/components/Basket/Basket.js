import * as BasketActions from '../../redux/basket/actions'

import { List } from 'semantic-ui-react'
import React from 'react'
import { connect } from 'react-redux'

const Basket = props => {
  const { basket } = props
  return (
    <List>
      <List.Header>Basket</List.Header>
      {basket.map((item, i) => <List.Item key={i}>{item}</List.Item>)}
    </List>
  )
}

export default connect(
  state => ({
    basket: state.basket,
  }),
  BasketActions
)(Basket)
