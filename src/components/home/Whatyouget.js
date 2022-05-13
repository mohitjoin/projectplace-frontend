import React from 'react'
import './whatyouget.css'
import WhatGet from './whatyougetcomponents/Whatgetcomp'
import whatgetInfo from './whatyougetcomponents/whatgetinfo'

export default function Whatyouget() {
    return ( 
    
    <div className = 'what-you-get-container' >
        <div className = 'what-you-get-main' >
        <div className = 'what-you-get-main-heading' > What you can get </div> 

        <div className = 'what-you-get-small-divs' >

        {
            whatgetInfo.map((wgi, index) => {
                return ( 
                    <  WhatGet names = { wgi } />
                )
            })
        }


        </div>



        </div> </div>
    )
}