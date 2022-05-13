import React,{useEffect,useState} from 'react'
import { Navigate } from 'react-router-dom';
import Navbar from '../navbar/Navbar';
import './addproject.css'
import Footer from '../home/Footer';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'

export default function Addprojects(){
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
    return(<>
    
        <Navbar  iamLogin = { isLogin }  />
        
        <div className='main-outer-container'>

       
         <div className='add-projects-main-div'>
          <div className='heading-on-add-project'>Add your awesome projects and showcase</div>
          <div className='main-form-div'>

          <TextField 
          style={{
              width:'60%',
              minWidth:'400px',
              marginBottom:'12px',
              fontSize:'32px',
              lineHeight:'32px'
          }}
          id="outlined-basic" type='text' label="Enter your project Name" variant="outlined" /><div></div>
          <TextField 
          style={{
              width:'60%',
              minWidth:'400px',
              marginBottom:'12px',
              fontSize:'32px',
              lineHeight:'32px'
          }}
          id="outlined-basic" type='url' label="Enter your project hosted / live link" variant="outlined" />
          <TextField 
          style={{
              width:'60%',
              minWidth:'400px',
            
              marginBottom:'12px',
              fontSize:'32px',
              lineHeight:'32px'
          }}
          rows={3}
          multiline={true}
          id="outlined-basic" type='text' label="Describe your project" variant="outlined" />
          <TextField 
          style={{
              width:'60%',
              minWidth:'400px',
              marginBottom:'12px',
              fontSize:'32px',
              lineHeight:'32px'
          }}
          id="outlined-basic" type='text' label="Enter Technologies used (, saperated)" variant="outlined" />
          <TextField 
          style={{
              width:'60%',
              minWidth:'400px',
              marginBottom:'12px',
              fontSize:'32px',
              lineHeight:'32px'
          }}
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

          </div>
        
         </div>
        
         </div>
         <Footer/>
        
    
    </>)
}