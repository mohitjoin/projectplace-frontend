import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import Navbar from '../navbar/Navbar';
import { Navigate } from 'react-router-dom';
import Footer from './../home/Footer';
import './user.css'
import demouser from '../assets/userassets/userDemoImage.png'
import { FaLifeRing } from "react-icons/fa";
// import { BsPencilSquare } from "react-icons/bs";
import Button from '@mui/material/Button'
import ReactTooltip from "react-tooltip";
// demo imports
import Axios from 'axios'
// import AllProjectOfUser from '../findprojects/Alljsonproject'
import ProjectCard from '../findprojects/ProjectCard';
import { Link } from "react-router-dom";

export default function User() {
    const { username } = useParams()
    const [isLogin, setisLoginu] = useState("false")
    const datassi = sessionStorage.getItem('hasLogin');
    const usData = sessionStorage.getItem('UserName');
    const [userUrl, setuserUrl] = useState("");
    const [AllProjectOfUser, setAllProjectOfUser] = useState([]);
   

    const handleLogoutUser=()=>{
        setisLoginu((pre)=>{
            return false;
        })
        sessionStorage.clear()
    }

    async function getAllProjectFromDb(){  

        const ProjectsAllDb= await Axios.get(`${process.env.REACT_APP_HOST}userproject/${username}`);
     
        //console.log(datas.data);
    
        const ProjectsAllDbData=ProjectsAllDb.data;
    
        
        //  console.log(ProjectsAllDbData)

        setAllProjectOfUser((pre)=>{
            return ProjectsAllDbData;
        })
    
    
     }
       useEffect(()=>{
        getAllProjectFromDb();
       },[])


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
                        <span className='spacing-span'></span>
                        <FaLifeRing sx={{padding:'20px',marginLeft:'10px'}} data-tip data-for="premium-tooltip" style={{color:'#FFCE31'}}/> 
                        <ReactTooltip id="premium-tooltip" place="right" effect="solid">
                           Premium User 👑
                        </ReactTooltip>
                        <div></div> 
                         {AllProjectOfUser.length} Projects 
                          {/* <BsPencilSquare/> */}
                        </div>
                   </div>
                   <div className='user-logout-and-add-project'>
                        <div className='buttons-div'>

                      {usData!==username?'': <Link to = "/addproject"
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

                            } 
                        </div> 
                        
                        

                        <div className='buttons-div'>
                        <Button 
                        style={{
                            background:'rgb(120 130 27)',
                            color:'white',
                            fontSize:'1rem',
                            fontFamily: 'Poppins',
                            padding:'12px',
                            fontWeight:'800',
                            margin:'auto',
                            marginRight:'0px'
                            }} 
                            
                            onClick={handleLogoutUser}
                            
                            >Log Out</Button>
                        </div>
                   </div>
                </div>

                <div className='about-user-div'>

                    Here is your Bio.<div></div>

                Hey, User i am working on the feature which will help you to edit the user profile or Bio please bear with me.
                </div>


                <div className='all-project-of-a-user-container'>
                   <h5>Projects</h5>
                  <div className='project-area-for-each-user'>

              {  typeof(AllProjectOfUser) !== typeof([]) || AllProjectOfUser.length === 0?'No Projects Available For this User':
                        
                           AllProjectOfUser.map((project,index)=>{
                               return (<> <ProjectCard key={index+100} projCard = { project }/></>)
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