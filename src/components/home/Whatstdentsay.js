import React from 'react'
import './whatstudentsay.css'
import demoimage from '../assets/homeassets/demoperson.png'
export default function Whatstdentsay() {
    return ( <
        div className = 'what-studentsay-main-container' > <
        div className = 'what-student-say-main' >



        <
        div className = 'what-stud-say-left' > What students say about us <
        /div> <
        div className = 'what-stud-say-right' >
        <
        div className = 'what-student-say-main' > “I am getting many calls form clients after showcasing my projects here.” <
        /div>

        <
        div className = 'person-photo-and-position' >

        <
        div className = 'small-person-image' >
        <
        img src = { demoimage }
        className = "demo-person-image"
        alt = "Demo person  pic" / > <
        /div> <
        div className = 'person-name' >
        Jenny Wilson < div > < /div> Frontend Developer  < /
        div >


        <
        /div>

        <
        /
        div >




        <
        /div> < /
        div >
    )
}