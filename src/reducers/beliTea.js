export const tea = {
  quantity: 5,
  price: 20000,
}
  


const beliTeaReducer = (state = tea, action) => {
  if(action.type === 'BELI_TEA') {
    const newState = {
      quantity: state.quantity -1,
    }
    return newState;
  }
  return state;
}

export default beliTeaReducer;
