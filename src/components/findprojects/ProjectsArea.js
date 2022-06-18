// import { height, width } from '@mui/system';
import React, { useState, useEffect } from 'react'
import ReactLoading from 'react-loading';
import './projectarea.css'
// import Alljsonproject from './Alljsonproject'
import ProjectCard from './ProjectCard';
export default function ProjectsArea(props) {
    const [loadProjects, setloadProjects] = useState("false")
    const [Alljsonproject, setAlljsonproject] = useState([])

    useEffect(() => {
        
        setAlljsonproject((pre)=>{
            return props.requiredProjects;
        })
        setTimeout(() => setloadProjects((pre) => {
            return "true";
        }), 3000)
    }, [props.searchedTextIs])


    if(Alljsonproject.length===0){
        return <>
         <div style={{textAlign:'center',fontSize:'1.5rem',marginTop:'12px'}} >No project Available</div>
        </>
    }

    return (
    
    <div className = 'project-area-container' > 
    {
            loadProjects === "false" && < div > 
            <ReactLoading
            type = { "spinningBubbles" }
            color = { "#1C1E53" }
            height = { '8%' }
            width = { '10%' }
            className = 'loading-while-searching' />
            </div>
        }

        {
            // this will be fetched from api in future
            loadProjects === "true" && <div className = 'all-projects-card-container' >

                

                {
                    Alljsonproject.map((proj, index) => {

                        return <div key={index+1} >

                            <div>
                                
                                < ProjectCard projCard = { proj }/>
                            
                            
                            </div>

                        </div>
                    })
                }

            </div>
        }

        </div>
    )
}