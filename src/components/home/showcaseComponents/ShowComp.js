import React from 'react'
import '../showcase.css'
export default function ShowComp(props) {
    return ( <
        div className = 'show-comp-container' >
        <
        div className = 'show-comp-container-image' > { props.name.id } <
        /div>        

        <
        div className = 'show-comp-container-heading' > { props.name.nameHeading } < /div> <
        div className = 'show-comp-container-small' > { props.name.someText } < /div>

        <
        /div>
    )
}