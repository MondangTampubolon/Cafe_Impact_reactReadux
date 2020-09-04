import { combineReducers } from 'redux';

import beliCoffeeMochaReducer from './beliCoffeeMocha';
import beliCappucinoReducer from './beliCappucino';
import beliChocolateReducer from './beliChocolate';
import beliTeaReducer from './beliTea';
import saldoReducer from './saldoReducer';


// import kurangiProductReducer from './kurangiProduct'

// Import all reducer

// Combine all reducer
const rootReducer = combineReducers({
  coffeeMocha: beliCoffeeMochaReducer,
  cappucino: beliCappucinoReducer,
  chocolate: beliChocolateReducer,
  tea: beliTeaReducer,
  wallet:saldoReducer,

  // kurangiProduct: kurangiProductReducer,
})

export default rootReducer;
