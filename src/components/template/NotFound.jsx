import React from "react";
import Abelha from '../../Assets/imgs/AbelhaLogo.png'
import './NotFound.css'


document.body.style.backgroundColor = '#87ceeb'
export default props => {
    return(
        <>
        <div className="NotFound">
            <img alt="bee Logo" src={Abelha}/>            
            <h1 className="flex">404</h1>
            <p className="flex">Not Found</p>
        </div>
        
        </>

    )
}