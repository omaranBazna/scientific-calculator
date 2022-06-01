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
      

      {/*Btn Container */}
     <div className="Btns">

       <div className="operator1">
        <Button sign="AC" wide={true} red={true} id="seven"/>
        <Button sign="/" id="divide" grey={true}/>
        <Button sign="x" id="multiply" grey={true}/>

        
       </div>
      <div className="container">
       <div className="numbers">

         <div className="row">
          <Button sign="7" id="seven"/>
          <Button sign="8" id="eight"/>
          <Button sign="9" id="nine"/>
         </div>
         
         <div className="row">
          <Button sign="4" id="four"/>
          <Button sign="5" id="five"/>
          <Button sign="6" id="six"/>
         </div>

         <div className="row">
          <Button sign="1" id="one"/>
          <Button sign="2" id="two"/>
          <Button sign="3" id="three"/>
         </div>
         <div className="row">
          <Button sign="0" wide={true} id="zero"/>
          <Button sign="." id="decimal"/>
         
         </div>
      </div>
      <div className="operator2">
        <Button sign="+" id="add" grey={true}/>
        <Button sign="-" id="subtract" grey={true}/>
        <Button sign="=" high={true} id="seven"  blue={true}/>
      </div>

   
     </div>
     </div>
    </div>
  );
}

export default App;
