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
import Axios from 'axios'

export default function Project(props) {

    let { id } = useParams();
    const [isLogin, setisLoginu] = useState("false")
    const datassi = sessionStorage.getItem('hasLogin');
    const [userUrl, setuserUrl] = useState("");
    const [techUsed, settechUsed] = useState(['MongoDB','React','MongoDB','React','FireBase']);
    const [projectDetails,setprojectDetails]=useState({});

 

    useEffect(() => {
        if (datassi === null) {
            setuserUrl("/login")
        }
        if (datassi !== null)
            setisLoginu(datassi)

            // console.log(props);

    }, [datassi])

  async function getProjectDetailsFromDB(){

    const resultProject= await Axios.get(`http://localhost:7000/project/${id}`);

    //   console.log(resultProject.data)

      const mainProject=resultProject.data[0];

      setprojectDetails( (pre)=> ({...mainProject}))
    //   console.log(projectDetails)

      var tacks=mainProject.techUsed;

    //   console.log(tacks)
    settechUsed((pre)=>{
        const tArray=tacks.split(',');
        // console.log(tArray);
        return tArray;
      })

  }

      useState(()=>{
         getProjectDetailsFromDB();
         
      },[])

      useState(()=>{
        console.log(projectDetails)
     },[projectDetails])



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
                         
                        { projectDetails.userName }
                        
                      <br></br>
                        {/* 10 projects */}
                        Project ID - {projectDetails.projectId}
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
                  <div className='project-name-div'>{projectDetails.projectName}</div>
                  <div>
                       {projectDetails.aboutProject}
                  </div>
            

              </div>
              <div className='project-skills-link'>
                   
                {
                    techUsed.map((tech,index)=>{
                        return (<>
                        
                              <div key={index+100} className='tech-class-button'>{tech}</div>
                        
                        </>)
                    })
                }
               <div></div>
               <div className='links-div-projects' style={{padding:'20px'}}>
                   <a href={projectDetails.liveLink} target="_blank">See live</a>
                   <a href={projectDetails.codeLink} target="_blank">Show me the code</a>

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