import "./Main.css"
import React from "react"
import Header from './Header'
import BreweriesList from '../../Main/BreweriesList'
import Footer from "./Footer"
import NotFound from './NotFound' 


export default function Main () {
if(localStorage.getItem('userName') !== null){
  return(
  <>
    <React.Fragment>
    <Header/>

    <BreweriesList/>
   <Footer/>
  </React.Fragment>
  </>)
  } 
  return( 
         <React.Fragment>
        <Header/>
        <NotFound/>
        </React.Fragment>
        )
        
}