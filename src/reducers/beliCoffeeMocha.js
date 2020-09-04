export const coffeeMocha = {
  quantity: 20,
  price: 50000,
}
  
 
const beliCoffeeMochaReducer = (state = coffeeMocha, action) => {
 if(action.type === 'BELI_COFFEEMOCHA') {
   const newState = {
     quantity: state.quantity -1,
   }
   return newState;
 }
 return state;
}

export default beliCoffeeMochaReducer;
