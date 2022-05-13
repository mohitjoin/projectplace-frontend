import React from 'react'
import '../whatyouget.css'
import { FaFrownOpen } from "react-icons/fa";

export default function Whatgetcomp(props) {
    return ( 
    
       <div className = 'what-get-small-all-divs' >
        <div className = 'icon-div-what-get' > <FaFrownOpen/> 
        </div> 

        <div className = 'what-get-small-heading' > { props.names.nameHeading }

        </div> 

        <div className = 'what-you-get-some-small-text-div' > { props.names.someText } </div>



        </div>
    )
}