import React from 'react'
import './projectcard.css'
export default function ProjectCard(props) {
    return ( 
        <div className = 'main-card-container' > 
        { props.projCard.projectId }: { props.projCard.projectName } </div>
    )
}