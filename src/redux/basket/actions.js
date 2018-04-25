export const ADD_TO_BASKET = 'ADD_TO_BASKET'
export const SUB_FROM_BASKET = 'SUB_FROM_BASKET'

export function addToBasket(payload) {
  return {
    type: ADD_TO_BASKET,
    payload,
  }
}

export function subFromBasket(payload) {
  return {
    type: SUB_FROM_BASKET,
    payload,
  }
}
