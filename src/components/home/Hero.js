import React from 'react'
import './hero.css'
import { Link } from "react-router-dom";
import mainillustrationHome from '../assets/homeassets/mainillustration.svg'
export default function Hero(props) {
    
     const UserName = sessionStorage.getItem('UserName');
         
      
      
 
 
    return ( < div className = 'hero-container' > 
         <div className = 'hero-container-main' >

        <div className = 'hero-container-main-left' >

        <div className = 'hero-container-main-left-heading' > Showcase your Projects in < span className = 'yellow-text-span' > < div > </div> best way </span> </div >
        <div className = 'some-small-text-below-heading' > 
         A better place for awesome projects </div> 
         <div className = 'buttons-container' >

        <Link to = { UserName===null ? "/login": "/"+UserName }
        className = 'complete-yellow-button-link' > 
        <button className = 'complete-yellow-button' > Get Started </button></Link >

        <Link to = "/pricing"
        className = 'stroke-yellow-button-link' > 
        <button className = 'stroke-yellow-button' > View Pricing </button></Link >





        </div>



        </div> 
        <div className = 'hero-container-main-right' > 
        <img src = { mainillustrationHome }
        className = "home-image"
        alt = "Home path pic" /> 
        </div>

        </div> 
        </div>
    )
}