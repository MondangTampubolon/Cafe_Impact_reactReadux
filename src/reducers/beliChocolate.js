export const  chocolate = {
  quantity: 10,
  price: 25000,
}
 
 

const beliChocolateReducer = (state = chocolate, action) => {
 if(action.type === 'BELI_CHOCOLATE') {
   const newState = {
     quantity: state.quantity -1,
   }
   return newState;
 }
 return state;
}

export default beliChocolateReducer;
