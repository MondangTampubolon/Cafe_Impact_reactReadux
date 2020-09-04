import React from 'react';
import { connect } from 'react-redux';

import { beliCappucinoAction } from './actions/beliCappucinoAction';
import { beliCoffeeMochaAction } from './actions/beliCoffeeMochaAction';
import { beliChocolateAction } from './actions/beliChocolateAction';
import { beliTeaAction } from './actions/beliTeaAction';
import './App.css';

const App = props => {
  console.log(props)
  return (
    <div className="App">
      <h1>TOKO KOPI IMPACT</h1>
      <div className="product">
        <div>COFFEE</div>
        <div>Saldo: {props.data.wallet.wallet}</div>
      </div>
      <div className="wrapperProducts">
        <h2>Our Menu</h2>
        <div className="Products">
          <div onClick={props.buyMocha}>Coffee Mocha ({props.data.coffeeMocha.quantity}) Rp 50000</div>
          <div onClick={props.buyCappucino}>Cappucino ({props.data.cappucino.quantity}) Rp 35000</div>
          <div onClick={props.buyChocolate}>Chocholate ({props.data.chocolate.quantity}) Rp 25000</div>
          <div onClick={props.buyTea}>Tea ({props.data.tea.quantity}) Rp 20000</div>
        </div>
      </div>
    </div>
  );
}

// Menggunakan state data yang di ada redux untuk digunakan ke komponen ini sebagai props
const mapStateToProps = (state) => {
  return {
    data: state,
  }
}

// Menggunakan action yang di ada redux untuk digunakan ke komponen ini sebagai props
const mapDispatchToProps = (dispatch) => {
  return {
    buyMocha: () => dispatch(beliCoffeeMochaAction),
    buyCappucino: () => dispatch(beliCappucinoAction),
    buyChocolate: () => dispatch(beliChocolateAction),
    buyTea: () => dispatch(beliTeaAction),
    
  }
  
}

export default connect(mapStateToProps, mapDispatchToProps)(App);