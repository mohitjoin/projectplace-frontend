import React from 'react'
import './showcase.css'
import { Link } from "react-router-dom";
import showObj from './showcaseComponents/showObject'
import ShowComp from './showcaseComponents/ShowComp'
import { FaArrowRight } from "react-icons/fa";
export default function Showcase() {
    return ( <
        div className = 'showcase-container' > <
        div className = 'showcase-container-main' >

        <
        div className = 'showcase-container-main-left' >


        <
        div className = 'showcase-container-main-left-heading' > Showcase your < /div> <
        div className = 'showcase-container-main-left-small' > Best place to show your work < /div>

        <
        Link to = "/findprojects"
        className = 'showcase-link-to-all-projects' > <
        div className = 'showcase-container-main-left-small-link' > View More Projects < FaArrowRight / > < /div> </Link >


        <
        /div> <
        div className = 'showcase-container-main-right' >

        {
            showObj.map((obj, index) => {
                return ( <
                    ShowComp key = { index }
                    name = { obj }
                    / >
                )
            })
        }

        <
        /div>




        <
        /div>   < /
        div >
    )
}