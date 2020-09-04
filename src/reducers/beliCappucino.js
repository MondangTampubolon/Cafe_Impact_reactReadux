export const cappucino = {
  quantity: 20,
  price: 35000,
}
  


const beliCappucinoReducer = (state = cappucino, action) => {
  if(action.type === 'BELI_CAPPUCINO') {
    const newState = {
      quantity: state.quantity -1,
    }
    return newState;
  }
  return state;
}

export default beliCappucinoReducer;
