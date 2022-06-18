import React from 'react'
import './projectcard.css'
import { Link } from "react-router-dom";
export default function ProjectCard(props) {
    return ( <>
      <Link to={"/project/"+props.projCard.projectId} className='main-card-link'>
        <div className = 'main-card-container' > 
         <div className='each-project-name'>{ props.projCard.projectName }</div>
         <div className='each-project-about'>{ props.projCard.aboutProject }</div>
         <div className='each-project-author'> Made By: { props.projCard.userName }</div>
         <div className='each-project-teckStack'> Tech Stack Used: <strong> { props.projCard.techUsed } </strong></div>
         <div style={{display:'flex',flexDirection:'row',marginTop:'15px'}}>
           <div><a  className='link-to-github-and-live-of-each-p' href={ props.projCard.codeLink}>Github</a>   </div>
             <div style={{margin:'auto', marginRight:'0px'}}><a className='link-to-github-and-live-of-each-p' href={ props.projCard.liveLink }>Live</a>   </div>
         </div>
         
         
          </div>
          </Link>
          </>
    )
}