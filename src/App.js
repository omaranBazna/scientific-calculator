/**
 * Scientific Calculator Created By Omaran Bazna on 6/1/2022
 * Email:omran4d@gmail.com
 * 
 */


import React from 'react'
import './App.css';
import Button from './Components/Button';
import Display from './Components/Display';
import {useState} from 'react'
///main component of the calculator
function App() {
  const [display,setDisplay]=useState("")

{/*
click functions
*/}
  function AC(){
   setDisplay("")
  }
  function Equal(){
    setDisplay("")
   }
  function addZero(){

  }
  function addOne(){
    setDisplay("1")
  }
  function addTwo(){
    setDisplay("1")
  }
  function addThree(){
    setDisplay("1")
  }
  function addFour(){
    setDisplay("1")
  }
  function addFive(){
    setDisplay("1")
  }
  function addSix(){
    setDisplay("1")
  }
  function addSeven(){
    setDisplay("1")
  }
  function addEight(){
    setDisplay("1")
  }
  function addNine(){
    setDisplay("1")
  }
  function addPlus(){
    setDisplay("1")
  }
  function addMinus(){
    setDisplay("1")
  }
  function addDivid(){
    setDisplay("1")
  }
  function addMultipal(){
    setDisplay("1")
  }
  function addDecimal(){
    setDisplay("1")
  }
  return (
    <div className="App">
      


      {/* build up the calculator */}
     <Display value={display}/>
      

      {/*Btn Container */}
     <div className="Btns" >

       <div className="operator1">
        <Button sign="AC" wide={true} red={true} id="AC" press={AC} />
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
          <Button sign="1" id="one" press={addOne}/>
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
