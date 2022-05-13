import React from 'react'
import './contactusform.css'
import contactImage from '../../components/assets/homeassets/contactform.png'
export default function Contactusform() {
    return ( <
        div className = 'contact-us-main-container' > <
        div className = 'contact-us-form-main' >

        <
        div className = 'contact-form-left-imager'
        style = {
            {
                backgroundImage: `url(${contactImage})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right'
            }

        } >

        <
        div className = 'leftimage-heading-contact' >
        Showcase your achievements < /div><
        div className = 'leftimage-small-text-contact' >
        Every project you made matters < /div>


        <
        /div> <
        div className = 'contact-form-right-form' > <
        div className = 'contact-form-heading-query' >
        Send inquiry < /div><
        div className = 'contact-form-heading-small-text' >
        We will get back to you soon on your provided email.... < /div><
        div className = 'contact-form-name-input-div' >

        <
        input type = "text"
        name = "name"
        placeholder = "Name" / >

        <
        input type = "email"
        name = "name"
        placeholder = "Email" / >

        <
        textarea type = "text"
        placeholder = "Your Message" > <
        /textarea>

        <
        /div>

        <
        div className = 'submit-button-div' > <
        button className = 'contact-form-submit-button' > Submit < /button></div >




        <
        /div>

        <
        /div> < /div >
    )
}