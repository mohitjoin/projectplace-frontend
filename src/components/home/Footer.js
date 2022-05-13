import React from 'react'
import './footer.css'
import { Link } from "react-router-dom";
export default function Footer() {
    return ( <
        div className = 'footer-main-container' > <
        div className = 'footer-main-div' >
        <
        div className = 'footer-main-info-left-div' >
        <
        div className = 'footer-main-site-name' > ProjectPlace < /div><
        div className = 'footer-main-small-text' > Creating a better place
        for your eyecatching projects < /div>



        <
        /div><
        div className = 'footer-main-info-right-div' >


        <
        Link to = "/home"
        style = {
            {
                textDecoration: 'none',
                color: 'white',
                marginLeft: '20px'
            }
        } >
        Home < /Link> 

        <
        Link to = "/pricing"
        style = {
            {
                textDecoration: 'none',
                color: 'white',
                marginLeft: '20px'
            }
        } >
        Pricing < /Link> 

        <
        Link to = "/findprojects"
        style = {
            {
                textDecoration: 'none',
                color: 'white',
                marginLeft: '20px'
            }
        } >
        Find Projects < /Link> 



        <
        /div>


        <
        /div>  < /div >
    )
}