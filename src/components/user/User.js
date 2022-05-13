import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import Navbar from '../navbar/Navbar';
import { Navigate } from 'react-router-dom';
import Footer from './../home/Footer';
import './user.css'
import demouser from '../assets/userassets/userDemoImage.png'
import { FaLifeRing } from "react-icons/fa";
import { BsPencilSquare } from "react-icons/bs";
import Button from '@mui/material/Button'
import ReactTooltip from "react-tooltip";
// demo imports
import AllProjectOfUser from '../findprojects/Alljsonproject'
import ProjectCard from '../findprojects/ProjectCard';
import { Link } from "react-router-dom";

export default function User() {
    const { username } = useParams()
    const [isLogin, setisLoginu] = useState("false")
    const datassi = sessionStorage.getItem('hasLogin');
    const [userUrl, setuserUrl] = useState("");

    useEffect(() => {
        if (datassi === null) {
            setuserUrl("/login")
        }
        if (datassi !== null)
            setisLoginu(datassi)

    }, [datassi])
    if (datassi === null) {

        return (
            <div> 
                <Navigate to = { userUrl }/> 
            </div>
        )
    }

    return ( 
    
       <div>

        <Navbar iamLogin = { isLogin } /> 

        
        <div className='user-profile-area-div'>
            <div className='user-profile-main-container'>
         

                <div className='username-image-logout-div'>
                
                   <div className='user-image-and-name'>

                        <div >
                        <img className='user-profile-image' src = { demouser }   alt = "User  pic" />
                        </div> 
                        <div className='user-profile-username'> { username } 
                        <FaLifeRing data-tip data-for="premium-tooltip" style={{color:'#FFCE31'}}/> 
                        <ReactTooltip id="premium-tooltip" place="right" effect="solid">
                           Premium User 👑
                        </ReactTooltip>
                        <div></div> 
                        10 Projects  <BsPencilSquare/>
                        </div>
                   </div>
                   <div className='user-logout-and-add-project'>
                        <div className='buttons-div'>

                        <Link to = "/addproject"
                        style={{
                            textDecoration:'none'
                        }}
                        >
                        <Button 
                        style={{
                            background:'#FCD980',
                            color:'black',
                            fontSize:'1rem',
                            fontFamily: 'Poppins',
                            padding:'12px',
                            fontWeight:'800'
                            
                            }} >Add Project</Button>
                            </Link>
                        </div>

                        <div className='buttons-div'>
                        <Button 
                        style={{
                            background:'rgb(255 1 1)',
                            color:'white',
                            fontSize:'1rem',
                            fontFamily: 'Poppins',
                            padding:'12px',
                            fontWeight:'800'
                            }} >Log Out</Button>
                        </div>
                   </div>
                </div>

                <div className='about-user-div'>

                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna 
                aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing 
                elit, sed do eiusmod tempor incididunt ut labore et dolore 
                magna aliqua.
                </div>


                <div className='all-project-of-a-user-container'>
                   <h5>Projects</h5>
                  <div className='project-area-for-each-user'>

                       {
                           AllProjectOfUser.map((project,index)=>{
                               return (<> <ProjectCard projCard = { project }/></>)
                           })
                       }

                  </div>
                 
                </div>

            </div>
        
        </div>

        <Footer/>
        
        </div>
    )
}