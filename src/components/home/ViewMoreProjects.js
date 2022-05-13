import React from 'react'
import './viewmoreprojects.css'
import { Link } from "react-router-dom";
import background from '../assets/homeassets/viewmoreprojectsimage.png'
export default function ViewMoreProjects() {
    return ( 
        <div className = 'view-more-projects-container' >
        <div className = 'view-more-projects-main' >
        <div className = 'view-more-projects-main-heading' > View top projects </div>


        <Link to = "/findprojects" > 
        <div className = 'view-more-project-background-image-div' >

        <img src = { background } className = "home-image" alt = "Home path pic" / >

        </div></Link >
        </div>
        </div>
    )
}