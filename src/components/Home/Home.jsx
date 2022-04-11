import './Home.css';
import React from 'react'
import Abelha from '../../Assets/imgs/AbelhaLogo.png'
import { Link } from 'react-router-dom';
import { useName } from '../../context/nameContext';




export default function Home (){

const {setName} = useName();

//function to check if the input is empty 

function checkInputs(inputs) {
  var filled = true;
  
  inputs.forEach(function(input) {
      
    if(input.value === "" ) {
        filled = false;
    }
  
  });
  
  return filled;
  
}

var inputs = document.querySelectorAll("input");
var button = document.querySelector("button");
var check = document.getElementById('eighteenY')

inputs.forEach(function(input) {
    
  input.addEventListener("mouseout", function() {
    if(checkInputs(inputs) && check.checked) {
      button.disabled = false;
    } else {
      button.disabled = true;
    }
  });
});

//



//Save user in localStorage and GlobalState

function saveUser(e){
  setName(e.target.value)
  localStorage.setItem('userName', e.target.value)
}

localStorage.getItem('userName');
//change background body of component  

document.body.style.backgroundColor = '#f2ec54'

return (
  <>
  <section className="inputName">
  <p className='txtHome'>Please, enter your full name below</p>
  <p className='txtHome'>Only alphabetical characters are accepted</p>
  <form className='Inputs'>
  <input className="namePerson" disable onKeyDown={(e) => saveUser(e)} type="text" pattern="[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ]+$" placeholder="type your name" id='namePerson'/>  
  <label className='overEighteen'>
  <input id="eighteenY" type="checkbox" /> 
  <p className='txtHome'>Are you older than 18 years old?</p>
  </label>
  <div className="btnHome">
  <Link to="Main">  
  <button className="buttonEnter" type="submit" disabled="disabled" id="botao">Enter</button>
  </Link>
  </div>
  </form>
  </section>
  <div className='beeImg'>
  <img id="bee" src={Abelha} alt="bee"/>
  </div>
  
  </>)
  }

