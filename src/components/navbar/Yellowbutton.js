import React from 'react'
import './navbar.css'
export default function Yellowbutton(props) {
    return ( <
        div >

        <
        button

        style = {
            {
                background: '#FCD980',
                height: '50px',
                width: '150px',
                marginLeft: '30px',
                // padding: '15px 5px',
                marginTop: '-10px',
                borderRadius: '40px',
                fontWeight: '600',
                fontSize: '22px',
                lineHeight: '44px',

            }
        }
        className = "yellow-login" > { props.text } < /button>

        <
        /div>
    )
}