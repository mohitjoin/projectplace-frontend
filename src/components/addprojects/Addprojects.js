import React,{useEffect,useState} from 'react'
import { Navigate } from 'react-router-dom';
import Navbar from '../navbar/Navbar';
import './addproject.css'
import Footer from '../home/Footer';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'
import Axios from 'axios';

export default function Addprojects(){
    const [isLogin, setisLoginu] = useState("false")
    const datassi = sessionStorage.getItem('hasLogin');
    const [userUrl, setuserUrl] = useState("");

    const [projectUniqueId,setprojectUniqueId]=useState('')
    const [projectName,setprojectName]=useState('')
    const [projectLiveLink,setprojectLiveLink]=useState('')
    const [projectDesc,setprojectDesc]=useState('')
    const [projectTechnologies,setprojectTechnologies]=useState('')
    const [projectAnotherLink,setprojectAnotherLink]=useState('')
    const [ isError,setisError]=useState('')

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
    const handleInputProjectUiqueId=(e)=>{
        setprojectUniqueId((pre)=>{
            return e.target.value;
        })
        
    }
    const handleProjectNameChange=(e)=>{
        setprojectName((pre)=>{
            return e.target.value;
        })
        
    }
    const handlelivelinkchange=(e)=>{
        setprojectLiveLink((pre)=>{
            return e.target.value;
        })
        
    }
    const handleDescChange=(e)=>{
        setprojectDesc((pre)=>{
            return e.target.value;
        })
        
    }
    const handletechchange=(e)=>{
        setprojectTechnologies((pre)=>{
            return e.target.value;
        })
        
    }
    const handleAnotherlinkchange=(e)=>{
        setprojectAnotherLink((pre)=>{
            return e.target.value;
        })
        
    }
    async function handleAddingToDb(){
          // call api

  const currentUser=sessionStorage.getItem('UserName');

          var reqObject={};
          reqObject['UserPname']=projectName;
          reqObject['UserPid']=projectUniqueId;
          reqObject['UserPHl']=projectLiveLink;
          reqObject['UserPDesc']=projectDesc;
          reqObject['UserPtechno']=projectTechnologies;
          reqObject['UserPanLink']=projectAnotherLink;
          reqObject['cUser']=currentUser;

        const res=await Axios.post('https://projectplacebackend.herokuapp.com/addproject',reqObject)
                .catch((err)=>{
                    alert("Try to have a unique project ID ⚡!!!");
                })
          // and check if error exist
          
        
    }
    const handleAddProjectToDB=(e)=>{    
        e.preventDefault();
         handleAddingToDb();
  
        //  if error exist show alert 
    }
    return(<>
    
        <Navbar  iamLogin = { isLogin }  />
        
        <div className='main-outer-container'>

       
         <div className='add-projects-main-div'>
          <div className='heading-on-add-project'>Add your awesome projects and showcase</div>
          <div className='main-form-div'>
     <form onSubmit={handleAddProjectToDB}>
          <TextField 
          required={true}
          style={{
              width:'60%',
              minWidth:'400px',
              marginBottom:'12px',
              fontSize:'32px',
              lineHeight:'32px'
          }}
          value={projectUniqueId}
          onChange={handleInputProjectUiqueId}
          id="outlined-basic" type='text' label="Enter your project's Unique ID" variant="outlined" /><div></div>
          <TextField 
           required={true}
          style={{
              width:'60%',
              minWidth:'400px',
              marginBottom:'12px',
              fontSize:'32px',
              lineHeight:'32px'
          }}
          value={projectName}
          onChange={handleProjectNameChange}
          id="outlined-basic" type='text' label="Enter your project Name" variant="outlined" /><div></div>
          <TextField 
           required={true}
          style={{
              width:'60%',
              minWidth:'400px',
              marginBottom:'12px',
              fontSize:'32px',
              lineHeight:'32px'
          }}
          value={projectLiveLink}
          onChange={handlelivelinkchange}
          id="outlined-basic" type='url' label="Enter your project hosted / live link" variant="outlined" />
          <TextField 
           required={true}
          style={{
              width:'60%',
              minWidth:'400px',
            
              marginBottom:'12px',
              fontSize:'32px',
              lineHeight:'32px'
          }}
          value={projectDesc}
          onChange={handleDescChange}
          rows={3}
          multiline={true}
          id="outlined-basic" type='text' label="Describe your project" variant="outlined" />
          <TextField 
           required={true}
          style={{
              width:'60%',
              minWidth:'400px',
              marginBottom:'12px',
              fontSize:'32px',
              lineHeight:'32px'
          }}
          value={projectTechnologies}
          onChange={handletechchange}
          id="outlined-basic" type='text' label="Enter Technologies used (, saperated)" variant="outlined" />
          <TextField 
           
          style={{
              width:'60%',
              minWidth:'400px',
              marginBottom:'12px',
              fontSize:'32px',
              lineHeight:'32px'
          }}
          value={projectAnotherLink}
          onChange={handleAnotherlinkchange}
          id="outlined-basic" type='url' label="Any other link(github)" variant="outlined" />
          {/* <input type='file' > </input>  */}

        
          <div></div>
        <Button 
        style={{
            background: '#FCD980',
            borderRadius: '8px',
            padding:'16px',
            marginTop:'12px',
            fontWeight:'800',
            color:'black'
        }}
        type='submit'
        > Add project </Button>
         </form>
          </div>
        
         </div>
        
         </div>
         <Footer/>
        
    
    </>)
}