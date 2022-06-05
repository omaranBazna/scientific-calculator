/**
 * Scientific Calculator Created By Omaran Bazna on 6/1/2022
 * Email:omran4d@gmail.com
 * 
 */ 


import React, { useEffect } from 'react'
import './App.css';
import Button from './Components/Button';
import Display from './Components/Display';
import {useState} from 'react'



class node {
  constructor(val, left,right) {
    this.left = left;
    this.right = right;
    this.val=val;
  }
  clone() {
    return new node(this.val, this.left,this.right);
  }
  set(val,left,right){
    this.val=val;
    this.left=left;
    this.right=right;

  }
}






let listener=[0]
const root=new node("+",0,listener);

let val=""

///main component of the calculator
function App() {
  const [display,setDisplay]=useState("")


  

  {/*
click functions
*/}

  function AC(){
   setDisplay("") 
   root.set("-",0,10);
  }
  function Equal(){
    setDisplay("")
    listener[0]=val
    val=""
    console.log(root);
   }
  function addZero(){
    setDisplay(old=>old+"0")  
    val =val+"0"
  }
  function addOne(){
    setDisplay(old=>old+"1")
    val =val+"1"
  }
  function addTwo(){
    setDisplay(old=>old+"2")
    val =val+"2"
  }
  function addThree(){
    setDisplay(old=>old+"3")
    val =val+"3"
  }
  function addFour(){
    setDisplay(old=>old+"4")
    val =val+"4"
  }
  function addFive(){
    setDisplay(old=>old+"5")
    val =val+"5"
  }
  function addSix(){
    setDisplay(old=>old+"6")
    val =val+"6"
  }
  function addSeven(){
    setDisplay(old=>old+"7")
    val =val+"7"
  }
  function addEight(){
    setDisplay(old=>old+"8")
    val =val+"8"
  }
  function addNine(){
    setDisplay(old=>old+"9")
    val =val+"9"
  }
  function Plus(){
    setDisplay(old=>old+"+")
    root.right=val
   let temp=root.clone();
    
    root.set("+",temp,listener)
    
    val = ""
   
  }
  function Minus(){
    setDisplay(old=>old+"-")
    root.right=val
   let temp=root.clone();
    
    root.set("-",temp,listener)
    
    val = ""
  
  }
  function Divid(){
    setDisplay(old=>old+"/")
    let temp=root;
  

    
     temp.right=new node("/",val,listener)

    val = ""
  }
  function Multipal(){
    setDisplay(old=>old+"*")
   // const tempNode=searchTree(root,listener)
      console.log(tempNode)
     tempNode=new node("*",val,listener)

    val = ""
  }
  function addDecimal(){
   
  }

  function searchTree(treeRoot,target){
   const query=[treeRoot]

   while(query.length){
     if(query[0].val===target){
       return query[0]
     }else{
       if(query[0].left){query.push(query[0].left)}
       if(query[0].right){query.push(query[0].right)}
       query.unshift();
      
     }
   }
   return null;
  }
  return (
    <div className="App">
      


      {/* build up the calculator */}
     <Display value={display}/>
      

      {/*Btn Container */}
     <div className="Btns" >

       <div className="operator1">
        <Button sign="AC" wide={true} red={true} id="AC" press={AC} />
        <Button sign="/" id="divide" grey={true}  press={Divid}/>
        <Button sign="x" id="multiply" grey={true}  press={Multipal}/>

        
       </div>
       <div className="container">
       <div className="numbers">

         <div className="row">
          <Button sign="7" id="seven"  press={addSeven}/>
          <Button sign="8" id="eight"  press={addEight}/>
          <Button sign="9" id="nine"  press={addNine}/>
         </div>
         
         <div className="row">
          <Button sign="4" id="four"  press={addFour}/>
          <Button sign="5" id="five"  press={addFive}/>
          <Button sign="6" id="six"  press={addSix}/>
         </div>

         <div className="row">
          <Button sign="1" id="one" press={addOne}/>
          <Button sign="2" id="two"  press={addTwo}  />
          <Button sign="3" id="three"  press={addThree}/>
         </div>
         <div className="row">
          <Button sign="0" wide={true} id="zero"  press={addZero} />
          <Button sign="." id="decimal"  press={addDecimal}/>
         
         </div>
      </div>
      <div className="operator2">
        <Button sign="+" id="add" grey={true}  press={Plus}/>
        <Button sign="-" id="subtract" grey={true}  press={Minus} />
        <Button sign="=" high={true} id="seven"  blue={true}  press={Equal}/>
      </div>

   
     </div>
     </div>
    </div>
  );
}

export default App;
