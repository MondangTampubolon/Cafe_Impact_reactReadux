import { cappucino } from './beliCappucino';
import { coffeeMocha } from './beliCoffeeMocha';
import { chocolate } from './beliChocolate';
import { tea } from './beliTea';


const initialWallet = {
  wallet: 0,
}

const saldoReducer = (state = initialWallet, action) => {
  if (action.type === 'BELI_COFFEEMOCHA') {
    const newState = {
      wallet: state.wallet + coffeeMocha.price,
    }
    return newState;
  } else if (action.type === 'BELI_CAPPUCINO') {
    const newState = {
      wallet: state.wallet + cappucino.price
    }
    return newState;
  } else if (action.type === 'BELI_CHOCOLATE') {
    const newState = {
      wallet: state.wallet + chocolate.price
    }
    return newState;
  } else if (action.type === 'BELI_TEA') {
    const newState = {
      wallet: state.wallet + tea.price
    }
    return newState;
  }
  return state;
}

export default saldoReducer;