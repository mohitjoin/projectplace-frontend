import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom';
import Footer from '../home/Footer';
import Navbar from '../navbar/Navbar';
import { Navigate } from 'react-router-dom';
import './projects.css'
import projectImage from '../assets/projectassets/demoprojectimage.PNG'
import demouser from '../assets/userassets/userDemoImage.png'
import { BsPencilSquare } from "react-icons/bs";
import { BiUpvote } from "react-icons/bi";
import Comments from '../comments/Comments';
export default function Project(props) {

    let { id } = useParams();
    const [isLogin, setisLoginu] = useState("false")
    const datassi = sessionStorage.getItem('hasLogin');
    const [userUrl, setuserUrl] = useState("");
    const [techUsed, settechUsed] = useState(['MongoDB','React','MongoDB','React','FireBase']);

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
          <div > 
              <Navbar iamLogin = { isLogin }/> 
        
        <div className='each-project-main-container'>
        <div className='main-container-project'>
            
            

              <div className='project-user-upvote-edit-div'>
                  <div className='image-div-for-project'>
                  <img src = { projectImage } className = 'project-image'  alt = "login  pic" />
                  </div>
                  <div className='user-details-and-upvote-div-container'>
                  <div className='user-details-and-edit'>
                     <div className='demo-user-image'>
                     <img className='user-profile-image' src = { demouser }   alt = "User  pic" />
                       </div>
                         
                       user{ " " + id }
                        
                      <br></br>
                        10 projects
                  </div>
                  <div className='edit-project-and-upvote'>
                       <div >
                           <BsPencilSquare/><div></div>
                          
                           <span className='small-text-below-icon'>  Edit project</span>
                       </div>
                       <div className='upvote-div'>
                           <BiUpvote/><div></div>
                          <span className='small-text-below-icon'> 10 Upvote</span>
                       </div>
                   </div>
                  </div>
              </div>
              <div className='project-name-and-info-div'>
                  <div className='project-name-div'>Project Name</div>
                  <div>
                      Here is about project Here is about project Here is about project Here is about project Here is about project Here is about project Here is about project
                      Here is about project Here Here is about project Here Here is about project Here Here is about project Here Here is about project Here Here is about project Here Here is about project Here 


                  </div>
            

              </div>
              <div className='project-skills-link'>
                   
                {
                    techUsed.map((tech,index)=>{
                        return (<>
                        
                              <span className='tech-class-button'>{tech}</span>
                        
                        </>)
                    })
                }
               <div></div>
               <div className='links-div'>
                   <a href='https://github.com/' target="_blank">See live</a>
                   <a href='https://github.com/' target="_blank">Show me the code</a>

               </div>
                  
              </div>
              <div className='project-comments'>

                     <Comments forProjId={id}/>
                  
             </div>


            </div>
        </div>
        
        
        
        
        <Footer/> 
         </div>
    )
}