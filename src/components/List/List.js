import React from 'react'
import { Button } from 'semantic-ui-react'
import { connect } from 'react-redux'
import * as BasketActions from '../../redux/basket/actions'

const ProductList = props => {
  const { addToBasket } = props
  const kushClick = () => {
    addToBasket('kush')
  }
  const staviaClick = () => {
    addToBasket('stavia')
  }
  return (
    <Button.Group vertical>
      <Button onClick={kushClick}>Kush</Button>
      <Button onClick={staviaClick}>Sativa</Button>
    </Button.Group>
  )
}

export default connect(
  state => ({
    options: state.basket,
  }),
  BasketActions
)(ProductList)
