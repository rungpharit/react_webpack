import penTypes from './penTypes'

export function addPen(){
  return { type: penTypes.ADD_PEN }
}

export function buyPen(){
  return { type: penTypes.BUY_PEN }
}