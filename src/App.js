/**
 * Scientific Calculator Created By Omaran Bazna on 6/1/2022
 * Email:omran4d@gmail.com
 * 
 */


import React from 'react'
import './App.css';
import Button from './Components/Button'
import Result from './Components/Result'
///main component of the calculator
function App() {
  return (
    <div className="App">
      


      {/* build up the calculator */}
     <Result />
     <Button sign="+" />
     <Button sign="-" />
    </div>
  );
}

export default App;
