import "./Header.css"
import React from "react"
import { Link } from "react-router-dom"


export default function Header () { 

return (
<header className="header">
<div className="headerReturn">
  <Link to="/">
    <div onClick={e => (localStorage.removeItem('userName'))}>
    <i style={{color:"black"}} className="fa fa-arrow-circle-left fa-2x"></i>
    <span className="textHeader goBack">go back</span>
    </div>
    </Link>
</div>
<div className="headerPerson">
  <span className="textHeader namePerson">{localStorage.getItem('userName')}</span>
</div>
</header>)}