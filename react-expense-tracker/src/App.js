import React from 'react';
import Header from './components/Header.js'
import Balance from './components/Balance.js'
import AccountSummary  from './components/AccountSummary.js';
import './App.css' 
import TransactionHistory from './components/TransactionHistory.js';
const App=()=>{
  return(
    <div>
     <Header />
    <div className='container'>
      <Balance />
      <AccountSummary />
      <TransactionHistory />
    </div>
    </div>
    
  )
}

export default App;